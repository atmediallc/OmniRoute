# Self-Hosted Runner Box Operations (.113 pool) (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Az önálló üzemeltetésű készlet a **.113** gépen (`tomni-proxmox-113`) fut. 2026-10-18 óta minden
OmniRoute-futtatónak **egy szerepköre**, egy címkéje és olyan memória-/CPU-kerete van, amelynek köszönhetően a
`MemoryHigh` értékek összege közel marad a fizikai RAM méretéhez:

| futtató              | címke            | szerepkör                                                                                                                        | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`     | Turbopack-buildek: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, az éjszakai a11y-build | 40 GB / 44 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), webpack-build                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`     | éjszakai futások (Schemathesis, promptfoo, garak, k6, a11y boot) és a `quality.yml` `lint-guard` feladata                        | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`     | ugyanaz a készlet, mint fent                                                                                                     | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (saját tárolóik) | csak Dependabot (egyenként 155 MB-os csúcsérték, 2026-10-18)                                                                     | 4 GB / 6 GB                | egyenként 200 % |

Mérve: 2026-10-18:

| erőforrás | érték                   | mit jelent ez az ütemezés szempontjából                                                                                                                                                                                                                |
| --------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 mag**      | egy Turbopack éles build cgroup-korlát alatt 33–37 GB-nál tetőzik (korlátozás nélkül 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); egy webpack-build ~14–16 GB-nál. Egy Turbopack- és egy webpack-build együtt elfér; két Turbopack-build nem |
| swap      | 16 GB                   | az `omniroute-113-5` kikapcsolt swappal fut (`MemorySwapMax=0`), így egy elszabadult build a korlátjánál leáll, ahelyett hogy a gépet swapelésre kényszerítené                                                                                         |
| `/tmp`    | **12 GB tmpfs = RAM**   | minden, amit itt tárolnak, memóriát foglal; a maradványokat 3 óra után eltávolítja a rendszer                                                                                                                                                          |
| CPU       | 60-as terhelés 32 magon | a kvóták előtt egy Turbopack-build (~1166 % CPU) és az ugyanazon a gépen futó lefedettségi tesztcsomag együtt ellehetetlenítette a többi figyelőfolyamat heartbeatjeit (`The self-hosted runner lost communication`, #16853)                           |
| futtatók  | **6 figyelőfolyamat**   | 4 OmniRoute + OmniHeuris + OmniMind; az `omniroute-113-3/-4/-7/-8` le van tiltva (a `systemctl enable --now` újra elindít egyet)                                                                                                                       |

A korlátok az egyes unitok `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
fájljában találhatók (a korábbi értékeket az `override.conf.bak-20261018` őrzi), és élőben lettek alkalmazva a
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` paranccsal — újraindítás nélkül, így egyetlen
futó feladatot sem érintettek. A címkék szintén élőben, a runners API-n keresztül módosíthatók
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## A takarító telepítése (egyszeri művelet a gépen)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): 30 percenként, naplózás a /var/log/runner-janitor.log fájlba
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

Az `lsof` szükséges: a takarító a megnyitott fájlokról készített egyszeri
pillanatfelvétellel ellenőrzi, hogy egy elérési út nincs használatban, mielőtt
eltávolítaná; az eszköz nélkül semmit sem távolít el, és ezt jelzi is
(1-es kilépési kód). Minden módosítást először a `--dry-run` kapcsolóval próbáljon
ki — pontosan kiírja, mit tenne, és semmit sem módosít.

Minden futáskor a következőket végzi: eltakarítja a saját maradványainkat
(`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) **3 óra után a
tmpfs-ről**, illetve 24 óra után a lemezen lévő `_work/_temp` könyvtárból;
leállítja a 75 percnél régebbi `next-build` folyamatokat (egyetlen feladat sem fut
ilyen sokáig — 2026-08-27-én az egyik 70 percig futott azután, hogy a GitHub már
elveszettnek nyilvánította a feladatát); eltávolítja azon futtatók 48 óránál
régebbi munkapéldányait, amelyek egysége **le van állítva**; riaszt, ha a
lemezhasználat ≥ 85%, a memória PSI `full/avg60` értéke ≥ 10%, vagy a
figyelőfolyamatok száma meghaladja a `MAX_ACTIVE_RUNNERS` értékét (omniroute/egyéb
bontással). Az 1-es kilépési kód azt jelenti, hogy beavatkozás szükséges; olvassa
el a naplót.

## Runner egységek: KillMode

