# Self-Hosted Runner Box Operations (.113 pool) (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Pooli inayohostiwa binafsi inaendeshwa kwenye mashine ya **.113** (`tomni-proxmox-113`). Tangu 2026-10-18, kila
runner ya OmniRoute ina **jukumu moja**, lebo moja, na bajeti ya kumbukumbu/CPU inayoweka jumla ya
`MemoryHigh` karibu na RAM halisi:

| runner               | lebo           | jukumu                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`   | Uundaji wa Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, uundaji wa kila usiku wa a11y | 40 GB / 44 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), uundaji wa webpack                                                                         | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`   | kazi za kila usiku (Schemathesis, promptfoo, garak, k6, uanzishaji wa a11y) na `quality.yml` `lint-guard`                                  | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`   | pooli ileile kama ilivyo hapo juu                                                                                                          | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (repo zao)     | Dependabot pekee (kilele cha 155 MB kila moja, 2026-10-18)                                                                                 | 4 GB / 6 GB                | 200 % kila moja |

Vipimo vya 2026-10-18:

| rasilimali | thamani                                | maana yake kwa upangaji wa ratiba                                                                                                                                                                                                                                                                                   |
| ---------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / cores 32**                   | uundaji wa uzalishaji wa Turbopack hufikia kilele cha 33–37 GB chini ya kikomo cha cgroup (49 GB bila kikomo, `tests/unit/ci-build-bundler-webpack.test.ts`); uundaji wa webpack huwa karibu GB 14–16. Uundaji mmoja wa Turbopack + mmoja wa webpack vinaweza kuendeshwa pamoja; miundo miwili ya Turbopack haiwezi |
| swap       | 16 GB                                  | `omniroute-113-5` inaendeshwa swap ikiwa imezimwa (`MemorySwapMax=0`) ili uundaji unaotumia rasilimali kupita kiasi ukatishwe kwenye kikomo chake badala ya kusababisha mashine kutumia swap                                                                                                                        |
| `/tmp`     | **12 GB tmpfs = RAM**                  | chochote kinachowekwa hapo hutumia kumbukumbu; mabaki husafishwa baada ya saa 3                                                                                                                                                                                                                                     |
| CPU        | mzigo wa 60 kwenye cores 32 ulionekana | kabla ya quota, uundaji mmoja wa Turbopack (~1166 % CPU) pamoja na mkusanyiko wa majaribio ya ufunikaji kwenye mashine hiyo hiyo ulifanya mapigo ya uhai ya visikilizi vingine yakose rasilimali (`The self-hosted runner lost communication`, #16853)                                                              |
| runners    | **visikilizi 6**                       | OmniRoute 4 + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` zimezimwa (`systemctl enable --now` huwasha mojawapo tena)                                                                                                                                                                                          |

Vikomo viko katika `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` ya kila unit
(thamani za awali zimehifadhiwa kama `override.conf.bak-20261018`) na vilitumika moja kwa moja kwa
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bila kuwasha upya, kwa hivyo hakuna
job iliyokuwa ikiendeshwa iliyoathiriwa. Lebo hubadilishwa kupitia API ya runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), pia moja kwa moja.

## Sakinisha janitor (mara moja, kwenye mashine)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): kila dakika 30, weka kumbukumbu kwenye /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` inahitajika: janitor huthibitisha kuwa path haitumiki kwa kuchukua snapshot moja ya faili zilizo wazi kabla ya kuiondoa, na bila zana hiyo haiondoi chochote na hueleza hivyo (exit 1). Jaribu mabadiliko yoyote kwa `--dry-run` kwanza — huchapisha kile hasa ambacho ingefanya bila kugusa chochote.

Inachofanya kila inapoendeshwa: huondoa mabaki yetu (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) baada ya **saa 3 kwenye tmpfs** na saa 24 kwenye `_work/_temp` ya diski; husitisha `next-build` iliyo na zaidi ya dakika 75 (hakuna job inayotumika kwa muda huo — mnamo 2026-08-27 moja iliendelea kwa dakika 70 baada ya GitHub kutangaza kuwa job yake ilikuwa imepotea); huondoa checkout zenye umri wa saa 48 za runner ambazo unit zake **zimesimamishwa**; hutoa tahadhari diski inapofikia ≥ 85 %, PSI ya kumbukumbu ya `full/avg60` inapofikia ≥ 10 %, na idadi ya visikilizi inapozidi `MAX_ACTIVE_RUNNERS` (ikiwa na mgawanyo wa omniroute/nyingine). Exit 1 = hatua inahitajika; soma logi.

## Vitengo vya runner: KillMode

