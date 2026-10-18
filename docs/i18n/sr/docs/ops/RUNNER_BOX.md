# Self-Hosted Runner Box Operations (.113 pool) (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Самостално хостовани скуп ради на машини **.113** (`tomni-proxmox-113`). Од 2026-10-18, сваки
OmniRoute извршилац има **једну улогу**, једну ознаку и меморијски/CPU буџет који одржава збир
`MemoryHigh` вредности близу количине физичке RAM меморије:

| извршилац            | ознака                  | улога                                                                                                                          | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`            | Turbopack изградње: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, ноћна a11y изградња | 40 GB / 44 GB (своп 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`          | Release-Green (`release-green` + `main-green`), webpack изградња                                                               | 20 GB / 24 GB (своп 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`            | ноћни послови (Schemathesis, promptfoo, garak, k6, покретање a11y) и `quality.yml` `lint-guard`                                | 12 GB / 16 GB (своп 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`            | исти скуп као изнад                                                                                                            | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (њихови репозиторијуми) | само Dependabot (вршна вредност 155 MB за сваки, 2026-10-18)                                                                   | 4 GB / 6 GB                | 200 % за сваки |

Измерено 2026-10-18:

| ресурс    | вредност                              | шта то значи за распоређивање                                                                                                                                                                                                                                                     |
| --------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 језгра**                 | продукциона Turbopack изградња достиже вршних 33–37 GB под cgroup ограничењем (49 GB без ограничења, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack изградња око 14–16 GB. Једна Turbopack и једна webpack изградња могу да раде заједно; две Turbopack изградње не могу |
| своп      | 16 GB                                 | `omniroute-113-5` ради са искљученим свопом (`MemorySwapMax=0`), тако да се неконтролисана изградња прекида када достигне ограничење уместо да машина почне да користи своп                                                                                                       |
| `/tmp`    | **12 GB tmpfs = RAM**                 | све што се тамо остави заузима меморију; преостале датотеке се чисте након 3 h                                                                                                                                                                                                    |
| CPU       | забележено оптерећење 60 на 32 језгра | пре увођења квота, једна Turbopack изградња (~1166 % CPU) заједно са пакетом тестова покривености на истој машини остављала је друге слушаоце без ресурса за сигнале о доступности (`Самостално хостовани извршилац је изгубио комуникацију`, #16853)                             |
| извршиоци | **6 слушалаца**                       | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` су онемогућени (`systemctl enable --now` поново активира један)                                                                                                                                                   |

Ограничења се налазе у датотеци `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
сваке јединице (претходне вредности су сачуване као `override.conf.bak-20261018`) и примењена су уживо помоћу
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — без поновног покретања, тако да ниједан
активни посао није био прекинут. Ознаке се мењају преко API-ја за извршиоце
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), такође уживо.

## Инсталирање чистача (једнократно, на серверу)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): сваких 30 минута, евиденција у /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` је обавезан: чистач једним снимком отворених датотека потврђује да је путања
неактивна пре него што је уклони, а без тог алата не уклања ништа и то пријављује
(излазни код 1). Сваку измену прво испробајте помоћу `--dry-run` — тачно исписује шта би
урадила и не мења ништа.

Шта ради при сваком покретању: чисти наше заостатке (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) после **3 h на tmpfs-у** и после 24 h на диску у
`_work/_temp`; прекида `next-build` старији од 75 min (ниједан посао не траје толико — 2026-08-27
један је радио 70 min након што је GitHub прогласио његов посао изгубљеним); уклања радне
копије старије од 48 h за извршиоце чија је јединица **заустављена**; упозорава када је
искоришћеност диска ≥ 85 %, меморијски PSI `full/avg60` ≥ 10 % и када има више слушалаца
него што задаје `MAX_ACTIVE_RUNNERS` (са поделом на omniroute/остале). Излазни код 1 =
потребна је пажња; прочитајте евиденцију.

## Јединице извршилаца: KillMode

Подразумевани `KillMode=process` извршиоца оставља `Runner.Worker → npm → next-build`
активним када се јединица заустави или поново покрене — напуштена изградња наставља да троши RAM и
CPU, а да није повезана ни са једним задатком. Свака OmniRoute јединица има додатну конфигурацију
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
са `KillMode=mixed`: најпре SIGTERM процесу који ослушкује, а затим SIGKILL целој cgroup групи по истеку
`TimeoutStop`. Ступа на снагу при следећем поновном покретању јединице — поново покрећите **по један извршилац,
и то само када је неактиван**, при чему провера неактивности и поновно покретање морају бити у истој команди.

## Правила рада

- **Само једна Turbopack изградња истовремено — наметнуто ознаком.** Сваки посао који покреће потпуну Turbopack
  `next build` изградњу циља `[self-hosted, omni-build]`, а само **`omniroute-113-5`** има ту
  ознаку: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  ноћна a11y изградња (#16853) и `docker-publish.yml` **amd64** (webpack унутар BuildKit-а —
  Turbopack се тамо срушио, покретање 33253576569). Docker деоница за arm64 остаје на `ubuntu-24.04-arm`.
  `docker-publish` за amd64 дели `heavy-build-main` групу конкурентности са `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine мора бити на `omniroute-113-5`. Други Turbopack
  слот не стаје у 78 GB (2 × 33–37 GB плус остатак система); други слот је безбедан само за
  webpack изградње.
- **Release-Green има сопствени слот (2026-10-18).** До тада су се обе Release-Green провере извршавале
  на `omni-build`: при сваком push-у (~10 на сат, 97 од 100 push покретања отказано је усред рада током једног дана)
  и три потпуна пролаза од ~2 h дневно (пролаз у 05:29 чекао је 6 h на слот) — једини слот за изградњу
  био је вишеструко преоптерећен, а PR Build послови из сопственог извора чекали су сатима.
  `release-green` и `main-green` сада циљају `omni-release` (само `omniroute-113-6`) са
  `OMNIROUTE_USE_TURBOPACK=0`, а започето покретање се више не отказује због новијег push-а (слот
  на чекању и даље сажима навалу). `tests/unit/build/runner-capacity-routing.test.ts`
  фиксира усмеравање, пребацивање на webpack и правило да ништа на `omni-release` не користи Turbopack за изградњу.
- **Лаки пул: `omni-light`.** `omniroute-113` и `omniroute-113-2` покрећу ноћне послове којима је потребна
  `next build` изградња само за позадински систем (~5–6 GB; webpack) и `quality.yml` `lint-guard`. `omniroute-113`
  је имао `MemoryHigh=4G` до 2026-10-18 — promptfoo изградња се тамо пробијала кроз ослобађање меморије 54 минута;
  8 GB уклања ограничавање.
- **Намерно мање слушалаца.** Четири OmniRoute јединице су онемогућене 2026-08-29 — сваки додатни
  слушалац је још један корисник горенаведеног меморијског буџета. Горња граница чистача је 6 (`MAX_ACTIVE_RUNNERS=6` у cron-у): он броји
  сваки `Runner.Listener` на машини, а OmniHeuris + OmniMind додају још два на наша четири.
- **Никада немојте ручно чистити `/tmp` или `_work` док је било који покретач заузет.** Провера
  па брисање, са размаком између та два корака, довели су до тога да активни Build посао изгуби свој
  `_work` 2026-08-27. Чистач обавља проверу и уклањање у једном кораку;
  препустите то њему.
- Заустављање покретача усред посла отказује посао (уочено уживо): `systemctl stop` користите само
  када његов слушалац нема подређени процес `Runner.Worker` — и урадите то једном командом.
- Токови рада не смеју да смештају артефакте у `/tmp` (то је RAM). Преузимајте у
  `$RUNNER_TEMP` (на диску, засебно за сваки покретач) — `next-build` артефакту од 1.3 GB требало је 27–32
  минута да се смести на tmpfs и 2 минута да се отпреми са диска.
- VPS `.15` служи само за хомологацију — никада не покреће CI покретаче.
