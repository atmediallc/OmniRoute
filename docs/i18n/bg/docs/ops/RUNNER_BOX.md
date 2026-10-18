# Self-Hosted Runner Box Operations (.113 pool) (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Самостоятелно хостваният пул работи на машината **.113** (`tomni-proxmox-113`). От 2026-10-18 всеки
runner на OmniRoute има **една роля**, един етикет и бюджет за памет/CPU, който поддържа сбора от
`MemoryHigh` близо до физическата RAM:

| runner               | етикет              | роля                                                                                                                                   | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`        | Компилации с Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, нощната a11y компилация | 40 GB / 44 GB (суап 0)     | 1600 %      |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), компилация с webpack                                                                   | 20 GB / 24 GB (суап 4 GB)  | 800 %       |
| `omniroute-113-2`    | `omni-light`        | нощни задачи (Schemathesis, promptfoo, garak, k6, стартиране на a11y) и `quality.yml` `lint-guard`                                     | 12 GB / 16 GB (суап 4 GB)  | 600 %       |
| `omniroute-113`      | `omni-light`        | същият пул като по-горе                                                                                                                | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (техните хранилища) | само Dependabot (пиково по 155 MB, 2026-10-18)                                                                                         | 4 GB / 6 GB                | 200 % всеки |

Измерено на 2026-10-18:

| ресурс    | стойност                               | какво означава това за планирането                                                                                                                                                                                                                                                                           |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 ядра**                    | продукционна компилация с Turbopack достига пиково 33–37 GB при ограничение чрез cgroup (49 GB без ограничение, `tests/unit/ci-build-bundler-webpack.test.ts`); компилация с webpack — около 14–16 GB. Една компилация с Turbopack и една с webpack могат да работят заедно; две компилации с Turbopack — не |
| суап      | 16 GB                                  | `omniroute-113-5` работи с изключен суап (`MemorySwapMax=0`), така че неконтролирана компилация се прекратява при достигане на лимита си, вместо да принуждава машината да използва суап                                                                                                                     |
| `/tmp`    | **12 GB tmpfs = RAM**                  | всичко, оставено там, заема памет; остатъчните файлове се почистват след 3 ч.                                                                                                                                                                                                                                |
| CPU       | наблюдавано натоварване 60 при 32 ядра | преди квотите една компилация с Turbopack (~1166 % CPU), заедно с пакет от тестове за покритие на същата машина, лишаваше сигналите за активност на останалите слушатели от ресурси (`The self-hosted runner lost communication`, #16853)                                                                    |
| runner-и  | **6 слушателя**                        | 4 за OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` са деактивирани (`systemctl enable --now` активира отново един от тях)                                                                                                                                                                    |

Ограниченията се намират във файла `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
на всеки unit (предишните стойности са запазени като `override.conf.bak-20261018`) и бяха приложени в движение чрез
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — без рестартиране, така че нито една
изпълняваща се задача не беше засегната. Етикетите се променят чрез API за runner-и
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), също в движение.

## Инсталиране на процеса за почистване (еднократно, на машината)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): на всеки 30 мин., записване в /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` е задължителен: преди да премахне даден път, процесът за почистване доказва, че той не се използва, чрез моментна снимка на отворените файлове; без този инструмент не премахва нищо и съобщава причината (изходен код 1). Първо изпробвайте всяка промяна с `--dry-run` — тази опция показва точно какво би било направено, без да променя нищо.

Какво прави при всяко изпълнение: почиства собствените ни остатъчни файлове (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) след **3 ч. в tmpfs** и след 24 ч. в дисковата директория `_work/_temp`; прекратява процес `next-build`, по-стар от 75 мин. (никоя задача не се изпълнява толкова дълго — на 2026-08-27 една се изпълняваше 70 мин., след като GitHub вече беше обявил задачата ѝ за загубена); премахва работни копия, по-стари от 48 ч., на runner-и, чиито услуги са **спрени**; подава предупреждение при заетост на диска ≥ 85 %, memory PSI `full/avg60` ≥ 10 % и брой слушащи процеси над `MAX_ACTIVE_RUNNERS` (с разбивка на omniroute/други). Изходен код 1 = необходимо е внимание; прегледайте журнала.

## Runner модули: KillMode

