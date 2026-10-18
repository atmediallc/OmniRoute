# Self-Hosted Runner Box Operations (.113 pool) (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Den selvhostede ressursgruppen kjører på **.113**-boksen (`tomni-proxmox-113`). Siden 2026-10-18 har hver
OmniRoute-runner **én rolle**, én etikett og et minne-/CPU-budsjett som holder summen av
`MemoryHigh` nær den fysiske RAM-mengden:

| runner               | etikett        | rolle                                                                                                                           | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-bygg: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, det nattlige a11y-bygget | 40 GB / 44 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-bygg                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`   | nattlige kjøringer (Schemathesis, promptfoo, garak, k6, a11y-oppstart) og `quality.yml` `lint-guard`                            | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`   | samme ressursgruppe som ovenfor                                                                                                 | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (deres repoer) | kun Dependabot (topp på 155 MB hver, 2026-10-18)                                                                                | 4 GB / 6 GB                | 200 % hver |

Målt 2026-10-18:

| ressurs   | verdi                                    | hva det betyr for planlegging                                                                                                                                                                                                                                      |
| --------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 kjerner**                   | et Turbopack-produksjonsbygg topper på 33–37 GB under en cgroup-grense (49 GB uten grense, `tests/unit/ci-build-bundler-webpack.test.ts`); et webpack-bygg på ~14–16 GB. Ett Turbopack-bygg + ett webpack-bygg får plass samtidig; to Turbopack-bygg gjør ikke det |
| swap      | 16 GB                                    | `omniroute-113-5` kjører med swap deaktivert (`MemorySwapMax=0`), slik at et løpsk bygg stoppes ved grensen i stedet for å bruke swap på boksen                                                                                                                    |
| `/tmp`    | **12 GB tmpfs = RAM**                    | alt som lagres der, bruker minne; rester ryddes bort etter 3 t                                                                                                                                                                                                     |
| CPU       | belastning på 60 observert på 32 kjerner | før kvotene førte ett Turbopack-bygg (~1166 % CPU) pluss en dekningssuite på samme boks til at de andre lytternes hjerteslag ikke fikk nok ressurser (`Den selvhostede runneren mistet kommunikasjonen`, #16853)                                                   |
| runnere   | **6 lyttere**                            | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` er deaktivert (`systemctl enable --now` aktiverer én igjen)                                                                                                                                        |

Grensene ligger i hver enhets `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(tidligere verdier er bevart som `override.conf.bak-20261018`) og ble tatt i bruk direkte med
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — uten omstart, så ingen
kjørende jobber ble berørt. Etiketter endres via runner-API-et
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), også direkte.

## Installer oppryddingsjobben (én gang, på maskinen)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): hvert 30. minutt, logg til /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` er påkrevd: Oppryddingsjobben bekrefter at en bane er inaktiv ved hjelp av ett øyeblikksbilde av åpne
filer før den fjernes, og uten verktøyet fjerner den ingenting og melder fra om det
(exit 1). Prøv alle endringer med `--dry-run` først — den skriver ut nøyaktig hva den ville
gjort, uten å endre noe.

Dette gjør den ved hver kjøring: rydder våre egne rester (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) etter **3 t på tmpfs** og 24 t på disk under
`_work/_temp`; avslutter en `next-build` som er eldre enn 75 min (ingen jobb kjører så lenge — den
2026-08-27 kjørte én i 70 min etter at GitHub hadde erklært jobben som tapt); fjerner utsjekkinger som er eldre enn 48 t
for runnere der enheten er **stoppet**; varsler ved diskbruk ≥ 85 %, minne-PSI
`full/avg60` ≥ 10 % og flere lyttere enn `MAX_ACTIVE_RUNNERS` (med en
fordeling mellom omniroute/andre). Exit 1 = krever oppmerksomhet; les loggen.

## Runner-enheter: KillMode

