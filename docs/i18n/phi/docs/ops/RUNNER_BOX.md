# Self-Hosted Runner Box Operations (.113 pool) (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Tumatakbo ang self-hosted pool sa **.113** na box (`tomni-proxmox-113`). Mula noong 2026-10-18, ang bawat
OmniRoute runner ay may **isang tungkulin**, isang label, at badyet sa memory/CPU na nagpapanatili sa kabuuan ng
`MemoryHigh` na malapit sa pisikal na RAM:

| runner               | label               | tungkulin                                                                                                                         | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`        | Mga Turbopack build: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, ang gabing a11y build | 40 GB / 44 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), webpack build                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`        | mga gabing job (Schemathesis, promptfoo, garak, k6, a11y boot) at `quality.yml` `lint-guard`                                      | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`        | kaparehong pool sa itaas                                                                                                          | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (kanilang mga repo) | Dependabot lamang (pinakamataas na 155 MB bawat isa, 2026-10-18)                                                                  | 4 GB / 6 GB                | 200 % bawat isa |

Sinukat noong 2026-10-18:

| resource  | halaga                              | ang kahulugan nito para sa pag-iskedyul                                                                                                                                                                                                                                                                |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 core**                 | ang Turbopack production build ay umaabot sa 33–37 GB sa ilalim ng cgroup cap (49 GB kapag walang cap, `tests/unit/ci-build-bundler-webpack.test.ts`); ang webpack build ay ~14–16 GB. Magkakasya nang sabay ang isang Turbopack at isang webpack build; hindi magkakasya ang dalawang Turbopack build |
| swap      | 16 GB                               | tumatakbo ang `omniroute-113-5` nang naka-off ang swap (`MemorySwapMax=0`) upang maputol ang runaway build sa cap nito sa halip na gumamit ng swap ang box                                                                                                                                             |
| `/tmp`    | **12 GB tmpfs = RAM**               | anumang inilagay roon ay gumagamit ng memory; nililinis ang mga natira pagkalipas ng 3 oras                                                                                                                                                                                                            |
| CPU       | naobserbahang load na 60 sa 32 core | bago ang mga quota, ang isang Turbopack build (~1166 % CPU) kasama ang coverage suite sa parehong box ay nagkait ng resource sa mga heartbeat ng ibang listener (`Nawalan ng komunikasyon ang self-hosted runner`, #16853)                                                                             |
| runners   | **6 na listener**                   | 4 OmniRoute + OmniHeuris + OmniMind; naka-disable ang `omniroute-113-3/-4/-7/-8` (`systemctl enable --now` ang muling nagpapagana sa isa)                                                                                                                                                              |

Makikita ang mga limitasyon sa `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` ng bawat unit
(ang mga dating halaga ay pinanatili bilang `override.conf.bak-20261018`) at inilapat nang live gamit ang
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — walang restart, kaya walang
naantalang tumatakbong job. Binabago nang live ang mga label sa pamamagitan ng runners API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## I-install ang janitor (isang beses lamang, sa makina)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): bawat 30 min, mag-log sa /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

Kinakailangan ang `lsof`: pinatutunayan ng janitor na idle ang isang path gamit ang isang snapshot ng mga bukas na file bago ito alisin, at kung wala ang tool ay wala itong inaalis at sinasabi nito iyon (exit 1). Subukan muna ang anumang pagbabago gamit ang `--dry-run` — eksakto nitong ipinapakita kung ano ang gagawin nito at wala itong binabago.

Ang ginagawa nito sa bawat pagtakbo: nililinis ang sarili nating mga natira (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) pagkalipas ng **3 oras sa tmpfs** at 24 na oras sa `_work/_temp` ng disk; pinapatigil ang `next-build` na mas matanda sa 75 min (walang job na tumatakbo nang ganoon katagal — noong 2026-08-27, tumakbo ang isa nang 70 min matapos ideklara ng GitHub na nawala ang job nito); inaalis ang mga 48 oras nang checkout ng mga runner na **stopped** ang unit; nag-aalerto kapag ang disk ay ≥ 85 %, ang memory PSI `full/avg60` ay ≥ 10 %, at mas marami ang mga listener kaysa sa `MAX_ACTIVE_RUNNERS` (na may paghahating omniroute/iba pa). Exit 1 = kailangan ng atensyon; basahin ang log.

## Mga unit ng runner: KillMode

Ang default na `KillMode=process` ng runner ay iniiwang buhay ang
`Runner.Worker → npm → next-build` kapag itinigil o nire-restart ang isang unit —
patuloy na kumakain ng RAM at CPU ang isang naulilang build kahit wala na itong
nakalakip na job. Ang bawat unit ng OmniRoute ay may drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
na may `KillMode=mixed`: SIGTERM muna sa listener, pagkatapos ay SIGKILL sa buong cgroup
sa `TimeoutStop`. Magkakabisa ito sa susunod na pag-restart ng unit — mag-restart ng
**isang runner lamang sa bawat pagkakataon, at kapag idle lang**, na nasa iisang command
ang pagsusuri kung idle at ang pag-restart.

## Mga tuntunin sa pagpapatakbo

- **Isang Turbopack build lamang sa bawat pagkakataon — ipinapatupad sa pamamagitan ng label.** Ang bawat job na nagpapatakbo ng buong Turbopack
  `next build` ay nagta-target sa `[self-hosted, omni-build]`, at tanging **`omniroute-113-5`** lamang ang may
  label na iyon: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  ang nightly a11y build (#16853), at `docker-publish.yml` **amd64** (webpack sa loob ng BuildKit —
  nag-panic ang Turbopack doon, run 33253576569). Nananatili ang arm64 Docker leg sa `ubuntu-24.04-arm`.
  Ibinabahagi ng `docker-publish` amd64 ang concurrency group na `heavy-build-main` sa `ci.yml` `Build`
  (`cancel-in-progress: false`). Kailangang nasa `omniroute-113-5` ang Docker Engine. Hindi kasya sa
  78 GB ang pangalawang Turbopack slot (2 × 33–37 GB kasama ang iba pang nasa makina); ligtas lamang ang
  pangalawang slot para sa mga webpack build.
- **May sarili nang slot ang Release-Green (2026-10-18).** Bago iyon, parehong tumatakbo ang mga validation ng Release-Green
  sa `omni-build`: sa bawat push (~10/oras, 97 sa 100 push run ang nakansela habang gumagana sa loob ng isang araw)
  at tatlong ~2 oras na buong sweep bawat araw (naghintay nang 6 na oras para sa slot ang 05:29 sweep) — ilang ulit na
  sumobra nang husto ang demand sa iisang build slot at ilang oras na naghintay ang mga PR Build na mula sa sariling origin.
  Tina-target na ngayon ng `release-green` at `main-green` ang `omni-release` (tanging `omniroute-113-6`) gamit ang
  `OMNIROUTE_USE_TURBOPACK=0`, at hindi na kinakansela ng mas bagong push ang nasimulang run (pinagsasama pa rin ng
  nakabinbing slot ang sunod-sunod na pagdagsa). Itinatakda ng `tests/unit/build/runner-capacity-routing.test.ts`
  ang routing, ang paglipat sa webpack, at ang panuntunang walang anumang nasa `omni-release` ang nagbu-build gamit ang Turbopack.
- **Magaan na pool: `omni-light`.** Pinapatakbo ng `omniroute-113` at `omniroute-113-2` ang mga nightly na nangangailangan
  ng backend-only na `next build` (~5–6 GB; webpack) at `quality.yml` `lint-guard`. May `MemoryHigh=4G` ang `omniroute-113`
  hanggang 2026-10-18 — patuloy na nag-reclaim ng memory ang promptfoo build sa loob ng 54 minuto
  roon; inaalis ng 8 GB ang throttling.
- **Sadyang mas kaunti ang mga listener.** Apat na OmniRoute unit ang na-disable noong 2026-08-29 — ang bawat karagdagang
  listener ay isa pang tenant para sa memory budget sa itaas. Ang pinakamataas na bilang para sa janitor ay 6 (`MAX_ACTIVE_RUNNERS=6` sa cron): binibilang nito
  ang bawat `Runner.Listener` sa makina, at nagdaragdag ang OmniHeuris + OmniMind ng dalawa sa aming apat.
- **Huwag kailanman linisin nang mano-mano ang `/tmp` o `_work` habang may abalang runner.** Ang
  pagsuri at pagkatapos ay pagbura na may pagitan sa dalawang hakbang ang dahilan kung bakit nawala sa isang aktibong Build job ang
  `_work` nito noong 2026-08-27. Isinasagawa ng janitor ang pagsuri at pag-aalis sa iisang hakbang;
  hayaan itong gawin iyon.
- Kinakansela ng paghinto sa runner habang nasa gitna ng job ang job (aktuwal na naobserbahan): gamitin lamang ang `systemctl stop`
  kapag walang `Runner.Worker` child ang listener nito — at gawin iyon sa iisang command.
- Hindi dapat maglagay ang mga workflow ng mga artepakto sa `/tmp` (RAM iyon). Mag-download sa
  `$RUNNER_TEMP` (nasa disk, para sa bawat runner) — inabot nang 27–32 minuto bago mailagay sa tmpfs ang 1.3 GB na
  `next-build` na artepakto at 2 minuto upang i-upload mula sa disk.
- Ang `.15` VPS ay para lamang sa homologation — hindi ito kailanman nagpapatakbo ng mga CI runner.
