# Self-Hosted Runner Box Operations (.113 pool) (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Pašmitināto izpildītāju pūls darbojas **.113** serverī (`tomni-proxmox-113`). Kopš 2026-10-18 katram
OmniRoute izpildītājam ir **viena loma**, viena etiķete un atmiņas/CPU budžets, kas uztur
`MemoryHigh` kopsummu tuvu fiziskās RAM apjomam:

| izpildītājs          | etiķete           | loma                                                                                                                           | `MemoryHigh` / `MemoryMax`    | `CPUQuota`   |
| -------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ------------ |
| `omniroute-113-5`    | `omni-build`      | Turbopack būvējumi: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nakts a11y būvējums | 40 GB / 44 GB (mijvieta 0)    | 1600 %       |
| `omniroute-113-6`    | `omni-release`    | Release-Green (`release-green` + `main-green`), webpack būvējums                                                               | 20 GB / 24 GB (mijvieta 4 GB) | 800 %        |
| `omniroute-113-2`    | `omni-light`      | nakts uzdevumi (Schemathesis, promptfoo, garak, k6, a11y sāknēšana) un `quality.yml` `lint-guard`                              | 12 GB / 16 GB (mijvieta 4 GB) | 600 %        |
| `omniroute-113`      | `omni-light`      | tas pats pūls, kas iepriekš                                                                                                    | 8 GB / 12 GB                  | 400 %        |
| OmniHeuris, OmniMind | (to repozitoriji) | tikai Dependabot (maksimums 155 MB katram, 2026-10-18)                                                                         | 4 GB / 6 GB                   | 200 % katram |

Mērīts 2026-10-18:

| resurss     | vērtība                           | ko tas nozīmē plānošanai                                                                                                                                                                                                                                                                     |
| ----------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU   | **78 GB / 32 kodoli**             | Turbopack produkcijas būvējums sasniedz 33–37 GB maksimumu ar cgroup ierobežojumu (49 GB bez ierobežojuma, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack būvējums — aptuveni 14–16 GB. Viens Turbopack un viens webpack būvējums var darboties kopā; divi Turbopack būvējumi nevar |
| mijvieta    | 16 GB                             | `omniroute-113-5` darbojas ar izslēgtu mijvietu (`MemorySwapMax=0`), lai nekontrolēts būvējums tiktu apturēts pie tā ierobežojuma, nevis liktu serverim izmantot mijvietu                                                                                                                    |
| `/tmp`      | **12 GB tmpfs = RAM**             | viss, kas tur novietots, patērē atmiņu; pārpalikumi tiek iztīrīti pēc 3 h                                                                                                                                                                                                                    |
| CPU         | novērota slodze 60 uz 32 kodoliem | pirms kvotu ieviešanas viens Turbopack būvējums (~1166 % CPU) kopā ar pārklājuma testu komplektu tajā pašā serverī atņēma resursus pārējo klausītāju sirdspukstu signāliem (`The self-hosted runner lost communication`, #16853)                                                             |
| izpildītāji | **6 klausītāji**                  | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` ir atspējoti (`systemctl enable --now` atkal iespējo vienu no tiem)                                                                                                                                                          |

Ierobežojumi atrodas katras vienības failā `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(iepriekšējās vērtības saglabātas kā `override.conf.bak-20261018`) un tika lietoti darbības laikā ar
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez restartēšanas, tādēļ neviens
izpildē esošs uzdevums netika skarts. Etiķetes tiek mainītas, izmantojot izpildītāju API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), arī darbības laikā.

## Uzkopšanas skripta instalēšana (vienreiz, serverī)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): ik pēc 30 minūtēm, žurnāls tiek rakstīts /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` ir obligāts: pirms ceļa noņemšanas uzkopšanas skripts ar vienu atvērto
failu momentuzņēmumu pārliecinās, ka ceļš netiek izmantots; bez šī rīka tas neko
nenoņem, par to paziņo un beidz darbu (izejas kods 1). Vispirms izmēģiniet visas
izmaiņas ar `--dry-run` — tas precīzi izvada paredzētās darbības, neko nemainot.

Katrā palaišanas reizē tas veic šādas darbības: notīra mūsu pašu atlikumus
(`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) pēc **3 h tmpfs**
un pēc 24 h diska direktorijā `_work/_temp`; aptur `next-build`, kas darbojas
ilgāk par 75 minūtēm (neviens darbs nedarbojas tik ilgi — 2026-08-27 viens
turpināja darboties 70 minūtes pēc tam, kad GitHub bija pasludinājis tā darbu par
zaudētu); iztīra pirms vairāk nekā 48 h izveidotās darba kopijas tiem
izpildītājiem, kuru serviss ir **apturēts**; brīdina, ja diska izmantojums ir
≥ 85 %, atmiņas PSI `full/avg60` ir ≥ 10 % vai klausītāju skaits pārsniedz
`MAX_ACTIVE_RUNNERS` (atsevišķi norādot omniroute/citu sadalījumu). Izejas kods
1 = nepieciešama uzmanība; izlasiet žurnālu.

## Runner vienības: KillMode

Runner noklusējuma `KillMode=process` pēc vienības apturēšanas vai restartēšanas atstāj
`Runner.Worker → npm → next-build` procesus dzīvus — bāreņbūvējums turpina patērēt RAM un
CPU, lai gan tam vairs nav piesaistīts neviens uzdevums. Katrai OmniRoute vienībai ir papildkonfigurācija
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
ar `KillMode=mixed`: vispirms SIGTERM klausītājam, pēc tam SIGKILL visai cgroup, sasniedzot
`TimeoutStop`. Tā stājas spēkā pēc vienības nākamās restartēšanas — restartējiet **pa vienam runner
vienlaikus un tikai tad, kad tas ir dīkstāvē**, dīkstāves pārbaudi un restartēšanu veicot vienā komandā.

## Darbības noteikumi

- **Vienlaikus tikai viens Turbopack būvējums — to nodrošina etiķete.** Katrs uzdevums, kas izpilda pilnu Turbopack
  `next build`, izmanto `[self-hosted, omni-build]`, un tikai **`omniroute-113-5`** ir piešķirta šī
  etiķete: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  nakts a11y būvējums (#16853) un `docker-publish.yml` **amd64** (webpack BuildKit iekšienē —
  Turbopack tur avarēja, izpilde 33253576569). arm64 Docker posms joprojām darbojas uz `ubuntu-24.04-arm`.
  `docker-publish` amd64 koplieto `heavy-build-main` paralēlās izpildes grupu ar `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine jādarbojas uz `omniroute-113-5`. Otra Turbopack
  vieta neietilpst 78 GB (2 × 33–37 GB, kā arī pārējie servera procesi); otra vieta ir droša tikai
  webpack būvējumiem.
- **Release-Green ir sava vieta (2026-10-18).** Līdz tam abas Release-Green validācijas darbojās
  uz `omni-build`: katrā push notikumā (~10 stundā, vienā dienā 97 no 100 push izpildēm tika atceltas darba vidū)
  un trīs pilnās pārbaudēs dienā, kas katra ilga ~2 h (05:29 pārbaude gaidīja vietu 6 h) — vienīgā būvēšanas
  vieta bija vairākkārt pārslogota, un pašu repozitorijā izveidoto PR būvējumi gaidīja stundām.
  `release-green` un `main-green` tagad izmanto `omni-release` (tikai `omniroute-113-6`) ar
  `OMNIROUTE_USE_TURBOPACK=0`, un sākta izpilde vairs netiek atcelta jaunāka push notikuma dēļ (gaidošā
  vieta joprojām apvieno šo lavīnu). `tests/unit/build/runner-capacity-routing.test.ts`
  fiksē maršrutēšanu, pārslēgšanos uz webpack un to, ka nekas uz `omni-release` netiek būvēts ar Turbopack.
- **Vieglo uzdevumu pūls: `omni-light`.** `omniroute-113` un `omniroute-113-2` izpilda nakts uzdevumus, kuriem
  nepieciešams tikai aizmugursistēmas `next build` (~5–6 GB; webpack), kā arī `quality.yml` `lint-guard`.
  `omniroute-113` līdz 2026-10-18 bija iestatīts `MemoryHigh=4G` — atmiņas atgūšanas ierobežojumu dēļ promptfoo
  būvējums tur ilga 54 minūtes; 8 GB novērš šo ierobežošanu.
- **Apzināti mazāk klausītāju.** Četras OmniRoute vienības tika atspējotas 2026-08-29 — katrs papildu
  klausītājs ir vēl viens iepriekš minētā atmiņas budžeta patērētājs. Tīrītāja limits ir 6 (`MAX_ACTIVE_RUNNERS=6` cron konfigurācijā): tas uzskaita
  katru `Runner.Listener` uz servera, un OmniHeuris + OmniMind mūsu četriem pievieno vēl divus.
- **Nekad netīriet `/tmp` vai `_work` manuāli, kamēr kāds izpildītājs ir aizņemts.**
  Pārbaude un tai sekojoša dzēšana ar laika atstarpi starp abām darbībām bija iemesls, kādēļ aktīvs Build uzdevums
  2026-08-27 zaudēja savu `_work`. Tīrītājs pārbaudi un dzēšanu veic vienā darbībā;
  ļaujiet tam to paveikt.
- Izpildītāja apturēšana uzdevuma laikā atceļ uzdevumu (novērots praksē): izmantojiet `systemctl stop` tikai
  tad, kad tā klausītājam nav `Runner.Worker` bērnprocesa, — un paveiciet to ar vienu komandu.
- Darbplūsmas nedrīkst glabāt artefaktus `/tmp` (tā ir RAM). Lejupielādējiet tos
  `$RUNNER_TEMP` (diskā, katram izpildītājam atsevišķi) — 1.3 GB `next-build` artefakta ierakstīšana tmpfs aizņēma 27–32
  minūtes, bet augšupielāde no diska — 2 minūtes.
- `.15` VPS ir paredzēts tikai homologācijai — tajā nekad nedarbojas CI izpildītāji.
