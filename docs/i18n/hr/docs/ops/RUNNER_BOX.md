# Self-Hosted Runner Box Operations (.113 pool) (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samostalno hostirani skup izvršava se na poslužitelju **.113** (`tomni-proxmox-113`). Od 2026-10-18 svaki
OmniRoute izvršitelj ima **jednu ulogu**, jednu oznaku i memorijski/CPU proračun koji zbroj
`MemoryHigh` održava blizu količine fizičkog RAM-a:

| izvršitelj           | oznaka                 | uloga                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`           | Turbopack izgradnje: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, noćna a11y izgradnja | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`         | Release-Green (`release-green` + `main-green`), webpack izgradnja                                                                | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`           | noćna izvođenja (Schemathesis, promptfoo, garak, k6, pokretanje a11y) i `quality.yml` `lint-guard`                               | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`           | isti skup kao iznad                                                                                                              | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (njihovi repozitoriji) | samo Dependabot (vršna potrošnja od 155 MB za svaki, 2026-10-18)                                                                 | 4 GB / 6 GB                | 200 % za svaki |

Izmjereno 2026-10-18:

| resurs      | vrijednost                              | značenje za raspoređivanje                                                                                                                                                                                                                                                                   |
| ----------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU   | **78 GB / 32 jezgre**                   | produkcijska Turbopack izgradnja doseže vršnih 33–37 GB uz ograničenje cgroupa (49 GB bez ograničenja, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack izgradnja oko 14–16 GB. Jedna Turbopack i jedna webpack izgradnja mogu se izvoditi zajedno; dvije Turbopack izgradnje ne mogu |
| swap        | 16 GB                                   | `omniroute-113-5` izvodi se s isključenim swapom (`MemorySwapMax=0`) kako bi se nekontrolirana izgradnja prekinula kada dosegne svoje ograničenje, umjesto da poslužitelj počne koristiti swap                                                                                               |
| `/tmp`      | **12 GB tmpfs = RAM**                   | sve što se tamo ostavi zauzima memoriju; ostaci se uklanjaju nakon 3 h                                                                                                                                                                                                                       |
| CPU         | zabilježeno opterećenje 60 na 32 jezgre | prije kvota, jedna Turbopack izgradnja (~1166 % CPU-a) zajedno sa skupom testova pokrivenosti na istom poslužitelju izgladnjivala je signale živosti ostalih slušača (`The self-hosted runner lost communication`, #16853)                                                                   |
| izvršitelji | **6 slušača**                           | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` su onemogućeni (`systemctl enable --now` ponovno aktivira jednog)                                                                                                                                                            |

Ograničenja se nalaze u `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` svake jedinice
(prethodne vrijednosti spremljene su kao `override.conf.bak-20261018`) i primijenjena su uživo naredbom
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez ponovnog pokretanja, pa nijedan
aktivni posao nije prekinut. Oznake se mijenjaju putem API-ja za izvršitelje
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), također uživo.

## Instalirajte čistač (jednokratno, na poslužitelju)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): svakih 30 min, zapisivanje u /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je obavezan: čistač prije uklanjanja jednokratnom snimkom otvorenih
datoteka potvrđuje da se putanja ne koristi, a bez tog alata ne uklanja ništa i
to prijavljuje (izlazni kod 1). Svaku promjenu najprije isprobajte s `--dry-run` —
ispisuje točno što bi učinio i ne mijenja ništa.

Što radi pri svakom pokretanju: čisti naše ostatke (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) nakon **3 h na tmpfs-u** i 24 h u direktoriju
`_work/_temp` na disku; prekida proces `next-build` stariji od 75 min (nijedan
zadatak ne traje toliko — 2026-08-27 jedan je trajao 70 min nakon što je GitHub
njegov zadatak proglasio izgubljenim); uklanja radne kopije starije od 48 h za
izvršitelje čija je jedinica **zaustavljena**; upozorava kada je zauzeće diska ≥
85 %, memorijski PSI `full/avg60` ≥ 10 % i kada broj procesa za osluškivanje
premašuje `MAX_ACTIVE_RUNNERS` (uz raščlambu na omniroute/ostale). Izlazni kod 1
= potrebna je intervencija; pročitajte zapisnik.

## Jedinice runnera: KillMode

Zadani `KillMode=process` runnera ostavlja proces `Runner.Worker → npm → next-build`
aktivnim kada se jedinica zaustavi ili ponovno pokrene — napušteni build nastavlja trošiti RAM i
CPU iako nije povezan ni s jednim poslom. Svaka OmniRoute jedinica ima dopunsku konfiguraciju
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
s postavkom `KillMode=mixed`: prvo se listeneru šalje SIGTERM, a zatim se cijeloj kontrolnoj grupi
šalje SIGKILL pri isteku `TimeoutStop`. Postavka stupa na snagu pri sljedećem ponovnom pokretanju jedinice — ponovno pokrećite **jedan runner
odjednom, samo kada je neaktivan**, pri čemu provjera neaktivnosti i ponovno pokretanje moraju biti u istoj naredbi.

## Pravila rada

- **Istodobno samo jedna Turbopack izgradnja — nametnuto oznakom.** Svaki posao koji pokreće puni Turbopack
  `next build` cilja `[self-hosted, omni-build]`, a samo **`omniroute-113-5`** ima tu
  oznaku: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  noćna a11y izgradnja (#16853) i **amd64** iz `docker-publish.yml` (webpack unutar BuildKita —
  Turbopack se ondje srušio, pokretanje 33253576569). Dockerov arm64 krak ostaje na `ubuntu-24.04-arm`.
  amd64 iz `docker-publish` dijeli grupu konkurentnosti `heavy-build-main` s poslom `Build` iz `ci.yml`
  (`cancel-in-progress: false`). Docker Engine mora biti na `omniroute-113-5`. Drugi Turbopack
  utor ne stane u 78 GB (2 × 33–37 GB plus ostatak sustava); drugi je utor siguran samo za
  webpack izgradnje.
- **Release-Green ima vlastiti utor (2026-10-18).** Do tada su se obje Release-Green provjere
  izvodile na `omni-build`: pri svakom pushu (~10/sat, 97 od 100 push pokretanja otkazano je usred rada
  u jednom danu) i tri potpuna prolaza od ~2 h dnevno (prolaz u 05:29 čekao je 6 h na utor) — jedan
  utor za izgradnju bio je višestruko preopterećen, a PR izgradnje iz vlastitog izvora čekale su satima.
  `release-green` i `main-green` sada ciljaju `omni-release` (samo `omniroute-113-6`) uz
  `OMNIROUTE_USE_TURBOPACK=0`, a započeto pokretanje više se ne otkazuje zbog novijeg pusha (
  utor na čekanju i dalje sažima nalet). `tests/unit/build/runner-capacity-routing.test.ts`
  fiksira usmjeravanje, prebacivanje na webpack i pravilo da se ništa na `omni-release` ne izgrađuje Turbopackom.
- **Lagana skupina: `omni-light`.** `omniroute-113` i `omniroute-113-2` pokreću noćne poslove kojima je
  potreban `next build` samo za pozadinski sustav (~5–6 GB; webpack) i `lint-guard` iz `quality.yml`. `omniroute-113`
  imao je `MemoryHigh=4G` do 2026-10-18 — izgradnja promptfoo ondje se 54 minute probijala uz povrat
  memorije; 8 GB uklanja ograničavanje.
- **Namjerno manje slušatelja.** Četiri OmniRoute jedinice onemogućene su 2026-08-29 — svaki dodatni
  slušatelj još je jedan korisnik gore navedenog memorijskog budžeta. Gornja granica čistača iznosi 6 (`MAX_ACTIVE_RUNNERS=6` u cronu): on broji
  svaki `Runner.Listener` na poslužitelju, a OmniHeuris + OmniMind dodaju dva na naša četiri.
- **Nikada nemojte ručno čistiti `/tmp` ili `_work` dok je bilo koji runner zauzet.**
  Provjera pa brisanje s razmakom između tih radnji razlog je zbog kojeg je aktivni posao Build izgubio svoj
  `_work` 2026-08-27. Čistač obavlja provjeru i uklanjanje u jednom koraku;
  prepustite to njemu.
- Zaustavljanje runnera usred posla otkazuje posao (opaženo uživo): `systemctl stop` koristite samo
  kada njegov slušatelj nema podređeni proces `Runner.Worker` — i učinite to jednom naredbom.
- Tijekovi rada ne smiju spremati artefakte u `/tmp` (nalazi se u RAM-u). Preuzimajte ih u
  `$RUNNER_TEMP` (na disku, zasebno za svaki runner) — artefaktu `next-build` od 1,3 GB trebalo je 27–32
  minute da se smjesti na tmpfs, a 2 minute da se prenese s diska.
- VPS `.15` služi isključivo za homologaciju — na njemu se nikada ne pokreću CI runneri.
