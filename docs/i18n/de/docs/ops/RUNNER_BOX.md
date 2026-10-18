# Self-Hosted Runner Box Operations (.113 pool) (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Der selbst gehostete Pool läuft auf der **.113**-Maschine (`tomni-proxmox-113`). Seit dem 2026-10-18 hat jeder
OmniRoute-Runner **eine Rolle**, ein Label sowie ein Arbeitsspeicher-/CPU-Budget, durch das die Summe von
`MemoryHigh` nahe am physischen RAM bleibt:

| Runner               | Label          | Rolle                                                                                                                              | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-Builds: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, der nächtliche a11y-Build | 40 GB / 44 GB (Swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-Build                                                                      | 20 GB / 24 GB (Swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`   | nächtliche Jobs (Schemathesis, promptfoo, garak, k6, a11y-Boot) und `quality.yml` `lint-guard`                                     | 12 GB / 16 GB (Swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`   | derselbe Pool wie oben                                                                                                             | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (ihre Repos)   | nur Dependabot (Spitzenwert jeweils 155 MB, 2026-10-18)                                                                            | 4 GB / 6 GB                | jeweils 200 % |

Gemessen am 2026-10-18:

| Ressource | Wert                                 | Bedeutung für die Jobplanung                                                                                                                                                                                                                                                          |
| --------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 Kerne**                 | Ein Turbopack-Produktions-Build erreicht unter einem cgroup-Limit Spitzenwerte von 33–37 GB (49 GB ohne Limit, `tests/unit/ci-build-bundler-webpack.test.ts`), ein webpack-Build etwa 14–16 GB. Ein Turbopack- und ein webpack-Build passen gleichzeitig; zwei Turbopack-Builds nicht |
| Swap      | 16 GB                                | `omniroute-113-5` läuft mit deaktiviertem Swap (`MemorySwapMax=0`), sodass ein außer Kontrolle geratener Build beim Erreichen seines Limits beendet wird, statt den Swap der Maschine zu belegen                                                                                      |
| `/tmp`    | **12 GB tmpfs = RAM**                | Alles, was dort abgelegt wird, belegt Arbeitsspeicher; Überreste werden nach 3 h entfernt                                                                                                                                                                                             |
| CPU       | Last von 60 auf 32 Kernen beobachtet | Vor Einführung der Kontingente entzog ein Turbopack-Build (~1166 % CPU) zusammen mit einer Coverage-Suite auf derselben Maschine den Heartbeats der anderen Listener die Ressourcen (`The self-hosted runner lost communication`, #16853)                                             |
| Runner    | **6 Listener**                       | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sind deaktiviert (`systemctl enable --now` aktiviert einen davon wieder)                                                                                                                                              |

Die Limits befinden sich in der Datei `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
der jeweiligen Unit (vorherige Werte wurden als `override.conf.bak-20261018` beibehalten) und wurden im laufenden Betrieb mit
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` angewendet — ohne Neustart, sodass kein
laufender Job beeinträchtigt wurde. Labels werden ebenfalls im laufenden Betrieb über die Runner-API geändert:
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Janitor installieren (einmalig auf dem Server)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): alle 30 Minuten, Protokollierung nach /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` ist erforderlich: Der Janitor weist anhand einer Momentaufnahme der geöffneten
Dateien nach, dass ein Pfad inaktiv ist, bevor er ihn entfernt. Ohne dieses Werkzeug
entfernt er nichts und meldet dies entsprechend (Exit-Code 1). Jede Änderung zuerst
mit `--dry-run` testen — dabei wird exakt ausgegeben, was ausgeführt würde, ohne
irgendetwas zu verändern.

Was bei jedem Lauf geschieht: Eigene Überreste (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) werden nach **3 h auf tmpfs** und nach 24 h im
Verzeichnis `_work/_temp` auf der Festplatte bereinigt; ein `next-build`, der älter
als 75 Minuten ist, wird beendet (kein Job läuft so lange — am 2026-08-27 lief einer
noch 70 Minuten weiter, nachdem GitHub den zugehörigen Job bereits als verloren
eingestuft hatte); 48 h alte Checkouts von Runnern, deren Unit **gestoppt** ist,
werden entfernt; Warnungen werden bei einer Festplattenbelegung ≥ 85 %, einem
Speicher-PSI-Wert `full/avg60` ≥ 10 % sowie bei mehr Listenern als
`MAX_ACTIVE_RUNNERS` ausgegeben (einschließlich einer Aufschlüsselung nach
omniroute/sonstigen Listenern). Exit-Code 1 = Eingreifen erforderlich; das Protokoll
prüfen.

## Runner-Units: KillMode

Das standardmäßige `KillMode=process` des Runners lässt `Runner.Worker → npm → next-build`
weiterlaufen, wenn eine Unit gestoppt oder neu gestartet wird — ein verwaister Build verbraucht
weiterhin RAM und CPU, ohne dass ihm ein Job zugeordnet ist. Jede OmniRoute-Unit verfügt über ein Drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
mit `KillMode=mixed`: zuerst SIGTERM an den Listener, dann bei
`TimeoutStop` SIGKILL an die gesamte cgroup. Es wird beim nächsten Neustart der Unit wirksam — starten Sie
**jeweils nur einen Runner und nur im Leerlauf** neu, wobei sich die Leerlaufprüfung und der Neustart
im selben Befehl befinden müssen.

## Betriebsregeln

- **Jeweils nur ein Turbopack-Build — durch ein Label erzwungen.** Jeder Job, der einen vollständigen Turbopack-
  `next build` ausführt, ist auf `[self-hosted, omni-build]` ausgerichtet, und nur **`omniroute-113-5`** trägt dieses
  Label: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  der nächtliche a11y-Build (#16853) und **amd64** in `docker-publish.yml` (webpack innerhalb von BuildKit —
  Turbopack ist dort abgestürzt, Lauf 33253576569). Der arm64-Docker-Zweig verbleibt auf `ubuntu-24.04-arm`.
  `docker-publish` für amd64 teilt sich die Nebenläufigkeitsgruppe `heavy-build-main` mit `Build` aus `ci.yml`
  (`cancel-in-progress: false`). Docker Engine muss auf `omniroute-113-5` laufen. Ein zweiter Turbopack-
  Slot passt nicht in 78 GB (2 × 33–37 GB zuzüglich des Rests des Systems); ein zweiter Slot ist nur für
  webpack-Builds sicher.
- **Release-Green hat einen eigenen Slot (2026-10-18).** Bis dahin liefen beide Release-Green-Validierungen
  auf `omni-build`: bei jedem Push (~10/Stunde, 97 von 100 Push-Läufen wurden an einem Tag während der Arbeit
  abgebrochen) sowie drei vollständige, jeweils ~2 Stunden dauernde Durchläufe pro Tag (der Durchlauf um 05:29
  wartete 6 Stunden auf den Slot) — der einzelne Build-Slot war um ein Mehrfaches überbelegt, und PR-Builds
  aus dem eigenen Repository warteten stundenlang. `release-green` und `main-green` zielen nun auf
  `omni-release` (ausschließlich `omniroute-113-6`) mit `OMNIROUTE_USE_TURBOPACK=0`, und ein gestarteter Lauf
  wird nicht mehr durch einen neueren Push abgebrochen (der ausstehende Slot bündelt den Ansturm weiterhin).
  `tests/unit/build/runner-capacity-routing.test.ts` fixiert das Routing, die Umschaltung auf webpack sowie
  die Vorgabe, dass auf `omni-release` nichts mit Turbopack gebaut wird.
- **Leichtgewichtiger Pool: `omni-light`.** `omniroute-113` und `omniroute-113-2` führen die nächtlichen Jobs
  aus, die einen reinen Backend-`next build` (~5–6 GB; webpack) benötigen, sowie `lint-guard` aus `quality.yml`.
  Für `omniroute-113` galt bis zum 2026-10-18 `MemoryHigh=4G` — der promptfoo-Build kämpfte sich dort 54 Minuten
  lang mit Speicherfreigaben durch; 8 GB beseitigen die Drosselung.
- **Absichtlich weniger Listener.** Vier OmniRoute-Units wurden am 2026-08-29 deaktiviert — jeder zusätzliche
  Listener ist ein weiterer Nutzer des oben genannten Speicherbudgets. Die Obergrenze des Janitors liegt bei 6
  (`MAX_ACTIVE_RUNNERS=6` in cron): Er zählt jeden `Runner.Listener` auf dem System, und OmniHeuris + OmniMind
  ergänzen unsere vier um zwei weitere.
- **`/tmp` oder `_work` niemals manuell bereinigen, während irgendein Runner beschäftigt ist.** Eine
  Prüfung mit anschließender, zeitlich verzögerter Löschung führte dazu, dass ein laufender Build-Job am
  2026-08-27 sein `_work` verlor. Der Janitor führt die Prüfung und das Entfernen in einem einzigen Schritt aus;
  überlassen Sie es ihm.
- Das Anhalten eines Runners während eines Jobs bricht den Job ab (im Live-Betrieb beobachtet): `systemctl stop`
  nur dann ausführen, wenn dessen Listener kein untergeordnetes `Runner.Worker`-Element hat — und dies in einem
  einzigen Befehl erledigen.
- Workflows dürfen keine Artefakte in `/tmp` ablegen (es befindet sich im RAM). Downloads müssen nach
  `$RUNNER_TEMP` erfolgen (pro Runner auf dem Datenträger) — das 1,3 GB große `next-build`-Artefakt benötigte
  27–32 Minuten, um auf dem tmpfs zu landen, und 2 Minuten für den Upload vom Datenträger.
- Der `.15`-VPS dient ausschließlich der Homologation — dort werden niemals CI-Runner ausgeführt.
