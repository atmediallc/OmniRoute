# Self-Hosted Runner Box Operations (.113 pool) (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Самостійно розміщений пул працює на машині **.113** (`tomni-proxmox-113`). Із 2026-10-18 кожен
ранер OmniRoute має **одну роль**, одну мітку та бюджет пам’яті/CPU, завдяки якому сума
`MemoryHigh` залишається близькою до обсягу фізичної RAM:

| ранер                | мітка              | роль                                                                                                                       | `MemoryHigh` / `MemoryMax`    | `CPUQuota`  |
| -------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`       | Збірки Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, нічна збірка a11y | 40 GB / 44 GB (підкачка 0)    | 1600 %      |
| `omniroute-113-6`    | `omni-release`     | Release-Green (`release-green` + `main-green`), збірка webpack                                                             | 20 GB / 24 GB (підкачка 4 GB) | 800 %       |
| `omniroute-113-2`    | `omni-light`       | нічні завдання (Schemathesis, promptfoo, garak, k6, запуск a11y) і `quality.yml` `lint-guard`                              | 12 GB / 16 GB (підкачка 4 GB) | 600 %       |
| `omniroute-113`      | `omni-light`       | той самий пул, що й вище                                                                                                   | 8 GB / 12 GB                  | 400 %       |
| OmniHeuris, OmniMind | (їхні репозиторії) | лише Dependabot (пікове використання 155 MB кожним, 2026-10-18)                                                            | 4 GB / 6 GB                   | 200 % кожен |

Виміряно 2026-10-18:

| ресурс    | значення                                   | що це означає для планування                                                                                                                                                                                                                                                                     |
| --------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 ядра**                        | промислова збірка Turbopack досягає пікового споживання 33–37 GB з обмеженням cgroup (49 GB без обмеження, `tests/unit/ci-build-bundler-webpack.test.ts`); збірка webpack — приблизно 14–16 GB. Одна збірка Turbopack і одна збірка webpack можуть виконуватися разом; дві збірки Turbopack — ні |
| підкачка  | 16 GB                                      | `omniroute-113-5` працює з вимкненою підкачкою (`MemorySwapMax=0`), тому неконтрольована збірка завершується при досягненні свого обмеження замість використання підкачки всією машиною                                                                                                          |
| `/tmp`    | **12 GB tmpfs = RAM**                      | усе, що зберігається там, займає пам’ять; залишки видаляються через 3 год                                                                                                                                                                                                                        |
| CPU       | спостерігалося навантаження 60 на 32 ядрах | до запровадження квот одна збірка Turbopack (~1166 % CPU) разом із набором тестів покриття на тій самій машині блокували сигнали активності інших слухачів (`The self-hosted runner lost communication`, #16853)                                                                                 |
| ранери    | **6 слухачів**                             | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` вимкнені (`systemctl enable --now` повертає один із них до роботи)                                                                                                                                                               |

Обмеження містяться у файлі `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
кожного юніта (попередні значення збережено як `override.conf.bak-20261018`) і були застосовані наживо за допомогою
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — без перезапуску, тому жодне
активне завдання не було зачеплено. Мітки також змінюються наживо через API ранерів
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Установлення прибиральника (одноразово, на сервері)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): кожні 30 хв, журнал у /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` є обов’язковим: перед видаленням прибиральник підтверджує, що шлях не використовується, за допомогою одного знімка відкритих
файлів, а без цього інструмента нічого не видаляє та повідомляє
про це (код завершення 1). Спочатку перевіряйте будь-які зміни за допомогою `--dry-run` — цей режим точно показує, що буде
зроблено, і нічого не змінює.

Що він робить під час кожного запуску: очищає наші власні залишки (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) через **3 год у tmpfs** і через 24 год у дисковому
`_work/_temp`; завершує процес `next-build`, старіший за 75 хв (жодне завдання не виконується так довго —
2026-08-27 один процес працював 70 хв після того, як GitHub оголосив його завдання втраченим); видаляє робочі
копії старші за 48 год для раннерів, чиї служби **зупинено**; сповіщає, коли використання диска ≥ 85 %, показник PSI пам’яті
`full/avg60` ≥ 10 % або кількість слухачів перевищує `MAX_ACTIVE_RUNNERS` (із
розподілом на omniroute/інші). Код завершення 1 = потрібна увага; перегляньте журнал.

## Модулі раннерів: KillMode