Runnerens standardinnstilling `KillMode=process` lar `Runner.Worker → npm → next-build`
fortsette å kjøre når en enhet stoppes eller startes på nytt — en foreldreløs byggprosess fortsetter å bruke RAM og
CPU uten at noen jobb er tilknyttet. Hver OmniRoute-enhet har en drop-in-fil
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
med `KillMode=mixed`: SIGTERM til lytteren først, deretter SIGKILL til hele cgroup-en ved
`TimeoutStop`. Den trer i kraft ved enhetens neste omstart — start **én runner om
gangen på nytt, og bare når den er inaktiv**, med inaktivitetskontrollen og omstarten i samme kommando.

## Driftsregler

- **Én Turbopack-bygging om gangen — håndhevet via etikett.** Hver jobb som kjører en fullstendig Turbopack-
  `next build`, bruker `[self-hosted, omni-build]`, og bare **`omniroute-113-5`** har denne
  etiketten: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  den nattlige a11y-byggingen (#16853) og **amd64** i `docker-publish.yml` (webpack i BuildKit —
  Turbopack krasjet der, kjøring 33253576569). Docker-delen for arm64 forblir på `ubuntu-24.04-arm`.
  amd64 i `docker-publish` deler samtidighetsgruppen `heavy-build-main` med `Build` i `ci.yml`
  (`cancel-in-progress: false`). Docker Engine må være på `omniroute-113-5`. En ekstra Turbopack-
  plass får ikke plass innenfor 78 GB (2 × 33–37 GB pluss resten av belastningen på maskinen); en ekstra plass er bare trygg for
  webpack-bygginger.
- **Release-Green har sin egen plass (2026-10-18).** Frem til da kjørte begge Release-Green-valideringene
  på `omni-build`: ved hver push (~10/time, 97 av 100 push-kjøringer ble avbrutt underveis på én dag)
  og tre fullstendige gjennomganger på ~2 timer per dag (gjennomgangen kl. 05:29 ventet 6 timer på plassen) — den ene byggeplassen
  var overbooket flere ganger, og PR-bygginger fra eget opphav ventet i timevis.
  `release-green` og `main-green` bruker nå `omni-release` (kun `omniroute-113-6`) med
  `OMNIROUTE_USE_TURBOPACK=0`, og en startet kjøring avbrytes ikke lenger av en nyere push (den
  ventende plassen slår fortsatt sammen stormen). `tests/unit/build/runner-capacity-routing.test.ts`
  låser rutingen, webpack-bryteren og at ingenting på `omni-release` bygges med Turbopack.
- **Lettvektsgruppe: `omni-light`.** `omniroute-113` og `omniroute-113-2` kjører de nattlige jobbene som trenger
  en `next build` kun for backend (~5–6 GB; webpack) og `lint-guard` i `quality.yml`. `omniroute-113`
  hadde `MemoryHigh=4G` frem til 2026-10-18 — promptfoo-byggingen brukte 54 minutter på å gjenvinne
  minne der; 8 GB fjerner strupingen.
- **Færre lyttere med hensikt.** Fire OmniRoute-enheter ble deaktivert 2026-08-29 — hver ekstra
  lytter er enda en forbruker av minnebudsjettet ovenfor. Ryddejobbens øvre grense er 6 (`MAX_ACTIVE_RUNNERS=6` i cron): den teller
  hver `Runner.Listener` på maskinen, og OmniHeuris + OmniMind legger til to i tillegg til våre fire.
- **Rydd aldri `/tmp` eller `_work` manuelt mens en runner er opptatt.** En
  kontroller-og-slett-operasjon med et opphold mellom de to trinnene var årsaken til at en aktiv `Build`-jobb mistet
  `_work` 2026-08-27. Ryddejobben utfører kontrollen og slettingen i ett trinn;
  la den gjøre det.
- Å stoppe en runner midt i en jobb avbryter jobben (observert direkte): bruk `systemctl stop` bare
  når lytteren ikke har noen underordnet `Runner.Worker`-prosess — og gjør det i én kommando.
- Arbeidsflyter må ikke lagre artefakter i `/tmp` (det er RAM). Last ned til
  `$RUNNER_TEMP` (på disk, per runner) — `next-build`-artefakten på 1,3 GB brukte 27–32
  minutter på å bli lastet ned til tmpfs og 2 minutter på å bli lastet opp fra disk.
- VPS-en `.15` er kun for homologering — den kjører aldri CI-runnere.
