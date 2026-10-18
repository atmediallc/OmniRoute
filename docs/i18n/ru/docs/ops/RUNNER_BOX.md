# Self-Hosted Runner Box Operations (.113 pool) (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Пул локальных раннеров работает на сервере **.113** (`tomni-proxmox-113`). С 2026-10-18 каждый
раннер OmniRoute имеет **одну роль**, одну метку и бюджет памяти/CPU, благодаря которому сумма
`MemoryHigh` остаётся близкой к объёму физической RAM:

| раннер               | метка            | роль                                                                                                                        | `MemoryHigh` / `MemoryMax` | `CPUQuota`   |
| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| `omniroute-113-5`    | `omni-build`     | Сборки Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, ночная сборка a11y | 40 GB / 44 GB (swap 0)     | 1600 %       |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), сборка webpack                                                              | 20 GB / 24 GB (swap 4 GB)  | 800 %        |
| `omniroute-113-2`    | `omni-light`     | ночные задания (Schemathesis, promptfoo, garak, k6, запуск a11y) и `quality.yml` `lint-guard`                               | 12 GB / 16 GB (swap 4 GB)  | 600 %        |
| `omniroute-113`      | `omni-light`     | тот же пул, что и выше                                                                                                      | 8 GB / 12 GB               | 400 %        |
| OmniHeuris, OmniMind | (их репозитории) | только Dependabot (пиковое потребление каждого — 155 MB, 2026-10-18)                                                        | 4 GB / 6 GB                | 200 % каждый |

Измерено 2026-10-18:

| ресурс    | значение                            | значение для планирования                                                                                                                                                                                                                                                                                    |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 ядра**                 | промышленная сборка Turbopack достигает пикового потребления 33–37 GB при ограничении cgroup (49 GB без ограничения, `tests/unit/ci-build-bundler-webpack.test.ts`); сборка webpack — около 14–16 GB. Одна сборка Turbopack и одна сборка webpack могут выполняться одновременно; две сборки Turbopack — нет |
| swap      | 16 GB                               | `omniroute-113-5` работает с отключённым swap (`MemorySwapMax=0`), поэтому вышедшая из-под контроля сборка будет остановлена при достижении лимита, а не заставит весь сервер использовать swap                                                                                                              |
| `/tmp`    | **12 GB tmpfs = RAM**               | всё, что размещено там, занимает память; оставшиеся файлы удаляются через 3 ч                                                                                                                                                                                                                                |
| CPU       | наблюдалась нагрузка 60 на 32 ядрах | до введения квот одна сборка Turbopack (~1166 % CPU) вместе с набором тестов покрытия на том же сервере лишала остальные процессы-слушатели ресурсов для отправки heartbeat-сигналов (`The self-hosted runner lost communication`, #16853)                                                                   |
| раннеры   | **6 процессов-слушателей**          | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` отключены (`systemctl enable --now` снова включает один из них)                                                                                                                                                                              |

Ограничения находятся в `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
каждого юнита (предыдущие значения сохранены в `override.conf.bak-20261018`) и были применены без остановки с помощью
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — без перезапуска, поэтому ни одно
выполняющееся задание не было затронуто. Метки изменяются через API раннеров
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), также без остановки.

## Установка скрипта очистки (однократно, на машине)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): каждые 30 мин, журнал записывается в /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

Требуется `lsof`: прежде чем удалить путь, скрипт очистки по однократному снимку открытых
файлов убеждается, что путь не используется, а без этого инструмента он ничего не удаляет
и сообщает об этом (код выхода 1). Сначала проверяйте любые изменения с помощью `--dry-run` —
скрипт выведет в точности то, что он сделал бы, не меняя ничего.

Что он делает при каждом запуске: удаляет оставленные нами файлы (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) через **3 ч в tmpfs** и через 24 ч на диске в
`_work/_temp`; завершает процесс `next-build`, работающий более 75 мин (ни одно задание
не выполняется так долго — 2026-08-27 один процесс работал 70 мин после того, как GitHub
объявил его задание потерянным); удаляет рабочие копии старше 48 ч у раннеров, чьи службы
**остановлены**; предупреждает при заполнении диска ≥ 85 %, значении PSI памяти
`full/avg60` ≥ 10 % и количестве слушателей выше `MAX_ACTIVE_RUNNERS` (с разбивкой на
omniroute/прочие). Код выхода 1 = требуется внимание; проверьте журнал.

## Юниты раннеров: KillMode

