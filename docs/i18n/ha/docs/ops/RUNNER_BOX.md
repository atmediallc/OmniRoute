# Self-Hosted Runner Box Operations (.113 pool) (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Rukunin self-hosted yana aiki a kan na'urar **.113** (`tomni-proxmox-113`). Tun daga 2026-10-18, kowane
runner na OmniRoute yana da **matsayi ɗaya**, label ɗaya, da kasafin ƙwaƙwalwa/CPU wanda ke riƙe jimillar
`MemoryHigh` kusa da RAM na zahiri:

| runner               | label          | matsayi                                                                                                                                | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | Ayyukan gina Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, aikin gina a11y na dare | 40 GB / 44 GB (swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), aikin gina webpack                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`   | ayyukan dare (Schemathesis, promptfoo, garak, k6, fara a11y) da `quality.yml` `lint-guard`                                             | 12 GB / 16 GB (swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`   | rukuni ɗaya da na sama                                                                                                                 | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (repos ɗinsu)  | Dependabot kawai (mafi girma 155 MB kowannensu, 2026-10-18)                                                                            | 4 GB / 6 GB                | 200 % kowanne |

An auna a 2026-10-18:

| albarkatu | ƙima                     | abin da yake nufi ga tsara jadawali                                                                                                                                                                                                                                                                           |
| --------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / cores 32**     | aikin gina samfurin Turbopack ya kai 33–37 GB a ƙarƙashin iyakar cgroup (49 GB ba tare da iyaka ba, `tests/unit/ci-build-bundler-webpack.test.ts`); aikin gina webpack kuma ~14–16 GB. Aikin gina Turbopack ɗaya + aikin gina webpack ɗaya za su iya gudana tare; ayyukan gina Turbopack biyu ba za su iya ba |
| swap      | 16 GB                    | `omniroute-113-5` yana aiki tare da kashe swap (`MemorySwapMax=0`) domin a katse aikin gina da ya wuce kima a iyakarsa maimakon ya sa na'urar ta fara amfani da swap                                                                                                                                          |
| `/tmp`    | **12 GB tmpfs = RAM**    | duk abin da aka ajiye a wurin yana cin ƙwaƙwalwa; ana share ragowar bayan awa 3                                                                                                                                                                                                                               |
| CPU       | an ga load 60 a cores 32 | kafin ƙa'idojin iyaka, aikin gina Turbopack ɗaya (~1166 % CPU) tare da coverage suite a kan na'ura ɗaya sun hana saƙonnin heartbeat na sauran listeners samun albarkatu (`Runner na self-hosted ya rasa sadarwa`, #16853)                                                                                     |
| runners   | **listeners 6**          | OmniRoute 4 + OmniHeuris + OmniMind; an kashe `omniroute-113-3/-4/-7/-8` (`systemctl enable --now` yana dawo da ɗaya aiki)                                                                                                                                                                                    |

Ana ajiye iyakokin a cikin `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` na kowane unit
(an adana tsoffin ƙimomi a matsayin `override.conf.bak-20261018`) kuma an aiwatar da su kai tsaye ta hanyar
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — ba a sake farawa ba, saboda haka ba a
taɓa aikin da ke gudana ba. Ana canza labels ta runners API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), hakan ma kai tsaye.

## Shigar da janitor (sau ɗaya, a kan na’urar)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): kowane minti 30, a rubuta log zuwa /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

Ana buƙatar `lsof`: janitor yana tabbatar da cewa path ba ya aiki ta hanyar snapshot guda ɗaya na files da ke buɗe
kafin ya cire shi, kuma idan babu wannan tool ɗin ba ya cire komai kuma yana bayyana hakan
(exit 1). Da farko a gwada kowane canji da `--dry-run` — yana buga ainihin abin da zai
yi ba tare da taɓa komai ba.

Abin da yake yi a duk lokacin gudu: yana share ragowar namu (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) bayan **3 h a kan tmpfs** da 24 h a cikin
`_work/_temp` na disk; yana kashe `next-build` da ya wuce minti 75 (babu job da ke gudana tsawon haka — a
2026-08-27 wani ya yi minti 70 yana gudana bayan GitHub ya ayyana cewa job ɗinsa ya ɓace); yana share
checkouts da suka kai 48 h na runners waɗanda unit ɗinsu yake **stopped**; yana aika faɗakarwa idan disk ≥ 85 %, memory PSI
`full/avg60` ≥ 10 %, da kuma idan listeners sun fi `MAX_ACTIVE_RUNNERS` (tare da
rarrabuwar omniroute/other). Exit 1 = ana buƙatar kulawa; karanta log ɗin.

## Rukunan runner: KillMode

