# Self-Hosted Runner Box Operations (.113 pool) (বাংলা)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

স্ব-হোস্টেড পুলটি **.113** বক্সে (`tomni-proxmox-113`) চলে। 2026-10-18 থেকে প্রতিটি
OmniRoute runner-এর **একটি ভূমিকা**, একটি label এবং এমন একটি memory/CPU budget রয়েছে, যা
`MemoryHigh`-এর মোট যোগফলকে physical RAM-এর কাছাকাছি রাখে:

| runner               | label          | ভূমিকা                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota`          |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack বিল্ড: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nightly a11y বিল্ড | 40 GB / 44 GB (swap 0)     | 1600 %              |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack বিল্ড                                                              | 20 GB / 24 GB (swap 4 GB)  | 800 %               |
| `omniroute-113-2`    | `omni-light`   | nightly কাজগুলো (Schemathesis, promptfoo, garak, k6, a11y boot) এবং `quality.yml` `lint-guard`                             | 12 GB / 16 GB (swap 4 GB)  | 600 %               |
| `omniroute-113`      | `omni-light`   | উপরের মতো একই পুল                                                                                                          | 8 GB / 12 GB               | 400 %               |
| OmniHeuris, OmniMind | (তাদের repo)   | শুধু Dependabot (প্রতিটির সর্বোচ্চ ব্যবহার 155 MB, 2026-10-18)                                                             | 4 GB / 6 GB                | প্রতিটির জন্য 200 % |

2026-10-18-এ পরিমাপ করা হয়েছে:

| resource  | মান                       | scheduling-এর ক্ষেত্রে এর অর্থ                                                                                                                                                                                                                                                |
| --------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 কোর**        | একটি Turbopack production build cgroup cap-এর অধীনে সর্বোচ্চ 33–37 GB ব্যবহার করে (cap ছাড়া 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); একটি webpack build প্রায় 14–16 GB। একটি Turbopack + একটি webpack build একসঙ্গে চালানো যায়; দুটি Turbopack build যায় না |
| swap      | 16 GB                     | `omniroute-113-5`-এ swap বন্ধ (`MemorySwapMax=0`), যাতে নিয়ন্ত্রণহীন কোনো build বক্সটিকে swap করানোর বদলে তার cap-এ পৌঁছালে বন্ধ হয়ে যায়                                                                                                                                   |
| `/tmp`    | **12 GB tmpfs = RAM**     | সেখানে রাখা যেকোনো কিছু memory ব্যবহার করে; অবশিষ্ট ফাইল 3 h পরে পরিষ্কার করা হয়                                                                                                                                                                                             |
| CPU       | 32 কোরে load 60 দেখা গেছে | quota চালুর আগে, একই বক্সে একটি Turbopack build (~1166 % CPU) এবং একটি coverage suite অন্য listener-গুলোর heartbeat-এর জন্য প্রয়োজনীয় resource কেড়ে নিয়েছিল (`স্ব-হোস্টেড runner-এর সঙ্গে যোগাযোগ বিচ্ছিন্ন হয়েছে`, #16853)                                              |
| runners   | **6টি listener**          | 4টি OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` নিষ্ক্রিয় রয়েছে (`systemctl enable --now` ব্যবহার করে যেকোনো একটিকে আবার চালু করা যায়)                                                                                                                   |

limit-গুলো প্রতিটি unit-এর `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`-এ রয়েছে
(আগের মানগুলো `override.conf.bak-20261018` হিসেবে রাখা হয়েছে) এবং সেগুলো live অবস্থায়
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` দিয়ে প্রয়োগ করা হয়েছিল — restart করা হয়নি, তাই
চলমান কোনো job প্রভাবিত হয়নি। Label-গুলো runners API-এর মাধ্যমে পরিবর্তন করা হয়
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), এটিও live অবস্থায়।

## janitor ইনস্টল করুন (একবার, বক্সটিতে)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): প্রতি 30 মিনিটে, /var/log/runner-janitor.log-এ লগ করুন
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` আবশ্যক: কোনো path অপসারণ করার আগে janitor খোলা
ফাইলগুলোর একটি snapshot নিয়ে নিশ্চিত করে যে সেটি নিষ্ক্রিয়, এবং টুলটি না থাকলে এটি কিছুই অপসারণ করে না ও তা জানিয়ে দেয়
(exit 1)। যেকোনো পরিবর্তন প্রথমে `--dry-run` দিয়ে পরীক্ষা করুন — এটি ঠিক কী করত
তা প্রিন্ট করে এবং কোনো কিছু স্পর্শ করে না।

