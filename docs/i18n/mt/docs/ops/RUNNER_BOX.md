# Self-Hosted Runner Box Operations (.113 pool) (Malti)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Il-pool self-hosted jaħdem fuq il-magna **.113** (`tomni-proxmox-113`). Mit-2026-10-18 kull
runner ta’ OmniRoute għandu **rwol wieħed**, label wieħed, u baġit tal-memorja/CPU li jżomm is-somma ta’
`MemoryHigh` qrib ir-RAM fiżika:

| runner               | label                    | rwol                                                                                                                                   | `MemoryHigh` / `MemoryMax` | `CPUQuota`        |
| -------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------- |
| `omniroute-113-5`    | `omni-build`             | Builds ta’ Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, il-build a11y ta’ billejl | 40 GB / 44 GB (swap 0)     | 1600 %            |
| `omniroute-113-6`    | `omni-release`           | Release-Green (`release-green` + `main-green`), build ta’ webpack                                                                      | 20 GB / 24 GB (swap 4 GB)  | 800 %             |
| `omniroute-113-2`    | `omni-light`             | kompiti ta’ billejl (Schemathesis, promptfoo, garak, k6, inizjalizzazzjoni a11y) u `quality.yml` `lint-guard`                          | 12 GB / 16 GB (swap 4 GB)  | 600 %             |
| `omniroute-113`      | `omni-light`             | l-istess pool bħal hawn fuq                                                                                                            | 8 GB / 12 GB               | 400 %             |
| OmniHeuris, OmniMind | (ir-repożitorji tagħhom) | Dependabot biss (massimu ta’ 155 MB kull wieħed, 2026-10-18)                                                                           | 4 GB / 6 GB                | 200 % kull wieħed |

Imkejjel fl-2026-10-18:

