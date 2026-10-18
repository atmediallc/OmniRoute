# Self-Hosted Runner Box Operations (.113 pool) (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Oʻz-oʻzida joylashtirilgan pool **.113** mashinasida (`tomni-proxmox-113`) ishlaydi. 2026-10-18 sanasidan beri har bir
OmniRoute runnerʼida **bitta rol**, bitta label va `MemoryHigh` yigʻindisini jismoniy RAM
hajmiga yaqin saqlaydigan xotira/CPU byudjeti mavjud:

| runner               | label               | rol                                                                                                                           | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`        | Turbopack buildlari: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, tungi a11y buildi | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), webpack buildi                                                                | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`        | tungi ishlar (Schemathesis, promptfoo, garak, k6, a11y yuklanishi) va `quality.yml` `lint-guard`                              | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`        | yuqoridagi bilan bir xil pool                                                                                                 | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (ularning repolari) | faqat Dependabot (har biri uchun eng yuqori qiymat 155 MB, 2026-10-18)                                                        | 4 GB / 6 GB                | har biri 200 % |

2026-10-18 sanasida oʻlchangan:

| resurs    | qiymat                           | rejalashtirish uchun maʼnosi                                                                                                                                                                                                                                             |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 yadro**             | Turbopack production buildi cgroup cheklovi ostida 33–37 GB gacha chiqadi (cheklovsiz 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack buildi esa ~14–16 GB. Bitta Turbopack va bitta webpack buildi bir vaqtda sigʻadi; ikkita Turbopack buildi sigʻmaydi |
| swap      | 16 GB                            | `omniroute-113-5` swap oʻchirilgan holda (`MemorySwapMax=0`) ishlaydi, shuning uchun nazoratdan chiqqan build butun mashinani swap ishlatishga majbur qilish oʻrniga oʻz cheklovida toʻxtatiladi                                                                         |
| `/tmp`    | **12 GB tmpfs = RAM**            | u yerga joylashtirilgan har qanday narsa xotirani egallaydi; qoldiqlar 3 soatdan keyin tozalanadi                                                                                                                                                                        |
| CPU       | 32 yadroda 60 yuklama kuzatilgan | kvotalar joriy etilishidan oldin bitta Turbopack buildi (~1166 % CPU) va shu mashinadagi coverage toʻplami boshqa listenerlarning heartbeat signallarini resurslardan mahrum qilgan (`The self-hosted runner lost communication`, #16853)                                |
| runnerlar | **6 ta listener**                | 4 ta OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` oʻchirilgan (`systemctl enable --now` ulardan birini qayta ishga tushiradi)                                                                                                                           |

Cheklovlar har bir unitning `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
faylida joylashgan (oldingi qiymatlar `override.conf.bak-20261018` sifatida saqlangan) va
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` orqali ishlayotgan tizimga qoʻllangan — qayta ishga tushirish boʻlmagan, shuning uchun
hech bir ishlayotgan jobga taʼsir qilinmagan. Labellar runners API orqali
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) ham ishlayotgan tizimda oʻzgartiriladi.

