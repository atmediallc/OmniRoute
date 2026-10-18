# Self-Hosted Runner Box Operations (.113 pool) (मराठी)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

स्वतः होस्ट केलेला पूल **.113** बॉक्सवर (`tomni-proxmox-113`) चालतो. 2026-10-18 पासून प्रत्येक
OmniRoute रनरची **एक भूमिका**, एक लेबल आणि अशी मेमरी/CPU मर्यादा आहे, ज्यामुळे
`MemoryHigh` ची बेरीज भौतिक RAM च्या जवळ राहते:

| रनर                  | लेबल           | भूमिका                                                                                                                        | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack बिल्ड्स: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, रात्रीची a11y बिल्ड | 40 GB / 44 GB (स्वॅप 0)    | 1600 %          |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack बिल्ड                                                                 | 20 GB / 24 GB (स्वॅप 4 GB) | 800 %           |
| `omniroute-113-2`    | `omni-light`   | रात्रीची कार्ये (Schemathesis, promptfoo, garak, k6, a11y बूट) आणि `quality.yml` `lint-guard`                                 | 12 GB / 16 GB (स्वॅप 4 GB) | 600 %           |
| `omniroute-113`      | `omni-light`   | वरीलप्रमाणेच पूल                                                                                                              | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (त्यांचे रेपो) | फक्त Dependabot (प्रत्येकी कमाल 155 MB, 2026-10-18)                                                                           | 4 GB / 6 GB                | प्रत्येकी 200 % |

2026-10-18 रोजी मोजलेले:

