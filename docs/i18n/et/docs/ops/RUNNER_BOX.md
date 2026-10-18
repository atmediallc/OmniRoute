# Self-Hosted Runner Box Operations (.113 pool) (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Isehostitud kogum töötab **.113** masinas (`tomni-proxmox-113`). Alates 2026-10-18 on igal
OmniRoute'i runner'il **üks roll**, üks silt ning mälu-/CPU-eelarve, mis hoiab
`MemoryHigh` väärtuste summa füüsilise RAM-i mahu lähedal:

| runner               | silt                    | roll                                                                                                                        | `MemoryHigh` / `MemoryMax`    | `CPUQuota`     |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`            | Turbopacki järgud: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, igaöine a11y järk | 40 GB / 44 GB (saaleala 0)    | 1600 %         |
| `omniroute-113-6`    | `omni-release`          | Release-Green (`release-green` + `main-green`), webpacki järk                                                               | 20 GB / 24 GB (saaleala 4 GB) | 800 %          |
| `omniroute-113-2`    | `omni-light`            | igaöised tööd (Schemathesis, promptfoo, garak, k6, a11y käivitus) ja `quality.yml` `lint-guard`                             | 12 GB / 16 GB (saaleala 4 GB) | 600 %          |
| `omniroute-113`      | `omni-light`            | sama kogum nagu eespool                                                                                                     | 8 GB / 12 GB                  | 400 %          |
| OmniHeuris, OmniMind | (nende repositooriumid) | ainult Dependabot (tipp 155 MB kummalgi, 2026-10-18)                                                                        | 4 GB / 6 GB                   | 200 % kummalgi |

Mõõdetud 2026-10-18:

| ressurss  | väärtus                                  | tähendus ajastamise jaoks                                                                                                                                                                                                                                 |
| --------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 tuuma**                     | Turbopacki tootmisjärk saavutab cgroup'i piirangu all tipuks 33–37 GB (piiranguta 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); webpacki järk umbes 14–16 GB. Üks Turbopacki ja üks webpacki järk mahuvad korraga; kaks Turbopacki järku ei mahu |
| saaleala  | 16 GB                                    | `omniroute-113-5` töötab ilma saalealata (`MemorySwapMax=0`), mistõttu kontrolli alt väljunud järk peatatakse piirangu saavutamisel, selle asemel et masin hakkaks saaleala kasutama                                                                      |
| `/tmp`    | **12 GB tmpfs = RAM**                    | kõik sinna paigutatu kasutab mälu; jäägid eemaldatakse 3 tunni pärast                                                                                                                                                                                     |
| CPU       | 32 tuumaga masinal täheldati koormust 60 | enne kvootide kehtestamist jättis üks Turbopacki järk (CPU kasutus ~1166 %) koos samas masinas töötava katvustestide komplektiga teiste kuulajate südamelöögid ressurssideta (`The self-hosted runner lost communication`, #16853)                        |
| runner'id | **6 kuulajat**                           | 4 OmniRoute'i + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` on keelatud (`systemctl enable --now` aktiveerib ühe neist uuesti)                                                                                                                      |

Piirangud asuvad iga üksuse failis `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(varasemad väärtused on säilitatud failina `override.conf.bak-20261018`) ning need rakendati töötavas süsteemis käsuga
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — taaskäivitamist ei tehtud, seega ühtegi
töötavat tööd ei mõjutatud. Silte muudetakse runner'ite API kaudu
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), samuti töötavas süsteemis.

## Koristaja paigaldamine (ühekordselt, masinas)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): iga 30 min järel, logi faili /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` on nõutav: enne tee eemaldamist tõendab koristaja ühe avatud failide
hetktõmmise abil, et tee pole kasutusel; ilma selle tööriistata ei eemalda see
midagi ja annab sellest teada (väljumiskood 1). Proovige kõiki muudatusi esmalt
lipuga `--dry-run` — see väljastab täpselt, mida tehtaks, ega muuda midagi.

Mida see igal käituskorral teeb: koristab meie enda jäägid (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) **3 h pärast tmpfs-ist** ja 24 h pärast kettal
asuvast kataloogist `_work/_temp`; lõpetab üle 75 min vanuse `next-build`-protsessi
(ükski töö ei kesta nii kaua — 2026-08-27 töötas üks protsess 70 min pärast seda,
kui GitHub oli selle töö kadunuks kuulutanud); eemaldab 48 h vanused
väljaregistreerimised käitajatelt, mille üksus on **peatatud**; annab häire, kui
ketta kasutus on ≥ 85 %, mälu PSI `full/avg60` on ≥ 10 % või kuulajaid on rohkem
kui `MAX_ACTIVE_RUNNERS` (koos jaotusega omniroute/muud). Väljumiskood 1 =
vajab tähelepanu; lugege logi.

## Käitajaüksused: KillMode

