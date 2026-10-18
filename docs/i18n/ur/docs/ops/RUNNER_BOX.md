# Self-Hosted Runner Box Operations (.113 pool) (اردو)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

سیلف ہوسٹڈ پول **.113** مشین (`tomni-proxmox-113`) پر چلتا ہے۔ 2026-10-18 سے ہر
OmniRoute رنر کا **ایک کردار**، ایک لیبل، اور میموری/CPU بجٹ ہے جو
`MemoryHigh` کے مجموعے کو فزیکل RAM کے قریب رکھتا ہے:

| رنر                  | لیبل           | کردار                                                                                                                 | `MemoryHigh` / `MemoryMax` | `CPUQuota`   |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| `omniroute-113-5`    | `omni-build`   | Turbopack بلڈز: `ci.yml` `Build`، Docker amd64، `npm-publish`، `nightly-v4-build`، `preview-artifact`، شبانہ a11y بلڈ | 40 GB / 44 GB (سویپ 0)     | 1600 %       |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`)، webpack بلڈ                                                           | 20 GB / 24 GB (سویپ 4 GB)  | 800 %        |
| `omniroute-113-2`    | `omni-light`   | شبانہ جابز (Schemathesis، promptfoo، garak، k6، a11y بوٹ) اور `quality.yml` کا `lint-guard`                           | 12 GB / 16 GB (سویپ 4 GB)  | 600 %        |
| `omniroute-113`      | `omni-light`   | اوپر والا ہی پول                                                                                                      | 8 GB / 12 GB               | 400 %        |
| OmniHeuris, OmniMind | (ان کی ریپوز)  | صرف Dependabot (ہر ایک کی بلند ترین کھپت 155 MB، 2026-10-18)                                                          | 4 GB / 6 GB                | ہر ایک 200 % |

2026-10-18 کو پیمائش کی گئی:

| وسیلہ     | قدر                         | شیڈولنگ کے لیے اس کا مطلب                                                                                                                                                                                                                                                        |
| --------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 کورز**         | cgroup حد کے تحت Turbopack پروڈکشن بلڈ بلند ترین سطح پر 33–37 GB استعمال کرتا ہے (حد کے بغیر 49 GB، `tests/unit/ci-build-bundler-webpack.test.ts`)؛ webpack بلڈ تقریباً 14–16 GB استعمال کرتا ہے۔ ایک Turbopack اور ایک webpack بلڈ بیک وقت سما سکتے ہیں؛ دو Turbopack بلڈز نہیں |
| سویپ      | 16 GB                       | `omniroute-113-5` سویپ بند رکھ کر (`MemorySwapMax=0`) چلتا ہے، تاکہ بے قابو بلڈ مشین کو سویپ پر ڈالنے کے بجائے اپنی حد پر روک دیا جائے                                                                                                                                           |
| `/tmp`    | **12 GB tmpfs = RAM**       | یہاں رکھی گئی ہر چیز میموری استعمال کرتی ہے؛ باقی رہ جانے والی فائلیں 3 گھنٹے بعد صاف کر دی جاتی ہیں                                                                                                                                                                             |
| CPU       | 32 کورز پر 60 لوڈ دیکھا گیا | کوٹاز سے پہلے، اسی مشین پر ایک Turbopack بلڈ (تقریباً 1166 % CPU) اور ایک کوریج سوئٹ نے دوسرے listeners کی heartbeats کو وسائل سے محروم کر دیا تھا (`The self-hosted runner lost communication`، #16853)                                                                         |
| رنرز      | **6 listeners**             | 4 OmniRoute + OmniHeuris + OmniMind؛ `omniroute-113-3/-4/-7/-8` غیر فعال ہیں (`systemctl enable --now` کسی ایک کو دوبارہ فعال کر دیتا ہے)                                                                                                                                        |

حدود ہر یونٹ کی `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` میں موجود ہیں
(پچھلی قدریں `override.conf.bak-20261018` کے طور پر محفوظ ہیں) اور انہیں براہِ راست
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` کے ذریعے لاگو کیا گیا — کسی restart کے بغیر، اس لیے
کوئی زیرِ اجرا جاب متاثر نہیں ہوئی۔ لیبلز کو runners API کے ذریعے تبدیل کیا جاتا ہے
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`)، وہ بھی براہِ راست۔

## janitor انسٹال کریں (صرف ایک بار، باکس پر)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): ہر 30 منٹ بعد، لاگ /var/log/runner-janitor.log میں
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` درکار ہے: janitor کسی پاتھ کو ہٹانے سے پہلے کھلی ہوئی فائلوں کے ایک اسنیپ شاٹ کے ذریعے ثابت کرتا ہے کہ وہ غیر استعمال شدہ ہے، اور اس ٹول کے بغیر یہ کچھ بھی نہیں ہٹاتا اور اس کی اطلاع دیتا ہے (exit 1)۔ کسی بھی تبدیلی کو پہلے `--dry-run` کے ساتھ آزمائیں — یہ عین وہی دکھاتا ہے جو یہ کرے گا اور کسی چیز کو تبدیل نہیں کرتا۔

