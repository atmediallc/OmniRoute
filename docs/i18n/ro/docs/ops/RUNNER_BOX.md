# Self-Hosted Runner Box Operations (.113 pool) (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Poolul self-hosted rulează pe serverul **.113** (`tomni-proxmox-113`). Începând cu 2026-10-18, fiecare
runner OmniRoute are **un singur rol**, o singură etichetă și un buget de memorie/CPU care menține suma
valorilor `MemoryHigh` aproape de memoria RAM fizică:

| runner               | etichetă         | rol                                                                                                                                  | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`     | Compilări Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, compilarea nocturnă a11y | 40 GB / 44 GB (swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), compilare webpack                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`     | execuții nocturne (Schemathesis, promptfoo, garak, k6, pornire a11y) și `quality.yml` `lint-guard`                                   | 12 GB / 16 GB (swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`     | același pool ca mai sus                                                                                                              | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (repo-urile lor) | numai Dependabot (vârf de 155 MB fiecare, 2026-10-18)                                                                                | 4 GB / 6 GB                | 200 % fiecare |

Măsurători din 2026-10-18:

| resursă   | valoare                              | implicații pentru planificare                                                                                                                                                                                                                                                      |
| --------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 de nuclee**             | o compilare Turbopack de producție atinge un vârf de 33–37 GB sub o limită cgroup (49 GB fără limită, `tests/unit/ci-build-bundler-webpack.test.ts`); o compilare webpack ajunge la ~14–16 GB. O compilare Turbopack și una webpack pot rula simultan; două compilări Turbopack nu |
| swap      | 16 GB                                | `omniroute-113-5` rulează cu swap-ul dezactivat (`MemorySwapMax=0`), astfel încât o compilare scăpată de sub control este oprită la atingerea limitei, în loc să trimită serverul în swap                                                                                          |
| `/tmp`    | **12 GB tmpfs = RAM**                | orice este stocat acolo ocupă memorie; fișierele rămase sunt șterse după 3 h                                                                                                                                                                                                       |
| CPU       | sarcină 60 observată pe 32 de nuclee | înainte de aplicarea cotelor, o compilare Turbopack (~1166 % CPU), împreună cu o suită de teste de acoperire pe același server, împiedicau semnalele heartbeat ale celorlalte procese listener (`The self-hosted runner lost communication`, #16853)                               |
| runneri   | **6 procese listener**               | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sunt dezactivate (`systemctl enable --now` reactivează unul)                                                                                                                                                       |

Limitele se află în fișierul `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
al fiecărei unități (valorile anterioare sunt păstrate în `override.conf.bak-20261018`) și au fost aplicate din mers cu
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — fără repornire, astfel încât nicio
sarcină aflată în execuție nu a fost afectată. Etichetele sunt modificate prin API-ul pentru runneri
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), tot din mers.

## Instalarea utilitarului de curățare (o singură dată, pe mașină)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): la fiecare 30 min, jurnal în /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` este obligatoriu: utilitarul de curățare confirmă că o cale este inactivă folosind un instantaneu al fișierelor
deschise înainte de a o elimina, iar fără acest instrument nu elimină nimic și raportează acest lucru
(exit 1). Testați mai întâi orice modificare cu `--dry-run` — acesta afișează exact ce ar face
și nu modifică nimic.

Ce face la fiecare rulare: elimină fișierele reziduale proprii (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) după **3 h pe tmpfs** și după 24 h pe discul
`_work/_temp`; oprește forțat un `next-build` mai vechi de 75 min (niciun job nu rulează atât de mult — la
2026-08-27, unul a rulat 70 min după ce GitHub declarase jobul său pierdut); elimină checkout-urile mai vechi de 48 h
ale runner-elor a căror unitate este **oprită**; emite alerte când utilizarea discului este ≥ 85 %, PSI pentru memorie
`full/avg60` este ≥ 10 % și există mai multe procese de ascultare decât `MAX_ACTIVE_RUNNERS` (cu o
defalcare omniroute/altele). Exit 1 = este necesară intervenția; consultați jurnalul.

## Unități runner: KillMode

