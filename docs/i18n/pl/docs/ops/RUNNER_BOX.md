# Self-Hosted Runner Box Operations (.113 pool) (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Pula self-hosted działa na maszynie **.113** (`tomni-proxmox-113`). Od 2026-10-18 każdy
runner OmniRoute ma **jedną rolę**, jedną etykietę oraz budżet pamięci/CPU, dzięki któremu suma
`MemoryHigh` pozostaje zbliżona do ilości fizycznej pamięci RAM:

| runner               | etykieta          | rola                                                                                                                      | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`      | buildy Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nocny build a11y | 40 GB / 44 GB (swap 0)     | 1600 %      |
| `omniroute-113-6`    | `omni-release`    | Release-Green (`release-green` + `main-green`), build webpack                                                             | 20 GB / 24 GB (swap 4 GB)  | 800 %       |
| `omniroute-113-2`    | `omni-light`      | zadania nocne (Schemathesis, promptfoo, garak, k6, uruchomienie a11y) oraz `quality.yml` `lint-guard`                     | 12 GB / 16 GB (swap 4 GB)  | 600 %       |
| `omniroute-113`      | `omni-light`      | ta sama pula co powyżej                                                                                                   | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (ich repozytoria) | tylko Dependabot (szczytowo 155 MB każdy, 2026-10-18)                                                                     | 4 GB / 6 GB                | 200 % każdy |

Pomiary z 2026-10-18:

| zasób     | wartość                                       | znaczenie dla planowania                                                                                                                                                                                                                                                                    |
| --------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 rdzenie**                        | produkcyjny build Turbopack osiąga szczytowe zużycie 33–37 GB przy limicie cgroup (49 GB bez limitu, `tests/unit/ci-build-bundler-webpack.test.ts`); build webpack zużywa około 14–16 GB. Jeden build Turbopack i jeden build webpack mieszczą się jednocześnie; dwa buildy Turbopack — nie |
| swap      | 16 GB                                         | `omniroute-113-5` działa z wyłączonym swapem (`MemorySwapMax=0`), dzięki czemu niekontrolowany build zostaje zatrzymany po osiągnięciu limitu, zamiast przenosić maszynę do swapu                                                                                                           |
| `/tmp`    | **12 GB tmpfs = RAM**                         | wszystko, co zostanie tam umieszczone, zajmuje pamięć; pozostałości są usuwane po 3 godz.                                                                                                                                                                                                   |
| CPU       | zaobserwowane obciążenie 60 przy 32 rdzeniach | przed wprowadzeniem limitów jeden build Turbopack (~1166 % CPU) wraz z zestawem testów pokrycia uruchomionym na tej samej maszynie pozbawiał pozostałe listenery zasobów potrzebnych do wysyłania heartbeatów (`Runner self-hosted utracił łączność`, #16853)                               |
| runnery   | **6 listenerów**                              | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` są wyłączone (`systemctl enable --now` ponownie uruchamia jeden z nich)                                                                                                                                                     |

Limity znajdują się w pliku `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
każdej jednostki (poprzednie wartości zachowano jako `override.conf.bak-20261018`) i zostały zastosowane na żywo za pomocą
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez restartu, więc żadne
uruchomione zadanie nie zostało przerwane. Etykiety są zmieniane na żywo za pośrednictwem API runnerów
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Instalacja janitora (jednorazowo, na maszynie)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): co 30 min, logowanie do /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` jest wymagany: przed usunięciem ścieżki janitor potwierdza, że jest ona
nieużywana, na podstawie pojedynczej migawki otwartych plików; bez tego narzędzia
niczego nie usuwa i informuje o tym (kod wyjścia 1). Każdą zmianę należy najpierw
wypróbować z opcją `--dry-run` — skrypt dokładnie wypisze, co by zrobił, i niczego
nie zmieni.

