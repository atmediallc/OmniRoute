# Self-Hosted Runner Box Operations (.113 pool) (Հայերեն)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Ինքնուրույն հոսթինգով փուլն աշխատում է **.113** մեքենայի վրա (`tomni-proxmox-113`)։ 2026-10-18-ից ի վեր OmniRoute-ի յուրաքանչյուր runner ունի **մեկ դեր**, մեկ պիտակ և հիշողության/CPU-ի այնպիսի բյուջե, որ `MemoryHigh`-ների գումարը մոտ է ֆիզիկական RAM-ի ծավալին․

| runner               | պիտակ                   | դեր                                                                                                                               | `MemoryHigh` / `MemoryMax` | `CPUQuota`            |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------- |
| `omniroute-113-5`    | `omni-build`            | Turbopack build-եր՝ `ci.yml`-ի `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, գիշերային a11y build | 40 GB / 44 GB (swap՝ 0)    | 1600 %                |
| `omniroute-113-6`    | `omni-release`          | Release-Green (`release-green` + `main-green`), webpack build                                                                     | 20 GB / 24 GB (swap՝ 4 GB) | 800 %                 |
| `omniroute-113-2`    | `omni-light`            | գիշերային գործարկումներ (Schemathesis, promptfoo, garak, k6, a11y-ի մեկնարկ) և `quality.yml`-ի `lint-guard`                       | 12 GB / 16 GB (swap՝ 4 GB) | 600 %                 |
| `omniroute-113`      | `omni-light`            | նույն փուլը, ինչ վերևում                                                                                                          | 8 GB / 12 GB               | 400 %                 |
| OmniHeuris, OmniMind | (իրենց ռեպոզիտորիաները) | միայն Dependabot (առավելագույնը՝ յուրաքանչյուրը 155 MB, 2026-10-18)                                                               | 4 GB / 6 GB                | յուրաքանչյուրը՝ 200 % |

Չափվել է 2026-10-18-ին․

| ռեսուրս    | արժեք                              | նշանակությունը ժամանակացուցման համար                                                                                                                                                                                                                                                                         |
| ---------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU  | **78 GB / 32 միջուկ**              | Turbopack-ի production build-ը cgroup-ի սահմանափակման ներքո առավելագույնը սպառում է 33–37 GB (առանց սահմանափակման՝ 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`), իսկ webpack build-ը՝ մոտ 14–16 GB։ Մեկ Turbopack և մեկ webpack build կարող են միաժամանակ տեղավորվել, իսկ երկու Turbopack build՝ ոչ |
| swap       | 16 GB                              | `omniroute-113-5`-ն աշխատում է անջատված swap-ով (`MemorySwapMax=0`), որպեսզի վերահսկողությունից դուրս եկած build-ը դադարեցվի իր սահմանաչափին հասնելիս՝ մեքենային swap օգտագործելու ստիպելու փոխարեն                                                                                                          |
| `/tmp`     | **12 GB tmpfs = RAM**              | այնտեղ պահված ցանկացած բան հիշողություն է զբաղեցնում․ մնացորդները մաքրվում են 3 ժամ անց                                                                                                                                                                                                                      |
| CPU        | 32 միջուկի վրա դիտարկվել է 60 load | մինչև քվոտաների կիրառումը մեկ Turbopack build-ը (~1166 % CPU) և նույն մեքենայի վրա աշխատող coverage suite-ը մյուս listener-ներին զրկում էին heartbeat ուղարկելու ռեսուրսներից (`The self-hosted runner lost communication`, #16853)                                                                          |
| runner-ներ | **6 listener**                     | 4 OmniRoute + OmniHeuris + OmniMind․ `omniroute-113-3/-4/-7/-8`-ն անջատված են (`systemctl enable --now` հրամանը դրանցից մեկը կրկին ակտիվացնում է)                                                                                                                                                            |

Սահմանափակումները գտնվում են յուրաքանչյուր unit-ի `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` ֆայլում
(նախորդ արժեքները պահպանվել են որպես `override.conf.bak-20261018`) և կիրառվել են աշխատող համակարգի վրա՝
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` հրամանով՝ առանց վերագործարկման, ուստի
կատարվող աշխատանքներից ոչ մեկը չի ընդհատվել։ Պիտակները նույնպես աշխատող համակարգի վրա փոխվում են runners API-ի միջոցով
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`)։

