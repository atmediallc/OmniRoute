# Self-Hosted Runner Box Operations (.113 pool) (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Savarankiškai prieglobiamas telkinys veikia **.113** serveryje (`tomni-proxmox-113`). Nuo 2026-10-18 kiekviena
„OmniRoute“ vykdyklė turi **vieną paskirtį**, vieną žymą ir atminties / CPU biudžetą, dėl kurio bendra
`MemoryHigh` suma išlieka artima fizinės RAM kiekiui:

| vykdyklė             | žyma           | paskirtis                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | „Turbopack“ kompiliavimai: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, naktinis a11y kompiliavimas | 40 GB / 44 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release` | „Release-Green“ (`release-green` + `main-green`), „webpack“ kompiliavimas                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`   | naktinės užduotys („Schemathesis“, „promptfoo“, „garak“, k6, a11y paleidimas) ir `quality.yml` `lint-guard`                                   | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`   | tas pats telkinys kaip pirmiau                                                                                                                | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (jų saugyklos) | tik „Dependabot“ (didžiausias kiekvienos naudojimas – 155 MB, 2026-10-18)                                                                     | 4 GB / 6 GB                | po 200 %   |

Išmatuota 2026-10-18:

| išteklius | reikšmė                             | reikšmė planavimui                                                                                                                                                                                                                                                                                       |
| --------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 branduoliai**          | produkcinis „Turbopack“ kompiliavimas, ribojamas per cgroup, pasiekia 33–37 GB (be ribojimo – 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`), o „webpack“ kompiliavimas – apie 14–16 GB. Vienas „Turbopack“ ir vienas „webpack“ kompiliavimas gali vykti kartu; du „Turbopack“ kompiliavimai – ne |
| swap      | 16 GB                               | `omniroute-113-5` veikia išjungus swap (`MemorySwapMax=0`), todėl nevaldomas kompiliavimas nutraukiamas pasiekus jam nustatytą ribą, užuot privertus serverį naudoti swap                                                                                                                                |
| `/tmp`    | **12 GB tmpfs = RAM**               | viskas, kas ten paliekama, užima atmintį; likučiai pašalinami po 3 val.                                                                                                                                                                                                                                  |
| CPU       | 32 branduoliuose stebėta 60 apkrova | prieš nustatant kvotas vienas „Turbopack“ kompiliavimas (~1166 % CPU) kartu su aprėpties testų rinkiniu tame pačiame serveryje atėmė iš kitų klausytuvų išteklius, reikalingus ryšiui palaikyti (`The self-hosted runner lost communication`, #16853)                                                    |
| vykdyklės | **6 klausytuvai**                   | 4 „OmniRoute“ + „OmniHeuris“ + „OmniMind“; `omniroute-113-3/-4/-7/-8` yra išjungtos (`systemctl enable --now` vėl paleidžia vieną iš jų)                                                                                                                                                                 |

Ribos nurodytos kiekvieno vieneto faile `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(ankstesnės reikšmės išsaugotos kaip `override.conf.bak-20261018`) ir buvo pritaikytos veikiančiai sistemai naudojant
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — nepaleidžiant iš naujo, todėl nė viena
vykdoma užduotis nebuvo paveikta. Žymos taip pat nestabdant sistemos keičiamos per vykdyklių API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Įdiekite valymo priemonę (vieną kartą serveryje)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): kas 30 min., žurnalą rašyti į /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` yra būtinas: prieš ką nors pašalindama valymo priemonė pagal vieną atvertų
failų momentinę kopiją patvirtina, kad kelias nenaudojamas; be šio įrankio ji
nieko nepašalina ir apie tai praneša (exit 1). Bet kokį pakeitimą pirmiausia
išbandykite su `--dry-run` — bus tiksliai parodyta, kas būtų padaryta, nieko
nekeičiant.

Kiekvieno paleidimo metu atliekami šie veiksmai: išvalomi mūsų pačių likučiai
(`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) po **3 val. tmpfs**
ir po 24 val. disko kataloge `_work/_temp`; nutraukiamas ilgiau nei 75 min.
veikiantis `next-build` (jokia užduotis taip ilgai nevykdoma — 2026-08-27 vienas
procesas veikė 70 min. po to, kai GitHub paskelbė jo užduotį prarasta); pašalinamos
senesnės nei 48 val. vykdytojų, kurių paslauga yra **sustabdyta**, darbinės
kopijos; siunčiami įspėjimai, kai disko naudojimas ≥ 85 %, atminties PSI
`full/avg60` ≥ 10 % arba procesų yra daugiau nei `MAX_ACTIVE_RUNNERS` (atskirai
nurodant omniroute ir kitus). Exit 1 = reikia atkreipti dėmesį; perskaitykite
žurnalą.

## Vykdyklių vienetai: KillMode

Numatytasis vykdyklės nustatymas `KillMode=process`, sustabdžius arba paleidus vienetą iš naujo, palieka
`Runner.Worker → npm → next-build` procesus veikti — našlaičiu likęs komponavimo procesas toliau naudoja RAM ir
CPU, nors su juo nesusieta jokia užduotis. Kiekvienas OmniRoute vienetas turi papildomą konfigūracijos failą
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
su `KillMode=mixed`: pirmiausia klausytojui siunčiamas SIGTERM, o pasiekus
`TimeoutStop` visai cgroup siunčiamas SIGKILL. Nustatymas įsigalioja kitą kartą paleidus vienetą iš naujo — iš naujo paleiskite **po vieną vykdyklę,
tik kai ji neveikli**, o neveiklumo patikrą ir paleidimą iš naujo atlikite ta pačia komanda.

## Veikimo taisyklės

- **Vienu metu vykdoma tik viena Turbopack kompiliacija — tai užtikrinama žyma.** Kiekviena užduotis, vykdanti visą Turbopack
  `next build`, naudoja `[self-hosted, omni-build]`, o šią žymą turi tik **`omniroute-113-5`**:
  `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  naktinė a11y kompiliacija (#16853) ir `docker-publish.yml` **amd64** (webpack BuildKit viduje —
  ten Turbopack užstrigo, vykdymas 33253576569). arm64 Docker etapas lieka `ubuntu-24.04-arm`.
  `docker-publish` amd64 dalijasi `heavy-build-main` lygiagretumo grupe su `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine turi veikti `omniroute-113-5`. Antram Turbopack
  lizdui 78 GB nepakanka (2 × 33–37 GB ir likusi sistemos apkrova); antras lizdas saugus tik
  webpack kompiliacijoms.
- **Release-Green turi atskirą lizdą (2026-10-18).** Iki tol abi Release-Green patikros buvo
  vykdomos `omni-build`: po kiekvieno push (~10 per valandą; per vieną dieną darbo viduryje
  atšaukti 97 iš 100 push vykdymų) ir tris kartus per dieną atliekant ~2 val. trukmės išsamias
  patikras (05:29 patikra lizdo laukė 6 val.) — vienintelis kompiliavimo lizdas buvo kelis kartus
  perkrautas, o to paties šaltinio PR kompiliacijos laukė valandų valandas.
  `release-green` ir `main-green` dabar naudoja `omni-release` (tik `omniroute-113-6`) su
  `OMNIROUTE_USE_TURBOPACK=0`, o pradėtas vykdymas nebėra atšaukiamas dėl naujesnio push
  (laukiantis lizdas vis dar sutraukia užduočių antplūdį). `tests/unit/build/runner-capacity-routing.test.ts`
  įtvirtina maršrutizavimą, webpack perjungimą ir užtikrina, kad niekas `omni-release` aplinkoje
  nebūtų kompiliuojama naudojant Turbopack.
- **Lengvųjų vykdyklių telkinys: `omni-light`.** `omniroute-113` ir `omniroute-113-2` vykdo
  naktines užduotis, kurioms reikia tik backend skirto `next build` (~5–6 GB; webpack), ir
  `quality.yml` `lint-guard`. Iki 2026-10-18 `omniroute-113` turėjo `MemoryHigh=4G` — promptfoo
  kompiliacija 54 minutes ten vykdė agresyvų atminties atlaisvinimą; 8 GB pašalina šį ribojimą.
- **Sąmoningai naudojama mažiau klausytojų.** Keturi OmniRoute vienetai buvo išjungti 2026-08-29 —
  kiekvienas papildomas klausytojas yra dar vienas pirmiau nurodyto atminties biudžeto naudotojas.
  Tvarkytojo riba yra 6 (`MAX_ACTIVE_RUNNERS=6` cron užduotyje): jis suskaičiuoja
  kiekvieną serveryje veikiantį `Runner.Listener`, o OmniHeuris ir OmniMind prie mūsų keturių
  prideda dar du.
- **Niekada nevalykite `/tmp` arba `_work` rankiniu būdu, kol bent vienas vykdyklis užimtas.**
  Patikra ir po jos su pauze atliekamas šalinimas yra priežastis, dėl kurios aktyvi `Build` užduotis
  2026-08-27 prarado savo `_work`. Tvarkytojas patikrą ir šalinimą atlieka vienu veiksmu;
  leiskite jam tai padaryti.
- Vykdyklio sustabdymas vykdant užduotį ją atšaukia (stebėta realioje sistemoje): `systemctl stop`
  naudokite tik tada, kai jo klausytojas neturi antrinio `Runner.Worker` proceso, ir atlikite tai
  viena komanda.
- Darbo eigos negali laikyti artefaktų `/tmp` (tai yra RAM). Atsisiųskite į
  `$RUNNER_TEMP` (diske, atskirai kiekvienam vykdykliui) — 1,3 GB `next-build` artefakto įrašymas
  į tmpfs užtruko 27–32 minutes, o įkėlimas iš disko — 2 minutes.
- `.15` VPS skirtas tik homologacijai — jame niekada nevykdomi CI vykdykliai.
