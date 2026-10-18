# Self-Hosted Runner Box Operations (.113 pool) (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

በራስ የሚስተናገደው pool በ**.113** ማሽን (`tomni-proxmox-113`) ላይ ይሰራል። ከ2026-10-18 ጀምሮ እያንዳንዱ
OmniRoute runner **አንድ ሚና**፣ አንድ መለያ እና የ`MemoryHigh` ድምርን ወደ አካላዊው RAM ቅርብ
የሚያደርግ የማህደረ ትውስታ/CPU በጀት አለው፦

| runner               | መለያ            | ሚና                                                                                                                        | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`   | የTurbopack ግንባታዎች፦ `ci.yml` `Build`፣ Docker amd64፣ `npm-publish`፣ `nightly-v4-build`፣ `preview-artifact`፣ የማታው የa11y ግንባታ | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`)፣ የwebpack ግንባታ                                                             | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`   | የማታ ሥራዎች (Schemathesis፣ promptfoo፣ garak፣ k6፣ a11y boot) እና `quality.yml` `lint-guard`                                    | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`   | ከላይ ካለው ጋር ተመሳሳይ pool                                                                                                     | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (የራሳቸው repos)  | Dependabot ብቻ (እያንዳንዳቸው ከፍተኛው 155 MB፣ 2026-10-18)                                                                         | 4 GB / 6 GB                | እያንዳንዳቸው 200 % |

በ2026-10-18 የተለካ፦

| ሀብት       | ዋጋ                        | ለመርሐግብር አስተዳደር ያለው ትርጉም                                                                                                                                                                                                                           |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cores**      | የTurbopack production ግንባታ በcgroup ገደብ ስር ከፍተኛው 33–37 GB ይደርሳል (ያለ ገደብ 49 GB፣ `tests/unit/ci-build-bundler-webpack.test.ts`)፤ የwebpack ግንባታ ደግሞ ~14–16 GB ይደርሳል። አንድ Turbopack + አንድ webpack ግንባታ በአንድ ጊዜ ሊሰሩ ይችላሉ፤ ሁለት Turbopack ግንባታዎች ግን አይችሉም |
| swap      | 16 GB                     | `omniroute-113-5` swap ተዘግቶበት (`MemorySwapMax=0`) ይሰራል፤ ስለዚህ ከቁጥጥር ውጭ የሆነ ግንባታ ማሽኑን swap ከማድረግ ይልቅ በተወሰነለት ገደብ ላይ ይቋረጣል                                                                                                                           |
| `/tmp`    | **12 GB tmpfs = RAM**     | እዚያ የተቀመጠ ማንኛውም ነገር ማህደረ ትውስታን ይጠቀማል፤ የቀሩ ፋይሎች ከ3 ሰዓት በኋላ ይጸዳሉ                                                                                                                                                                                    |
| CPU       | በ32 cores ላይ 60 load ታይቷል | ከquotas በፊት፣ አንድ የTurbopack ግንባታ (~1166 % CPU) እና በዚያው ማሽን ላይ ያለ coverage suite የሌሎቹን listeners heartbeat የCPU ጊዜ አሳጥተዋል (`The self-hosted runner lost communication`፣ #16853)                                                                    |
| runners   | **6 listeners**           | 4 OmniRoute + OmniHeuris + OmniMind፤ `omniroute-113-3/-4/-7/-8` ተሰናክለዋል (`systemctl enable --now` አንዱን መልሶ ያስነሳል)                                                                                                                                 |

ገደቦቹ በእያንዳንዱ unit ውስጥ ባለው `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
ውስጥ ይገኛሉ (የቀድሞዎቹ እሴቶች እንደ `override.conf.bak-20261018` ተቀምጠዋል)፣ እና
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` በመጠቀም ሲስተሙ እየሰራ ተተግብረዋል — restart አልተደረገም፣ ስለዚህ
በሂደት ላይ የነበረ ምንም job አልተነካም። መለያዎች በrunners API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) በኩል ይቀየራሉ፤ ይህም ሲስተሙ እየሰራ ነው።