Стандартний параметр раннера `KillMode=process` залишає процеси `Runner.Worker → npm → next-build`
активними після зупинки або перезапуску модуля — осиротіла збірка продовжує споживати оперативну пам’ять і
CPU, хоча з нею не пов’язане жодне завдання. Кожен модуль OmniRoute має додаткову конфігурацію
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
із `KillMode=mixed`: спочатку SIGTERM надсилається слухачу, а після
`TimeoutStop` — SIGKILL усій cgroup. Зміна набуває чинності після наступного перезапуску модуля — перезапускайте **по одному раннеру,
лише коли він неактивний**, виконуючи перевірку неактивності та перезапуск однією командою.

## Правила експлуатації

- **Одне збирання Turbopack за раз — обмеження забезпечується міткою.** Кожне завдання, яке виконує повне збирання Turbopack
  `next build`, націлене на `[self-hosted, omni-build]`, і лише **`omniroute-113-5`** має цю
  мітку: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  нічне збирання a11y (#16853) і **amd64** у `docker-publish.yml` (webpack усередині BuildKit —
  там сталася паніка Turbopack, запуск 33253576569). Частина Docker для arm64 залишається на `ubuntu-24.04-arm`.
  amd64 у `docker-publish` використовує спільну групу паралельності `heavy-build-main` із `Build`
  у `ci.yml` (`cancel-in-progress: false`). Docker Engine має бути на `omniroute-113-5`. Другий слот Turbopack
  не вміщується у 78 ГБ (2 × 33–37 ГБ плюс решта навантаження системи); другий слот безпечний лише для
  збирань webpack.
- **Release-Green має власний слот (2026-10-18).** До цього обидві перевірки Release-Green виконувалися
  на `omni-build`: під час кожного push (~10/годину, 97 зі 100 запусків після push було скасовано посеред виконання за один день)
  і три повні проходи тривалістю ~2 год щодня (прохід о 05:29 чекав на слот 6 годин) — єдиний слот
  збирання був перевантажений у кілька разів, а PR-збирання з власного джерела чекали годинами.
  `release-green` і `main-green` тепер націлені на `omni-release` (лише `omniroute-113-6`) з
  `OMNIROUTE_USE_TURBOPACK=0`, а розпочатий запуск більше не скасовується новішим push (слот
  очікування все одно згортає шквал запусків). `tests/unit/build/runner-capacity-routing.test.ts`
  фіксує маршрутизацію, перемикання на webpack і гарантує, що ніщо на `omni-release` не збирається за допомогою Turbopack.
- **Легкий пул: `omni-light`.** `omniroute-113` і `omniroute-113-2` виконують нічні завдання, яким потрібне
  лише серверне `next build` (~5–6 ГБ; webpack), а також `lint-guard` із `quality.yml`. `omniroute-113`
  мав `MemoryHigh=4G` до 2026-10-18 — збирання promptfoo протягом 54 хвилин вивільняло пам’ять,
  щоб завершитися; 8 ГБ усувають це обмеження.
- **Менше слухачів — навмисно.** Чотири модулі OmniRoute було вимкнено 2026-08-29 — кожен додатковий
  слухач є ще одним споживачем описаного вище бюджету пам’яті. Максимум для прибиральника — 6 (`MAX_ACTIVE_RUNNERS=6` у cron): він рахує
  кожен `Runner.Listener` на машині, а OmniHeuris + OmniMind додають ще два до наших чотирьох.
- **Ніколи не очищайте `/tmp` або `_work` вручну, поки будь-який runner зайнятий.**
  Перевірка з подальшим видаленням, між якими є пауза, призвела до того, що активне завдання Build втратило свій
  `_work` 2026-08-27. Прибиральник виконує перевірку й видалення за один крок;
  дозвольте йому це зробити.
- Зупинення runner посеред виконання завдання скасовує це завдання (спостерігалося наживо): `systemctl stop` виконуйте лише
  тоді, коли його слухач не має дочірнього процесу `Runner.Worker`, — і робіть це однією командою.
- Робочі процеси не повинні зберігати артефакти в `/tmp` (це оперативна пам’ять). Завантажуйте до
  `$RUNNER_TEMP` (на диску, окремо для кожного runner) — артефакту `next-build` розміром 1,3 ГБ знадобилося 27–32
  хвилини, щоб потрапити на tmpfs, і 2 хвилини, щоб вивантажитися з диска.
- VPS `.15` призначений лише для омологації — він ніколи не запускає CI runner.