ہر بار چلنے پر یہ کیا کرتا ہے: ہماری اپنی باقیات (`runner-*`، `omniroute-*`،
`next-build*`، `e2e-build.tar.gz`) کو **tmpfs پر 3 گھنٹے** اور ڈسک کے
`_work/_temp` پر 24 گھنٹے بعد صاف کرتا ہے؛ 75 منٹ سے زیادہ پرانے `next-build`
کو ختم کرتا ہے (کوئی جاب اتنی دیر نہیں چلتا — 2026-08-27 کو ایک جاب، GitHub
کی جانب سے اسے ضائع قرار دیے جانے کے بعد بھی 70 منٹ تک چلتا رہا)؛ ان رنرز کے
48 گھنٹے پرانے چیک آؤٹس ہٹاتا ہے جن کی یونٹ **بند** ہو؛ ڈسک ≥ 85 %، میموری PSI
`full/avg60` ≥ 10 %، اور `MAX_ACTIVE_RUNNERS` سے زیادہ listeners ہونے پر
(omniroute/دیگر کی تفصیل کے ساتھ) الرٹ کرتا ہے۔ exit 1 = توجہ درکار ہے؛ لاگ پڑھیں۔

## رنر یونٹس: KillMode

رنر کا ڈیفالٹ `KillMode=process`، یونٹ روکے یا دوبارہ شروع کیے جانے پر بھی `Runner.Worker → npm → next-build`
کو چلتا چھوڑ دیتا ہے — یوں کسی جاب سے منسلک نہ ہونے کے باوجود ایک یتیم بلڈ RAM اور
CPU استعمال کرتا رہتا ہے۔ ہر OmniRoute یونٹ میں ایک ڈراپ اِن
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
موجود ہے جس میں `KillMode=mixed` ہے: پہلے listener کو SIGTERM، پھر
`TimeoutStop` پر پورے cgroup کو SIGKILL۔ یہ یونٹ کے اگلے ریاسٹارٹ پر مؤثر ہوتا ہے — **ایک وقت میں
صرف ایک رنر، اور صرف اس کے idle ہونے پر، دوبارہ شروع کریں**، نیز idle جانچ اور ریاسٹارٹ ایک ہی کمانڈ میں کریں۔

## عملیاتی اصول

- **ایک وقت میں صرف ایک Turbopack بلڈ — لیبل کے ذریعے نافذ۔** مکمل Turbopack
  `next build` چلانے والی ہر جاب `[self-hosted, omni-build]` کو ہدف بناتی ہے، اور صرف **`omniroute-113-5`** پر یہ
  لیبل موجود ہے: `ci.yml` کا `Build`، `npm-publish.yml` کا `publish`، `nightly-v4-build`، `preview-artifact`،
  رات کا a11y بلڈ (#16853) اور `docker-publish.yml` کا **amd64** (BuildKit کے اندر webpack —
  وہاں Turbopack کریش ہوا تھا، رن 33253576569)۔ arm64 Docker مرحلہ `ubuntu-24.04-arm` ہی پر رہتا ہے۔
  `docker-publish` کا amd64، `ci.yml` کے `Build` کے ساتھ `heavy-build-main` کنکرنسی گروپ شیئر کرتا ہے
  (`cancel-in-progress: false`)۔ Docker Engine کا `omniroute-113-5` پر ہونا ضروری ہے۔ دوسرا Turbopack
  سلاٹ 78 GB میں سما نہیں سکتا (2 × 33–37 GB، نیز مشین کا باقی استعمال)؛ دوسرا سلاٹ صرف
  webpack بلڈز کے لیے محفوظ ہے۔