## janitorን ይጫኑ (አንድ ጊዜ፣ በማሽኑ ላይ)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root)፦ በየ30 ደቂቃው፣ ወደ /var/log/runner-janitor.log መዝግብ
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` ያስፈልጋል፦ janitor አንድን ዱካ ከማስወገዱ በፊት ክፍት
ፋይሎችን አንድ ጊዜ በመመልከት ዱካው ስራ ፈት መሆኑን ያረጋግጣል፤ መሣሪያው ከሌለ ምንም
አያስወግድም፣ ይህንንም ያሳውቃል
(exit 1)። ማንኛውንም ለውጥ መጀመሪያ በ `--dry-run` ይሞክሩ — ምን እንደሚያደርግ
በትክክል ያትማል፣ ምንም ነገርም አይነካም።

በእያንዳንዱ run የሚያደርገው፦ የራሳችንን ቅሪቶች (`runner-*`፣ `omniroute-*`፣
`next-build*`፣ `e2e-build.tar.gz`) **በtmpfs ላይ ከ3 ሰዓት** እና በdisk
`_work/_temp` ላይ ከ24 ሰዓት በኋላ ያጸዳል፤ ከ75 ደቂቃ በላይ የቆየ `next-build`ን
ያቋርጣል (ምንም job ያን ያህል ጊዜ አይሰራም — 2026-08-27 ላይ GitHub jobን
እንደጠፋ ካወጀ በኋላ አንዱ ለ70 ደቂቃ ሲሰራ ቆይቷል)፤ unitናቸው
**የቆመ** runners የ48 ሰዓት checkoutsን ያስወግዳል፤ disk ≥ 85 %፣ memory PSI
`full/avg60` ≥ 10 %፣ እና ከ `MAX_ACTIVE_RUNNERS` በላይ listeners ሲኖሩ
(ከomniroute/other ክፍፍል ጋር) ማንቂያ ይሰጣል። Exit 1 = ትኩረት ያስፈልጋል፤ logን ያንብቡ።

## Runner ዩኒቶች፦ KillMode

የrunner ነባሪ `KillMode=process`፣ ዩኒት ሲቆም ወይም ዳግም ሲጀምር `Runner.Worker → npm → next-build`ን በሕይወት ይተዋል — ከምንም job ጋር ያልተያያዘ orphan build RAM እና CPUን መብላቱን ይቀጥላል። እያንዳንዱ OmniRoute ዩኒት `KillMode=mixed` ያለው drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
አለው፦ መጀመሪያ SIGTERM ወደ listener ይላካል፤ `TimeoutStop` ላይ ደግሞ SIGKILL ወደ ሙሉው cgroup ይላካል። ይህ ዩኒቱ በሚቀጥለው ጊዜ ዳግም ሲጀምር ተግባራዊ ይሆናል — **በአንድ ጊዜ አንድ runner ብቻ፣ idle ሲሆን ብቻ**፣ idle መሆኑን ማረጋገጥና ዳግም ማስጀመሩን በአንድ ትዕዛዝ ውስጥ በማድረግ ዳግም ያስጀምሩ።

## የአሠራር ደንቦች

- **በአንድ ጊዜ አንድ Turbopack build ብቻ — በlabel የተገደበ።** ሙሉ Turbopack
  `next build` የሚያስኬድ እያንዳንዱ job `[self-hosted, omni-build]`ን ዒላማ ያደርጋል፣ እና
  ያንን label የያዘው **`omniroute-113-5`** ብቻ ነው፦ `ci.yml` `Build`፣
  `npm-publish.yml` `publish`፣ `nightly-v4-build`፣ `preview-artifact`፣
  የምሽቱ a11y build (#16853) እና `docker-publish.yml` **amd64** (በBuildKit ውስጥ webpack —
  Turbopack እዚያ panic አድርጓል፣ run 33253576569)። የarm64 Docker ክፍል በ
  `ubuntu-24.04-arm` ላይ ይቆያል። `docker-publish` amd64 የ`heavy-build-main` concurrency groupን
  ከ`ci.yml` `Build` ጋር ይጋራል (`cancel-in-progress: false`)። Docker Engine በ
  `omniroute-113-5` ላይ መኖር አለበት። ሁለተኛ Turbopack slot በ78 GB ውስጥ አይበቃም
  (2 × 33–37 GB እና የማሽኑ ቀሪ ሥራዎች)፤ ሁለተኛ slot ደህንነቱ የተጠበቀው ለ
  webpack builds ብቻ ነው።
- **Release-Green የራሱ slot አለው (2026-10-18)።** እስከዚያ ጊዜ ድረስ ሁለቱም Release-Green
  validations በ`omni-build` ላይ ይሠሩ ነበር፦ በእያንዳንዱ push (~10/hour፣ በአንድ ቀን ከ100
  push runs ውስጥ 97ቱ ሥራ መሀል ተሰርዘዋል) እና በቀን ሦስት ~2 h ሙሉ sweeps
  (የ05:29 sweep slotን ለ6 h ጠብቋል) — ብቸኛው build slot ከአቅሙ በላይ በብዙ
  እጥፍ ተመድቦበት ነበር፣ እና ከራሳችን origin የመጡ PR Builds ለሰዓታት ይጠብቁ ነበር።
  `release-green` እና `main-green` አሁን `omni-release`ን (`omniroute-113-6` ብቻ)
  በ`OMNIROUTE_USE_TURBOPACK=0` ዒላማ ያደርጋሉ፣ እና የተጀመረ run ከዚያ በኋላ
  በአዲስ push አይሰረዝም (pending slot አሁንም የተከማቸውን ብዛት ያጣምራል)።
  `tests/unit/build/runner-capacity-routing.test.ts` routingን፣ የwebpack switchን እና
  በ`omni-release` ላይ ምንም ነገር በTurbopack build እንደማይደረግ በቋሚነት ያረጋግጣል።
- **ቀላል pool፦ `omni-light`።** `omniroute-113` እና `omniroute-113-2` backend-only
  `next build` (~5–6 GB፤ webpack) የሚፈልጉትን የምሽት jobs እና `quality.yml`
  `lint-guard`ን ያስኬዳሉ። `omniroute-113` እስከ 2026-10-18 ድረስ `MemoryHigh=4G`
  ነበረው — promptfoo build በዚያ ለ54 ደቂቃዎች memory reclaim እያደረገ ቆይቷል፤
  8 GB throttlingን ያስወግዳል።
- **ሆን ተብሎ የተቀነሱ listeners።** አራት OmniRoute units በ2026-08-29 ተሰናክለዋል —
  እያንዳንዱ ተጨማሪ listener ከላይ ለተጠቀሰው memory budget ሌላ tenant ነው። የjanitor
  ከፍተኛ ገደብ 6 ነው (`MAX_ACTIVE_RUNNERS=6` በcron ውስጥ)፦ በማሽኑ ላይ ያለን
  እያንዳንዱን `Runner.Listener` ይቆጥራል፣ እና OmniHeuris + OmniMind በእኛ አራት ላይ
  ሁለት ይጨምራሉ።
- **ማንኛውም runner በሥራ ላይ እያለ `/tmp`ን ወይም `_work`ን በእጅ ፈጽሞ አታጽዱ።**
  በማረጋገጥና በመሰረዝ መካከል ክፍተት ያለው check-then-delete በ2026-08-27
  በሥራ ላይ የነበረ Build job `_work`ን ያጣበት ምክንያት ነው። janitor ማረጋገጡንና
  ማስወገዱን በአንድ እርምጃ ያከናውናል፤ እሱን ይተዉት።
- runnerን በjob መሀል ማቆም jobን ይሰርዛል (በቀጥታ የታየ)፦ `systemctl stop`ን
  የrunnerው listener ምንም `Runner.Worker` child ሳይኖረው ብቻ ያስኪዱ — እና ይህን
  በአንድ command ያድርጉ።
- Workflows artefactsን በ`/tmp` ውስጥ ማቆየት የለባቸውም (እሱ RAM ነው)። ወደ
  `$RUNNER_TEMP` (በdisk ላይ፣ ለእያንዳንዱ runner የተለየ) ያውርዱ — 1.3 GB
  `next-build` artefact በtmpfs ላይ ለመጠናቀቅ 27–32 ደቂቃዎች ወስዷል፣ ከdisk
  upload ለማድረግ ግን 2 ደቂቃዎች ብቻ ወስዷል።
- `.15` VPS ለhomologation ብቻ ነው — CI runnersን ፈጽሞ አያስኬድም።