A runner alapértelmezett `KillMode=process` beállítása életben hagyja a
`Runner.Worker → npm → next-build` folyamatláncot, amikor egy egységet leállítanak
vagy újraindítanak — az árva build továbbra is fogyasztja a RAM-ot és a CPU-t,
miközben már nem tartozik hozzá feladat. Minden OmniRoute egységhez tartozik egy
felülíró konfiguráció
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
`KillMode=mixed` beállítással: először SIGTERM-et küld a listenernek, majd a
`TimeoutStop` elérésekor SIGKILL-t a teljes cgroupnak. Ez az egység következő
újraindításakor lép életbe — **egyszerre csak egy runnert indíts újra, kizárólag
üresjáratban**, az üresjárat ellenőrzését és az újraindítást ugyanabban a parancsban
végrehajtva.

## Működési szabályok

- **Egyszerre csak egy Turbopack-build — címkével kikényszerítve.** Minden teljes Turbopack
  `next build` parancsot futtató feladat a `[self-hosted, omni-build]` célra irányul, és csak az
  **`omniroute-113-5`** rendelkezik ezzel a címkével: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, az éjszakai a11y-build (#16853), valamint a
  `docker-publish.yml` **amd64** ága (webpack a BuildKiten belül — a Turbopack ott pánikhibát adott,
  33253576569 számú futás). Az arm64 Docker-ág továbbra is az `ubuntu-24.04-arm` rendszeren fut.
  A `docker-publish` amd64 ága ugyanazt a `heavy-build-main` párhuzamossági csoportot használja,
  mint a `ci.yml` `Build` (`cancel-in-progress: false`). A Docker Engine-nek az
  `omniroute-113-5` gépen kell lennie. Egy második Turbopack-hely nem fér bele a 78 GB-ba
  (2 × 33–37 GB, plusz a gép többi terhelése); második hely csak webpack-buildekhez biztonságos.
- **A Release-Green saját hellyel rendelkezik (2026-10-18).** Addig mindkét Release-Green-ellenőrzés
  az `omni-build` rendszeren futott: minden pushnál (~10/óra; egy nap alatt 100 push-futásból 97-et
  munka közben megszakítottak), továbbá naponta három, egyenként ~2 órás teljes ellenőrzésként
  (a 05:29-es ellenőrzés 6 órát várt a helyre) — az egyetlen buildhely kapacitását többszörösen
  túllépték az igények, és a saját eredetű PR-ek Build feladatai órákig vártak.
  A `release-green` és a `main-green` most az `omni-release` célra irányul (csak
  `omniroute-113-6`), `OMNIROUTE_USE_TURBOPACK=0` beállítással, és az elindult futást már nem
  szakítja meg egy újabb push (a függőben lévő hely továbbra is összevonja a futásvihart).
  A `tests/unit/build/runner-capacity-routing.test.ts` rögzíti az útválasztást, a webpackre
  váltást, valamint azt, hogy az `omni-release` rendszeren semmi sem buildel Turbopackkel.
- **Könnyű terhelésű készlet: `omni-light`.** Az `omniroute-113` és az `omniroute-113-2` futtatja
  azokat az éjszakai feladatokat, amelyekhez csak backendes `next build` szükséges
  (~5–6 GB; webpack), valamint a `quality.yml` `lint-guard` feladatát. Az `omniroute-113`
  `MemoryHigh=4G` korláttal rendelkezett 2026-10-18-ig — a promptfoo-build 54 percen keresztül
  memória-visszanyeréssel küszködött rajta; 8 GB megszünteti a korlátozás miatti lassulást.
- **Szándékosan kevesebb listener.** Négy OmniRoute-egységet letiltottunk 2026-08-29-én — minden
  további listener újabb fogyasztója a fenti memóriakeretnek. A takarító felső korlátja 6
  (`MAX_ACTIVE_RUNNERS=6` a cronban): a gépen futó összes `Runner.Listener` példányt számolja,
  az OmniHeuris és az OmniMind pedig további kettőt ad a mi négy példányunkhoz.
- **Soha ne tisztítsd kézzel a `/tmp` vagy az `_work` könyvtárat, amíg bármely runner foglalt.**
  Egy ellenőrzés, majd az attól időben elkülönített törlés miatt veszítette el egy aktív Build
  feladat az `_work` könyvtárát 2026-08-27-én. A takarító egyetlen lépésben végzi el az ellenőrzést
  és az eltávolítást; bízd rá.
- Egy runner feladat közbeni leállítása megszakítja a feladatot (élőben megfigyelve): a
  `systemctl stop` csak akkor használható, ha a listenerének nincs `Runner.Worker`
  gyermekfolyamata — és ezt egyetlen paranccsal kell elvégezni.
- A workflow-k nem tárolhatnak műtermékeket a `/tmp` könyvtárban (az RAM-ban van). A letöltés
  célja a `$RUNNER_TEMP` legyen (lemezen, runnerenként elkülönítve) — az 1,3 GB-os `next-build`
  műtermék 27–32 perc alatt került a tmpfs-re, míg lemezről 2 perc alatt töltődött fel.
- A `.15` VPS kizárólag homologációs célú — soha nem futtat CI-runnereket.
