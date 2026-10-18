# Self-Hosted Runner Box Operations (.113 pool) (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

De self-hosted pool draait op de **.113**-machine (`tomni-proxmox-113`). Sinds 2026-10-18 heeft elke
OmniRoute-runner **één rol**, één label en een geheugen-/CPU-budget waardoor de som van
`MemoryHigh` dicht bij het fysieke RAM blijft:

| runner               | label          | rol                                                                                                                                | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-builds: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, de nachtelijke a11y-build | 40 GB / 44 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-build                                                                      | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`   | nachtelijke taken (Schemathesis, promptfoo, garak, k6, a11y-boot) en `quality.yml` `lint-guard`                                    | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`   | dezelfde pool als hierboven                                                                                                        | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (hun repo's)   | alleen Dependabot (piek van elk 155 MB, 2026-10-18)                                                                                | 4 GB / 6 GB                | elk 200 %  |

Gemeten op 2026-10-18:

| resource  | waarde                      | wat dit betekent voor de planning                                                                                                                                                                                                                              |
| --------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cores**        | een Turbopack-productiebuild piekt op 33–37 GB onder een cgroup-limiet (49 GB zonder limiet, `tests/unit/ci-build-bundler-webpack.test.ts`); een webpack-build op circa 14–16 GB. Eén Turbopack- en één webpack-build passen samen; twee Turbopack-builds niet |
| swap      | 16 GB                       | `omniroute-113-5` draait met swap uitgeschakeld (`MemorySwapMax=0`), zodat een ontspoorde build bij zijn limiet wordt afgebroken in plaats van de machine te laten swappen                                                                                     |
| `/tmp`    | **12 GB tmpfs = RAM**       | alles wat daar wordt neergezet, gebruikt geheugen; restanten worden na 3 uur opgeruimd                                                                                                                                                                         |
| CPU       | load 60 op 32 cores gemeten | vóór de quota's ontnamen één Turbopack-build (circa 1166 % CPU) en een coveragesuite op dezelfde machine de andere listeners voldoende CPU voor hun heartbeats (`The self-hosted runner lost communication`, #16853)                                           |
| runners   | **6 listeners**             | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` zijn uitgeschakeld (`systemctl enable --now` brengt er één terug)                                                                                                                              |

De limieten staan in het bestand `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
van elke unit (de vorige waarden zijn bewaard als `override.conf.bak-20261018`) en zijn live toegepast met
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — zonder herstart, zodat geen
lopende job werd beïnvloed. Labels worden eveneens live gewijzigd via de runners-API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## De janitor installeren (eenmalig, op de machine)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): elke 30 minuten, loggen naar /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` is vereist: de janitor controleert aan de hand van één momentopname van
open bestanden of een pad inactief is voordat het wordt verwijderd. Zonder deze
tool verwijdert hij niets en meldt hij dat ook (exit 1). Probeer elke wijziging
eerst met `--dry-run` — dit toont exact wat er zou gebeuren en wijzigt niets.

Wat hij bij elke uitvoering doet: onze eigen restanten (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) opruimen na **3 uur op tmpfs** en na 24 uur in
`_work/_temp` op schijf; een `next-build` beëindigen die ouder is dan 75 minuten
(geen enkele job duurt zo lang — op 2026-08-27 draaide er één nog 70 minuten nadat
GitHub de bijbehorende job als verloren had aangemerkt); check-outs ouder dan 48
uur verwijderen van runners waarvan de unit **gestopt** is; waarschuwen bij
schijfgebruik ≥ 85%, memory PSI `full/avg60` ≥ 10% en meer listeners dan
`MAX_ACTIVE_RUNNERS` (met een uitsplitsing tussen omniroute en overige).
Exit 1 = aandacht vereist; lees het logbestand.

## Runner-units: KillMode

De standaardinstelling `KillMode=process` van de runner laat `Runner.Worker → npm → next-build`
doorlopen wanneer een unit wordt gestopt of opnieuw gestart — een verweesde build blijft RAM en
CPU verbruiken zonder dat er een job aan gekoppeld is. Elke OmniRoute-unit heeft een drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
met `KillMode=mixed`: eerst SIGTERM naar de listener en vervolgens SIGKILL naar de volledige cgroup bij
`TimeoutStop`. Dit wordt van kracht bij de volgende herstart van de unit — herstart **één runner
tegelijkertijd, alleen wanneer deze inactief is**, met de controle op inactiviteit en de herstart in dezelfde opdracht.

## Operationele regels

- **Eén Turbopack-build tegelijk — afgedwongen via een label.** Elke job die een volledige Turbopack-
  `next build` uitvoert, is gericht op `[self-hosted, omni-build]`, en alleen **`omniroute-113-5`** draagt dat
  label: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  de nachtelijke a11y-build (#16853) en `docker-publish.yml` **amd64** (webpack binnen BuildKit —
  Turbopack crashte daar, run 33253576569). De arm64-Docker-runner blijft op `ubuntu-24.04-arm`.
  `docker-publish` amd64 deelt de concurrency-groep `heavy-build-main` met `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine moet op `omniroute-113-5` staan. Een tweede Turbopack-
  slot past niet binnen 78 GB (2 × 33–37 GB plus de rest van de machine); een tweede slot is alleen veilig voor
  webpack-builds.
- **Release-Green heeft een eigen slot (2026-10-18).** Tot die datum werden beide Release-Green-validaties
  uitgevoerd op `omni-build`: bij elke push (~10/uur, waarbij op één dag 97 van de 100 push-runs halverwege
  werden geannuleerd) en drie volledige controles van ~2 uur per dag (de controle van 05:29 wachtte 6 uur op
  het slot) — het ene buildslot was meerdere keren overtekend en PR-builds uit de eigen oorsprong wachtten uren.
  `release-green` en `main-green` zijn nu gericht op `omni-release` (alleen `omniroute-113-6`) met
  `OMNIROUTE_USE_TURBOPACK=0`, en een gestarte run wordt niet langer geannuleerd door een nieuwere push (het
  wachtende slot voegt de stroom nog steeds samen). `tests/unit/build/runner-capacity-routing.test.ts`
  legt de routering en de webpack-omschakeling vast, evenals dat niets op `omni-release` met Turbopack wordt gebouwd.
- **Lichte pool: `omni-light`.** `omniroute-113` en `omniroute-113-2` voeren de nachtelijke taken uit waarvoor
  alleen een backend-`next build` nodig is (~5–6 GB; webpack), evenals `quality.yml` `lint-guard`. `omniroute-113`
  had tot 2026-10-18 `MemoryHigh=4G` — de promptfoo-build worstelde zich daar gedurende 54 minuten doorheen
  via geheugenterugwinning; 8 GB verhelpt de afknijping.
- **Bewust minder listeners.** Vier OmniRoute-units zijn op 2026-08-29 uitgeschakeld — elke extra
  listener is nog een gebruiker van het bovenstaande geheugenbudget. De bovengrens van de janitor is 6 (`MAX_ACTIVE_RUNNERS=6` in cron): deze telt
  elke `Runner.Listener` op de machine, en OmniHeuris + OmniMind voegen er twee toe aan onze vier.
- **Ruim `/tmp` of `_work` nooit handmatig op terwijl een runner bezig is.** Een
  controle gevolgd door verwijdering, met een tussenperiode tussen beide, zorgde ervoor dat een actieve Build-job op
  2026-08-27 zijn `_work` verloor. De janitor voert de controle en verwijdering in één stap uit;
  laat die dit doen.
- Het stoppen van een runner tijdens een job annuleert de job (live waargenomen): voer `systemctl stop` alleen uit
  wanneer de listener geen onderliggend `Runner.Worker`-proces heeft — en doe dit in één opdracht.
- Workflows mogen geen artefacten in `/tmp` parkeren (dit bevindt zich in RAM). Download naar
  `$RUNNER_TEMP` (op schijf, per runner) — het `next-build`-artefact van 1,3 GB deed er 27–32
  minuten over om op de tmpfs terecht te komen en 2 minuten om vanaf schijf te uploaden.
- De `.15`-VPS is uitsluitend voor homologatie — hierop draaien nooit CI-runners.