Значение `KillMode=process`, используемое раннером по умолчанию, оставляет процесс `Runner.Worker → npm → next-build`
работающим после остановки или перезапуска юнита — осиротевшая сборка продолжает потреблять оперативную память и
процессорное время, хотя задание к ней уже не привязано. Каждый юнит OmniRoute содержит drop-in-файл
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
с `KillMode=mixed`: сначала SIGTERM отправляется слушателю, а по истечении
`TimeoutStop` всей cgroup отправляется SIGKILL. Настройка вступает в силу при следующем перезапуске юнита — перезапускайте **по одному раннеру
за раз и только во время простоя**, выполняя проверку простоя и перезапуск одной командой.

## Правила эксплуатации

- **Одновременно выполняется только одна сборка Turbopack — это обеспечивается меткой.** Каждое задание, выполняющее полную сборку Turbopack
  `next build`, нацелено на `[self-hosted, omni-build]`, и только **`omniroute-113-5`** имеет эту
  метку: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  ночная сборка a11y (#16853) и **amd64** в `docker-publish.yml` (webpack внутри BuildKit —
  Turbopack аварийно завершался там, запуск 33253576569). Ветка Docker для arm64 остаётся на `ubuntu-24.04-arm`.
  `docker-publish` для amd64 использует общую группу параллелизма `heavy-build-main` с `Build`
  из `ci.yml` (`cancel-in-progress: false`). Docker Engine должен находиться на `omniroute-113-5`. Второй слот
  Turbopack не помещается в 78 ГБ (2 × 33–37 ГБ плюс остальные процессы на машине); второй слот безопасен только
  для сборок webpack.
- **У Release-Green есть собственный слот (2026-10-18).** До этого обе проверки Release-Green выполнялись
  на `omni-build`: при каждом push (~10 в час, 97 из 100 запусков по push были отменены в процессе работы за один день)
  и три полных прогона продолжительностью ~2 ч в день (прогон в 05:29 ожидал слот 6 ч) — единственный слот сборки
  был перегружен в несколько раз, а сборки PR из собственного репозитория часами ждали запуска.
  `release-green` и `main-green` теперь нацелены на `omni-release` (только `omniroute-113-6`) с
  `OMNIROUTE_USE_TURBOPACK=0`, а начавшийся запуск больше не отменяется новым push (при этом
  ожидающий слот по-прежнему схлопывает поток запусков). `tests/unit/build/runner-capacity-routing.test.ts`
  фиксирует маршрутизацию, переключение на webpack и то, что ничто на `omni-release` не собирается с Turbopack.
- **Лёгкий пул: `omni-light`.** `omniroute-113` и `omniroute-113-2` выполняют ночные задания, которым нужна
  только серверная сборка `next build` (~5–6 ГБ; webpack), а также `lint-guard` из `quality.yml`. На `omniroute-113`
  до 2026-10-18 было задано `MemoryHigh=4G` — сборка promptfoo в течение 54 минут пыталась освободить память,
  чтобы уложиться в этот предел; 8 ГБ устраняют троттлинг.
- **Меньше слушателей — намеренно.** Четыре юнита OmniRoute были отключены 2026-08-29 — каждый дополнительный
  слушатель становится ещё одним потребителем указанного выше бюджета памяти. Верхний предел для уборщика — 6 (`MAX_ACTIVE_RUNNERS=6` в cron): он учитывает
  каждый `Runner.Listener` на машине, а OmniHeuris и OmniMind добавляют ещё два к нашим четырём.
- **Никогда не очищайте `/tmp` или `_work` вручную, пока занят хотя бы один runner.**
  Проверка с последующим удалением, между которыми есть временной промежуток, привела к тому, что выполнявшееся задание Build потеряло свой
  `_work` 2026-08-27. Уборщик выполняет проверку и удаление за один шаг;
  предоставьте это ему.
- Остановка runner в процессе выполнения задания отменяет задание (проверено на работающей системе): используйте `systemctl stop`, только
  когда у его слушателя нет дочернего процесса `Runner.Worker`, — и выполняйте это одной командой.
- Workflows не должны размещать артефакты в `/tmp` (он находится в RAM). Загружайте их в
  `$RUNNER_TEMP` (на диске, отдельно для каждого runner) — артефакт `next-build` размером 1,3 ГБ загружался в tmpfs 27–32
  минуты, тогда как его выгрузка с диска занимала 2 минуты.
- VPS `.15` предназначен только для омологации — на нём никогда не запускаются CI runners.
