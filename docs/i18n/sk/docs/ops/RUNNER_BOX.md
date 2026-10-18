# Self-Hosted Runner Box Operations (.113 pool) (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Fond samostatne hostovaných runnerov beží na serveri **.113** (`tomni-proxmox-113`). Od 2026-10-18 má každý
runner OmniRoute **jednu rolu**, jeden štítok a pamäťový/CPU rozpočet, ktorý udržiava súčet
`MemoryHigh` blízko kapacity fyzickej RAM:

| runner               | štítok           | rola                                                                                                                               | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`     | Zostavenia Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nočné zostavenie a11y | 40 GB / 44 GB (swap 0)     | 1600 %      |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), zostavenie webpack                                                                 | 20 GB / 24 GB (swap 4 GB)  | 800 %       |
| `omniroute-113-2`    | `omni-light`     | nočné úlohy (Schemathesis, promptfoo, garak, k6, spustenie a11y) a `quality.yml` `lint-guard`                                      | 12 GB / 16 GB (swap 4 GB)  | 600 %       |
| `omniroute-113`      | `omni-light`     | rovnaký fond ako vyššie                                                                                                            | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (ich repozitáre) | iba Dependabot (špička 155 MB na každý, 2026-10-18)                                                                                | 4 GB / 6 GB                | 200 % každý |

Namerané 2026-10-18:

| zdroj     | hodnota                            | čo to znamená pre plánovanie                                                                                                                                                                                                                                                                |
| --------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 jadier**              | produkčné zostavenie Turbopack dosahuje špičku 33–37 GB pod limitom cgroup (49 GB bez limitu, `tests/unit/ci-build-bundler-webpack.test.ts`); zostavenie webpack približne 14–16 GB. Jedno zostavenie Turbopack a jedno zostavenie webpack sa zmestia súčasne; dve zostavenia Turbopack nie |
| swap      | 16 GB                              | `omniroute-113-5` beží s vypnutým swapom (`MemorySwapMax=0`), takže nekontrolované zostavenie sa ukončí pri dosiahnutí svojho limitu namiesto toho, aby server začal swapovať                                                                                                               |
| `/tmp`    | **12 GB tmpfs = RAM**              | všetko, čo sa tam uloží, zaberá pamäť; zvyšky sa odstránia po 3 h                                                                                                                                                                                                                           |
| CPU       | zaznamenaná záťaž 60 na 32 jadrách | pred zavedením kvót jedno zostavenie Turbopack (~1166 % CPU) spolu so sadou testov pokrytia na tom istom serveri zabránili spracovaniu signálov heartbeat ostatných listenerov (`Samostatne hostovaný runner stratil komunikáciu`, #16853)                                                  |
| runnery   | **6 listenerov**                   | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sú zakázané (`systemctl enable --now` jeden z nich znova aktivuje)                                                                                                                                                          |

Limity sa nachádzajú pre každú jednotku v `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(predchádzajúce hodnoty sú uložené ako `override.conf.bak-20261018`) a boli aplikované za chodu pomocou
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez reštartu, takže sa to
nedotklo žiadnej spustenej úlohy. Štítky sa menia prostredníctvom API runnerov
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), takisto za chodu.

## Inštalácia upratovacieho skriptu (jednorazovo, na serveri)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): každých 30 min, zapisovať do /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je povinný: upratovací skript pred odstránením overí nečinnosť cesty pomocou jednej snímky otvorených
súborov; bez tohto nástroja nič neodstráni a oznámi to
(exit 1). Každú zmenu najprv vyskúšajte s `--dry-run` — vypíše presne, čo by
urobil, a ničoho sa nedotkne.

Čo robí pri každom spustení: odstraňuje naše vlastné zvyšky (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) po **3 h v tmpfs** a po 24 h v diskovom
`_work/_temp`; ukončuje proces `next-build` starší ako 75 min (žiadna úloha nebeží tak dlho — dňa
2026-08-27 jedna bežala 70 min po tom, ako GitHub označil jej úlohu za stratenú); odstraňuje pracovné
kópie staršie ako 48 h patriace runnerom, ktorých jednotka je **zastavená**; upozorňuje pri využití disku ≥ 85 %, hodnote PSI pamäte
`full/avg60` ≥ 10 % a vyššom počte listenerov než `MAX_ACTIVE_RUNNERS` (s rozdelením na
omniroute/ostatné). Exit 1 = vyžaduje sa pozornosť; prečítajte si protokol.

## Jednotky runnera: KillMode

