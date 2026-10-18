# Self-Hosted Runner Box Operations (.113 pool) (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

يعمل المجمّع المستضاف ذاتيًا على جهاز **.113** (`tomni-proxmox-113`). منذ 2026-10-18، أصبح لكل
مشغّل OmniRoute **دور واحد** وتسمية واحدة وميزانية للذاكرة/وحدة المعالجة المركزية تُبقي مجموع
`MemoryHigh` قريبًا من ذاكرة RAM الفعلية:

| المشغّل              | التسمية        | الدور                                                                                                                                | `MemoryHigh` / `MemoryMax`         | `CPUQuota`      |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`   | عمليات بناء Turbopack: ‏`ci.yml` `Build`، وDocker amd64، و`npm-publish`، و`nightly-v4-build`، و`preview-artifact`، وبناء a11y الليلي | 40 GB / 44 GB (مساحة التبديل 0)    | 1600 %          |
| `omniroute-113-6`    | `omni-release` | ‏Release-Green (`release-green` + `main-green`)، وبناء webpack                                                                       | 20 GB / 24 GB (مساحة التبديل 4 GB) | 800 %           |
| `omniroute-113-2`    | `omni-light`   | المهام الليلية (Schemathesis وpromptfoo وgarak وk6 وتمهيد a11y) و`quality.yml` `lint-guard`                                          | 12 GB / 16 GB (مساحة التبديل 4 GB) | 600 %           |
| `omniroute-113`      | `omni-light`   | المجمّع نفسه المذكور أعلاه                                                                                                           | 8 GB / 12 GB                       | 400 %           |
| OmniHeuris, OmniMind | (مستودعاتهما)  | ‏Dependabot فقط (ذروة قدرها 155 MB لكل منهما، 2026-10-18)                                                                            | 4 GB / 6 GB                        | 200 % لكل منهما |

القياسات بتاريخ 2026-10-18:

| المورد        | القيمة                         | دلالتها بالنسبة للجدولة                                                                                                                                                                                                                                                       |
| ------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU     | **78 GB / 32 نواة**            | تبلغ ذروة بناء إنتاجي باستخدام Turbopack مقدار 33–37 GB تحت حد cgroup (و49 GB من دون حد، `tests/unit/ci-build-bundler-webpack.test.ts`)؛ بينما يبلغ بناء webpack نحو 14–16 GB. يمكن تشغيل بناء Turbopack واحد مع بناء webpack واحد معًا؛ ولا يمكن تشغيل بناءَي Turbopack معًا |
| مساحة التبديل | 16 GB                          | يعمل `omniroute-113-5` مع تعطيل مساحة التبديل (`MemorySwapMax=0`)، ولذلك تُوقَف عملية البناء المنفلتة عند بلوغ حدها بدلًا من دفع الجهاز إلى استخدام مساحة التبديل                                                                                                             |
| `/tmp`        | **12 GB بنظام tmpfs = RAM**    | أي شيء يُترك هناك يستهلك الذاكرة؛ وتُحذف البقايا بعد 3 ساعات                                                                                                                                                                                                                  |
| CPU           | لوحظ حمل مقداره 60 على 32 نواة | قبل فرض الحصص، تسبّب بناء Turbopack واحد (نحو 1166 % من CPU) مع حزمة اختبارات تغطية على الجهاز نفسه في حرمان نبضات اتصال المستمعين الآخرين من الموارد (`The self-hosted runner lost communication`، #16853)                                                                   |
| المشغّلات     | **6 مستمعين**                  | 4 لـOmniRoute، بالإضافة إلى OmniHeuris وOmniMind؛ المشغّلات `omniroute-113-3/-4/-7/-8` معطّلة (`systemctl enable --now` يعيد تشغيل أحدها)                                                                                                                                     |

توجد الحدود في ملف `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` الخاص بكل وحدة
(مع الاحتفاظ بالقيم السابقة في `override.conf.bak-20261018`)، وطُبّقت مباشرةً باستخدام
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — من دون إعادة تشغيل، ولذلك لم
تتأثر أي مهمة قيد التشغيل. تُغيَّر التسميات عبر واجهة API الخاصة بالمشغّلات
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`)، مباشرةً أيضًا.

