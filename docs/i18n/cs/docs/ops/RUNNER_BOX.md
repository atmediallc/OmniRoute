# Self-Hosted Runner Box Operations (.113 pool) (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Fond samoobslužných runnerů běží na stroji **.113** (`tomni-proxmox-113`). Od 2026-10-18 má každý
runner OmniRoute **jednu roli**, jeden štítek a paměťový/CPU limit, díky kterému zůstává součet
`MemoryHigh` blízko velikosti fyzické RAM:

| runner               | štítek              | role                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`        | Sestavení pomocí Turbopacku: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, noční sestavení a11y | 40 GB / 44 GB (swap 0)     | 1600 %      |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), sestavení pomocí webpacku                                                                | 20 GB / 24 GB (swap 4 GB)  | 800 %       |
| `omniroute-113-2`    | `omni-light`        | noční úlohy (Schemathesis, promptfoo, garak, k6, spuštění a11y) a `quality.yml` `lint-guard`                                             | 12 GB / 16 GB (swap 4 GB)  | 600 %       |
| `omniroute-113`      | `omni-light`        | stejný fond jako výše                                                                                                                    | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (jejich repozitáře) | pouze Dependabot (špička 155 MB každý, 2026-10-18)                                                                                       | 4 GB / 6 GB                | 200 % každý |

Naměřeno 2026-10-18:

| prostředek | hodnota                            | význam pro plánování                                                                                                                                                                                                                                                                                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 jader**               | produkční sestavení pomocí Turbopacku dosahuje při omezení pomocí cgroup špičky 33–37 GB (bez omezení 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); sestavení pomocí webpacku přibližně 14–16 GB. Jedno sestavení pomocí Turbopacku a jedno pomocí webpacku se vejdou současně; dvě sestavení pomocí Turbopacku nikoli |
| swap       | 16 GB                              | `omniroute-113-5` běží s vypnutým swapem (`MemorySwapMax=0`), takže je nekontrolovaně rostoucí sestavení ukončeno při dosažení limitu namísto toho, aby stroj začal odkládat paměť do swapu                                                                                                                                     |
| `/tmp`     | **12 GB tmpfs = RAM**              | cokoli, co je tam uloženo, zabírá paměť; zbytky se odstraňují po 3 h                                                                                                                                                                                                                                                            |
| CPU        | zaznamenána zátěž 60 na 32 jádrech | před zavedením kvót jedno sestavení pomocí Turbopacku (~1166 % CPU) společně se sadou testů pokrytí na stejném stroji připravovalo naslouchací procesy ostatních runnerů o heartbeat (`Samoobslužný runner ztratil komunikaci`, #16853)                                                                                         |
| runnery    | **6 naslouchacích procesů**        | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` jsou zakázané (`systemctl enable --now` jeden z nich znovu aktivuje)                                                                                                                                                                                            |

