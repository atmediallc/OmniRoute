# Self-Hosted Runner Box Operations (.113 pool) (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Il pool self-hosted viene eseguito sul server **.113** (`tomni-proxmox-113`). Dal 2026-10-18 ogni
runner OmniRoute ha **un solo ruolo**, una sola etichetta e un budget di memoria/CPU che mantiene la somma di
`MemoryHigh` vicina alla RAM fisica:

| runner               | etichetta                 | ruolo                                                                                                                          | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`              | Build Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, la build notturna a11y | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`            | Release-Green (`release-green` + `main-green`), build webpack                                                                  | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`              | esecuzioni notturne (Schemathesis, promptfoo, garak, k6, avvio a11y) e `quality.yml` `lint-guard`                              | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`              | stesso pool indicato sopra                                                                                                     | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (i rispettivi repository) | solo Dependabot (picco di 155 MB ciascuno, 2026-10-18)                                                                         | 4 GB / 6 GB                | 200 % ciascuno |

Misurazioni del 2026-10-18:

| risorsa   | valore                               | implicazioni per la pianificazione                                                                                                                                                                                                                                                     |
| --------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 core**                  | una build di produzione Turbopack raggiunge un picco di 33–37 GB con un limite cgroup (49 GB senza limite, `tests/unit/ci-build-bundler-webpack.test.ts`); una build webpack circa 14–16 GB. Una build Turbopack e una webpack possono essere eseguite insieme; due build Turbopack no |
| swap      | 16 GB                                | `omniroute-113-5` viene eseguito con lo swap disattivato (`MemorySwapMax=0`), in modo che una build fuori controllo venga terminata al raggiungimento del limite anziché causare lo swapping del server                                                                                |
| `/tmp`    | **12 GB tmpfs = RAM**                | tutto ciò che viene parcheggiato lì occupa memoria; i residui vengono rimossi dopo 3 ore                                                                                                                                                                                               |
| CPU       | osservato un carico di 60 su 32 core | prima delle quote, una build Turbopack (~1166 % CPU) insieme a una suite di coverage sullo stesso server impediva agli heartbeat degli altri listener di ricevere risorse sufficienti (`The self-hosted runner lost communication`, #16853)                                            |
| runner    | **6 listener**                       | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sono disabilitati (`systemctl enable --now` ne riattiva uno)                                                                                                                                                           |

I limiti si trovano nel file `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
di ciascuna unità (i valori precedenti sono conservati come `override.conf.bak-20261018`) e sono stati applicati in tempo reale con
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…`, senza riavvio, quindi nessun
job in esecuzione è stato interessato. Le etichette vengono modificate tramite l'API dei runner
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), anch'esse in tempo reale.

## Installare il janitor (una sola volta, sulla macchina)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): ogni 30 minuti, registra i log in /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` è obbligatorio: il janitor verifica che un percorso sia inattivo tramite una singola istantanea dei file aperti prima di rimuoverlo; senza questo strumento non rimuove nulla e lo segnala (exit 1). Provare prima qualsiasi modifica con `--dry-run`: mostra esattamente ciò che farebbe senza modificare nulla.

Operazioni eseguite a ogni avvio: elimina i residui generati dal sistema (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) dopo **3 h su tmpfs** e dopo 24 h in `_work/_temp` sul disco; termina un `next-build` che dura da più di 75 min (nessun job richiede così tanto tempo: il 2026-08-27 uno è rimasto in esecuzione per 70 min dopo che GitHub aveva dichiarato perso il relativo job); elimina i checkout risalenti a più di 48 h dei runner la cui unità è **arrestata**; genera avvisi in caso di utilizzo del disco ≥ 85%, PSI della memoria `full/avg60` ≥ 10% e numero di listener superiore a `MAX_ACTIVE_RUNNERS` (con suddivisione tra omniroute e altri). Exit 1 = è richiesto un intervento; consultare il log.

## Unità runner: KillMode

Il valore predefinito `KillMode=process` del runner lascia in vita
`Runner.Worker → npm → next-build` quando un'unità viene arrestata o riavviata:
una build orfana continua a consumare RAM e CPU senza alcun job associato. Ogni
unità OmniRoute contiene un drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
con `KillMode=mixed`: prima SIGTERM al listener, poi SIGKILL all'intero cgroup al
raggiungimento di `TimeoutStop`. Diventa effettivo al successivo riavvio
dell'unità: riavviare **un solo runner alla volta, esclusivamente quando è
inattivo**, eseguendo il controllo dello stato di inattività e il riavvio nello
stesso comando.