Predvolené nastavenie runnera `KillMode=process` ponechá procesy `Runner.Worker → npm → next-build`
spustené aj po zastavení alebo reštartovaní jednotky — osirotený build naďalej spotrebúva RAM a
CPU bez priradenej úlohy. Každá jednotka OmniRoute má doplnkovú konfiguráciu
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
s nastavením `KillMode=mixed`: najprv SIGTERM pre listener a pri
`TimeoutStop` SIGKILL pre celú cgroup. Nastavenie sa prejaví pri nasledujúcom reštarte jednotky — reštartujte
**naraz iba jeden runner a len vtedy, keď je nečinný**, pričom kontrola nečinnosti aj reštart musia byť v rovnakom príkaze.

## Prevádzkové pravidlá

- **Naraz iba jedno zostavenie Turbopack — vynútené štítkom.** Každá úloha, ktorá spúšťa úplné
  zostavenie Turbopack `next build`, cieli na `[self-hosted, omni-build]` a tento štítok má iba
  **`omniroute-113-5`**: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, nočné zostavenie a11y (#16853) a **amd64** v `docker-publish.yml` (webpack
  vnútri BuildKit — Turbopack tam zlyhal, beh 33253576569). Vetva Docker pre arm64 zostáva na
  `ubuntu-24.04-arm`. `docker-publish` pre amd64 zdieľa skupinu súbežnosti `heavy-build-main`
  s úlohou `Build` v `ci.yml` (`cancel-in-progress: false`). Docker Engine musí byť na
  `omniroute-113-5`. Druhý slot Turbopack sa do 78 GB nezmestí (2 × 33–37 GB plus zvyšok systému);
  druhý slot je bezpečný iba pre zostavenia webpack.
- **Release-Green má vlastný slot (2026-10-18).** Dovtedy sa obe validácie Release-Green spúšťali
  na `omni-build`: pri každom pushnutí (~10/hodinu, pričom za jeden deň bolo 97 zo 100 behov
  pushnutia zrušených uprostred práce) a tri úplné kontroly trvajúce ~2 h denne (kontrola o 05:29
  čakala na slot 6 h) — jediný slot na zostavenie bol niekoľkonásobne preťažený a zostavenia PR
  z vlastného pôvodu čakali celé hodiny. `release-green` a `main-green` teraz cielia na
  `omni-release` (iba `omniroute-113-6`) s `OMNIROUTE_USE_TURBOPACK=0` a spustený beh už nie je
  zrušený novším pushnutím (čakajúci slot stále zlučuje nápor). Test
  `tests/unit/build/runner-capacity-routing.test.ts` kontroluje smerovanie, prepnutie na webpack
  a to, že sa na `omni-release` nič nezostavuje pomocou Turbopack.
- **Ľahký fond: `omni-light`.** `omniroute-113` a `omniroute-113-2` spúšťajú nočné úlohy, ktoré
  potrebujú `next build` iba pre backend (~5–6 GB; webpack), a `lint-guard` z `quality.yml`.
  `omniroute-113` mal až do 2026-10-18 nastavenie `MemoryHigh=4G` — zostavenie promptfoo sa tam
  54 minút predieralo opakovaným uvoľňovaním pamäte; 8 GB odstraňuje toto obmedzovanie.
- **Zámerne menej listenerov.** Štyri jednotky OmniRoute boli 2026-08-29 deaktivované — každý
  ďalší listener je ďalším spotrebiteľom vyššie uvedeného pamäťového rozpočtu. Limit správcu
  čistenia je 6 (`MAX_ACTIVE_RUNNERS=6` v cron): počíta každý `Runner.Listener` na serveri
  a OmniHeuris + OmniMind pridávajú k našim štyrom ďalšie dva.
- **Nikdy ručne nečistite `/tmp` ani `_work`, kým je ktorýkoľvek runner zaneprázdnený.**
  Kontrola a následné odstránenie s časovou medzerou medzi týmito krokmi spôsobilo, že aktívna
  úloha Build prišla 2026-08-27 o svoj adresár `_work`. Správca čistenia vykonáva kontrolu
  a odstránenie v jednom kroku; nechajte to naňho.
- Zastavenie runnera uprostred úlohy túto úlohu zruší (pozorované naživo): `systemctl stop`
  používajte iba vtedy, keď jeho listener nemá žiadny podradený proces `Runner.Worker` — a
  vykonajte to jedným príkazom.
- Workflowy nesmú ukladať artefakty do `/tmp` (je v RAM). Sťahujte ich do
  `$RUNNER_TEMP` (na disku, samostatne pre každý runner) — stiahnutie 1,3 GB artefaktu
  `next-build` do tmpfs trvalo 27–32 minút, zatiaľ čo jeho nahratie z disku trvalo 2 minúty.
- VPS `.15` je určený iba na homologizáciu — nikdy na ňom nebežia CI runnery.
