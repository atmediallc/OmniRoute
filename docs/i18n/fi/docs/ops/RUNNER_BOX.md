# Self-Hosted Runner Box Operations (.113 pool) (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Itse isännöity pooli toimii **.113**-koneella (`tomni-proxmox-113`). 2026-10-18 lähtien jokaisella
OmniRoute-runnerilla on **yksi rooli**, yksi tunniste sekä muisti-/suoritinbudjetti, joka pitää
`MemoryHigh`-arvojen summan lähellä fyysisen RAM-muistin määrää:

| runner               | tunniste       | rooli                                                                                                                       | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-koonnit: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, öinen a11y-koonti | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-koonti                                                              | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`   | öiset ajot (Schemathesis, promptfoo, garak, k6, a11y-käynnistys) ja `quality.yml` `lint-guard`                              | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`   | sama pooli kuin yllä                                                                                                        | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (niiden repot) | vain Dependabot (huippu 155 MB kumpikin, 2026-10-18)                                                                        | 4 GB / 6 GB                | 200 % kumpikin |

Mitattu 2026-10-18:

| resurssi  | arvo                           | merkitys ajoitukselle                                                                                                                                                                                                                                                                                 |
| --------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 ydintä**          | Turbopack-tuotantokoonti käyttää huipussaan 33–37 GB cgroup-rajoituksen alaisena (49 GB ilman rajoitusta, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack-koonti noin 14–16 GB. Yksi Turbopack- ja yksi webpack-koonti mahtuvat ajettaviksi samanaikaisesti; kaksi Turbopack-koontia ei mahdu |
| swap      | 16 GB                          | `omniroute-113-5` toimii ilman swapia (`MemorySwapMax=0`), joten hallitsemattomasti kasvava koonti katkaistaan raja-arvossaan sen sijaan, että se alkaisi käyttää koneen swapia                                                                                                                       |
| `/tmp`    | **12 GB tmpfs = RAM**          | kaikki sinne jätetty käyttää muistia; jäännökset siivotaan 3 tunnin kuluttua                                                                                                                                                                                                                          |
| CPU       | 32 ytimellä havaittu kuorma 60 | ennen kiintiöitä yksi Turbopack-koonti (noin 1166 % CPU:ta) yhdessä samalla koneella ajetun kattavuustestisarjan kanssa esti muiden kuuntelijoiden heartbeat-viestit (`The self-hosted runner lost communication`, #16853)                                                                            |
| runnerit  | **6 kuuntelijaa**              | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` on poistettu käytöstä (`systemctl enable --now` palauttaa yhden käyttöön)                                                                                                                                                             |

Rajoitukset sijaitsevat kunkin yksikön tiedostossa `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(aiemmat arvot on säilytetty nimellä `override.conf.bak-20261018`), ja ne otettiin käyttöön ajon aikana komennolla
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — ilman uudelleenkäynnistystä, joten
käynnissä oleviin töihin ei koskettu. Tunnisteet muutetaan runnerien API:n kautta
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), myös ajon aikana.

## Asenna siivooja (kerran palvelimella)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): 30 minuutin välein, loki tiedostoon /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` vaaditaan: siivooja varmistaa yhdellä avoimien tiedostojen tilannevedoksella,
että polku ei ole käytössä, ennen kuin se poistaa polun. Ilman työkalua se ei poista
mitään ja ilmoittaa asiasta (`exit 1`). Kokeile kaikkia muutoksia ensin valitsimella
`--dry-run` — se tulostaa täsmälleen, mitä se tekisi, eikä muuta mitään.

Mitä se tekee jokaisella suorituskerralla: siivoaa omat jäänteemme (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`) **3 tunnin jälkeen tmpfs:stä**
ja 24 tunnin jälkeen levyn `_work/_temp`-hakemistosta; lopettaa yli 75 minuuttia
vanhan `next-build`-prosessin (mikään työ ei kestä niin kauan — 2026-08-27 yksi
jatkoi suorittamista 70 minuuttia sen jälkeen, kun GitHub oli ilmoittanut työn
menetetyksi); poistaa 48 tuntia vanhat työkopiot runnereilta, joiden yksikkö on
**pysäytetty**; hälyttää, kun levyn käyttöaste on ≥ 85 %, muistin PSI-arvo
`full/avg60` on ≥ 10 % tai kuuntelijoita on enemmän kuin `MAX_ACTIVE_RUNNERS`
(erittelynä omniroute/muut). Exit 1 = vaatii huomiota; lue loki.

## Runner-yksiköt: KillMode

Runnerin oletusasetus `KillMode=process` jättää prosessiketjun `Runner.Worker → npm → next-build`
käyntiin, kun yksikkö pysäytetään tai käynnistetään uudelleen — orvoksi jäänyt koonti kuluttaa edelleen RAM-muistia ja
suoritinaikaa, vaikka siihen ei liity enää työtä. Jokaisella OmniRoute-yksiköllä on drop-in-määritys
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`),
jossa on `KillMode=mixed`: ensin SIGTERM kuuntelijalle ja `TimeoutStop`-ajan kohdalla
SIGKILL koko cgroupille. Se tulee voimaan yksikön seuraavan uudelleenkäynnistyksen yhteydessä — käynnistä uudelleen **yksi runner
kerrallaan ja vain sen ollessa jouten**, siten että joutenolotarkistus ja uudelleenkäynnistys ovat samassa komennossa.

## Toimintasäännöt

- **Vain yksi Turbopack-koonti kerrallaan — pakotetaan tunnisteella.** Jokainen täydellisen Turbopack-
  `next build` -koonnin suorittava työ kohdistuu tunnisteisiin `[self-hosted, omni-build]`, ja vain
  **`omniroute-113-5`** käyttää kyseistä tunnistetta: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, öinen a11y-koonti (#16853) ja `docker-publish.yml`
  **amd64** (webpack BuildKitin sisällä — Turbopack panikoi siellä, ajo 33253576569). Dockerin
  arm64-osuus pysyy ympäristössä `ubuntu-24.04-arm`. `docker-publish` amd64 jakaa
  `heavy-build-main`-rinnakkaisuusryhmän työn `ci.yml` `Build` kanssa
  (`cancel-in-progress: false`). Docker Enginen on oltava koneella `omniroute-113-5`. Toinen
  Turbopack-paikka ei mahdu 78 GB:uun (2 × 33–37 GB sekä koneen muu kuorma); toinen paikka on
  turvallinen vain webpack-koonneille.
- **Release-Greenillä on oma paikkansa (2026-10-18).** Siihen asti molemmat Release-Green-tarkistukset
  suoritettiin tunnisteella `omni-build`: jokaisella pushilla (~10/tunti, yhden päivän aikana 97
  sadasta push-ajosta peruttiin kesken työn) ja kolmessa päivittäisessä ~2 tunnin täydellisessä
  tarkistuksessa (kello 05:29 alkanut tarkistus odotti paikkaa 6 tuntia) — ainoa koontipaikka oli
  moninkertaisesti ylikuormitettu, ja omasta alkuperästä tulleiden PR:ien koontityöt odottivat
  tuntikausia. `release-green` ja `main-green` kohdistuvat nyt tunnisteeseen `omni-release`
  (vain `omniroute-113-6`) asetuksella `OMNIROUTE_USE_TURBOPACK=0`, eikä jo alkanutta ajoa enää
  peruta uudemman pushin vuoksi (odottava paikka yhdistää edelleen ryöpyn). Testi
  `tests/unit/build/runner-capacity-routing.test.ts` lukitsee reitityksen, webpack-valinnan ja sen,
  ettei mikään tunnisteella `omni-release` suoritettava työ koonnu Turbopackilla.
- **Kevyt pooli: `omni-light`.** `omniroute-113` ja `omniroute-113-2` suorittavat öiset työt, jotka
  tarvitsevat vain taustapalvelimen `next build` -koonnin (~5–6 GB; webpack), sekä työn
  `quality.yml` `lint-guard`. Koneella `omniroute-113` oli `MemoryHigh=4G` päivään 2026-10-18
  asti — promptfoo-koonti eteni siellä muistia vapautellen 54 minuutin ajan; 8 GB poistaa
  kuristuksen.
- **Tarkoituksella vähemmän kuuntelijoita.** Neljä OmniRoute-yksikköä poistettiin käytöstä
  2026-08-29 — jokainen ylimääräinen kuuntelija on yksi lisäkuluttaja edellä kuvatussa
  muistibudjetissa. Siivoojan enimmäismäärä on 6 (`MAX_ACTIVE_RUNNERS=6` cronissa): se laskee
  koneen jokaisen `Runner.Listener`-prosessin, ja OmniHeuris + OmniMind lisäävät kaksi kuuntelijaa
  meidän neljän kuuntelijamme lisäksi.
- **Älä koskaan tyhjennä hakemistoja `/tmp` tai `_work` käsin, kun yksikin ajuri on varattu.**
  Tarkistus ja sitä viiveen jälkeen seuraava poisto johtivat siihen, että käynnissä ollut
  Build-työ menetti `_work`-hakemistonsa 2026-08-27. Siivooja tekee tarkistuksen ja poiston
  yhdessä vaiheessa; anna sen hoitaa työ.
- Ajurin pysäyttäminen kesken työn peruu työn (havaittu käytännössä): käytä komentoa
  `systemctl stop` vain, kun sen kuuntelijalla ei ole `Runner.Worker`-lapsiprosessia — ja tee
  tämä yhdellä komennolla.
- Työnkulut eivät saa säilyttää artefakteja hakemistossa `/tmp` (se sijaitsee RAM-muistissa).
  Lataa ne hakemistoon `$RUNNER_TEMP` (levyllä, ajurikohtainen) — 1,3 GB:n `next-build`-artefaktin
  tallentuminen tmpfs:ään kesti 27–32 minuuttia, kun taas levyltä sen lataaminen palveluun kesti
  2 minuuttia.
- `.15`-VPS on tarkoitettu vain homologointiin — siinä ei koskaan suoriteta CI-ajureita.