| संसाधन    | मूल्य                    | शेड्यूलिंगसाठी याचा अर्थ                                                                                                                                                                                                                                       |
| --------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 कोअर**      | cgroup मर्यादेखाली Turbopack प्रॉडक्शन बिल्डची कमाल मेमरी 33–37 GB असते (मर्यादेशिवाय 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack बिल्डसाठी ~14–16 GB. एक Turbopack + एक webpack बिल्ड एकत्र चालू शकतात; दोन Turbopack बिल्ड चालू शकत नाहीत |
| स्वॅप     | 16 GB                    | `omniroute-113-5` स्वॅप बंद ठेवून (`MemorySwapMax=0`) चालतो, त्यामुळे नियंत्रणाबाहेर गेलेली बिल्ड बॉक्सला स्वॅप करायला लावण्याऐवजी तिच्या मर्यादेवर थांबवली जाते                                                                                               |
| `/tmp`    | **12 GB tmpfs = RAM**    | तेथे ठेवलेली कोणतीही गोष्ट मेमरी वापरते; उरलेल्या फायली 3 तासांनंतर साफ केल्या जातात                                                                                                                                                                           |
| CPU       | 32 कोअरवर 60 लोड नोंदवला | कोटा लागू करण्यापूर्वी, एक Turbopack बिल्ड (~1166 % CPU) आणि त्याच बॉक्सवरील coverage suite यांमुळे इतर listeners च्या heartbeat साठी संसाधने अपुरी पडली (`The self-hosted runner lost communication`, #16853)                                                 |
| रनर्स     | **6 listeners**          | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` अक्षम आहेत (`systemctl enable --now` वापरून त्यांपैकी एक पुन्हा सुरू करता येतो)                                                                                                                |

या मर्यादा प्रत्येक युनिटच्या `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
मध्ये आहेत (मागील मूल्ये `override.conf.bak-20261018` म्हणून ठेवली आहेत) आणि
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` वापरून चालू स्थितीत लागू केल्या गेल्या — रीस्टार्ट केले नाही, त्यामुळे
चालू असलेल्या कोणत्याही जॉबवर परिणाम झाला नाही. लेबल्स runners API द्वारे बदलली जातात
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), तीदेखील चालू स्थितीतच.

## जॅनिटर स्थापित करा (एकदाच, बॉक्सवर)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): दर 30 मिनिटांनी, /var/log/runner-janitor.log मध्ये लॉग करा
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` आवश्यक आहे: एखादा पाथ काढून टाकण्यापूर्वी, उघड्या फाइल्सचा एक स्नॅपशॉट घेऊन जॅनिटर तो निष्क्रिय असल्याचे सिद्ध करतो; हे साधन उपलब्ध नसल्यास तो काहीही काढून टाकत नाही आणि तसे स्पष्टपणे सांगतो
(exit 1). कोणताही बदल प्रथम `--dry-run` वापरून तपासा — तो नेमके काय करेल हे दाखवतो
आणि कशालाही स्पर्श करत नाही.

प्रत्येक रनमध्ये तो काय करतो: **tmpfs वर 3 तासांनंतर** आणि डिस्कवरील
`_work/_temp` मध्ये 24 तासांनंतर आपल्या स्वतःच्या उरलेल्या फाइल्स (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) साफ करतो; 75 मिनिटांपेक्षा जुना `next-build` बंद करतो (कोणताही जॉब इतका वेळ चालत नाही — 2026-08-27 रोजी GitHub ने संबंधित जॉब गमावल्याचे घोषित केल्यानंतरही एक जॉब 70 मिनिटे चालला होता); ज्यांची युनिट्स **थांबलेली** आहेत अशा रनर्सचे 48 तास जुने
चेकआउट्स काढून टाकतो; डिस्कचा वापर ≥ 85 %, मेमरी PSI
`full/avg60` ≥ 10 %, आणि `MAX_ACTIVE_RUNNERS` पेक्षा अधिक लिसनर्स असल्यास अलर्ट देतो (omniroute/इतर असे विभाजनही देतो). Exit 1 = लक्ष देणे आवश्यक; लॉग वाचा.

## रनर युनिट्स: KillMode

रनरचे डीफॉल्ट `KillMode=process`, युनिट थांबवल्यावर किंवा रीस्टार्ट केल्यावर `Runner.Worker → npm → next-build`
चालूच ठेवते — कोणतीही जॉब संलग्न नसतानाही अनाथ बिल्ड RAM आणि
CPU वापरत राहते. प्रत्येक OmniRoute युनिटमध्ये
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
येथे `KillMode=mixed` असलेले ड्रॉप-इन आहे: आधी लिसनरला SIGTERM, त्यानंतर
`TimeoutStop` वेळी संपूर्ण cgroup ला SIGKILL. ते युनिटच्या पुढील रीस्टार्टवेळी लागू होते — निष्क्रियता तपासणी आणि रीस्टार्ट एकाच कमांडमध्ये ठेवून, **एका वेळी फक्त एक रनर आणि तो निष्क्रिय असतानाच रीस्टार्ट करा**.

## कार्यपद्धतीचे नियम

- **एका वेळी एकच Turbopack build — label द्वारे सक्तीने लागू.** पूर्ण Turbopack
  `next build` चालवणारा प्रत्येक job `[self-hosted, omni-build]` ला लक्ष्य करतो आणि केवळ
  **`omniroute-113-5`** कडे तो label आहे: `ci.yml` मधील `Build`, `npm-publish.yml` मधील
  `publish`, `nightly-v4-build`, `preview-artifact`, nightly a11y build (#16853) आणि
  `docker-publish.yml` मधील **amd64** (BuildKit अंतर्गत webpack — तिथे Turbopack panic झाले,
  run 33253576569). arm64 Docker टप्पा `ubuntu-24.04-arm` वरच राहतो. `docker-publish` चे amd64,
  `ci.yml` मधील `Build` सोबत `heavy-build-main` concurrency group सामायिक करते
  (`cancel-in-progress: false`). Docker Engine `omniroute-113-5` वर असणे आवश्यक आहे. दुसरा
  Turbopack slot 78 GB मध्ये बसत नाही (2 × 33–37 GB आणि त्यासोबत मशीनवरील उर्वरित भार);
  दुसरा slot फक्त webpack builds साठी सुरक्षित आहे.
- **Release-Green चा स्वतःचा slot आहे (2026-10-18).** तोपर्यंत दोन्ही Release-Green validations
  `omni-build` वर चालत होत्या: प्रत्येक push वर (~10/hour, एका दिवसात 100 push runs पैकी 97
  काम सुरू असतानाच रद्द झाल्या) आणि दिवसातून तीनदा होणाऱ्या ~2 h पूर्ण sweeps (05:29 च्या sweep
  ला slot साठी 6 h प्रतीक्षा करावी लागली) — एकमेव build slot वर क्षमतेपेक्षा कितीतरी जास्त भार
  होता आणि own-origin PR Builds ना तासन्तास प्रतीक्षा करावी लागत होती. `release-green` आणि
  `main-green` आता `OMNIROUTE_USE_TURBOPACK=0` सह `omni-release` ला (फक्त
  `omniroute-113-6`) लक्ष्य करतात आणि सुरू झालेला run आता नवीन push मुळे रद्द होत नाही
  (प्रलंबित slot अजूनही push चे वादळ एकत्रित करतो).
  `tests/unit/build/runner-capacity-routing.test.ts` routing, webpack switch आणि
  `omni-release` वरील कोणतीही गोष्ट Turbopack वापरून build होत नाही हे निश्चित करते.
- **हलका pool: `omni-light`.** `omniroute-113` आणि `omniroute-113-2` अशा nightlies चालवतात
  ज्यांना फक्त backend साठी `next build` (~5–6 GB; webpack) आणि `quality.yml` मधील
  `lint-guard` आवश्यक असते. `omniroute-113` वर 2026-10-18 पर्यंत `MemoryHigh=4G` होते —
  promptfoo build ने तिथे 54 मिनिटे memory reclaim करत कसाबसा मार्ग काढला; 8 GB मुळे
  throttling दूर होते.
- **जाणीवपूर्वक कमी listeners.** 2026-08-29 रोजी चार OmniRoute units अक्षम करण्यात आली —
  प्रत्येक अतिरिक्त listener हा वरील memory budget चा आणखी एक tenant असतो. janitor ची कमाल
  मर्यादा 6 आहे (cron मधील `MAX_ACTIVE_RUNNERS=6`): तो मशीनवरील प्रत्येक `Runner.Listener`
  मोजतो आणि OmniHeuris + OmniMind आपल्या चारमध्ये आणखी दोन जोडतात.
- **कोणताही runner व्यस्त असताना `/tmp` किंवा `_work` कधीही हाताने साफ करू नका.**
  तपासणी आणि deletion यांच्यामध्ये अंतर असलेल्या check-then-delete मुळे 2026-08-27 रोजी
  चालू असलेल्या Build job चे `_work` नष्ट झाले. janitor तपासणी आणि removal एकाच टप्प्यात
  करतो; ते काम त्यालाच करू द्या.
- job सुरू असताना runner थांबवल्यास job रद्द होतो (प्रत्यक्ष निरीक्षण): त्याच्या listener ला
  कोणताही `Runner.Worker` child नसतानाच `systemctl stop` वापरा — आणि ते एका command मध्ये करा.
- Workflows ने artefacts `/tmp` मध्ये ठेवू नयेत (ती RAM आहे). `$RUNNER_TEMP` मध्ये download
  करा (disk वर, प्रत्येक runner साठी स्वतंत्र) — 1.3 GB `next-build` artefact ला tmpfs वर
  पोहोचण्यासाठी 27–32 मिनिटे लागली आणि disk वरून upload होण्यासाठी 2 मिनिटे लागली.
- `.15` VPS केवळ homologation साठी आहे — त्यावर CI runners कधीही चालत नाहीत.
