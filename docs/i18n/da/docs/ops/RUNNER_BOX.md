# Self-Hosted Runner Box Operations (.113 pool) (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Den selvhostede pulje kører på **.113**-maskinen (`tomni-proxmox-113`). Siden 2026-10-18 har hver
OmniRoute-runner haft **én rolle**, én label og et hukommelses-/CPU-budget, der holder summen af
`MemoryHigh` tæt på den fysiske RAM:

| runner               | label          | rolle                                                                                                                           | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-builds: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, det natlige a11y-build | 40 GB / 44 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-build                                                                   | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`   | natlige kørsler (Schemathesis, promptfoo, garak, k6, a11y-opstart) og `quality.yml` `lint-guard`                                | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`   | samme pulje som ovenfor                                                                                                         | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (deres repos)  | kun Dependabot (maksimum på 155 MB hver, 2026-10-18)                                                                            | 4 GB / 6 GB                | 200 % hver |

Målt 2026-10-18:

| ressource | værdi                           | hvad det betyder for jobplanlægningen                                                                                                                                                                                                                             |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 kerner**           | et Turbopack-produktionsbuild topper ved 33–37 GB under en cgroup-grænse (49 GB uden grænse, `tests/unit/ci-build-bundler-webpack.test.ts`); et webpack-build ved ca. 14–16 GB. Ét Turbopack- og ét webpack-build kan køre samtidig; to Turbopack-builds kan ikke |
| swap      | 16 GB                           | `omniroute-113-5` kører med swap slået fra (`MemorySwapMax=0`), så et løbsk build stoppes ved sin grænse i stedet for at få maskinen til at bruge swap                                                                                                            |
| `/tmp`    | **12 GB tmpfs = RAM**           | alt, der placeres der, bruger hukommelse; rester ryddes op efter 3 timer                                                                                                                                                                                          |
| CPU       | load 60 på 32 kerner observeret | før kvoterne udsultede ét Turbopack-build (~1166 % CPU) plus en coverage-suite på samme maskine de andre lytteres heartbeats (`The self-hosted runner lost communication`, #16853)                                                                                |
| runners   | **6 lyttere**                   | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` er deaktiveret (`systemctl enable --now` aktiverer en af dem igen)                                                                                                                                |

Grænserne findes i hver enheds `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(tidligere værdier er gemt som `override.conf.bak-20261018`) og blev anvendt direkte med
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — uden genstart, så ingen
igangværende jobs blev berørt. Labels ændres via runners-API'et
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), også direkte.

## Installér oprydningsscriptet (én gang på maskinen)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): hvert 30. minut, log til /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` er påkrævet: Oprydningsscriptet bekræfter, at en sti er inaktiv, ved hjælp af ét snapshot af åbne
filer, før stien fjernes, og uden værktøjet fjerner det intet og oplyser dette
(exit 1). Afprøv enhver ændring med `--dry-run` først — det udskriver præcis, hvad det ville
gøre, og ændrer intet.

Det gør følgende ved hver kørsel: rydder vores egne rester (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) efter **3 t på tmpfs** og 24 t på disken i
`_work/_temp`; stopper en `next-build`, der er ældre end 75 min. (ingen jobs kører så længe — den
2026-08-27 kørte én i 70 min., efter at GitHub havde erklæret dens job tabt); fjerner checkouts,
der er ældre end 48 t, fra runners, hvis unit er **stoppet**; advarer ved diskforbrug ≥ 85 %, hukommelses-PSI
`full/avg60` ≥ 10 % og flere listeners end `MAX_ACTIVE_RUNNERS` (med en
opdeling mellem omniroute/andre). Exit 1 = kræver opmærksomhed; læs loggen.

## Runner-enheder: KillMode