## Regole operative

- **Una build Turbopack alla volta, vincolo applicato tramite label.** Ogni job che esegue una
  `next build` completa con Turbopack usa come destinazione `[self-hosted, omni-build]` e solo
  **`omniroute-113-5`** dispone di tale label: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, la build a11y notturna (#16853) e **amd64** di
  `docker-publish.yml` (webpack all'interno di BuildKit — Turbopack è andato in panic lì,
  esecuzione 33253576569). Il ramo Docker arm64 rimane su `ubuntu-24.04-arm`.
  amd64 di `docker-publish` condivide il gruppo di concorrenza `heavy-build-main` con `Build` di
  `ci.yml` (`cancel-in-progress: false`). Docker Engine deve essere presente su `omniroute-113-5`.
  Un secondo slot Turbopack non rientra nei 78 GB disponibili (2 × 33–37 GB più il resto della
  macchina); un secondo slot è sicuro solo per le build webpack.
- **Release-Green dispone di uno slot dedicato (2026-10-18).** Fino ad allora entrambe le
  convalide Release-Green venivano eseguite su `omni-build`: a ogni push (~10/ora, 97 esecuzioni
  push su 100 annullate a metà lavoro in un giorno) e tre scansioni complete da ~2 h al giorno
  (quella delle 05:29 ha atteso 6 h per lo slot) — l'unico slot di build era sovraccarico di
  diverse volte e le Build delle PR provenienti dallo stesso repository attendevano per ore.
  `release-green` e `main-green` ora usano `omni-release` (solo `omniroute-113-6`) con
  `OMNIROUTE_USE_TURBOPACK=0` e un'esecuzione già avviata non viene più annullata da un push più
  recente (lo slot in attesa continua comunque a condensare la raffica). Il test
  `tests/unit/build/runner-capacity-routing.test.ts` vincola l'instradamento, il passaggio a
  webpack e garantisce che nulla su `omni-release` venga compilato con Turbopack.
- **Pool leggero: `omni-light`.** `omniroute-113` e `omniroute-113-2` eseguono i job notturni che
  richiedono una `next build` riservata al backend (~5–6 GB; webpack) e `lint-guard` di
  `quality.yml`. `omniroute-113` aveva `MemoryHigh=4G` fino al 2026-10-18 — lì la build promptfoo
  ha impiegato 54 minuti procedendo a fatica a causa del recupero della memoria; 8 GB eliminano
  il throttling.
- **Meno listener intenzionalmente.** Quattro unità OmniRoute sono state disabilitate il
  2026-08-29 — ogni listener aggiuntivo è un altro utilizzatore del budget di memoria indicato
  sopra. Il limite del janitor è 6 (`MAX_ACTIVE_RUNNERS=6` nel cron): conteggia ogni
  `Runner.Listener` sulla macchina e OmniHeuris + OmniMind ne aggiungono due ai nostri quattro.
- **Non pulire mai `/tmp` o `_work` manualmente mentre un runner è occupato.** Un controllo
  seguito dall'eliminazione, con un intervallo tra le due operazioni, è il motivo per cui un job
  Build attivo ha perso la propria directory `_work` il 2026-08-27. Il janitor esegue il
  controllo e la rimozione in un unico passaggio; lascia che se ne occupi.
- Arrestare un runner durante un job annulla il job (osservato dal vivo): usare `systemctl stop`
  solo quando il relativo listener non ha alcun processo figlio `Runner.Worker` — ed eseguire
  l'operazione con un unico comando.
- I workflow non devono depositare artefatti in `/tmp` (si trova nella RAM). Scaricarli in
  `$RUNNER_TEMP` (su disco, specifico per ogni runner) — l'artefatto `next-build` da 1,3 GB ha
  impiegato 27–32 minuti per essere scritto sul tmpfs e 2 minuti per essere caricato dal disco.
- Il VPS `.15` è riservato all'omologazione — non esegue mai runner CI.