- **Release-Green کا اپنا سلاٹ ہے (2026-10-18)۔** اس وقت تک دونوں Release-Green توثیقات
  `omni-build` پر چلتی تھیں: ہر push پر (~10/گھنٹہ، ایک دن میں 100 میں سے 97 push رنز دورانِ کام منسوخ ہوئے)
  اور روزانہ تین ~2 گھنٹے کے مکمل سویپس (05:29 والے سویپ نے سلاٹ کے لیے 6 گھنٹے انتظار کیا) — واحد بلڈ
  سلاٹ پر اس کی گنجائش سے کئی گنا زیادہ بوجھ تھا اور اپنے ہی origin کے PR بلڈز کو گھنٹوں انتظار کرنا پڑتا تھا۔
  `release-green` اور `main-green` اب `OMNIROUTE_USE_TURBOPACK=0` کے ساتھ
  `omni-release` (صرف `omniroute-113-6`) کو ہدف بناتے ہیں، اور شروع شدہ رن اب کسی نئے push سے منسوخ نہیں ہوتا
  (زیرِ انتظار سلاٹ اب بھی رنز کے سیلاب کو یکجا کر دیتا ہے)۔ `tests/unit/build/runner-capacity-routing.test.ts`
  روٹنگ، webpack سوئچ، اور اس بات کو مقید کرتا ہے کہ `omni-release` پر کوئی چیز Turbopack کے ساتھ بلڈ نہ ہو۔
- **ہلکا پول: `omni-light`۔** `omniroute-113` اور `omniroute-113-2` وہ رات کے رنز چلاتے ہیں جنہیں
  صرف بیک اینڈ کا `next build` (~5–6 GB؛ webpack) اور `quality.yml` کا `lint-guard` درکار ہوتا ہے۔ `omniroute-113`
  پر 2026-10-18 تک `MemoryHigh=4G` تھا — promptfoo بلڈ وہاں 54 منٹ تک میموری واپس حاصل کرتے ہوئے آگے بڑھتا رہا؛
  8 GB تھروٹلنگ ختم کر دیتا ہے۔
- **جان بوجھ کر کم listeners۔** 2026-08-29 کو چار OmniRoute یونٹس غیر فعال کیے گئے — ہر اضافی
  listener مذکورہ میموری بجٹ کا ایک اور حصہ دار ہے۔ janitor کی حد 6 ہے (`MAX_ACTIVE_RUNNERS=6` in cron): یہ مشین پر
  موجود ہر `Runner.Listener` کو شمار کرتا ہے، اور OmniHeuris + OmniMind ہمارے چار میں مزید دو کا اضافہ کرتے ہیں۔
- **جب کوئی بھی runner مصروف ہو تو `/tmp` یا `_work` کو کبھی دستی طور پر صاف نہ کریں۔** پہلے
  جانچنے اور پھر کچھ وقفے کے بعد حذف کرنے کے باعث 2026-08-27 کو ایک فعال Build جاب کا
  `_work` ضائع ہو گیا تھا۔ janitor جانچ اور حذف کرنے کا عمل ایک ہی مرحلے میں کرتا ہے؛
  اسے ہی کرنے دیں۔
- جاب کے دوران runner روکنے سے جاب منسوخ ہو جاتی ہے (عملی طور پر مشاہدہ شدہ): `systemctl stop` صرف
  اس وقت چلائیں جب اس کے listener کا کوئی `Runner.Worker` child نہ ہو — اور یہ کام ایک ہی کمانڈ میں کریں۔
- ورک فلوز کو آرٹیفیکٹس `/tmp` میں نہیں رکھنے چاہییں (یہ RAM ہے)۔ انہیں
  `$RUNNER_TEMP` میں ڈاؤن لوڈ کریں (ڈسک پر، ہر runner کے لیے الگ) — 1.3 GB کے `next-build` آرٹیفیکٹ کو tmpfs پر
  اترنے میں 27–32 منٹ اور ڈسک سے اپ لوڈ ہونے میں 2 منٹ لگے۔
- `.15` VPS صرف homologation کے لیے ہے — اس پر کبھی CI runners نہیں چلتے۔
