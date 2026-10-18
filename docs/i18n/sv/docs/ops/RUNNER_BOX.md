# Self-Hosted Runner Box Operations (.113 pool) (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Den självhostade poolen körs på **.113**-maskinen (`tomni-proxmox-113`). Sedan 2026-10-18 har varje
OmniRoute-runner **en roll**, en etikett och en minnes-/CPU-budget som håller summan av
`MemoryHigh` nära det fysiska RAM-minnet:

| runner               | etikett        | roll                                                                                                                              | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-byggen: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, det nattliga a11y-bygget | 40 GB / 44 GB (swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-bygge                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`   | nattliga körningar (Schemathesis, promptfoo, garak, k6, a11y-uppstart) och `quality.yml` `lint-guard`                             | 12 GB / 16 GB (swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`   | samma pool som ovan                                                                                                               | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (deras repos)  | endast Dependabot (topp på 155 MB vardera, 2026-10-18)                                                                            | 4 GB / 6 GB                | 200 % vardera |

Uppmätt 2026-10-18:

| resurs    | värde                                 | vad det innebär för schemaläggningen                                                                                                                                                                                                                                       |
| --------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 kärnor**                 | ett Turbopack-produktionsbygge når en topp på 33–37 GB under en cgroup-gräns (49 GB utan gräns, `tests/unit/ci-build-bundler-webpack.test.ts`); ett webpack-bygge cirka 14–16 GB. Ett Turbopack- och ett webpack-bygge ryms tillsammans; två Turbopack-byggen gör det inte |
| swap      | 16 GB                                 | `omniroute-113-5` körs med swap avstängt (`MemorySwapMax=0`), så ett skenande bygge stoppas vid sin gräns i stället för att få maskinen att börja använda swap                                                                                                             |
| `/tmp`    | **12 GB tmpfs = RAM**                 | allt som placeras där förbrukar minne; kvarlämnade filer rensas efter 3 timmar                                                                                                                                                                                             |
| CPU       | belastning 60 på 32 kärnor observerad | före kvoterna gjorde ett Turbopack-bygge (~1166 % CPU) tillsammans med en täckningstestsvit på samma maskin att de andra lyssnarnas livstecken inte hann behandlas (`The self-hosted runner lost communication`, #16853)                                                   |
| runners   | **6 lyssnare**                        | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` är inaktiverade (`systemctl enable --now` återaktiverar en)                                                                                                                                                |

Gränserna finns i varje enhets `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(tidigare värden sparades som `override.conf.bak-20261018`) och tillämpades under drift med
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — utan omstart, så inget
pågående jobb påverkades. Etiketterna ändras via runners-API:t
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), även det under drift.

## Installera städaren (en gång, på servern)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): var 30:e minut, logga till /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` krävs: städaren verifierar att en sökväg är inaktiv genom en ögonblicksbild av öppna
filer innan den tas bort, och utan verktyget tar den inte bort någonting och meddelar detta
(exit 1). Prova först alla ändringar med `--dry-run` — då skrivs exakt vad som skulle
göras ut utan att någonting ändras.

Detta görs vid varje körning: våra egna rester (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) rensas efter **3 h på tmpfs** och 24 h i
`_work/_temp` på disk; en `next-build` som är äldre än 75 min avslutas (inget jobb körs så länge — den
2026-08-27 kördes ett i 70 min efter att GitHub hade förklarat dess jobb förlorat); utcheckningar som är
48 h gamla från runners vars enhet är **stoppad** rensas; varningar ges vid diskanvändning ≥ 85 %, PSI för minne
`full/avg60` ≥ 10 % och fler lyssnare än `MAX_ACTIVE_RUNNERS` (med en
uppdelning mellan omniroute/övriga). Exit 1 = åtgärd krävs; läs loggen.

## Runner-enheter: KillMode

Runnerns standardinställning `KillMode=process` lämnar `Runner.Worker → npm → next-build`
kvar i livet när en enhet stoppas eller startas om — ett föräldralöst bygge fortsätter att förbruka RAM och
CPU utan något anslutet jobb. Varje OmniRoute-enhet har en drop-in-fil
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
med `KillMode=mixed`: SIGTERM skickas först till lyssnaren och SIGKILL till hela cgroup-gruppen vid
`TimeoutStop`. Den börjar gälla nästa gång enheten startas om — starta om **en runner i
taget, endast när den är inaktiv**, med kontrollen av inaktivitet och omstarten i samma kommando.

## Driftsregler

- **Ett Turbopack-bygge åt gången — framtvingat via etikett.** Varje jobb som kör ett fullständigt Turbopack-
  `next build` riktas mot `[self-hosted, omni-build]`, och endast **`omniroute-113-5`** har den
  etiketten: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  det nattliga a11y-bygget (#16853) och `docker-publish.yml` **amd64** (webpack inuti BuildKit —
  Turbopack fick panik där, körning 33253576569). Docker-delen för arm64 ligger kvar på `ubuntu-24.04-arm`.
  `docker-publish` för amd64 delar samtidighetsgruppen `heavy-build-main` med `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine måste finnas på `omniroute-113-5`. En andra Turbopack-
  plats ryms inte inom 78 GB (2 × 33–37 GB plus resten av maskinen); en andra plats är endast säker för
  webpack-byggen.
- **Release-Green har en egen plats (2026-10-18).** Fram till dess kördes båda Release-Green-valideringarna
  på `omni-build`: vid varje push (~10/timme, 97 av 100 push-körningar avbröts mitt under arbetet på en dag)
  och tre fullständiga genomgångar på ~2 timmar per dag (genomgången 05:29 väntade 6 timmar på platsen) —
  den enda byggplatsen var överbelagd flera gånger om och PR-byggen från det egna ursprunget väntade i timmar.
  `release-green` och `main-green` riktas nu mot `omni-release` (endast `omniroute-113-6`) med
  `OMNIROUTE_USE_TURBOPACK=0`, och en startad körning avbryts inte längre av en nyare push (den
  väntande platsen slår fortfarande ihop anstormningen). `tests/unit/build/runner-capacity-routing.test.ts`
  låser routningen, webpack-växlingen och att ingenting på `omni-release` byggs med Turbopack.
- **Lätt pool: `omni-light`.** `omniroute-113` och `omniroute-113-2` kör de nattliga jobben som behöver
  ett backend-specifikt `next build` (~5–6 GB; webpack) och `quality.yml` `lint-guard`. `omniroute-113`
  hade `MemoryHigh=4G` fram till 2026-10-18 — promptfoo-bygget ägnade 54 minuter åt minnesåtervinning
  där; 8 GB tar bort strypningen.
- **Färre lyssnare med avsikt.** Fyra OmniRoute-enheter inaktiverades 2026-08-29 — varje ytterligare
  lyssnare är ännu en nyttjare av minnesbudgeten ovan. Städarens tak är 6 (`MAX_ACTIVE_RUNNERS=6` i cron): den räknar
  varje `Runner.Listener` på maskinen, och OmniHeuris + OmniMind lägger till två utöver våra fyra.
- **Rensa aldrig `/tmp` eller `_work` manuellt medan någon runner är upptagen.** En
  kontroll följd av borttagning med ett mellanrum mellan stegen gjorde att ett aktivt Build-jobb förlorade sin
  `_work` 2026-08-27. Städaren utför kontrollen och borttagningen i ett enda steg;
  låt den göra det.
- Att stoppa en runner mitt under ett jobb avbryter jobbet (observerat i drift): använd `systemctl stop` endast
  när dess lyssnare inte har någon underordnad `Runner.Worker`-process — och gör det i ett enda kommando.
- Arbetsflöden får inte parkera artefakter i `/tmp` (det ligger i RAM). Ladda ned till
  `$RUNNER_TEMP` (på disk, per runner) — `next-build`-artefakten på 1,3 GB tog 27–32
  minuter att hamna på tmpfs och 2 minuter att ladda upp från disk.
- VPS:en `.15` är endast för homologering — där körs aldrig CI-runners.
