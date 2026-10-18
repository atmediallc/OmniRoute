# Self-Hosted Runner Box Operations (.113 pool) (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samostojno gostujoča gruča se izvaja na strežniku **.113** (`tomni-proxmox-113`). Od 2026-10-18 ima vsak
izvajalnik OmniRoute **eno vlogo**, eno oznako ter omejitev pomnilnika/CPE, zaradi katere vsota
`MemoryHigh` ostaja blizu količine fizičnega pomnilnika RAM:

| izvajalnik           | oznaka               | vloga                                                                                                                        | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`         | Gradnje Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nočna gradnja a11y | 40 GB / 44 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release`       | Release-Green (`release-green` + `main-green`), gradnja webpack                                                              | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`         | nočna opravila (Schemathesis, promptfoo, garak, k6, zagon a11y) in `quality.yml` `lint-guard`                                | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`         | ista gruča kot zgoraj                                                                                                        | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (njuna repozitorija) | samo Dependabot (največ 155 MB vsak, 2026-10-18)                                                                             | 4 GB / 6 GB                | 200 % vsak |

Izmerjeno 2026-10-18:

| vir         | vrednost                            | kaj to pomeni za razporejanje                                                                                                                                                                                                                                                          |
| ----------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPE   | **78 GB / 32 jeder**                | produkcijska gradnja Turbopack doseže največ 33–37 GB z omejitvijo cgroup (49 GB brez omejitve, `tests/unit/ci-build-bundler-webpack.test.ts`), gradnja webpack pa približno 14–16 GB. Ena gradnja Turbopack in ena gradnja webpack se lahko izvajata skupaj; dve gradnji Turbopack ne |
| swap        | 16 GB                               | `omniroute-113-5` se izvaja brez izmenjalnega prostora (`MemorySwapMax=0`), zato je nenadzorovana gradnja prekinjena pri nastavljeni omejitvi, namesto da bi strežnik začel uporabljati izmenjalni prostor                                                                             |
| `/tmp`      | **12 GB tmpfs = RAM**               | vse, kar je shranjeno tam, zaseda pomnilnik; ostanki se odstranijo po 3 urah                                                                                                                                                                                                           |
| CPE         | opažena obremenitev 60 na 32 jedrih | pred uvedbo kvot je ena gradnja Turbopack (~1166 % CPE) skupaj z zbirko testov pokritosti na istem strežniku drugim poslušalcem odvzela dovolj virov, da niso mogli pošiljati signalov o delovanju (`The self-hosted runner lost communication`, #16853)                               |
| izvajalniki | **6 poslušalcev**                   | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` so onemogočeni (`systemctl enable --now` znova omogoči enega)                                                                                                                                                          |

Omejitve so določene v datoteki `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
vsake enote (prejšnje vrednosti so shranjene kot `override.conf.bak-20261018`) in so bile uveljavljene med delovanjem z
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — brez vnovičnega zagona, zato to ni
vplivalo na nobeno izvajajoče se opravilo. Oznake se spreminjajo prek API-ja izvajalnikov
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), prav tako med delovanjem.

## Namestitev čistilnika (enkratno, na strežniku)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): vsakih 30 min, beleženje v /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je obvezen: čistilnik z enim posnetkom odprtih datotek preveri, da je pot
nedejavna, preden jo odstrani; brez tega orodja ne odstrani ničesar in to tudi
sporoči (izhodna koda 1). Vsako spremembo najprej preskusite z `--dry-run` — izpiše
natanko, kaj bi naredil, ne da bi kar koli spremenil.

Kaj naredi ob vsakem zagonu: počisti naše lastne ostanke (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) po **3 h na tmpfs** in po 24 h na disku v
`_work/_temp`; prekine proces `next-build`, starejši od 75 min (nobeno opravilo ne
teče tako dolgo — 2026-08-27 je eno teklo 70 min po tem, ko je GitHub njegovo
opravilo že razglasil za izgubljeno); odstrani 48 h stare delovne kopije
izvajalnikov, katerih enota je **ustavljena**; opozori pri zasedenosti diska ≥ 85 %,
pomnilniškem PSI `full/avg60` ≥ 10 % in številu poslušalcev, večjem od
`MAX_ACTIVE_RUNNERS` (z razčlenitvijo na omniroute/druge). Izhodna koda 1 = potrebna
je pozornost; preberite dnevnik.

## Enote izvajalnikov: KillMode