প্রতিবার চালানোর সময় এটি যা করে: আমাদের নিজস্ব অবশিষ্ট ফাইল (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) **tmpfs-এ 3 ঘণ্টা** এবং disk-এর
`_work/_temp`-এ 24 ঘণ্টা পর পরিষ্কার করে; 75 মিনিটের বেশি পুরোনো `next-build` বন্ধ করে দেয় (কোনো জব এত দীর্ঘ চলে না —
2026-08-27-এ GitHub তার জবটি হারিয়ে গেছে ঘোষণা করার পরও একটি 70 মিনিট চলেছিল); যেসব রানারের unit **বন্ধ**, সেগুলোর 48 ঘণ্টার পুরোনো
checkout মুছে দেয়; disk ≥ 85 %, memory PSI
`full/avg60` ≥ 10 %, এবং `MAX_ACTIVE_RUNNERS`-এর চেয়ে বেশি listener থাকলে সতর্ক করে (একটি
omniroute/অন্যান্য বিভাজনসহ)। Exit 1 = মনোযোগ প্রয়োজন; লগ পড়ুন।

## Runner ইউনিট: KillMode

Runner-এর ডিফল্ট `KillMode=process`-এর কারণে কোনো ইউনিট বন্ধ বা পুনরায় চালু করা হলে `Runner.Worker → npm → next-build`
চালু থেকে যায় — কোনো job সংযুক্ত না থাকা অবস্থায় একটি অনাথ build RAM ও
CPU ব্যবহার করতে থাকে। প্রতিটি OmniRoute ইউনিটে একটি drop-in রয়েছে
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
যার `KillMode=mixed`: প্রথমে listener-কে SIGTERM এবং `TimeoutStop`-এ পুরো cgroup-কে
SIGKILL পাঠানো হয়। ইউনিটটি পরেরবার পুনরায় চালু হলে এটি কার্যকর হবে — **একবারে একটি runner,
শুধু idle থাকা অবস্থায়** পুনরায় চালু করুন, এবং idle পরীক্ষা ও restart একই command-এ রাখুন।

## পরিচালনাবিধি

- **একবারে একটি Turbopack build — label দ্বারা বলবৎ।** পূর্ণ Turbopack
  `next build` চালানো প্রতিটি job `[self-hosted, omni-build]`-কে লক্ষ্য করে, এবং কেবল **`omniroute-113-5`**-এই
  label রয়েছে: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  রাতের a11y build (#16853) এবং `docker-publish.yml` **amd64** (BuildKit-এর ভেতরে webpack —
  সেখানে Turbopack panic করেছিল, run 33253576569)। arm64 Docker অংশটি `ubuntu-24.04-arm`-এই থাকে।
  `docker-publish` amd64, `ci.yml` `Build`-এর সঙ্গে `heavy-build-main` concurrency group ভাগ করে
  (`cancel-in-progress: false`)। Docker Engine অবশ্যই `omniroute-113-5`-এ থাকতে হবে। দ্বিতীয় Turbopack
  slot 78 GB-তে ধরে না (2 × 33–37 GB এবং মেশিনের বাকি সবকিছু); দ্বিতীয় slot কেবল
  webpack build-এর জন্য নিরাপদ।