Käitaja vaikimisi `KillMode=process` jätab `Runner.Worker → npm → next-build`
protsessid üksuse peatamisel või taaskäivitamisel tööle — orvuks jäänud koostamine tarbib jätkuvalt RAM-i ja
CPU-d, kuigi sellega pole seotud ühtegi tööd. Igal OmniRoute'i üksusel on lisakonfiguratsioon
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
väärtusega `KillMode=mixed`: esmalt saadetakse kuulajale SIGTERM ja
`TimeoutStop` saabumisel kogu cgroup'ile SIGKILL. See jõustub üksuse järgmisel taaskäivitamisel — taaskäivitage
**üks käitaja korraga ja ainult siis, kui see on jõude**, kusjuures jõudeoleku kontroll ja taaskäivitamine peavad olema samas käsus.

## Tööreeglid

- **Üks Turbopacki koostamine korraga — jõustatud sildiga.** Iga töö, mis käitab täieliku Turbopacki
  `next build` käsu, sihib `[self-hosted, omni-build]`, ja ainult **`omniroute-113-5`** kannab seda
  silti: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  igaöine a11y koostamine (#16853) ja `docker-publish.yml` **amd64** (webpack BuildKiti sees —
  Turbopack jooksis seal kokku, käivitus 33253576569). Dockeri arm64 haru jääb keskkonda `ubuntu-24.04-arm`.
  `docker-publish` amd64 jagab konkurentsirühma `heavy-build-main` töövoo `ci.yml` tööga `Build`
  (`cancel-in-progress: false`). Docker Engine peab asuma masinas `omniroute-113-5`. Teine Turbopacki
  pesa ei mahu 78 GB sisse (2 × 33–37 GB pluss masina ülejäänud koormus); teine pesa on ohutu ainult
  webpacki koostamiste jaoks.
- **Release-Greenil on oma pesa (2026-10-18).** Seni töötasid mõlemad Release-Greeni valideerimised
  keskkonnas `omni-build`: iga tõuke korral (~10 tunnis, ühe päeva jooksul tühistati töö käigus 97 tõukekäivitust
  100-st) ja kolm ~2-tunnist täielikku läbimist päevas (05:29 läbimine ootas pesa 6 tundi) — ainus koostamispesa
  oli mitmekordselt üle koormatud ja sama päritoluga PR-ide koostamised ootasid tunde.
  `release-green` ja `main-green` sihivad nüüd keskkonda `omni-release` (ainult `omniroute-113-6`) muutujaga
  `OMNIROUTE_USE_TURBOPACK=0`, ning käivitatud tööd ei tühistata enam uuema tõuke tõttu (ootel pesa koondab
  endiselt tööde tulva). `tests/unit/build/runner-capacity-routing.test.ts`
  fikseerib marsruutimise, webpackile lülitumise ja selle, et miski keskkonnas `omni-release` ei koosta Turbopackiga.
- **Kerge koormuse reserv: `omni-light`.** `omniroute-113` ja `omniroute-113-2` käitavad igaöiseid töid, mis vajavad
  ainult tagasüsteemi `next build` koostamist (~5–6 GB; webpack), ning töövoo `quality.yml` tööd `lint-guard`. Masinal `omniroute-113`
  oli kuni 2026-10-18 `MemoryHigh=4G` — promptfoo koostamine edenes seal mälutagastuse tõttu 54 minutit;
  8 GB kõrvaldab piiramise.
- **Teadlikult vähem kuulareid.** Neli OmniRoute'i üksust keelati 2026-08-29 — iga lisakuular
  on ülaltoodud mälueelarve jaoks veel üks rentnik. Koristaja ülempiir on 6 (`MAX_ACTIVE_RUNNERS=6` cronis): see loendab
  masinas iga `Runner.Listener` protsessi ning OmniHeuris + OmniMind lisavad meie neljale veel kaks.
- **Ära kunagi puhasta `/tmp` ega `_work` kataloogi käsitsi, kui mõni käitaja on hõivatud.**
  Kontrollimine ja seejärel viivitusega kustutamine põhjustas 2026-08-27 töötava Build-töö
  `_work` kataloogi kadumise. Koristaja teeb kontrolli ja eemaldamise ühe sammuna;
  lase tal seda teha.
- Käitaja peatamine töö ajal tühistab töö (reaalselt täheldatud): kasuta `systemctl stop` ainult
  siis, kui selle kuularil pole `Runner.Worker` alamprotsessi — ning tee seda ühe käsuga.
- Töövood ei tohi artefakte kataloogi `/tmp` jätta (see asub RAM-is). Laadi need alla asukohta
  `$RUNNER_TEMP` (kettal, iga käitaja jaoks eraldi) — 1,3 GB suuruse `next-build` artefakti tmpfs-i jõudmine võttis 27–32
  minutit, kettalt üleslaadimine aga 2 minutit.
- VPS `.15` on ainult homologeerimiseks — see ei käita kunagi CI-käitajaid.
