# Self-Hosted Runner Box Operations (.113 pool) (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samostalno hostovani skup izvršava se na **.113** serveru (`tomni-proxmox-113`). Od 2026-10-18 svaki
OmniRoute runner ima **jednu ulogu**, jednu oznaku i ograničenje memorije/CPU-a koje održava zbir
vrijednosti `MemoryHigh` blizu količine fizičke RAM memorije:

| runner               | oznaka                 | uloga                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`           | Turbopack izgradnje: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, noćna a11y izgradnja | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`         | Release-Green (`release-green` + `main-green`), webpack izgradnja                                                                | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`           | noćni poslovi (Schemathesis, promptfoo, garak, k6, pokretanje a11y) i `quality.yml` `lint-guard`                                 | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`           | isti skup kao iznad                                                                                                              | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (njihovi repozitoriji) | samo Dependabot (vršna vrijednost 155 MB za svaki, 2026-10-18)                                                                   | 4 GB / 6 GB                | 200 % za svaki |

Izmjereno 2026-10-18:

| resurs    | vrijednost                              | šta to znači za raspoređivanje                                                                                                                                                                                                                                                                   |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 jezgre**                   | produkcijska Turbopack izgradnja dostiže vršnih 33–37 GB pod cgroup ograničenjem (49 GB bez ograničenja, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack izgradnja oko 14–16 GB. Jedna Turbopack i jedna webpack izgradnja mogu se izvršavati zajedno; dvije Turbopack izgradnje ne mogu |
| swap      | 16 GB                                   | `omniroute-113-5` radi s isključenim swapom (`MemorySwapMax=0`), tako da se nekontrolisana izgradnja prekida kada dostigne ograničenje umjesto da server počne koristiti swap                                                                                                                    |
| `/tmp`    | **12 GB tmpfs = RAM**                   | sve što se tamo smjesti zauzima memoriju; preostale datoteke uklanjaju se nakon 3 h                                                                                                                                                                                                              |
| CPU       | zabilježeno opterećenje 60 na 32 jezgre | prije uvođenja ograničenja, jedna Turbopack izgradnja (~1166 % CPU-a) zajedno s paketom testova pokrivenosti na istom serveru onemogućila je signale živosti drugih listenera (`Samostalno hostovani runner izgubio je komunikaciju`, #16853)                                                    |
| runneri   | **6 listenera**                         | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` su onemogućeni (`systemctl enable --now` ponovo aktivira jedan)                                                                                                                                                                  |

Ograničenja se nalaze u datoteci `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
svake jedinice (prethodne vrijednosti sačuvane su kao `override.conf.bak-20261018`) i primijenjena su tokom rada pomoću
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez ponovnog pokretanja, tako da nijedan
aktivni posao nije bio prekinut. Oznake se mijenjaju putem API-ja za runnere
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), također tokom rada.

## Instalacija janitora (jednokratno, na mašini)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): svakih 30 min, loguj u /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je neophodan: janitor dokazuje da je putanja neaktivna pomoću jednog snimka otvorenih datoteka prije nego što je ukloni, a bez ovog alata ne uklanja ništa i to prijavljuje (exit 1). Isprobajte bilo kakvu izmjenu prvo sa `--dry-run` — ispisuje tačno šta bi uradio i ne dira ništa.

Šta radi pri svakom pokretanju: čisti naše vlastite ostatke (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) nakon **3 h na tmpfs** i 24 h na disku `_work/_temp`; ubija `next-build` stariji od 75 min (nijedan posao ne traje toliko dugo — 27.08.2026. jedan je radio 70 min nakon što je GitHub proglasio posao izgubljenim); uklanja 48 sati stare checkoutove runnera čija je jedinica **zaustavljena**; upozorava na disk ≥ 85 %, memorijski PSI `full/avg60` ≥ 10 %, i više listenera nego `MAX_ACTIVE_RUNNERS` (sa pregledom omniroute/ostalo). Exit 1 = potrebna pažnja; pročitajte log.

## Runner jedinice: KillMode

Podrazumevani `KillMode=process` za runner ostavlja `Runner.Worker → npm → next-build`
aktivnim kada se jedinica zaustavi ili ponovo pokrene — proces izgradnje (build) ostaje siroče i
nastavlja da troši RAM i CPU bez dodeljenog posla. Svaka OmniRoute jedinica sadrži drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
sa `KillMode=mixed`: prvo SIGTERM za listener, a zatim SIGKILL za celu cgroup grupu pri
`TimeoutStop`. Ovo stupa na snagu pri sledećem ponovnom pokretanju jedinice — ponovo pokrenite
**jedan po jedan runner, samo kada su neaktivni (idle)**, uz proveru neaktivnosti i ponovno
pokretanje u istoj komandi.

## Pravila rada

- **Istovremeno se izvršava samo jedna Turbopack verzija — ograničenje se provodi oznakom.** Svaki posao koji izvršava puni Turbopack
  `next build` cilja `[self-hosted, omni-build]`, a samo **`omniroute-113-5`** nosi tu
  oznaku: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  noćna a11y verzija (#16853) i `docker-publish.yml` **amd64** (webpack unutar BuildKita —
  Turbopack se tamo srušio, izvršavanje 33253576569). Dockerov arm64 krak ostaje na `ubuntu-24.04-arm`.
  `docker-publish` amd64 dijeli grupu konkurentnosti `heavy-build-main` s poslom `Build` iz `ci.yml`
  (`cancel-in-progress: false`). Docker Engine mora biti na `omniroute-113-5`. Drugi Turbopack
  termin ne stane u 78 GB (2 × 33–37 GB plus ostatak sistema); drugi termin siguran je samo za
  webpack verzije.
- **Release-Green ima vlastiti termin (2026-10-18).** Do tada su se obje Release-Green provjere izvršavale
  na `omni-build`: pri svakom slanju (~10/sat, 97 od 100 izvršavanja pokrenutih slanjem otkazano je usred rada u jednom danu)
  i tri potpuna prolaza od ~2 h dnevno (prolaz u 05:29 čekao je 6 h na termin) — jedini termin za izgradnju
  bio je višestruko preopterećen, a PR verzije iz vlastitog izvora čekale su satima.
  `release-green` i `main-green` sada ciljaju `omni-release` (samo `omniroute-113-6`) uz
  `OMNIROUTE_USE_TURBOPACK=0`, a započeto izvršavanje više se ne otkazuje zbog novijeg slanja (termin
  na čekanju i dalje sažima navalu). `tests/unit/build/runner-capacity-routing.test.ts`
  fiksira usmjeravanje, prebacivanje na webpack i pravilo da se ništa na `omni-release` ne izgrađuje Turbopackom.
- **Lagani skup: `omni-light`.** `omniroute-113` i `omniroute-113-2` izvršavaju noćne zadatke kojima je
  potreban `next build` samo za backend (~5–6 GB; webpack) i `lint-guard` iz `quality.yml`. `omniroute-113`
  imao je `MemoryHigh=4G` do 2026-10-18 — promptfoo verzija se tamo 54 minute probijala oslobađanjem memorije;
  8 GB uklanja ograničavanje.
- **Namjerno manje slušača.** Četiri OmniRoute jedinice onemogućene su 2026-08-29 — svaki dodatni
  slušač još je jedan korisnik navedenog memorijskog budžeta. Gornja granica čistača je 6 (`MAX_ACTIVE_RUNNERS=6` u cronu): on broji
  svaki `Runner.Listener` na sistemu, a OmniHeuris + OmniMind dodaju dva na naša četiri.
- **Nikada ručno ne čistite `/tmp` ili `_work` dok je bilo koji izvršitelj zauzet.**
  Provjera pa brisanje s razmakom između ta dva koraka dovela je do toga da aktivni posao Build izgubi svoj
  `_work` 2026-08-27. Čistač obavlja provjeru i uklanjanje u jednom koraku;
  prepustite to njemu.
- Zaustavljanje izvršitelja usred posla otkazuje posao (uočeno uživo): koristite `systemctl stop` samo
  kada njegov slušač nema podređeni proces `Runner.Worker` — i učinite to jednom naredbom.
- Tokovi rada ne smiju ostavljati artefakte u `/tmp` (nalazi se u RAM-u). Preuzimajte ih u
  `$RUNNER_TEMP` (na disku, zasebno za svakog izvršitelja) — artefaktu `next-build` veličine 1.3 GB trebalo je 27–32
  minute da stigne na tmpfs, a 2 minute da se otpremi s diska.
- VPS `.15` služi samo za homologaciju — na njemu se nikada ne izvršavaju CI izvršitelji.