- **Release-Green-এর নিজস্ব slot রয়েছে (2026-10-18)।** এর আগে উভয় Release-Green validation
  `omni-build`-এ চলত: প্রতিটি push-এ (~10/hour, এক দিনে 100টি push run-এর মধ্যে 97টি কাজের মাঝপথে
  বাতিল হয়েছিল) এবং দিনে তিনটি ~2 h পূর্ণ sweep (05:29-এর sweep-টি slot-এর জন্য 6 h অপেক্ষা করেছিল) —
  একমাত্র build slot-এর ধারণক্ষমতার তুলনায় কয়েক গুণ বেশি কাজ বরাদ্দ ছিল এবং নিজস্ব উৎসের PR Build-গুলোকে
  ঘণ্টার পর ঘণ্টা অপেক্ষা করতে হতো। `release-green` এবং `main-green` এখন `omni-release`-কে লক্ষ্য করে
  (শুধু `omniroute-113-6`) এবং `OMNIROUTE_USE_TURBOPACK=0` ব্যবহার করে; শুরু হয়ে যাওয়া কোনো run এখন আর
  নতুন push-এর কারণে বাতিল হয় না (pending slot এখনও অতিরিক্ত run-এর ঢলকে একত্রিত করে)।
  `tests/unit/build/runner-capacity-routing.test.ts` routing, webpack switch এবং `omni-release`-এর
  কোনো কিছুই যে Turbopack দিয়ে build হয় না—এসব স্থিরভাবে যাচাই করে।
- **হালকা pool: `omni-light`।** `omniroute-113` এবং `omniroute-113-2` এমন nightly run চালায়, যেগুলোর
  জন্য শুধু backend-এর `next build` (~5–6 GB; webpack) এবং `quality.yml` `lint-guard` প্রয়োজন।
  2026-10-18 পর্যন্ত `omniroute-113`-এ `MemoryHigh=4G` ছিল — সেখানে promptfoo build মেমরি পুনরুদ্ধার করতে করতে
  54 মিনিট পার করেছিল; 8 GB এই throttling দূর করে।
- **ইচ্ছাকৃতভাবেই listener কম রাখা হয়েছে।** 2026-08-29-এ চারটি OmniRoute unit নিষ্ক্রিয় করা হয়েছিল — প্রতিটি
  অতিরিক্ত listener উপরের memory budget-এর আরেকজন tenant। janitor-এর সর্বোচ্চ সীমা 6 (cron-এ
  `MAX_ACTIVE_RUNNERS=6`): এটি মেশিনের প্রতিটি `Runner.Listener` গণনা করে, এবং আমাদের চারটির সঙ্গে
  OmniHeuris + OmniMind আরও দুটি যোগ করে।
- **কোনো runner ব্যস্ত থাকা অবস্থায় কখনো হাতে `/tmp` বা `_work` পরিষ্কার করবেন না।** যাচাই ও মুছে ফেলার
  মাঝখানে বিরতি থাকা check-then-delete পদ্ধতির কারণেই 2026-08-27-এ চলমান একটি Build job তার
  `_work` হারিয়েছিল। janitor একই ধাপে যাচাই ও অপসারণ করে;
  সেটিকেই কাজটি করতে দিন।
- মাঝপথে runner থামালে job বাতিল হয়ে যায় (সরাসরি পর্যবেক্ষণ করা হয়েছে): কেবল listener-এর কোনো
  `Runner.Worker` child না থাকলেই `systemctl stop` চালান — এবং এটি একটি command-এই করুন।
- Workflow-গুলো অবশ্যই `/tmp`-তে artefact জমা রাখবে না (এটি RAM)। `$RUNNER_TEMP`-এ download করুন
  (disk-এ, প্রতিটি runner-এর জন্য পৃথক) — 1.3 GB `next-build` artefact-টি tmpfs-এ নামতে 27–32
  মিনিট এবং disk থেকে upload হতে 2 মিনিট লেগেছিল।
- `.15` VPS কেবল homologation-এর জন্য — সেখানে কখনো CI runner চলে না।