Стандартната настройка `KillMode=process` на runner-а оставя `Runner.Worker → npm → next-build`
активен, когато даден модул бъде спрян или рестартиран — осиротял build продължава да консумира RAM и
CPU, без към него да има прикачена задача. Всеки модул на OmniRoute има drop-in конфигурация
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
с `KillMode=mixed`: първо SIGTERM към listener-а, а при
`TimeoutStop` — SIGKILL към цялата cgroup. Настройката влиза в сила при следващото рестартиране на модула — рестартирайте **по един runner,
само когато е неактивен**, като проверката за неактивност и рестартирането трябва да са в една и съща команда.

## Правила за работа

- **Само една Turbopack компилация в даден момент — наложено чрез етикет.** Всяка задача, която изпълнява пълна Turbopack компилация с
  `next build`, е насочена към `[self-hosted, omni-build]`, а само **`omniroute-113-5`** носи този
  етикет: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  нощната a11y компилация (#16853) и **amd64** в `docker-publish.yml` (webpack в BuildKit —
  Turbopack аварира там, изпълнение 33253576569). Частта за arm64 Docker остава на `ubuntu-24.04-arm`.
  amd64 в `docker-publish` споделя групата за конкурентност `heavy-build-main` с `Build` в `ci.yml`
  (`cancel-in-progress: false`). Docker Engine трябва да бъде на `omniroute-113-5`. Втори слот за Turbopack
  не се побира в 78 GB (2 × 33–37 GB плюс останалото на машината); втори слот е безопасен само за
  компилации с webpack.
- **Release-Green има собствен слот (2026-10-18).** Дотогава и двете проверки на Release-Green се изпълняваха
  на `omni-build`: при всяко изпращане (~10/час, 97 от 100 изпълнения при изпращане бяха отменени по време на работа за един ден)
  и три пълни обхождания по ~2 часа дневно (обхождането в 05:29 чака 6 часа за слота) — единственият слот за компилации
  беше претоварен многократно, а PR компилациите от собствен източник чакаха с часове.
  `release-green` и `main-green` вече са насочени към `omni-release` (само `omniroute-113-6`) с
  `OMNIROUTE_USE_TURBOPACK=0`, а започнало изпълнение вече не се отменя от по-ново изпращане (чакащият
  слот все още свива лавината). `tests/unit/build/runner-capacity-routing.test.ts`
  фиксира маршрутизирането, превключването към webpack и гаранцията, че нищо на `omni-release` не се компилира с Turbopack.
- **Лек пул: `omni-light`.** `omniroute-113` и `omniroute-113-2` изпълняват нощните задачи, които се нуждаят
  от `next build` само за бекенда (~5–6 GB; webpack), както и `lint-guard` от `quality.yml`. `omniroute-113`
  имаше `MemoryHigh=4G` до 2026-10-18 — компилацията на promptfoo си освобождаваше памет в продължение на 54 минути
  там; 8 GB премахват ограничаването.
- **Умишлено по-малко слушатели.** Четири модула на OmniRoute бяха деактивирани на 2026-08-29 — всеки допълнителен
  слушател е още един потребител на горепосочения бюджет за памет. Таванът на чистача е 6 (`MAX_ACTIVE_RUNNERS=6` в cron): той брои
  всеки `Runner.Listener` на машината, а OmniHeuris + OmniMind добавят още два към нашите четири.
- **Никога не почиствайте `/tmp` или `_work` ръчно, докато някой runner е зает.** Проверка,
  последвана от изтриване с пауза между двете, е причината активна задача `Build` да загуби своята
  `_work` на 2026-08-27. Чистачът извършва проверката и премахването в една стъпка;
  оставете го да го направи.
- Спирането на runner по средата на задача отменя задачата (наблюдавано на живо): използвайте `systemctl stop` само
  когато неговият слушател няма дъщерен процес `Runner.Worker` — и го направете с една команда.
- Работните потоци не трябва да съхраняват артефакти в `/tmp` (той е в RAM). Изтегляйте в
  `$RUNNER_TEMP` (на диск, отделно за всеки runner) — артефактът `next-build` с размер 1.3 GB отне 27–32
  минути, за да бъде записан в tmpfs, и 2 минути, за да бъде качен от диска.
- VPS сървърът `.15` е само за хомологация — на него никога не се изпълняват CI runners.