## تثبيت أداة التنظيف (مرة واحدة، على الجهاز)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron ‏(root): كل 30 دقيقة، مع التسجيل في /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

يلزم وجود `lsof`: تتحقق أداة التنظيف من أن المسار غير مستخدم عبر لقطة واحدة للملفات
المفتوحة قبل إزالته، ومن دون هذه الأداة لا تزيل شيئًا وتذكر ذلك
(exit 1). جرّب أي تغيير باستخدام `--dry-run` أولًا — فهو يطبع بالضبط ما كان سينفّذه
ولا يغيّر شيئًا.

ما تفعله في كل تشغيل: تنظّف البقايا الخاصة بنا (`runner-*`، و`omniroute-*`،
و`next-build*`، و`e2e-build.tar.gz`) بعد **3 ساعات على tmpfs** وبعد 24 ساعة على القرص
في `_work/_temp`؛ وتنهي أي عملية `next-build` يتجاوز عمرها 75 دقيقة (لا تستغرق أي مهمة هذه المدة — ففي
2026-08-27 استمرت إحداها 70 دقيقة بعد أن أعلن GitHub فقدان مهمتها)؛ وتحذف نسخ العمل التي مضى عليها 48 ساعة
للمشغّلات التي تكون وحدتها **متوقفة**؛ وتطلق تنبيهات عندما يبلغ استخدام القرص ≥ 85%، أو تبلغ قيمة PSI للذاكرة
`full/avg60` ‏≥ 10%، أو يزيد عدد المستمعين على `MAX_ACTIVE_RUNNERS` (مع
تفصيل omniroute/الآخرين). ‏Exit 1 = يلزم الانتباه؛ راجع السجل.

## وحدات المشغّل: KillMode

يؤدي الإعداد الافتراضي للمشغّل `KillMode=process` إلى إبقاء
`Runner.Worker → npm → next-build` قيد التشغيل عند إيقاف وحدة أو إعادة تشغيلها — فتستمر عملية بناء يتيمة في استهلاك ذاكرة RAM وCPU
من دون وجود مهمة مرتبطة بها. تحتوي كل وحدة OmniRoute على ملف إعداد إضافي
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
يتضمن `KillMode=mixed`: تُرسل SIGTERM إلى المستمع أولًا، ثم SIGKILL إلى مجموعة cgroup بأكملها عند
`TimeoutStop`. يسري ذلك عند إعادة تشغيل الوحدة في المرة التالية — أعد تشغيل **مشغّل واحد في
كل مرة، وفقط عندما يكون خاملًا**، مع تنفيذ التحقق من الخمول وإعادة التشغيل ضمن الأمر نفسه.

## قواعد التشغيل