Valoarea implicită `KillMode=process` a runnerului lasă `Runner.Worker → npm → next-build`
în viață atunci când o unitate este oprită sau repornită — un build orfan continuă să consume RAM și
CPU fără niciun job atașat. Fiecare unitate OmniRoute include un drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
cu `KillMode=mixed`: SIGTERM mai întâi către listener, apoi SIGKILL către întregul cgroup la
`TimeoutStop`. Acesta intră în vigoare la următoarea repornire a unității — reporniți **câte un runner,
numai când este inactiv**, cu verificarea stării de inactivitate și repornirea în aceeași comandă.

## Reguli de operare

- **O singură compilare Turbopack simultan — impusă prin etichetă.** Fiecare job care rulează un
  `next build` complet cu Turbopack vizează `[self-hosted, omni-build]`, iar numai
  **`omniroute-113-5`** are această etichetă: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, compilarea a11y nocturnă (#16853) și
  `docker-publish.yml` **amd64** (webpack în BuildKit — Turbopack a intrat în panică acolo,
  rularea 33253576569). Etapa Docker arm64 rămâne pe `ubuntu-24.04-arm`. Etapa amd64 din
  `docker-publish` folosește același grup de concurență `heavy-build-main` ca `Build` din
  `ci.yml` (`cancel-in-progress: false`). Docker Engine trebuie să fie pe `omniroute-113-5`.
  Un al doilea slot Turbopack nu încape în 78 GB (2 × 33–37 GB plus restul sistemului); un al
  doilea slot este sigur numai pentru compilările webpack.
- **Release-Green are propriul slot (2026-10-18).** Până atunci, ambele validări Release-Green
  rulau pe `omni-build`: la fiecare push (~10/oră, 97 din 100 de rulări push anulate în timpul
  execuției într-o singură zi) și trei verificări complete de ~2 h pe zi (verificarea de la
  05:29 a așteptat 6 h după slot) — singurul slot de compilare era suprasolicitat de câteva ori,
  iar compilările PR provenite din propriul depozit așteptau ore întregi. `release-green` și
  `main-green` vizează acum `omni-release` (numai `omniroute-113-6`) cu
  `OMNIROUTE_USE_TURBOPACK=0`, iar o rulare începută nu mai este anulată de un push mai nou
  (slotul în așteptare continuă să comaseze avalanșa). Fișierul
  `tests/unit/build/runner-capacity-routing.test.ts` fixează rutarea, comutarea la webpack și
  faptul că nimic de pe `omni-release` nu este compilat cu Turbopack.
- **Pool pentru sarcini ușoare: `omni-light`.** `omniroute-113` și `omniroute-113-2` rulează
  sarcinile nocturne care necesită un `next build` numai pentru backend (~5–6 GB; webpack) și
  `lint-guard` din `quality.yml`. `omniroute-113` a avut `MemoryHigh=4G` până la 2026-10-18 —
  compilarea promptfoo și-a recuperat memoria timp de 54 de minute acolo; 8 GB elimină limitarea.
- **Mai puține procese de ascultare, în mod intenționat.** Patru unități OmniRoute au fost
  dezactivate la 2026-08-29 — fiecare proces de ascultare suplimentar este încă un consumator
  al bugetului de memorie de mai sus. Limita serviciului de curățare este 6
  (`MAX_ACTIVE_RUNNERS=6` în cron): acesta numără fiecare `Runner.Listener` de pe sistem, iar
  OmniHeuris + OmniMind adaugă două la cele patru ale noastre.
- **Nu curățați niciodată manual `/tmp` sau `_work` cât timp vreun runner este ocupat.** O
  verificare urmată de ștergere, cu o pauză între cele două operații, este motivul pentru care un
  job `Build` activ și-a pierdut directorul `_work` la 2026-08-27. Serviciul de curățare face
  verificarea și eliminarea într-un singur pas; lăsați-l să se ocupe.
- Oprirea unui runner în timpul unui job anulează jobul (observat în timp real): folosiți
  `systemctl stop` numai când procesul său de ascultare nu are niciun proces copil
  `Runner.Worker` — și faceți acest lucru printr-o singură comandă.
- Fluxurile de lucru nu trebuie să stocheze artefacte în `/tmp` (acesta se află în RAM).
  Descărcați-le în `$RUNNER_TEMP` (pe disc, separat pentru fiecare runner) — artefactul
  `next-build` de 1,3 GB a avut nevoie de 27–32 de minute pentru a ajunge pe tmpfs și de 2 minute
  pentru a fi încărcat de pe disc.
- VPS-ul `.15` este destinat exclusiv omologării — nu rulează niciodată runneri CI.