| riżorsa   | valur                                       | xi jfisser għall-iskedar                                                                                                                                                                                                                                                                                                 |
| --------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 qalba**                        | build tal-produzzjoni ta’ Turbopack jilħaq massimu ta’ 33–37 GB taħt limitu ta’ cgroup (49 GB mingħajr limitu, `tests/unit/ci-build-bundler-webpack.test.ts`); build ta’ webpack jilħaq madwar 14–16 GB. Build wieħed ta’ Turbopack + build wieħed ta’ webpack joqogħdu flimkien; żewġ builds ta’ Turbopack ma joqogħdux |
| swap      | 16 GB                                       | `omniroute-113-5` jaħdem bl-iswap mitfi (`MemorySwapMax=0`) sabiex build li jaħrab mill-kontroll jinqata’ fil-limitu tiegħu minflok ma jġiegħel lill-magna tuża l-iswap                                                                                                                                                  |
| `/tmp`    | **12 GB tmpfs = RAM**                       | kull ħaġa li titħalla hemm tuża l-memorja; il-fdalijiet jitneħħew wara 3 sigħat                                                                                                                                                                                                                                          |
| CPU       | ġiet osservata tagħbija ta’ 60 fuq 32 qalba | qabel il-kwoti, build wieħed ta’ Turbopack (~1166 % CPU) flimkien ma’ sett ta’ testijiet tal-coverage fuq l-istess magna ċaħħdu lis-servizzi l-oħra li kienu qed jisimgħu mill-heartbeats tagħhom (`The self-hosted runner lost communication`, #16853)                                                                  |
| runners   | **6 servizzi li jisimgħu**                  | 4 ta’ OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` huma diżattivati (`systemctl enable --now` jerġa’ jattiva wieħed)                                                                                                                                                                                    |

Il-limiti jinsabu fil-fajl `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` ta’ kull unità
(il-valuri preċedenti nżammu bħala `override.conf.bak-20261018`) u ġew applikati direttament b’
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — mingħajr ristartjar, għalhekk
l-ebda xogħol li kien għaddej ma ġie affettwat. Il-labels jinbidlu permezz tal-API tar-runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), ukoll direttament.

## Installa l-janitor (darba biss, fuq il-magna)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): kull 30 minuta, illoggja f’/var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` huwa meħtieġ: il-janitor jivverifika li path mhuwiex qed jintuża permezz ta’ snapshot wieħed tal-fajls miftuħa qabel ineħħih, u mingħajr din l-għodda ma jneħħi xejn u jgħid dan b’mod ċar (exit 1). Ipprova kwalunkwe bidla b’`--dry-run` l-ewwel — jistampa eżattament x’kien jagħmel u ma jmiss xejn.

F’kull eżekuzzjoni jagħmel dan: inaddaf il-fdalijiet tagħna stess (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) wara **3 sigħat fuq tmpfs** u 24 siegħa fuq `_work/_temp` tad-disk; iwaqqaf `next-build` li jkun ilu għaddej aktar minn 75 minuta (l-ebda job ma jdum daqshekk — fl-2026-08-27 wieħed baqa’ għaddej għal 70 minuta wara li GitHub kien iddikjara l-job tiegħu mitluf); ineħħi checkouts li għandhom aktar minn 48 siegħa minn runners li l-unit tagħhom tkun **stopped**; joħroġ twissija meta l-użu tad-disk ikun ≥ 85 %, il-memory PSI `full/avg60` ikun ≥ 10 %, u jkun hemm aktar listeners minn `MAX_ACTIVE_RUNNERS` (b’qasma bejn omniroute u oħrajn). Exit 1 = meħtieġa attenzjoni; aqra l-log.

## Unitajiet tar-runner: KillMode

Il-`KillMode=process` predefinit tar-runner iħalli `Runner.Worker → npm → next-build`
ħaj meta unità titwaqqaf jew terġa’ tinbeda — build orfni jibqa’ jikkonsma r-RAM u
s-CPU mingħajr ebda job marbut miegħu. Kull unità ta’ OmniRoute għandha drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
b’`KillMode=mixed`: SIGTERM lil-listener l-ewwel, SIGKILL liċ-cgroup kollu meta jintlaħaq
`TimeoutStop`. Dan jidħol fis-seħħ mar-restart li jmiss tal-unità — erġa’ ibda **runner wieħed
kull darba, u biss meta jkun idle**, bil-verifika tal-idle u r-restart fl-istess kmand.

## Regoli operattivi

- **Build wieħed ta’ Turbopack kull darba — infurzat permezz tat-tikketta.** Kull job li jħaddem
  `next build` sħiħ ta’ Turbopack jimmira lejn `[self-hosted, omni-build]`, u **`omniroute-113-5`**
  biss għandu dik it-tikketta: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, il-build ta’ a11y ta’ billejl (#16853) u **amd64** ta’
  `docker-publish.yml` (webpack ġewwa BuildKit — Turbopack daħal f’panic hemmhekk,
  fl-eżekuzzjoni 33253576569). Il-parti Docker ta’ arm64 tibqa’ fuq `ubuntu-24.04-arm`.
  amd64 ta’ `docker-publish` jaqsam il-grupp ta’ konkorenza `heavy-build-main` ma’ `Build`
  ta’ `ci.yml` (`cancel-in-progress: false`). Docker Engine irid ikun fuq `omniroute-113-5`.
  It-tieni post għal Turbopack ma joqgħodx fi 78 GB (2 × 33–37 GB flimkien mal-bqija tas-server);
  it-tieni post huwa sikur biss għal builds ta’ webpack.
- **Release-Green għandu l-post tiegħu stess (2026-10-18).** Sa dak iż-żmien iż-żewġ validazzjonijiet
  ta’ Release-Green kienu jitħaddmu fuq `omni-build`: ma’ kull push (~10/fis-siegħa, fejn 97 minn
  100 eżekuzzjoni ta’ push ġew ikkanċellati waqt ix-xogħol f’ġurnata waħda) u tliet kontrolli
  sħaħ ta’ ~2 sigħat kuljum (il-kontroll tal-05:29 stenna 6 sigħat għall-post) — il-post uniku
  għall-build kien ibbukkjat iżżejjed diversi drabi u l-PR Builds mill-istess oriġini stennew
  għal sigħat. `release-green` u `main-green` issa jimmiraw lejn `omni-release`
  (`omniroute-113-6` biss) b’`OMNIROUTE_USE_TURBOPACK=0`, u eżekuzzjoni li tkun bdiet ma tibqax
  tiġi kkanċellata minn push aktar ġdid (il-post pendenti xorta jikkonsolida l-maltempata).
  `tests/unit/build/runner-capacity-routing.test.ts` jiffissa r-routing, il-bidla għal webpack
  u l-fatt li xejn fuq `omni-release` ma jinbena b’Turbopack.
- **Pool ħafif: `omni-light`.** `omniroute-113` u `omniroute-113-2` iħaddmu l-eżekuzzjonijiet ta’
  billejl li jeħtieġu `next build` għall-backend biss (~5–6 GB; webpack) u `lint-guard` ta’
  `quality.yml`. `omniroute-113` kellu `MemoryHigh=4G` sal-2026-10-18 — il-build ta’ promptfoo
  baqa’ jirriklama l-memorja għal 54 minuta hemmhekk; 8 GB ineħħu dan it-trażżin.
- **Inqas listeners apposta.** Erba’ units ta’ OmniRoute ġew diżattivati fl-2026-08-29 — kull
  listener addizzjonali huwa konsumatur ieħor tal-baġit tal-memorja msemmi hawn fuq. Il-limitu
  tal-proċess tat-tindif huwa 6 (`MAX_ACTIVE_RUNNERS=6` fi cron): jgħodd kull `Runner.Listener`
  fuq is-server, u OmniHeuris + OmniMind iżidu tnejn mal-erbgħa tagħna.
- **Qatt tnaddaf `/tmp` jew `_work` bl-idejn waqt li xi runner ikun okkupat.** Proċess ta’
  verifika-u-tħassir b’intervall bejn iż-żewġ passi huwa kif job `Build` attiv tilef
  `_work` tiegħu fl-2026-08-27. Il-proċess tat-tindif jagħmel il-verifika u t-tneħħija
  f’pass wieħed; ħallih jagħmilhom hu.
- It-twaqqif ta’ runner waqt job jikkanċella l-job (osservat waqt l-użu): uża `systemctl stop`
  biss meta l-listener tiegħu ma jkollux child `Runner.Worker` — u agħmel dan b’command wieħed.
- Il-workflows ma għandhomx ipoġġu artefatti f’`/tmp` (huwa RAM). Niżżilhom f’
  `$RUNNER_TEMP` (fuq id-diska, separat għal kull runner) — l-artefatt `next-build` ta’ 1.3 GB
  dam 27–32 minuta biex jitniżżel fuq it-tmpfs u 2 minuti biex jittella’ mid-diska.
- Il-VPS `.15` huwa għall-omologazzjoni biss — qatt ma jħaddem runners tas-CI.
