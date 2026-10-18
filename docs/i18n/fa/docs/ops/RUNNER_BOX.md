# Self-Hosted Runner Box Operations (.113 pool) (فارسی)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

مجموعهٔ self-hosted روی دستگاه **.113** (`tomni-proxmox-113`) اجرا میشود. از 2026-10-18، هر
runner مربوط به OmniRoute دارای **یک نقش**، یک برچسب و بودجهٔ حافظه/CPU است که مجموع
`MemoryHigh` را نزدیک به RAM فیزیکی نگه میدارد:

| runner               | برچسب                  | نقش                                                                                                                                     | `MemoryHigh` / `MemoryMax`      | `CPUQuota`        |
| -------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----------------- |
| `omniroute-113-5`    | `omni-build`           | buildهای Turbopack: مرحلهٔ `Build` در `ci.yml`، Docker amd64، `npm-publish`، `nightly-v4-build`، `preview-artifact` و build شبانهٔ a11y | 40 GB / 44 GB (swap برابر 0)    | 1600 %            |
| `omniroute-113-6`    | `omni-release`         | Release-Green (`release-green` + `main-green`)، build با webpack                                                                        | 20 GB / 24 GB (swap برابر 4 GB) | 800 %             |
| `omniroute-113-2`    | `omni-light`           | اجراهای شبانه (Schemathesis، promptfoo، garak، k6 و راهاندازی a11y) و `lint-guard` در `quality.yml`                                     | 12 GB / 16 GB (swap برابر 4 GB) | 600 %             |
| `omniroute-113`      | `omni-light`           | همان مجموعهٔ بالا                                                                                                                       | 8 GB / 12 GB                    | 400 %             |
| OmniHeuris, OmniMind | (repositoryهای خودشان) | فقط Dependabot (اوج مصرف هرکدام 155 MB در 2026-10-18)                                                                                   | 4 GB / 6 GB                     | 200 % برای هرکدام |

اندازهگیریشده در 2026-10-18:

| منبع      | مقدار                        | مفهوم آن برای زمانبندی                                                                                                                                                                                                                                                                  |
| --------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 هسته**          | یک build تولیدی Turbopack تحت محدودیت cgroup به اوج مصرف 33–37 GB میرسد (بدون محدودیت 49 GB، `tests/unit/ci-build-bundler-webpack.test.ts`)؛ مصرف یک build با webpack حدود 14–16 GB است. یک build با Turbopack و یک build با webpack همزمان جا میشوند؛ دو build با Turbopack جا نمیشوند |
| swap      | 16 GB                        | `omniroute-113-5` با swap غیرفعال (`MemorySwapMax=0`) اجرا میشود تا یک build خارجشده از کنترل، بهجای انتقال دستگاه به swap، در سقف تعیینشده متوقف شود                                                                                                                                   |
| `/tmp`    | **12 GB tmpfs = RAM**        | هر چیزی که آنجا باقی بماند، حافظه مصرف میکند؛ موارد باقیمانده پس از 3 ساعت پاک میشوند                                                                                                                                                                                                   |
| CPU       | بار 60 روی 32 هسته مشاهده شد | پیش از اعمال سهمیهها، یک build با Turbopack (حدود 1166 % CPU) بههمراه یک مجموعهٔ coverage روی همان دستگاه، heartbeatهای listenerهای دیگر را از منابع محروم کرد (`The self-hosted runner lost communication`، #16853)                                                                    |
| runnerها  | **6 listener**               | 4 مورد برای OmniRoute، بهعلاوهٔ OmniHeuris و OmniMind؛ موارد `omniroute-113-3/-4/-7/-8` غیرفعال هستند (`systemctl enable --now` یکی از آنها را دوباره فعال میکند)                                                                                                                       |

محدودیتها در فایل `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` مربوط به هر unit قرار دارند
(مقادیر قبلی با نام `override.conf.bak-20261018` نگهداری شدهاند) و بهصورت زنده با
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` اعمال شدند — بدون restart، بنابراین هیچ
job در حال اجرایی تحتتأثیر قرار نگرفت. برچسبها نیز بهصورت زنده از طریق API مربوط به runnerها تغییر میکنند:
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## نصب janitor (یکبار، روی سرور)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): هر 30 دقیقه، ثبت گزارش در /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

وجود `lsof` الزامی است: janitor پیش از حذف یک مسیر، با یک snapshot از فایلهای
باز ثابت میکند که آن مسیر بلااستفاده است؛ بدون این ابزار چیزی را حذف نمیکند و
این موضوع را اعلام میکند (exit 1). هر تغییری را ابتدا با `--dry-run` امتحان کنید
— دقیقاً آنچه را انجام خواهد داد چاپ میکند و به هیچچیز دست نمیزند.

کارهایی که در هر اجرا انجام میدهد: باقیماندههای متعلق به خودمان (`runner-*`،
`omniroute-*`، `next-build*`، `e2e-build.tar.gz`) را پس از **3 ساعت در tmpfs**
و پس از 24 ساعت در `_work/_temp` روی دیسک پاکسازی میکند؛ یک `next-build`
قدیمیتر از 75 دقیقه را متوقف میکند (هیچ jobای اینقدر طول نمیکشد — در
2026-08-27 یکی از آنها پس از اینکه GitHub، job مربوطه را ازدسترفته اعلام کرده
بود، 70 دقیقه اجرا شد)؛ checkoutهای قدیمیتر از 48 ساعت مربوط به runnerهایی را
که unit آنها **متوقف** است پاک میکند؛ و دربارهٔ استفاده از دیسک ≥ 85٪،
مقدار `full/avg60` در PSI حافظه ≥ 10٪ و تعداد listenerهای بیشتر از
`MAX_ACTIVE_RUNNERS` هشدار میدهد (همراه با تفکیک omniroute/other).
exit 1 = نیازمند رسیدگی؛ گزارش را بخوانید.

## واحدهای Runner: KillMode

مقدار پیشفرض `KillMode=process` در runner باعث میشود زنجیرهٔ `Runner.Worker → npm → next-build`
هنگام توقف یا راهاندازی مجدد یک واحد زنده بماند — در نتیجه، یک build یتیم بدون اینکه jobای به آن
متصل باشد، همچنان RAM و CPU مصرف میکند. هر واحد OmniRoute یک drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
با `KillMode=mixed` دارد: ابتدا SIGTERM برای listener و در زمان
`TimeoutStop`،‏ SIGKILL برای کل cgroup ارسال میشود. این تنظیم در راهاندازی مجدد بعدی واحد اعمال
میشود — هر بار **فقط یک runner را و تنها در زمان idle بودن** راهاندازی مجدد کنید؛ بررسی idle بودن
و راهاندازی مجدد باید در یک command انجام شوند.

## قواعد عملیاتی

- **در هر لحظه فقط یک ساخت Turbopack — با برچسب اعمال میشود.** هر کاری که یک
  `next build` کامل با Turbopack اجرا میکند، `[self-hosted, omni-build]` را هدف میگیرد و فقط
  **`omniroute-113-5`** این برچسب را دارد: `ci.yml` `Build`، `npm-publish.yml` `publish`، `nightly-v4-build`، `preview-artifact`،
  ساخت شبانهٔ a11y (#16853) و **amd64** در `docker-publish.yml` (webpack درون BuildKit —
  Turbopack در آنجا دچار panic شد، اجرای 33253576569). بخش arm64 مربوط به Docker همچنان روی `ubuntu-24.04-arm` باقی میماند.
  amd64 در `docker-publish` گروه همزمانی `heavy-build-main` را با `Build` در `ci.yml` مشترک است
  (`cancel-in-progress: false`). Docker Engine باید روی `omniroute-113-5` باشد. اسلات دوم Turbopack
  در 78 GB جا نمیشود (2 × 33–37 GB بهعلاوهٔ سایر بارهای سیستم)؛ اسلات دوم فقط برای
  ساختهای webpack امن است.
- **Release-Green اسلات اختصاصی خود را دارد (2026-10-18).** تا آن زمان، هر دو اعتبارسنجی Release-Green
  روی `omni-build` اجرا میشدند: در هر push (حدود 10 بار در ساعت؛ در یک روز، 97 مورد از 100 اجرای push
  حین کار لغو شدند) و سه پیمایش کامل تقریباً 2 ساعته در روز (پیمایش 05:29 برای اسلات 6 ساعت منتظر ماند) —
  اسلات واحد ساخت چندین برابر ظرفیت خود بارگذاری شده بود و Buildهای PR با مبدأ خودی ساعتها منتظر میماندند.
  اکنون `release-green` و `main-green` با `OMNIROUTE_USE_TURBOPACK=0`، `omni-release`
  (فقط `omniroute-113-6`) را هدف میگیرند و اجرای آغازشده دیگر با push جدیدتر لغو نمیشود
  (اسلات در انتظار همچنان هجوم اجراها را تجمیع میکند). `tests/unit/build/runner-capacity-routing.test.ts`
  مسیریابی، تغییر به webpack و این واقعیت را تثبیت میکند که هیچچیز روی `omni-release` با Turbopack ساخته نمیشود.
- **مخزن سبک: `omni-light`.** `omniroute-113` و `omniroute-113-2` اجراهای شبانهای را انجام میدهند که
  به یک `next build` صرفاً برای backend (حدود 5–6 GB؛ webpack) و `lint-guard` در `quality.yml` نیاز دارند. `omniroute-113`
  تا 2026-10-18 دارای `MemoryHigh=4G` بود — ساخت promptfoo طی 54 دقیقه با بازیابی حافظه
  در آنجا پیش رفت؛ 8 GB محدودسازی را برطرف میکند.
- **تعداد کمتر listenerها عمدی است.** چهار واحد OmniRoute در 2026-08-29 غیرفعال شدند — هر
  listener اضافی، مستأجر دیگری برای بودجهٔ حافظهٔ بالا است. سقف janitor برابر 6 است (`MAX_ACTIVE_RUNNERS=6` در cron): این مقدار
  همهٔ `Runner.Listener`های روی دستگاه را میشمارد و OmniHeuris + OmniMind دو مورد به چهار مورد ما اضافه میکنند.
- **هرگز هنگامی که runnerای مشغول است، `/tmp` یا `_work` را بهصورت دستی پاک نکنید.** یک
  بررسی و سپس حذف، با فاصلهای میان این دو، باعث شد یک کار زندهٔ Build در
  2026-08-27 مسیر `_work` خود را از دست بدهد. janitor بررسی و حذف را در یک مرحله انجام میدهد؛
  این کار را به آن بسپارید.
- توقف runner در میانهٔ کار، آن کار را لغو میکند (بهصورت زنده مشاهده شده است): `systemctl stop` را فقط
  زمانی اجرا کنید که listener آن هیچ فرزند `Runner.Worker` نداشته باشد — و این کار را با یک فرمان انجام دهید.
- workflowها نباید artefactها را در `/tmp` نگه دارند (این مسیر در RAM است). آنها را در
  `$RUNNER_TEMP` دانلود کنید (روی دیسک و مختص هر runner) — فرود آمدن artefact 1.3 GB مربوط به `next-build`
  روی tmpfs بین 27 تا 32 دقیقه طول کشید، درحالیکه بارگذاری آن از روی دیسک 2 دقیقه زمان برد.
- VPS با آدرس `.15` فقط برای homologation است — هرگز runnerهای CI را اجرا نمیکند.
