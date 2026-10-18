# Self-Hosted Runner Box Operations (.113 pool) (ქართული)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

თვითჰოსტირებული პული მუშაობს **.113** სერვერზე (`tomni-proxmox-113`). 2026-10-18-დან თითოეულ
OmniRoute runner-ს აქვს **ერთი როლი**, ერთი label და მეხსიერების/CPU-ის ბიუჯეტი, რომელიც
`MemoryHigh`-ების ჯამს ფიზიკურ RAM-თან ახლოს ინარჩუნებს:

| runner               | label                | როლი                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`         | Turbopack-ის build-ები: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, ღამის a11y build | 40 GB / 44 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release`       | Release-Green (`release-green` + `main-green`), webpack-ის build                                                                | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`         | ღამის პროცესები (Schemathesis, promptfoo, garak, k6, a11y boot) და `quality.yml` `lint-guard`                                   | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`         | იგივე პული, რაც ზემოთ                                                                                                           | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (მათი რეპოზიტორიები) | მხოლოდ Dependabot (თითოეულის პიკი 155 MB, 2026-10-18)                                                                           | 4 GB / 6 GB                | თითოეულზე 200 % |

გაზომილია 2026-10-18:

| რესურსი    | მნიშვნელობა                        | რას ნიშნავს ეს დაგეგმვისთვის                                                                                                                                                                                                                                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 ბირთვი**              | Turbopack-ის production build-ის პიკი cgroup-ის ლიმიტის პირობებში 33–37 GB-ია (ლიმიტის გარეშე 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack-ის build-ის — დაახლოებით 14–16 GB. ერთი Turbopack-ისა და ერთი webpack-ის build ერთად ეტევა; Turbopack-ის ორი build — არა |
| swap       | 16 GB                              | `omniroute-113-5` მუშაობს გამორთული swap-ით (`MemorySwapMax=0`), ამიტომ კონტროლიდან გასული build თავის ლიმიტზე წყდება, ნაცვლად იმისა, რომ სერვერმა swap-ის გამოყენება დაიწყოს                                                                                                         |
| `/tmp`     | **12 GB tmpfs = RAM**              | ყველაფერი, რაც იქ ინახება, მეხსიერებას იკავებს; ნარჩენები 3 საათის შემდეგ იშლება                                                                                                                                                                                                      |
| CPU        | 32 ბირთვზე დაფიქსირდა 60 დატვირთვა | კვოტების დაწესებამდე, ერთი Turbopack-ის build (~1166 % CPU) და იმავე სერვერზე გაშვებული coverage suite სხვა listener-ების heartbeat-ებს რესურსის გარეშე ტოვებდა (`The self-hosted runner lost communication`, #16853)                                                                 |
| runner-ები | **6 listener**                     | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` გამორთულია (`systemctl enable --now` ერთ-ერთ მათგანს კვლავ რთავს)                                                                                                                                                     |

ლიმიტები ინახება თითოეული unit-ის `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`-ში
(წინა მნიშვნელობები შენახულია, როგორც `override.conf.bak-20261018`) და მოქმედ სისტემაზე გამოყენებულ იქნა
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` ბრძანებით — გადატვირთვის გარეშე, ამიტომ
არცერთი მიმდინარე job არ შეხებია. Label-ები იცვლება runners API-ის მეშვეობით
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), ასევე მოქმედ სისტემაზე.

## janitor-ის დაყენება (ერთჯერადად, სერვერზე)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): ყოველ 30 წუთში, ლოგის ჩაწერა /var/log/runner-janitor.log-ში
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` აუცილებელია: janitor წაშლამდე ღია ფაილების ერთჯერადი სურათის მეშვეობით ადასტურებს, რომ გზა უმოქმედოა, ხოლო ამ ხელსაწყოს გარეშე არაფერს შლის და ამის შესახებ შეტყობინებასაც იძლევა
(exit 1). ნებისმიერი ცვლილება ჯერ `--dry-run`-ით გამოცადეთ — ის ზუსტად დაბეჭდავს, რას გააკეთებდა,
და არაფერს შეეხება.

რას აკეთებს ყოველი გაშვებისას: ასუფთავებს ჩვენს ნარჩენებს (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) **tmpfs-ზე 3 სთ-ის**, ხოლო დისკის
`_work/_temp`-ში 24 სთ-ის შემდეგ; წყვეტს 75 წუთზე ძველ `next-build` პროცესს (არცერთი დავალება ამდენ ხანს არ მუშაობს —
2026-08-27-ს ერთი მათგანი 70 წუთის განმავლობაში მუშაობდა მას შემდეგ, რაც GitHub-მა მისი დავალება დაკარგულად გამოაცხადა); შლის 48 სთ-ის
checkout-ებს იმ რანერებისთვის, რომელთა unit **გაჩერებულია**; აგზავნის გაფრთხილებას, თუ დისკის გამოყენება ≥ 85 %-ია, მეხსიერების PSI
`full/avg60` ≥ 10 %-ია ან მსმენელების რაოდენობა `MAX_ACTIVE_RUNNERS`-ს აღემატება (omniroute/other
დანაწილებით). Exit 1 = საჭიროა ყურადღება; წაიკითხეთ ლოგი.

## Runner-ის ერთეულები: KillMode

Runner-ის ნაგულისხმევი `KillMode=process` ერთეულის გაჩერების ან გადატვირთვისას `Runner.Worker → npm → next-build` პროცესებს ცოცხალს ტოვებს — ობლად დარჩენილი build განაგრძობს RAM-ისა და CPU-ის მოხმარებას, მიუხედავად იმისა, რომ მასზე მიბმული job აღარ არსებობს. OmniRoute-ის ყველა ერთეულს აქვს drop-in ფაილი
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
`KillMode=mixed`-ით: ჯერ SIGTERM ეგზავნება listener-ს, ხოლო `TimeoutStop`-ის დადგომისას SIGKILL — მთელ cgroup-ს. ცვლილება ძალაში შევა ერთეულის შემდეგი გადატვირთვისას — გადატვირთეთ **ერთ ჯერზე მხოლოდ ერთი runner და მხოლოდ მაშინ, როცა ის უქმეა**, უქმეობის შემოწმება და გადატვირთვა კი ერთსა და იმავე ბრძანებაში შეასრულეთ.

## მუშაობის წესები

- **ერთდროულად მხოლოდ ერთი Turbopack build — აღსრულებულია label-ით.** ყველა job, რომელიც სრულ Turbopack
  `next build`-ს უშვებს, მიზნად `[self-hosted, omni-build]`-ს იყენებს და მხოლოდ **`omniroute-113-5`** ატარებს ამ
  label-ს: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  ღამის a11y build (#16853) და `docker-publish.yml` **amd64** (webpack BuildKit-ის შიგნით —
  Turbopack იქ ავარიულად გაითიშა, run 33253576569). arm64 Docker-ის ნაწილი კვლავ `ubuntu-24.04-arm`-ზე რჩება.
  `docker-publish`-ის amd64 `ci.yml`-ის `Build`-თან ერთად იყენებს `heavy-build-main` concurrency group-ს
  (`cancel-in-progress: false`). Docker Engine უნდა მუშაობდეს `omniroute-113-5`-ზე. Turbopack-ის მეორე
  slot 78 GB-ში ვერ ეტევა (2 × 33–37 GB და დამატებით სისტემის დანარჩენი დატვირთვა); მეორე slot უსაფრთხოა მხოლოდ
  webpack build-ებისთვის.
- **Release-Green-ს საკუთარი slot აქვს (2026-10-18).** მანამდე Release-Green-ის ორივე validation
  `omni-build`-ზე სრულდებოდა: ყოველ push-ზე (~10/საათში, ერთ დღეში 100 push run-იდან 97 მუშაობის შუაში
  გაუქმდა) და დღეში სამჯერ ~2-საათიანი სრული შემოწმებით (05:29-ის შემოწმება slot-ს 6 საათი ელოდა) —
  ერთადერთი build slot-ის მოთხოვნა მის შესაძლებლობას რამდენჯერმე აღემატებოდა და იმავე origin-იდან წამოსული PR Build-ები საათობით იცდიდნენ.
  `release-green` და `main-green` ახლა მიზნად `omni-release`-ს იყენებს (მხოლოდ `omniroute-113-6`)
  `OMNIROUTE_USE_TURBOPACK=0`-ით, ხოლო დაწყებული run უფრო ახალი push-ის გამო აღარ უქმდება
  (მოლოდინის slot კვლავ აერთიანებს მოთხოვნების ნაკადს). `tests/unit/build/runner-capacity-routing.test.ts`
  აფიქსირებს routing-ს, webpack-ზე გადართვას და იმას, რომ `omni-release`-ზე არაფერი იბილდება Turbopack-ით.
- **მსუბუქი pool: `omni-light`.** `omniroute-113` და `omniroute-113-2` ასრულებენ ღამის პროცესებს, რომლებსაც
  მხოლოდ backend-ის `next build` სჭირდება (~5–6 GB; webpack), ასევე `quality.yml`-ის `lint-guard`-ს. `omniroute-113`-ს
  2026-10-18-მდე `MemoryHigh=4G` ჰქონდა — promptfoo build იქ 54 წუთის განმავლობაში მეხსიერების გამოთავისუფლებით
  ძლივს მუშაობდა; 8 GB throttling-ს ხსნის.
- **განზრახ ნაკლები listener.** ოთხი OmniRoute unit 2026-08-29-ს გაითიშა — ყოველი დამატებითი
  listener ზემოთ აღწერილი მეხსიერების ბიუჯეტის კიდევ ერთი მომხმარებელია. janitor-ის ზედა ზღვარია 6 (`MAX_ACTIVE_RUNNERS=6` cron-ში): ის ითვლის
  box-ზე არსებულ ყველა `Runner.Listener`-ს, ხოლო OmniHeuris და OmniMind ჩვენს ოთხს კიდევ ორს ამატებს.
- **არასოდეს გაასუფთაოთ `/tmp` ან `_work` ხელით, სანამ რომელიმე runner დაკავებულია.**
  შემოწმებასა და წაშლას შორის შუალედის მქონე check-then-delete-ის გამო აქტიურმა Build job-მა
  2026-08-27-ს თავისი `_work` დაკარგა. janitor შემოწმებასა და წაშლას ერთ ნაბიჯში ასრულებს;
  ეს მას მიანდეთ.
- runner-ის job-ის მიმდინარეობისას გაჩერება job-ს აუქმებს (დაკვირვებულია რეალურ გარემოში): `systemctl stop` გამოიყენეთ მხოლოდ
  მაშინ, როცა მის listener-ს `Runner.Worker` child არ ჰყავს — და ეს ერთ command-ში გააკეთეთ.
- Workflow-ებმა არტეფაქტები `/tmp`-ში არ უნდა შეინახონ (ის RAM-შია). ჩამოტვირთეთ
  `$RUNNER_TEMP`-ში (დისკზე, ცალკე თითოეული runner-ისთვის) — 1.3 GB-იან `next-build` არტეფაქტს tmpfs-ზე ჩასაწერად 27–32
  წუთი დასჭირდა, ხოლო დისკიდან ატვირთვას — 2 წუთი.
- `.15` VPS მხოლოდ homologation-ისთვისაა — მასზე CI runner-ები არასოდეს მუშაობს.