## Տեղադրեք մաքրիչը (մեկ անգամ՝ սերվերում)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root)՝ յուրաքանչյուր 30 րոպեն մեկ, գրանցել /var/log/runner-janitor.log-ում
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof`-ը պարտադիր է. նախքան ուղին հեռացնելը մաքրիչը բաց ֆայլերի մեկ ակնթարթային պատկերով հաստատում է, որ այն չի օգտագործվում, իսկ առանց այդ գործիքի ոչինչ չի հեռացնում և հայտնում է դրա մասին
(exit 1)։ Ցանկացած փոփոխություն նախ փորձարկեք `--dry-run`-ով. այն ճշգրտորեն տպում է, թե ինչ կաներ՝ ոչինչ չփոփոխելով։

Ինչ է այն անում յուրաքանչյուր գործարկման ժամանակ. մաքրում է մեր սեփական մնացորդները (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`)՝ **tmpfs-ում 3 ժ**, իսկ սկավառակի
`_work/_temp`-ում՝ 24 ժ անց. դադարեցնում է 75 րոպեից ավելի հին `next-build`-ը (ոչ մի job այդքան երկար չի աշխատում. 2026-08-27-ին մեկն աշխատել է 70 րոպե այն բանից հետո, երբ GitHub-ն արդեն հայտարարել էր, որ դրա job-ը կորել է). ջնջում է այն runner-ների 48 ժամից ավելի հին checkout-ները, որոնց unit-ը **կանգնեցված է**. ահազանգում է, երբ սկավառակի զբաղվածությունը ≥ 85 % է, հիշողության PSI-ի
`full/avg60`-ը ≥ 10 % է, կամ listener-ների քանակը գերազանցում է `MAX_ACTIVE_RUNNERS`-ը (omniroute/այլ բաժանմամբ)։ Exit 1 = ուշադրություն է պահանջվում. կարդացեք log-ը։

## Runner միավորներ․ KillMode

Runner-ի լռելյայն `KillMode=process` կարգավորումը միավորի կանգնեցման կամ վերագործարկման ժամանակ կենդանի է թողնում `Runner.Worker → npm → next-build` շղթան․ առանց որևէ առաջադրանքի մնացած որբ build-ը շարունակում է սպառել RAM և CPU։ OmniRoute-ի յուրաքանչյուր միավոր ունի լրացուցիչ կարգավորման ֆայլ՝ (`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`) `KillMode=mixed` արժեքով․ նախ SIGTERM է ուղարկվում listener-ին, ապա `TimeoutStop`-ի պահին SIGKILL՝ ամբողջ cgroup-ին։ Այն ուժի մեջ է մտնում միավորի հաջորդ վերագործարկման ժամանակ․ վերագործարկեք **միաժամանակ միայն մեկ runner և միայն այն ժամանակ, երբ այն անգործուն է**՝ անգործունության ստուգումն ու վերագործարկումը կատարելով նույն հրամանով։

## Աշխատանքային կանոններ