- **بناء Turbopack واحد في كل مرة — يُفرض ذلك بواسطة التسمية.** كل مهمة تُشغّل أمر
  `next build` كاملًا باستخدام Turbopack تستهدف `[self-hosted, omni-build]`، ولا يحمل هذه
  التسمية سوى **`omniroute-113-5`**: مهمة `Build` في `ci.yml`، ومهمة `publish` في `npm-publish.yml`،
  و`nightly-v4-build`، و`preview-artifact`، وبناء a11y الليلي (#16853)، ومهمة **amd64** في
  `docker-publish.yml` (باستخدام webpack داخل BuildKit — إذ انهار Turbopack هناك، في التشغيل
  33253576569). تظل مرحلة Docker الخاصة بـ arm64 على `ubuntu-24.04-arm`.
  تشترك مهمة amd64 في `docker-publish` في مجموعة التزامن `heavy-build-main` مع مهمة `Build`
  في `ci.yml` (`cancel-in-progress: false`). يجب أن يكون Docker Engine على `omniroute-113-5`.
  لا تتسع ذاكرة 78 GB لفتحة Turbopack ثانية (2 × 33–37 GB بالإضافة إلى بقية أحمال الجهاز)؛
  ولا تكون الفتحة الثانية آمنة إلا لعمليات البناء باستخدام webpack.
- **لدى Release-Green فتحة خاصة به (2026-10-18).** حتى ذلك الحين، كان كلا تحققي Release-Green
  يعملان على `omni-build`: عند كل عملية دفع (~10/ساعة، أُلغي 97 من أصل 100 تشغيل دفع في منتصف
  العمل خلال يوم واحد)، وثلاث عمليات فحص كاملة يوميًا تستغرق كل منها نحو ساعتين (انتظرت عملية
  الفحص في 05:29 مدة 6 ساعات للحصول على الفتحة) — كان الطلب على فتحة البناء الوحيدة يتجاوز
  سعتها عدة مرات، وكانت عمليات `Build` لطلبات السحب الواردة من المستودع نفسه تنتظر لساعات.
  يستهدف `release-green` و`main-green` الآن `omni-release` (`omniroute-113-6` فقط) مع
  `OMNIROUTE_USE_TURBOPACK=0`، ولم يعد التشغيل الذي بدأ يُلغى بسبب عملية دفع أحدث (لكن الفتحة
  المعلّقة لا تزال تدمج سيل العمليات). يثبّت
  `tests/unit/build/runner-capacity-routing.test.ts` التوجيه، والتحويل إلى webpack، وضمان ألا
  يُبنى أي شيء على `omni-release` باستخدام Turbopack.
- **المجموعة الخفيفة: `omni-light`.** يشغّل `omniroute-113` و`omniroute-113-2` المهام الليلية
  التي تحتاج إلى `next build` للواجهة الخلفية فقط (~5–6 GB؛ باستخدام webpack)، بالإضافة إلى
  `lint-guard` في `quality.yml`. كان `MemoryHigh=4G` مضبوطًا على `omniroute-113` حتى
  2026-10-18 — وظل بناء promptfoo يستعيد الذاكرة بصعوبة طوال 54 دقيقة هناك؛ ويؤدي رفعها إلى
  8 GB إلى إزالة الاختناق.
- **عدد أقل من المستمعين عن قصد.** عُطّلت أربع وحدات OmniRoute في 2026-08-29 — فكل مستمع
  إضافي يُعد مستأجرًا آخر ضمن ميزانية الذاكرة المذكورة أعلاه. الحد الأقصى الذي يفرضه المنظّف
  هو 6 (`MAX_ACTIVE_RUNNERS=6` في cron): فهو يحسب كل عملية `Runner.Listener` على الجهاز،
  ويضيف OmniHeuris وOmniMind عمليتين إلى عملياتنا الأربع.
- **لا تنظّف `/tmp` أو `_work` يدويًا أبدًا أثناء انشغال أي مشغّل.** فقد تسببت
  عملية تحقق ثم حذف، مع وجود فاصل بين الخطوتين، في فقدان مهمة `Build` نشطة لمجلد
  `_work` الخاص بها في 2026-08-27. ينفّذ المنظّف التحقق والإزالة في خطوة واحدة؛
  فاترك هذه المهمة له.
- يؤدي إيقاف مشغّل في منتصف المهمة إلى إلغاء المهمة (كما لوحظ فعليًا): لا تستخدم `systemctl stop`
  إلا عندما لا تكون لدى مستمعه عملية `Runner.Worker` فرعية — ونفّذ ذلك بأمر واحد.
- يجب ألا تخزّن مسارات العمل العناصر المنشأة في `/tmp` (فهو موجود في RAM). نزّلها إلى
  `$RUNNER_TEMP` (على القرص، ومخصص لكل مشغّل) — فقد استغرق وصول عنصر `next-build` المنشأ بحجم
  1.3 GB إلى tmpfs مدة 27–32 دقيقة، بينما استغرق رفعه من القرص دقيقتين.
- خادم VPS ذو العنوان `.15` مخصص للاعتماد فقط — ولا يشغّل مشغّلات CI مطلقًا.
