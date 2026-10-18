---
title: Self-Hosted Runner Box Operations
---

# Self-Hosted Runner Box Operations (.113 pool)

The self-hosted pool runs on the **.113** box (`tomni-proxmox-113`). Since 2026-10-18 each
OmniRoute runner has **one role**, one label, and a memory/CPU budget that keeps the sum of
`MemoryHigh` near the physical RAM:

| runner               | label          | role                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack builds: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, the nightly a11y build | 40 GB / 44 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack build                                                                   | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`   | nightlies (Schemathesis, promptfoo, garak, k6, a11y boot) and `quality.yml` `lint-guard`                                        | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`   | same pool as above                                                                                                              | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (their repos)  | Dependabot only (peak 155 MB each, 2026-10-18)                                                                                  | 4 GB / 6 GB                | 200 % each |

Measured 2026-10-18:

| resource  | value                        | what it means for scheduling                                                                                                                                                                                                                 |
| --------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cores**         | a Turbopack production build peaks at 33–37 GB under a cgroup cap (49 GB uncapped, `tests/unit/ci-build-bundler-webpack.test.ts`); a webpack build at ~14–16 GB. One Turbopack + one webpack build fit together; two Turbopack builds do not |
| swap      | 16 GB                        | `omniroute-113-5` runs with swap off (`MemorySwapMax=0`) so a runaway build is cut at its cap instead of swapping the box                                                                                                                    |
| `/tmp`    | **12 GB tmpfs = RAM**        | anything parked there is memory; leftovers are swept after 3 h                                                                                                                                                                               |
| CPU       | load 60 on 32 cores observed | before the quotas, one Turbopack build (~1166 % CPU) plus a coverage suite on the same box starved the other listeners' heartbeats (`The self-hosted runner lost communication`, #16853)                                                     |
| runners   | **6 listeners**              | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` are disabled (`systemctl enable --now` brings one back)                                                                                                                      |

The limits live in each unit's `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(previous values kept as `override.conf.bak-20261018`) and were applied live with
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — no restart, so no
running job was touched. Labels are changed through the runners API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), also live.

## Install the janitor (one-time, on the box)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): every 30 min, log to /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` is required: the janitor proves a path is idle with one snapshot of open
files before removing it, and without the tool it removes nothing and says so
(exit 1). Try any change with `--dry-run` first — it prints exactly what it would
do and touches nothing.

What it does every run: sweeps our own leftovers (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) after **3 h on tmpfs** and 24 h on disk
`_work/_temp`; kills a `next-build` older than 75 min (no job runs that long — on
2026-08-27 one ran 70 min after GitHub had declared its job lost); prunes 48 h-old
checkouts of runners whose unit is **stopped**; alerts on disk ≥ 85 %, memory PSI
`full/avg60` ≥ 10 %, and more listeners than `MAX_ACTIVE_RUNNERS` (with an
omniroute/other breakdown). Exit 1 = attention needed; read the log.

## Runner units: KillMode

The runner's default `KillMode=process` leaves `Runner.Worker → npm → next-build`
alive when a unit is stopped or restarted — an orphan build keeps eating RAM and
CPU with no job attached. Every OmniRoute unit carries a drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
with `KillMode=mixed`: SIGTERM to the listener first, SIGKILL to the whole cgroup at
`TimeoutStop`. It takes effect on the unit's next restart — restart **one runner at
a time, only when idle**, with the idle check and the restart in the same command.

## Operating rules

- **One Turbopack build at a time — enforced by label.** Every job that runs a full Turbopack
  `next build` targets `[self-hosted, omni-build]`, and only **`omniroute-113-5`** carries that
  label: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  the nightly a11y build (#16853) and `docker-publish.yml` **amd64** (webpack inside BuildKit —
  Turbopack panicked there, run 33253576569). The arm64 Docker leg stays on `ubuntu-24.04-arm`.
  `docker-publish` amd64 shares the `heavy-build-main` concurrency group with `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine must be on `omniroute-113-5`. A second Turbopack
  slot does not fit 78 GB (2 × 33–37 GB plus the rest of the box); a second slot is only safe for
  webpack builds.
- **Release-Green has its own slot (2026-10-18).** Until then both Release-Green validations ran
  on `omni-build`: on every push (~10/hour, 97 of 100 push runs cancelled mid-work in one day)
  and three ~2 h full sweeps a day (the 05:29 sweep waited 6 h for the slot) — the single build
  slot was oversubscribed several times over and own-origin PR Builds waited for hours.
  `release-green` and `main-green` now target `omni-release` (`omniroute-113-6` only) with
  `OMNIROUTE_USE_TURBOPACK=0`, and a started run is no longer cancelled by a newer push (the
  pending slot still collapses the storm). `tests/unit/build/runner-capacity-routing.test.ts`
  pins the routing, the webpack switch and that nothing on `omni-release` builds with Turbopack.
- **Light pool: `omni-light`.** `omniroute-113` and `omniroute-113-2` run the nightlies that need
  a backend-only `next build` (~5–6 GB; webpack) and `quality.yml` `lint-guard`. `omniroute-113`
  had `MemoryHigh=4G` until 2026-10-18 — the promptfoo build reclaimed its way through 54 minutes
  there; 8 GB removes the throttling.
- **Fewer listeners on purpose.** Four OmniRoute units were disabled on 2026-08-29 — each extra
  listener is another tenant for the memory budget above. The janitor ceiling is 6 (`MAX_ACTIVE_RUNNERS=6` in cron): it counts
  every `Runner.Listener` on the box, and OmniHeuris + OmniMind add two to our four.
- **Never clean `/tmp` or `_work` by hand while any runner is busy.** A
  check-then-delete with a gap between the two is how a live Build job lost its
  `_work` on 2026-08-27. The janitor does the check and the removal in one step;
  let it.
- Stopping a runner mid-job cancels the job (observed live): `systemctl stop` only
  when its listener has no `Runner.Worker` child — and do it in one command.
- Workflows must not park artefacts in `/tmp` (it is RAM). Download to
  `$RUNNER_TEMP` (on disk, per runner) — the 1.3 GB `next-build` artefact took 27–32
  minutes to land on the tmpfs and 2 minutes to upload from disk.
- The `.15` VPS is homologation-only — never runs CI runners.