Co robi przy każdym uruchomieniu: usuwa nasze pozostałości (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`) po **3 godz. w tmpfs** oraz po
24 godz. w katalogu dyskowym `_work/_temp`; kończy proces `next-build` starszy
niż 75 min (żadne zadanie nie trwa tak długo — 2026-08-27 jeden proces działał
przez 70 min po tym, jak GitHub uznał jego zadanie za utracone); usuwa checkouty
starsze niż 48 godz. dla runnerów, których jednostka jest **zatrzymana**; alarmuje
przy wykorzystaniu dysku ≥ 85%, wartości PSI pamięci `full/avg60` ≥ 10% oraz
liczbie listenerów większej niż `MAX_ACTIVE_RUNNERS` (z podziałem na
omniroute/inne). Kod wyjścia 1 = wymagana interwencja; sprawdź log.

## Jednostki runnera: KillMode

Domyślne ustawienie runnera `KillMode=process` pozostawia procesy `Runner.Worker → npm → next-build`
przy życiu po zatrzymaniu lub ponownym uruchomieniu jednostki — osierocony build nadal zużywa RAM i
CPU, mimo że nie jest już powiązany z żadnym zadaniem. Każda jednostka OmniRoute ma plik drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
z `KillMode=mixed`: najpierw SIGTERM do listenera, a przy
`TimeoutStop` SIGKILL do całej grupy cgroup. Ustawienie zaczyna obowiązywać przy następnym ponownym uruchomieniu jednostki — uruchamiaj ponownie **tylko jednego runnera naraz
i wyłącznie wtedy, gdy jest bezczynny**, wykonując sprawdzenie bezczynności i ponowne uruchomienie w tym samym poleceniu.

## Zasady operacyjne

- **Jedna kompilacja Turbopack naraz — wymuszane przez etykietę.** Każde zadanie uruchamiające pełne
  `next build` z użyciem Turbopack jest kierowane do `[self-hosted, omni-build]`, a tylko
  **`omniroute-113-5`** ma tę etykietę: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, nocna kompilacja a11y (#16853) oraz
  **amd64** w `docker-publish.yml` (webpack wewnątrz BuildKit — Turbopack uległ tam awarii,
  uruchomienie 33253576569). Etap Docker dla arm64 pozostaje na `ubuntu-24.04-arm`.
  `docker-publish` dla amd64 współdzieli grupę współbieżności `heavy-build-main` z zadaniem
  `Build` w `ci.yml` (`cancel-in-progress: false`). Docker Engine musi działać na
  `omniroute-113-5`. Drugi slot Turbopack nie mieści się w 78 GB (2 × 33–37 GB plus reszta
  obciążeń maszyny); drugi slot jest bezpieczny wyłącznie dla kompilacji webpack.
- **Release-Green ma własny slot (2026-10-18).** Do tego czasu obie walidacje Release-Green
  działały na `omni-build`: przy każdym pushu (~10/godz., 97 ze 100 uruchomień po pushu anulowano
  w trakcie pracy w ciągu jednego dnia) oraz podczas trzech pełnych, około 2-godzinnych przebiegów
  dziennie (przebieg o 05:29 czekał 6 godz. na slot) — pojedynczy slot kompilacji był
  wielokrotnie przeciążony, a kompilacje PR-ów z własnego repozytorium czekały godzinami.
  `release-green` i `main-green` są teraz kierowane do `omni-release` (wyłącznie
  `omniroute-113-6`) z `OMNIROUTE_USE_TURBOPACK=0`, a rozpoczęte uruchomienie nie jest już
  anulowane przez nowszy push (oczekujący slot nadal redukuje lawinę uruchomień).
  `tests/unit/build/runner-capacity-routing.test.ts` utrwala routing, przełączenie na webpack
  oraz gwarancję, że nic na `omni-release` nie jest kompilowane za pomocą Turbopack.
- **Lekka pula: `omni-light`.** `omniroute-113` i `omniroute-113-2` uruchamiają nocne zadania,
  które wymagają `next build` wyłącznie dla backendu (~5–6 GB; webpack), oraz `lint-guard`
  z `quality.yml`. `omniroute-113` miał `MemoryHigh=4G` do 2026-10-18 — kompilacja promptfoo
  odzyskiwała pamięć przez 54 minuty; 8 GB eliminuje ograniczanie wydajności.
- **Mniej procesów nasłuchujących — celowo.** Cztery jednostki OmniRoute wyłączono
  2026-08-29 — każdy dodatkowy proces nasłuchujący jest kolejnym dzierżawcą opisanego wyżej
  budżetu pamięci. Limit janitora wynosi 6 (`MAX_ACTIVE_RUNNERS=6` w cron): zlicza on każdy
  proces `Runner.Listener` na maszynie, a OmniHeuris i OmniMind dodają dwa do naszych czterech.
- **Nigdy nie czyść ręcznie `/tmp` ani `_work`, gdy jakikolwiek runner jest zajęty.**
  Sprawdzenie, a następnie usunięcie z przerwą między tymi operacjami spowodowało, że aktywne
  zadanie Build utraciło katalog `_work` 2026-08-27. Janitor wykonuje sprawdzenie i usunięcie
  w jednym kroku; pozwól mu to zrobić.
- Zatrzymanie runnera w trakcie zadania anuluje zadanie (zaobserwowano na działającym systemie):
  używaj `systemctl stop` tylko wtedy, gdy jego proces nasłuchujący nie ma procesu potomnego
  `Runner.Worker` — i wykonuj to jednym poleceniem.
- Workflowy nie mogą przechowywać artefaktów w `/tmp` (znajduje się on w pamięci RAM).
  Pobieraj je do `$RUNNER_TEMP` (na dysku, osobno dla każdego runnera) — pobranie artefaktu
  `next-build` o rozmiarze 1,3 GB na tmpfs trwało 27–32 minuty, a przesłanie go z dysku
  trwało 2 minuty.
- VPS `.15` służy wyłącznie do homologacji — nigdy nie uruchamia runnerów CI.