- **Միաժամանակ միայն մեկ Turbopack build՝ պարտադրված label-ի միջոցով։** Լիարժեք Turbopack
  `next build` գործարկող յուրաքանչյուր job թիրախավորում է `[self-hosted, omni-build]`, և միայն
  **`omniroute-113-5`**-ն ունի այդ label-ը՝ `ci.yml`-ի `Build`, `npm-publish.yml`-ի `publish`,
  `nightly-v4-build`, `preview-artifact`, գիշերային a11y build-ը (#16853) և
  `docker-publish.yml`-ի **amd64**-ը (webpack՝ BuildKit-ի ներսում. Turbopack-ը այնտեղ խափանվել է,
  run 33253576569)։ arm64 Docker ճյուղը մնում է `ubuntu-24.04-arm`-ում։
  `docker-publish`-ի amd64-ը `ci.yml`-ի `Build`-ի հետ կիսում է `heavy-build-main`
  concurrency group-ը (`cancel-in-progress: false`)։ Docker Engine-ը պետք է լինի
  `omniroute-113-5`-ում։ Turbopack-ի երկրորդ սլոտը չի տեղավորվում 78 GB-ում (2 × 33–37 GB՝
  գումարած մեքենայի մնացած բեռը). երկրորդ սլոտն անվտանգ է միայն webpack build-երի համար։
- **Release-Green-ն ունի իր առանձին սլոտը (2026-10-18)։** Մինչ այդ Release-Green-ի երկու
  validation-ներն էլ աշխատում էին `omni-build`-ում՝ յուրաքանչյուր push-ի ժամանակ
  (~10/ժամ, մեկ օրվա ընթացքում 100 push run-ից 97-ը չեղարկվել են աշխատանքի կեսին) և օրական
  երեք անգամ կատարվող ~2 ժ տևողությամբ ամբողջական ստուգումների ժամանակ (05:29-ի ստուգումը
  սլոտին սպասել է 6 ժ)։ Միակ build սլոտը մի քանի անգամ գերաբեռնված էր, իսկ նույն աղբյուրից
  եկող PR-ների Build-երը ժամերով սպասում էին։ `release-green`-ը և `main-green`-ն այժմ
  թիրախավորում են `omni-release`-ը (միայն `omniroute-113-6`)՝
  `OMNIROUTE_USE_TURBOPACK=0`-ով, իսկ սկսված run-ն այլևս չի չեղարկվում ավելի նոր push-ի
  պատճառով (սպասող սլոտը դեռ համախմբում է հոսքը)։
  `tests/unit/build/runner-capacity-routing.test.ts`-ն ամրագրում է routing-ը, webpack-ի
  անցումը և այն, որ `omni-release`-ում ոչինչ Turbopack-ով չի build արվում։
- **Թեթև pool՝ `omni-light`։** `omniroute-113`-ը և `omniroute-113-2`-ը գործարկում են այն
  գիշերային առաջադրանքները, որոնց անհրաժեշտ է միայն backend-ի `next build` (~5–6 GB,
  webpack), ինչպես նաև `quality.yml`-ի `lint-guard`-ը։ `omniroute-113`-ը մինչև
  2026-10-18 ուներ `MemoryHigh=4G`․ promptfoo build-ը հիշողություն ազատելով այնտեղ
  առաջ էր շարժվում 54 րոպե շարունակ. 8 GB-ը վերացնում է սահմանափակումը։
- **Միտումնավոր ավելի քիչ listener-ներ։** Չորս OmniRoute unit անջատվել է 2026-08-29-ին.
  յուրաքանչյուր լրացուցիչ listener հիշողության վերոնշյալ բյուջեի ևս մեկ սպառող է։
  Մաքրիչի առավելագույն սահմանը 6 է (`MAX_ACTIVE_RUNNERS=6`՝ cron-ում). այն հաշվում է
  մեքենայի յուրաքանչյուր `Runner.Listener`, իսկ OmniHeuris-ը և OmniMind-ը մեր չորսին
  ավելացնում են ևս երկուսը։
- **Երբ որևէ runner զբաղված է, երբեք ձեռքով մի մաքրեք `/tmp`-ը կամ `_work`-ը։**
  Ստուգելու և ջնջելու միջև դադար ունեցող գործողության պատճառով աշխատող Build job-ը
  2026-08-27-ին կորցրել է իր `_work`-ը։ Մաքրիչը ստուգումն ու հեռացումը կատարում է մեկ
  քայլով. թողեք, որ դա անի այն։
- Աշխատանքի ընթացքում runner-ի կանգնեցումը չեղարկում է job-ը (դիտարկվել է իրական
  աշխատանքի ժամանակ). `systemctl stop` գործարկեք միայն այն դեպքում, երբ listener-ը
  չունի `Runner.Worker` child, և դա արեք մեկ հրամանով։
- Workflow-ները չպետք է artefact-ներ պահեն `/tmp`-ում (այն RAM-ում է)։ Ներբեռնեք
  `$RUNNER_TEMP`-ում (սկավառակի վրա, յուրաքանչյուր runner-ի համար առանձին). 1.3 GB
  ծավալով `next-build` artefact-ը tmpfs-ում տեղադրելու համար պահանջվել է 27–32 րոպե,
  իսկ սկավառակից վերբեռնելու համար՝ 2 րոպե։
- `.15` VPS-ը նախատեսված է միայն homologation-ի համար և երբեք CI runner-ներ չի գործարկում։