Tsohon saitin runner na `KillMode=process` yana barin `Runner.Worker → npm → next-build`
a raye idan aka dakatar ko aka sake kunna wani rukuni — build marar mai kula yana ci gaba da cin RAM da
CPU ba tare da wani job da ke haɗe da shi ba. Kowane rukunin OmniRoute yana da drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
mai `KillMode=mixed`: SIGTERM zuwa listener da farko, sannan SIGKILL zuwa dukan cgroup a
`TimeoutStop`. Zai fara aiki a sake kunnawa na gaba na rukunin — sake kunna **runner ɗaya a
kowane lokaci, sai lokacin da ba ya aiki**, tare da binciken rashin aiki da sake kunnawar a cikin umarni guda.

## Ka'idojin aiki

- **Ginin Turbopack guda ɗaya kacal a lokaci guda — ana tilasta hakan ta lakabi.** Duk aikin da ke gudanar da cikakken ginin Turbopack
  `next build` yana nufin `[self-hosted, omni-build]`, kuma **`omniroute-113-5`** ne kaɗai yake ɗauke da wannan
  lakabin: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  ginin a11y na dare (#16853) da kuma `docker-publish.yml` **amd64** (webpack a cikin BuildKit —
  Turbopack ya samu panic a wurin, gudu na 33253576569). Sashen Docker na arm64 yana ci gaba da kasancewa a `ubuntu-24.04-arm`.
  `docker-publish` amd64 yana amfani da rukunin concurrency na `heavy-build-main` tare da `ci.yml` `Build`
  (`cancel-in-progress: false`). Dole ne Docker Engine ya kasance a kan `omniroute-113-5`. Gurbin Turbopack
  na biyu ba zai shiga cikin 78 GB ba (2 × 33–37 GB tare da sauran abubuwan da ke kan na'urar); gurbi na biyu yana da aminci ne kawai ga
  gine-ginen webpack.
- **Release-Green yana da nasa gurbin (2026-10-18).** Kafin wannan lokaci, duka tantancewar Release-Green suna gudana
  a kan `omni-build`: a kowane push (~10/awa, an soke 97 daga cikin gudanawar push 100 a tsakiyar aiki cikin rana ɗaya)
  da cikakken bincike uku na kusan ~2 h a rana (binciken 05:29 ya jira 6 h domin samun gurbin) — an ɗora wa gurbin gini
  guda ɗaya nauyi fiye da ƙarfinsa sau da dama, kuma gine-ginen PR daga asalin ma'ajiyar sun jira na tsawon awanni.
  `release-green` da `main-green` yanzu suna nufin `omni-release` (`omniroute-113-6` kawai) tare da
  `OMNIROUTE_USE_TURBOPACK=0`, kuma ba a ƙara soke gudu da ya fara saboda sabon push
  (gurbin da ke jira har yanzu yana haɗe turmutsitsin). `tests/unit/build/runner-capacity-routing.test.ts`
  yana tabbatar da routing, sauyin webpack, da kuma cewa babu wani abu a kan `omni-release` da ake ginawa da Turbopack.
- **Rukunin ayyuka masu sauƙi: `omni-light`.** `omniroute-113` da `omniroute-113-2` suna gudanar da ayyukan dare da ke buƙatar
  `next build` na backend kawai (~5–6 GB; webpack) da `quality.yml` `lint-guard`. `omniroute-113`
  yana da `MemoryHigh=4G` har zuwa 2026-10-18 — ginin promptfoo ya shafe minti 54 yana ta kwato ƙwaƙwalwa
  a wurin; 8 GB yana kawar da takurawar.
- **An rage adadin listeners da gangan.** An kashe units huɗu na OmniRoute a 2026-08-29 — kowane ƙarin
  listener wani mai amfani ne da kasafin ƙwaƙwalwar da ke sama. Matsakaicin janitor shi ne 6 (`MAX_ACTIVE_RUNNERS=6` a cikin cron): yana ƙirga
  kowane `Runner.Listener` da ke kan na'urar, sannan OmniHeuris + OmniMind suna ƙara biyu a kan namu huɗu.
- **Kada a taɓa share `/tmp` ko `_work` da hannu yayin da kowane runner yake aiki.** Yin
  dubawa-sannan-sharewa tare da tazara tsakanin matakan biyu shi ne yadda wani aikin Build mai gudana ya rasa
  `_work` nasa a 2026-08-27. Janitor yana yin dubawa da cirewar a mataki guda;
  a bar shi ya yi.
- Tsayar da runner a tsakiyar aiki yana soke aikin (an gani kai tsaye): a yi `systemctl stop` kawai
  idan listener ɗinsa ba shi da ɗan-process na `Runner.Worker` — kuma a yi hakan cikin umarni guda.
- Kada workflows su ajiye artefacts a cikin `/tmp` (RAM ne). A sauke su zuwa
  `$RUNNER_TEMP` (a kan faifai, na musamman ga kowane runner) — artefact na `next-build` mai girman 1.3 GB ya ɗauki mintuna 27–32
  kafin ya sauka a kan tmpfs, amma mintuna 2 kawai wajen upload daga faifai.
- VPS na `.15` na gwajin amincewa ne kawai — ba ya taɓa gudanar da runners na CI.