Limity jsou uloženy pro každou jednotku v `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(předchozí hodnoty jsou zachovány jako `override.conf.bak-20261018`) a byly aplikovány za běhu pomocí
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez restartu, takže nebyla
ovlivněna žádná běžící úloha. Štítky se mění prostřednictvím API runnerů
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), rovněž za běhu.

## Instalace úklidového skriptu (jednorázově na stroji)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): každých 30 min, protokol do /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je povinný: úklidový skript před odstraněním ověří nečinnost cesty pomocí jednoho snímku otevřených
souborů; bez tohoto nástroje nic neodstraní a oznámí to
(exit 1). Každou změnu nejprve vyzkoušejte s `--dry-run` — vypíše přesně, co by
provedl, a ničeho se nedotkne.

Co dělá při každém spuštění: odstraňuje naše vlastní zbytky (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) po **3 h na tmpfs** a po 24 h na disku v
`_work/_temp`; ukončí proces `next-build` starší než 75 min (žádná úloha neběží tak dlouho — dne
2026-08-27 jeden běžel 70 min poté, co GitHub jeho úlohu prohlásil za ztracenou); promazává
checkouty starší 48 h u runnerů, jejichž jednotka je **zastavená**; upozorňuje při zaplnění disku ≥ 85 %, paměťovém PSI
`full/avg60` ≥ 10 % a vyšším počtu listenerů než `MAX_ACTIVE_RUNNERS` (s rozdělením na
omniroute/ostatní). Exit 1 = je vyžadována pozornost; přečtěte si protokol.

## Jednotky runnerů: KillMode

Výchozí nastavení runneru `KillMode=process` ponechá při zastavení nebo restartování jednotky
procesy `Runner.Worker → npm → next-build` spuštěné — osiřelé sestavení dál spotřebovává RAM a
CPU, aniž by k němu byla přiřazena úloha. Každá jednotka OmniRoute obsahuje doplňkovou konfiguraci
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
s `KillMode=mixed`: nejprve odešle SIGTERM listeneru a při
`TimeoutStop` odešle SIGKILL celé cgroup. Projeví se to při příštím restartu jednotky — restartujte
**vždy jen jeden runner, pouze když je nečinný**, přičemž kontrola nečinnosti a restart musí být
součástí stejného příkazu.

## Provozní pravidla

- **Vždy pouze jedno sestavení Turbopack — vynuceno štítkem.** Každá úloha, která spouští úplné sestavení Turbopack
  `next build`, cílí na `[self-hosted, omni-build]` a tento štítek má pouze
  **`omniroute-113-5`**: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  noční sestavení a11y (#16853) a **amd64** v `docker-publish.yml` (webpack uvnitř BuildKitu —
  Turbopack tam havaroval, běh 33253576569). Větev Dockeru pro arm64 zůstává na `ubuntu-24.04-arm`.
  `docker-publish` pro amd64 sdílí skupinu souběžnosti `heavy-build-main` s úlohou `Build`
  v `ci.yml` (`cancel-in-progress: false`). Na `omniroute-113-5` musí být Docker Engine. Druhý slot
  pro Turbopack se do 78 GB nevejde (2 × 33–37 GB plus zbytek systému); druhý slot je bezpečný pouze
  pro sestavení pomocí webpacku.
- **Release-Green má vlastní slot (2026-10-18).** Do té doby obě validace Release-Green běžely
  na `omni-build`: při každém pushi (~10/hodinu, 97 ze 100 běhů po pushi bylo během jednoho dne
  zrušeno uprostřed práce) a třikrát denně při úplných průchodech trvajících ~2 h (průchod v 05:29
  čekal na slot 6 h) — jediný slot pro sestavení byl několikanásobně přetížen a sestavení PR
  z vlastního originu čekala celé hodiny.
  `release-green` a `main-green` nyní cílí na `omni-release` (pouze `omniroute-113-6`) s
  `OMNIROUTE_USE_TURBOPACK=0` a spuštěný běh již není rušen novějším pushem (čekající slot
  stále slučuje tuto záplavu). `tests/unit/build/runner-capacity-routing.test.ts`
  fixuje směrování, přepnutí na webpack a skutečnost, že se na `omni-release` nic nesestavuje
  pomocí Turbopacku.
- **Lehký fond: `omni-light`.** `omniroute-113` a `omniroute-113-2` spouštějí noční úlohy, které
  potřebují pouze backendové sestavení `next build` (~5–6 GB; webpack), a úlohu `lint-guard`
  z `quality.yml`. `omniroute-113`
  měl až do 2026-10-18 nastaveno `MemoryHigh=4G` — sestavení promptfoo tam po dobu 54 minut
  postupovalo za průběžného uvolňování paměti; 8 GB toto omezování odstraňuje.
- **Záměrně méně listenerů.** Čtyři jednotky OmniRoute byly 2026-08-29 deaktivovány — každý další
  listener představuje dalšího nájemce výše uvedeného paměťového rozpočtu. Limit úklidové úlohy
  je 6 (`MAX_ACTIVE_RUNNERS=6` v cronu): počítá každý `Runner.Listener` na serveru a OmniHeuris
  spolu s OmniMind přidávají další dva k našim čtyřem.
- **Nikdy ručně nečistěte `/tmp` ani `_work`, dokud je některý runner zaneprázdněn.** Postup
  nejprve zkontrolovat a následně s prodlevou smazat způsobil, že spuštěná úloha Build přišla
  2026-08-27 o svůj adresář `_work`. Úklidová úloha provádí kontrolu a odstranění v jediném kroku;
  nechte to na ní.
- Zastavení runneru uprostřed úlohy tuto úlohu zruší (ověřeno za provozu): `systemctl stop`
  používejte pouze tehdy, když jeho listener nemá žádného potomka `Runner.Worker` — a proveďte
  to jediným příkazem.
- Workflow nesmí ukládat artefakty do `/tmp` (nachází se v RAM). Stahujte je do
  `$RUNNER_TEMP` (na disku, samostatně pro každý runner) — stažení 1,3GB artefaktu `next-build`
  na tmpfs trvalo 27–32 minut, zatímco jeho nahrání z disku trvalo 2 minuty.
- VPS `.15` slouží pouze k homologaci — nikdy na něm neběží CI runnery.