Privzeti `KillMode=process` izvajalnika pusti proces `Runner.Worker → npm → next-build`
živ, ko je enota ustavljena ali znova zagnana — osirotela gradnja še naprej porablja RAM in
CPE, čeprav ni več povezana z nobenim opravilom. Vsaka enota OmniRoute ima dodatno konfiguracijo
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
z `KillMode=mixed`: najprej SIGTERM poslušalniku, nato SIGKILL celotni kontrolni skupini ob
`TimeoutStop`. Začne veljati ob naslednjem ponovnem zagonu enote — znova zaženite **po en izvajalnik
naenkrat in samo, ko je nedejaven**, pri čemer morata biti preverjanje nedejavnosti in ponovni zagon v istem ukazu.

## Pravila delovanja

- **Hkrati se izvaja le ena gradnja Turbopack — omejitev je uveljavljena z oznako.** Vsako opravilo, ki izvaja celotno gradnjo Turbopack
  `next build`, cilja na `[self-hosted, omni-build]`, to oznako pa ima samo
  **`omniroute-113-5`**: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  nočna gradnja a11y (#16853) in **amd64** v `docker-publish.yml` (webpack znotraj BuildKit —
  Turbopack se je tam sesul, izvajanje 33253576569). Veja Docker za arm64 ostane na `ubuntu-24.04-arm`.
  amd64 v `docker-publish` si deli skupino sočasnosti `heavy-build-main` z opravilom `Build` v `ci.yml`
  (`cancel-in-progress: false`). Docker Engine mora biti na `omniroute-113-5`. Drugo izvajalno mesto za Turbopack
  se ne prilega v 78 GB (2 × 33–37 GB in preostali procesi na strežniku); drugo mesto je varno samo za
  gradnje webpack.
- **Release-Green ima lastno izvajalno mesto (2026-10-18).** Do takrat sta se obe preverjanji Release-Green izvajali
  na `omni-build`: ob vsakem potisku (~10/uro, pri čemer je bilo v enem dnevu sredi izvajanja preklicanih 97 od 100 izvajanj ob potisku)
  in pri treh celovitih pregledih na dan, ki so trajali približno 2 h (pregled ob 05:29 je na izvajalno mesto čakal 6 h) — edino izvajalno
  mesto za gradnjo je bilo večkrat prekomerno zasedeno, gradnje PR-jev iz lastnega izvora pa so čakale več ur.
  `release-green` in `main-green` zdaj ciljata na `omni-release` (samo `omniroute-113-6`) z
  `OMNIROUTE_USE_TURBOPACK=0`, že začeto izvajanje pa se ob novejšem potisku ne prekliče več (
  čakajoče izvajalno mesto še vedno združi naval). `tests/unit/build/runner-capacity-routing.test.ts`
  določa usmerjanje, preklop na webpack in zagotavlja, da se na `omni-release` nič ne gradi s Turbopackom.
- **Lahka gruča: `omni-light`.** `omniroute-113` in `omniroute-113-2` izvajata nočna opravila, ki potrebujejo
  `next build` samo za zaledje (~5–6 GB; webpack), ter `lint-guard` iz `quality.yml`. `omniroute-113`
  je imel do 2026-10-18 nastavitev `MemoryHigh=4G` — gradnja promptfoo se je tam zaradi sproščanja pomnilnika prebijala 54 minut;
  8 GB odpravi omejevanje.
- **Namenoma manj poslušalcev.** Štiri enote OmniRoute so bile onemogočene 2026-08-29 — vsak dodatni
  poslušalec je še en porabnik zgoraj navedenega pomnilniškega proračuna. Zgornja meja čistilnika je 6 (`MAX_ACTIVE_RUNNERS=6` v cron): šteje
  vsak proces `Runner.Listener` na strežniku, OmniHeuris in OmniMind pa našim štirim dodata še dva.
- **Nikoli ročno ne čistite `/tmp` ali `_work`, medtem ko je kateri koli izvajalnik zaseden.**
  Preverjanje in nato brisanje s časovnim presledkom med korakoma je razlog, da je aktivno opravilo Build
  2026-08-27 izgubilo svoj `_work`. Čistilnik preverjanje in odstranitev opravi v enem koraku;
  prepustite mu to.
- Zaustavitev izvajalnika sredi opravila prekliče opravilo (opaženo v živo): `systemctl stop` uporabite samo,
  ko njegov poslušalec nima podrejenega procesa `Runner.Worker` — in to izvedite z enim ukazom.
- Delovni tokovi ne smejo shranjevati artefaktov v `/tmp` (ta je v pomnilniku RAM). Prenesite jih v
  `$RUNNER_TEMP` (na disku, ločeno za vsak izvajalnik) — prenos 1,3 GB velikega artefakta `next-build`
  na tmpfs je trajal 27–32 minut, nalaganje z diska pa 2 minuti.
- VPS `.15` je namenjen samo homologaciji — na njem se nikoli ne izvajajo izvajalniki CI.