Runnerens standardindstilling `KillMode=process` efterlader `Runner.Worker → npm → next-build`
kørende, når en enhed stoppes eller genstartes — et forældreløst build fortsætter med at bruge RAM og
CPU, uden at noget job er tilknyttet. Hver OmniRoute-enhed har en drop-in-fil
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
med `KillMode=mixed`: SIGTERM sendes først til listeneren og SIGKILL til hele cgroup'en ved
`TimeoutStop`. Den træder i kraft ved enhedens næste genstart — genstart **én runner ad
gangen, og kun når den er inaktiv**, med kontrollen af inaktivitet og genstarten i samme kommando.

## Driftsregler

- **Ét Turbopack-build ad gangen — håndhævet via label.** Hvert job, der kører et fuldt Turbopack-
  `next build`, målretter `[self-hosted, omni-build]`, og kun **`omniroute-113-5`** har dette
  label: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  det natlige a11y-build (#16853) og `docker-publish.yml` **amd64** (webpack i BuildKit —
  Turbopack gik i panik dér, kørsel 33253576569). Docker-delen for arm64 forbliver på `ubuntu-24.04-arm`.
  `docker-publish` amd64 deler concurrency-gruppen `heavy-build-main` med `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine skal være på `omniroute-113-5`. Der er ikke plads til
  endnu en Turbopack-plads inden for 78 GB (2 × 33–37 GB plus resten af maskinen); en ekstra plads
  er kun sikker til webpack-builds.
- **Release-Green har sin egen plads (2026-10-18).** Indtil da kørte begge Release-Green-valideringer
  på `omni-build`: ved hvert push (~10/time, 97 ud af 100 push-kørsler blev annulleret midt i arbejdet
  på én dag) og tre fulde gennemløb på ~2 t. om dagen (gennemløbet kl. 05:29 ventede 6 t. på pladsen) —
  den enkelte build-plads var overbooket flere gange, og PR-builds fra eget repository ventede i timevis.
  `release-green` og `main-green` målretter nu `omni-release` (kun `omniroute-113-6`) med
  `OMNIROUTE_USE_TURBOPACK=0`, og en startet kørsel annulleres ikke længere af et nyere push (den
  ventende plads samler stadig stormen). `tests/unit/build/runner-capacity-routing.test.ts`
  fastholder routingen, webpack-skiftet og sikrer, at intet på `omni-release` bygges med Turbopack.
- **Let pulje: `omni-light`.** `omniroute-113` og `omniroute-113-2` kører de natlige jobs, der kræver
  et rent backend-`next build` (~5–6 GB; webpack), samt `quality.yml` `lint-guard`. `omniroute-113`
  havde `MemoryHigh=4G` indtil 2026-10-18 — promptfoo-buildet kæmpede sig igennem 54 minutter
  dér via hukommelsesfrigørelse; 8 GB fjerner begrænsningen.
- **Færre lyttere med vilje.** Fire OmniRoute-enheder blev deaktiveret 2026-08-29 — hver ekstra
  lytter er endnu en lejer af ovenstående hukommelsesbudget. Oprydningsjobbets loft er 6 (`MAX_ACTIVE_RUNNERS=6` i cron): det tæller
  hver `Runner.Listener` på maskinen, og OmniHeuris + OmniMind føjer to til vores fire.
- **Ryd aldrig `/tmp` eller `_work` manuelt, mens en runner er optaget.** En
  kontrollér-og-slet-procedure med et mellemrum mellem de to trin var årsagen til, at et aktivt Build-job mistede sit
  `_work` 2026-08-27. Oprydningsjobbet udfører kontrollen og fjernelsen i ét trin;
  lad det gøre det.
- Hvis en runner stoppes midt i et job, annulleres jobbet (observeret live): Brug kun `systemctl stop`,
  når dens lytter ikke har en underordnet `Runner.Worker`-proces — og gør det i én kommando.
- Workflows må ikke parkere artefakter i `/tmp` (det er RAM). Download til
  `$RUNNER_TEMP` (på disk, pr. runner) — `next-build`-artefaktet på 1,3 GB tog 27–32
  minutter om at lande på tmpfs og 2 minutter at uploade fra disk.
- VPS'en `.15` er kun til homologering — den kører aldrig CI-runners.