## Janitor’ni oʻrnatish (bir marta, serverda)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): har 30 daqiqada, logni /var/log/runner-janitor.log fayliga yozish
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` talab qilinadi: janitor yoʻlni olib tashlashdan oldin ochiq fayllarning bir martalik snapshot’i yordamida uning ishlatilmayotganini tasdiqlaydi; bu vositasiz u hech narsani olib tashlamaydi va bu haqda xabar beradi
(exit 1). Har qanday oʻzgarishni avval `--dry-run` bilan sinab koʻring — u aynan nima qilishini koʻrsatadi
va hech narsaga tegmaydi.

Har ishga tushirilganda bajaradigan ishlari: oʻz qoldiqlarimizni (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) **tmpfs’da 3 soatdan** va diskdagi
`_work/_temp` ichida 24 soatdan keyin tozalaydi; 75 daqiqadan eski `next-build` jarayonini
toʻxtatadi (hech bir job buncha uzoq ishlamaydi — 2026-08-27 kuni GitHub uning job’ini yoʻqotilgan deb
eʼlon qilganidan keyin bittasi 70 daqiqa ishlagan); unit’i **toʻxtatilgan** runner’larning
48 soatdan eski checkout’larini tozalaydi; disk ≥ 85 %, xotira PSI
`full/avg60` ≥ 10 % boʻlganda va listener’lar soni `MAX_ACTIVE_RUNNERS` qiymatidan oshganda
(omniroute/boshqalar kesimida) ogohlantiradi. Exit 1 = eʼtibor talab qilinadi; logni oʻqing.

## Runner birliklari: KillMode

Runner uchun standart `KillMode=process` sozlamasi birlik toʻxtatilganda yoki qayta
ishga tushirilganda `Runner.Worker → npm → next-build` jarayonini tirik qoldiradi —
egasiz qolgan build hech qanday job biriktirilmagan holda RAM va CPU isteʼmol qilishda
davom etadi. Har bir OmniRoute birligida
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
drop-in fayli mavjud va unda `KillMode=mixed` oʻrnatilgan: avval listener jarayoniga
SIGTERM, `TimeoutStop` vaqtida esa butun cgroup uchun SIGKILL yuboriladi. Bu sozlama
birlik keyingi safar qayta ishga tushirilganda kuchga kiradi — **bir vaqtda faqat bitta
runnerni va faqat u boʻsh turganda** qayta ishga tushiring, boʻshlik tekshiruvi va qayta
ishga tushirishni bitta buyruqda bajaring.

## Ishlash qoidalari

- **Bir vaqtda faqat bitta Turbopack build — label orqali majburiy ta’minlanadi.** To‘liq Turbopack
  `next build` ishga tushiradigan har bir job `[self-hosted, omni-build]` ni nishonga oladi va faqat
  **`omniroute-113-5`** ushbu labelga ega: `ci.yml` dagi `Build`, `npm-publish.yml` dagi `publish`,
  `nightly-v4-build`, `preview-artifact`, tungi a11y build (#16853) va `docker-publish.yml` dagi
  **amd64** (BuildKit ichidagi webpack — u yerda Turbopack vahimali xato bilan to‘xtagan,
  run 33253576569). Docker’ning arm64 qismi `ubuntu-24.04-arm` da qoladi. `docker-publish` dagi
  amd64 `ci.yml` dagi `Build` bilan `heavy-build-main` concurrency guruhini baham ko‘radi
  (`cancel-in-progress: false`). Docker Engine `omniroute-113-5` da bo‘lishi shart. Ikkinchi
  Turbopack sloti 78 GB ga sig‘maydi (2 × 33–37 GB va tizimning qolgan qismi); ikkinchi slot
  faqat webpack buildlari uchun xavfsiz.
- **Release-Green o‘z slotiga ega (2026-10-18).** Ungacha ikkala Release-Green tekshiruvi ham
  `omni-build` da bajarilgan: har bir push uchun (soatiga ~10 ta, bir kunda 100 ta push runidan
  97 tasi ish o‘rtasida bekor qilingan) va kuniga uchta ~2 soatlik to‘liq tekshiruv (05:29 dagi
  tekshiruv slotni 6 soat kutgan) — yagona build slotiga sig‘imidan bir necha baravar ko‘p yuk
  tushgan va o‘z repozitoriysidan kelgan PR Buildlari soatlab kutgan. `release-green` va
  `main-green` endi `OMNIROUTE_USE_TURBOPACK=0` bilan `omni-release` ni (faqat
  `omniroute-113-6`) nishonga oladi va boshlangan run endi yangi push sababli bekor qilinmaydi
  (navbatdagi slot baribir oqimni birlashtiradi). `tests/unit/build/runner-capacity-routing.test.ts`
  marshrutlashni, webpack’ga o‘tishni va `omni-release` dagi hech narsa Turbopack bilan build
  qilinmasligini qat’iy belgilaydi.
- **Yengil pool: `omni-light`.** `omniroute-113` va `omniroute-113-2` faqat backend uchun
  `next build` talab qiladigan tungi ishlarni (~5–6 GB; webpack) hamda `quality.yml` dagi
  `lint-guard` ni bajaradi. `omniroute-113` da 2026-10-18 gacha `MemoryHigh=4G` bo‘lgan —
  promptfoo build u yerda 54 daqiqa davomida xotirani qayta bo‘shatib ishlagan; 8 GB
  cheklanishni bartaraf etadi.
- **Listenerlar ataylab kamaytirilgan.** To‘rtta OmniRoute unit 2026-08-29 kuni o‘chirib
  qo‘yilgan — har bir qo‘shimcha listener yuqoridagi xotira budjeti uchun yana bir iste’molchidir.
  Janitor chegarasi 6 ta (`MAX_ACTIVE_RUNNERS=6` cron ichida): u serverdagi har bir
  `Runner.Listener` ni hisoblaydi, OmniHeuris + OmniMind esa bizning to‘rttamizga yana ikkitasini
  qo‘shadi.
- **Birorta runner band bo‘lganida hech qachon `/tmp` yoki `_work` ni qo‘lda tozalamang.**
  Tekshirish va o‘chirish orasida tanaffus bo‘lgan holat sababli 2026-08-27 kuni ishlayotgan
  Build job o‘zining `_work` katalogini yo‘qotgan. Janitor tekshiruv va o‘chirishni bitta
  bosqichda bajaradi; buni unga qoldiring.
- Runner’ni job bajarilayotgan paytda to‘xtatish jobni bekor qiladi (amaliyotda kuzatilgan):
  `systemctl stop` ni faqat uning listenerida `Runner.Worker` child jarayoni bo‘lmaganda
  bajaring — va buni bitta buyruqda qiling.
- Workflow’lar artefaktlarni `/tmp` da saqlab turmasligi kerak (u RAM’da joylashgan).
  `$RUNNER_TEMP` ga yuklab oling (diskda, har bir runner uchun alohida) — 1.3 GB hajmdagi
  `next-build` artefaktini tmpfs’ga yuklab olish 27–32 daqiqa, diskdan upload qilish esa
  2 daqiqa vaqt olgan.
- `.15` VPS faqat homologatsiya uchun — unda hech qachon CI runnerlari ishlamaydi.