Chaguo-msingi la runner la `KillMode=process` huacha `Runner.Worker → npm → next-build`
ikiendelea kufanya kazi wakati kitengo kinaposimamishwa au kuwashwa upya — build yatima huendelea kutumia RAM na
CPU bila job yoyote iliyounganishwa nayo. Kila kitengo cha OmniRoute kina faili ya nyongeza
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
yenye `KillMode=mixed`: SIGTERM hutumwa kwanza kwa listener, kisha SIGKILL kwa cgroup nzima wakati wa
`TimeoutStop`. Huanza kutumika kitengo kinapowashwa upya mara inayofuata — washa upya **runner moja kwa
wakati mmoja, ikiwa tu haina shughuli**, huku ukaguzi wa kutokuwa na shughuli na kuwasha upya vikiwa katika command ileile.

## Kanuni za uendeshaji

- **Build moja ya Turbopack kwa wakati mmoja — inatekelezwa kwa lebo.** Kila job inayoendesha
  `next build` kamili ya Turbopack inalenga `[self-hosted, omni-build]`, na ni
  **`omniroute-113-5`** pekee iliyo na lebo hiyo: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, build ya usiku ya a11y (#16853) na
  `docker-publish.yml` **amd64** (webpack ndani ya BuildKit — Turbopack ilipata hitilafu hapo,
  run 33253576569). Sehemu ya Docker ya arm64 inabaki kwenye `ubuntu-24.04-arm`.
  amd64 ya `docker-publish` hutumia concurrency group ya `heavy-build-main` pamoja na
  `ci.yml` `Build` (`cancel-in-progress: false`). Docker Engine lazima iwe kwenye
  `omniroute-113-5`. Slot ya pili ya Turbopack haitoshei GB 78 (2 × GB 33–37 pamoja na
  matumizi mengine ya mashine); slot ya pili ni salama tu kwa build za webpack.
- **Release-Green ina slot yake yenyewe (2026-10-18).** Kabla ya hapo uthibitishaji wote wa
  Release-Green uliendeshwa kwenye `omni-build`: kwa kila push (~10/saa, run 97 kati ya 100 za
  push zilighairiwa zikiwa katikati ya kazi ndani ya siku moja) na ukaguzi kamili mara tatu kwa
  siku wa ~saa 2 (ukaguzi wa 05:29 ulisubiri saa 6 kupata slot) — slot hiyo moja ya build
  ilikuwa na mzigo uliozidi uwezo wake mara kadhaa na Build za PR za chanzo chetu zilisubiri
  kwa saa nyingi. `release-green` na `main-green` sasa zinalenga `omni-release`
  (`omniroute-113-6` pekee) zikiwa na `OMNIROUTE_USE_TURBOPACK=0`, na run iliyoanza
  haighairiwi tena na push mpya zaidi (slot inayosubiri bado huunganisha msururu huo).
  `tests/unit/build/runner-capacity-routing.test.ts` hudhibiti uelekezaji, swichi ya webpack
  na huhakikisha kwamba hakuna chochote kwenye `omni-release` kinachofanya build kwa Turbopack.
- **Pool nyepesi: `omni-light`.** `omniroute-113` na `omniroute-113-2` huendesha job za usiku
  zinazohitaji `next build` ya backend pekee (~GB 5–6; webpack) na `quality.yml` `lint-guard`.
  `omniroute-113` ilikuwa na `MemoryHigh=4G` hadi 2026-10-18 — build ya promptfoo ilijaribu
  kurejesha kumbukumbu kwa dakika 54 huko; GB 8 huondoa ubanaji huo.
- **Wasikilizaji wachache kimakusudi.** Units nne za OmniRoute zilizimwa tarehe 2026-08-29 —
  kila listener wa ziada ni tenant mwingine wa bajeti ya kumbukumbu iliyo hapo juu. Kikomo cha
  janitor ni 6 (`MAX_ACTIVE_RUNNERS=6` katika cron): huhesabu kila `Runner.Listener` kwenye
  mashine, na OmniHeuris + OmniMind huongeza wawili kwa wanne wetu.
- **Usiwahi kusafisha `/tmp` au `_work` mwenyewe wakati runner yeyote ana shughuli.**
  Kukagua kisha kufuta kukiwa na pengo kati ya hatua hizo mbili ndiko kulikosababisha job hai
  ya Build kupoteza `_work` yake tarehe 2026-08-27. Janitor hufanya ukaguzi na uondoaji katika
  hatua moja; iachie ifanye hivyo.
- Kusimamisha runner katikati ya job hughairi job hiyo (ilionekana moja kwa moja):
  `systemctl stop` tu wakati listener wake hana child ya `Runner.Worker` — na ufanye hivyo
  kwa command moja.
- Workflows hazipaswi kuhifadhi artefakti kwenye `/tmp` (ni RAM). Pakua kwenda
  `$RUNNER_TEMP` (kwenye diski, kwa kila runner) — artefakti ya `next-build` ya GB 1.3
  ilichukua dakika 27–32 kuwasili kwenye tmpfs na dakika 2 kupakiwa kutoka kwenye diski.
- VPS ya `.15` ni ya homologation pekee — haiendeshi kamwe runners za CI.
