# Self-Hosted Runner Box Operations (.113 pool) (नेपाली)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

स्व-होस्ट गरिएको पूल **.113** मेसिन (`tomni-proxmox-113`) मा चल्छ। 2026-10-18 देखि प्रत्येक
OmniRoute runner सँग **एउटा भूमिका**, एउटा label, र `MemoryHigh` को कुल योगलाई
भौतिक RAM नजिक राख्ने memory/CPU बजेट छ:

| runner               | label            | भूमिका                                                                                                                        | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`     | Turbopack build हरू: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, रातिको a11y build | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), webpack build                                                                 | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`     | रातिका कार्यहरू (Schemathesis, promptfoo, garak, k6, a11y boot) र `quality.yml` `lint-guard`                                  | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`     | माथिकै पूल                                                                                                                    | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (तिनका repo हरू) | Dependabot मात्र (प्रत्येकको अधिकतम 155 MB, 2026-10-18)                                                                       | 4 GB / 6 GB                | प्रत्येक 200 % |

2026-10-18 मा मापन गरिएको:

| स्रोत     | मान                        | scheduling का लागि यसको अर्थ                                                                                                                                                                                                                                    |
| --------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cores**       | cgroup cap अन्तर्गत Turbopack production build अधिकतम 33–37 GB पुग्छ (cap नहुँदा 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack build करिब 14–16 GB पुग्छ। एउटा Turbopack + एउटा webpack build सँगै अटाउँछन्; दुईवटा Turbopack build अटाउँदैनन् |
| swap      | 16 GB                      | `omniroute-113-5` swap बन्द राखेर (`MemorySwapMax=0`) चल्छ, जसले गर्दा अनियन्त्रित build ले मेसिनलाई swap गराउनुको सट्टा आफ्नो cap मा पुगेपछि रोकिन्छ                                                                                                           |
| `/tmp`    | **12 GB tmpfs = RAM**      | त्यहाँ राखिएको कुनै पनि कुरा memory हो; बाँकी रहेका फाइलहरू 3 घण्टापछि हटाइन्छन्                                                                                                                                                                                |
| CPU       | 32 cores मा load 60 देखियो | quota हरू लागू हुनुअघि, एउटै मेसिनमा एउटा Turbopack build (~1166 % CPU) र coverage suite चल्दा अन्य listener हरूका heartbeat ले स्रोत पाएनन् (`The self-hosted runner lost communication`, #16853)                                                              |
| runners   | **6 listeners**            | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` अक्षम छन् (`systemctl enable --now` ले एउटालाई पुनः सक्रिय गर्छ)                                                                                                                                |

सीमाहरू प्रत्येक unit को `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
मा छन् (अघिल्ला मानहरू `override.conf.bak-20261018` का रूपमा राखिएका छन्) र
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` प्रयोग गरेर चलिरहेकै अवस्थामा लागू गरिएका थिए — restart गरिएको थिएन, त्यसैले
चलिरहेको कुनै पनि job प्रभावित भएन। Label हरू runners API मार्फत
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) चलिरहेकै अवस्थामा परिवर्तन गरिन्छ।

## ज्यानिटर स्थापना गर्नुहोस् (एक पटक, बक्समा)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): प्रत्येक 30 मिनेटमा, /var/log/runner-janitor.log मा लग गर्नुहोस्
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` आवश्यक छ: ज्यानिटरले कुनै पाथ हटाउनुअघि खुला फाइलहरूको एउटा स्न्यापसट प्रयोग गरी त्यो निष्क्रिय रहेको प्रमाणित गर्छ, र यो उपकरण नभएमा केही पनि हटाउँदैन र त्यसैअनुसार जानकारी दिन्छ (exit 1)। कुनै पनि परिवर्तन पहिले `--dry-run` मार्फत प्रयास गर्नुहोस् — यसले आफूले के गर्ने थियो ठ्याक्कै प्रिन्ट गर्छ र केही पनि परिवर्तन गर्दैन।

यसले प्रत्येक पटक चल्दा गर्ने कार्यहरू: **tmpfs मा 3 घण्टापछि** र डिस्कको `_work/_temp` मा 24 घण्टापछि हाम्रा आफ्नै बाँकी फाइलहरू (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) हटाउँछ; 75 मिनेटभन्दा पुरानो `next-build` समाप्त गर्छ (कुनै पनि जब त्यति लामो चल्दैन — 2026-08-27 मा GitHub ले त्यसको जब हराएको घोषणा गरेपछि पनि एउटा 70 मिनेटसम्म चलेको थियो); युनिट **रोकिएका** रनरहरूका 48 घण्टा पुराना चेकआउटहरू हटाउँछ; डिस्क ≥ 85 %, मेमोरी PSI `full/avg60` ≥ 10 %, र `MAX_ACTIVE_RUNNERS` भन्दा बढी लिस्नर हुँदा (omniroute/अन्य विभाजनसहित) अलर्ट गर्छ। Exit 1 = ध्यान आवश्यक; लग पढ्नुहोस्।

## Runner एकाइहरू: KillMode

Runner को पूर्वनिर्धारित `KillMode=process` ले एकाइ रोकिँदा वा पुनः सुरु हुँदा पनि `Runner.Worker → npm → next-build`
लाई जीवितै छोड्छ — कुनै job संलग्न नभएको अनाथ build ले RAM र
CPU खपत गरिरहन्छ। प्रत्येक OmniRoute एकाइमा
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
मा `KillMode=mixed` सहितको drop-in हुन्छ: पहिले listener लाई SIGTERM, त्यसपछि
`TimeoutStop` मा सम्पूर्ण cgroup लाई SIGKILL। यो एकाइको अर्को restart मा लागू हुन्छ — **एक पटकमा एउटा runner मात्र,
त्यो पनि idle हुँदा मात्रै** restart गर्नुहोस्, र idle जाँच तथा restart एउटै command मा गर्नुहोस्।

## सञ्चालन नियमहरू

- **एक पटकमा एउटा मात्र Turbopack build — label द्वारा लागू गरिएको।** पूर्ण Turbopack
  `next build` चलाउने प्रत्येक job ले `[self-hosted, omni-build]` लाई लक्षित गर्छ, र त्यो
  label **`omniroute-113-5`** मा मात्र छ: `ci.yml` को `Build`, `npm-publish.yml` को `publish`,
  `nightly-v4-build`, `preview-artifact`, रातिको a11y build (#16853) र `docker-publish.yml` को
  **amd64** (BuildKit भित्र webpack — त्यहाँ Turbopack क्र्यास भयो, run 33253576569)। arm64
  Docker चरण `ubuntu-24.04-arm` मै रहन्छ। `docker-publish` को amd64 ले `ci.yml` को `Build`
  सँग `heavy-build-main` concurrency group साझा गर्छ (`cancel-in-progress: false`)।
  Docker Engine `omniroute-113-5` मा हुनैपर्छ। दोस्रो Turbopack slot 78 GB मा अट्दैन
  (2 × 33–37 GB र बाँकी प्रणाली); दोस्रो slot webpack build हरूका लागि मात्र सुरक्षित छ।
- **Release-Green को आफ्नै slot छ (2026-10-18)।** त्यसअघि दुवै Release-Green validation
  `omni-build` मा चल्थे: प्रत्येक push मा (~10/hour, एक दिनमा 100 push run मध्ये 97 वटा
  कामकै बीचमा रद्द भए) र दिनमा तीनवटा ~2 h का पूर्ण sweep (05:29 को sweep ले slot का लागि
  6 h कुर्यो) — एकल build slot को क्षमताभन्दा धेरै गुणा बढी माग थियो र आफ्नै मूलका PR
  Build हरूले घण्टौँ कुर्नुपर्थ्यो। `release-green` र `main-green` ले अब
  `OMNIROUTE_USE_TURBOPACK=0` सहित `omni-release` (`omniroute-113-6` मात्र) लाई लक्षित गर्छन्,
  र सुरु भइसकेको run अब नयाँ push द्वारा रद्द हुँदैन (बाँकी रहेको pending slot ले अझै पनि
  अत्यधिक अनुरोधहरूलाई एकै ठाउँमा समेट्छ)। `tests/unit/build/runner-capacity-routing.test.ts`
  ले routing, webpack switch र `omni-release` मा कुनै पनि कुराले Turbopack प्रयोग गरेर build
  नगर्ने कुरा सुनिश्चित गर्छ।
- **हलुका pool: `omni-light`।** `omniroute-113` र `omniroute-113-2` ले backend-मात्र
  `next build` (~5–6 GB; webpack) आवश्यक पर्ने nightly हरू र `quality.yml` को `lint-guard`
  चलाउँछन्। `omniroute-113` मा 2026-10-18 सम्म `MemoryHigh=4G` थियो — promptfoo build ले
  त्यहाँ 54 मिनेटसम्म memory reclaim गर्दै काम पूरा गर्यो; 8 GB ले throttling हटाउँछ।
- **जानाजानी कम listener हरू।** 2026-08-29 मा चारवटा OmniRoute unit निष्क्रिय पारिए —
  प्रत्येक अतिरिक्त listener माथिको memory budget को अर्को उपभोक्ता हो। janitor को अधिकतम
  सीमा 6 हो (cron मा `MAX_ACTIVE_RUNNERS=6`): यसले मेसिनमा भएका प्रत्येक `Runner.Listener`
  गन्छ, र OmniHeuris + OmniMind ले हाम्रा चारवटामा थप दुईवटा थप्छन्।
- **कुनै runner व्यस्त हुँदा `/tmp` वा `_work` कहिल्यै हातैले सफा नगर्नुहोस्।**
  जाँच गरेर केही समयपछि मेट्ने प्रक्रियाकै कारण 2026-08-27 मा चलिरहेको Build job ले आफ्नो
  `_work` गुमाएको थियो। janitor ले जाँच र हटाउने काम एउटै चरणमा गर्छ; त्यसैलाई गर्न दिनुहोस्।
- job को बीचमै runner रोक्दा job रद्द हुन्छ (प्रत्यक्ष रूपमा अवलोकन गरिएको):
  यसको listener सँग कुनै `Runner.Worker` child नभएको अवस्थामा मात्र `systemctl stop`
  चलाउनुहोस् — र त्यो एउटै command मा गर्नुहोस्।
- Workflow हरूले artefact लाई `/tmp` मा राखिरहनु हुँदैन (यो RAM हो)। `$RUNNER_TEMP` मा
  download गर्नुहोस् (disk मा, प्रत्येक runner का लागि छुट्टै) — 1.3 GB को `next-build`
  artefact लाई tmpfs मा पुग्न 27–32 मिनेट लाग्यो, तर disk बाट upload गर्न 2 मिनेट मात्र लाग्यो।
- `.15` VPS homologation का लागि मात्र हो — यसमा CI runner कहिल्यै चल्दैनन्।
