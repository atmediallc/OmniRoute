# Self-Hosted Runner Box Operations (.113 pool) (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

स्वयं-होस्ट किया गया पूल **.113** सर्वर (`tomni-proxmox-113`) पर चलता है। 2026-10-18 से प्रत्येक
OmniRoute रनर की **एक भूमिका**, एक लेबल और एक मेमोरी/CPU बजट है, जिससे सभी
`MemoryHigh` का योग भौतिक RAM के करीब रहता है:

| रनर                  | लेबल              | भूमिका                                                                                                                         | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`      | Turbopack बिल्ड: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, रात्रिकालीन a11y बिल्ड | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`    | Release-Green (`release-green` + `main-green`), webpack बिल्ड                                                                  | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`      | रात्रिकालीन कार्य (Schemathesis, promptfoo, garak, k6, a11y बूट) और `quality.yml` `lint-guard`                                 | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`      | ऊपर वाला ही पूल                                                                                                                | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (उनकी रिपॉज़िटरी) | केवल Dependabot (प्रत्येक का शिखर 155 MB, 2026-10-18)                                                                          | 4 GB / 6 GB                | प्रत्येक 200 % |

2026-10-18 को मापा गया:

| संसाधन    | मान                       | शेड्यूलिंग के लिए इसका अर्थ                                                                                                                                                                                                                               |
| --------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 कोर**        | cgroup सीमा के अंतर्गत एक Turbopack उत्पादन बिल्ड 33–37 GB तक पहुँचता है (सीमा के बिना 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); एक webpack बिल्ड लगभग 14–16 GB तक। एक Turbopack + एक webpack बिल्ड साथ चल सकते हैं; दो Turbopack बिल्ड नहीं |
| swap      | 16 GB                     | `omniroute-113-5` में swap बंद है (`MemorySwapMax=0`), इसलिए अनियंत्रित बिल्ड सर्वर को swap कराने के बजाय अपनी सीमा पर रोक दिया जाता है                                                                                                                   |
| `/tmp`    | **12 GB tmpfs = RAM**     | वहाँ रखी गई कोई भी चीज़ मेमोरी का उपयोग करती है; बची हुई फ़ाइलें 3 घंटे बाद हटा दी जाती हैं                                                                                                                                                               |
| CPU       | 32 कोर पर 60 लोड देखा गया | कोटा लागू होने से पहले, उसी सर्वर पर एक Turbopack बिल्ड (~1166 % CPU) और एक कवरेज सुइट ने अन्य लिसनरों के हार्टबीट को संसाधनों से वंचित कर दिया था (`The self-hosted runner lost communication`, #16853)                                                  |
| रनर       | **6 लिसनर**               | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` अक्षम हैं (`systemctl enable --now` किसी एक को फिर से सक्रिय करता है)                                                                                                                     |

सीमाएँ प्रत्येक यूनिट की `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
फ़ाइल में हैं (पिछले मान `override.conf.bak-20261018` के रूप में रखे गए हैं) और इन्हें
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` से लाइव लागू किया गया था — कोई पुनरारंभ नहीं हुआ, इसलिए
चल रहे किसी भी जॉब पर असर नहीं पड़ा। लेबल runners API के माध्यम से बदले जाते हैं
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), वह भी लाइव।

## जैनिटर इंस्टॉल करें (मशीन पर केवल एक बार)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): हर 30 मिनट में, लॉग /var/log/runner-janitor.log में
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` आवश्यक है: जैनिटर किसी पथ को हटाने से पहले खुली हुई
फ़ाइलों के एक स्नैपशॉट से यह सिद्ध करता है कि वह निष्क्रिय है, और इस टूल के बिना वह कुछ भी नहीं हटाता तथा इसकी
सूचना देता है (exit 1)। किसी भी बदलाव को पहले `--dry-run` के साथ आज़माएँ — यह ठीक वही प्रिंट करता है जो यह
करता, लेकिन किसी चीज़ में बदलाव नहीं करता।

हर बार चलने पर यह क्या करता है: **tmpfs पर 3 घंटे** और डिस्क के
`_work/_temp` में 24 घंटे बाद हमारे अपने बचे हुए अवशेष (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) साफ़ करता है; 75 मिनट से अधिक पुराने `next-build` को समाप्त करता है (कोई भी जॉब इतनी देर नहीं चलता —
2026-08-27 को एक जॉब GitHub द्वारा उसे नष्ट घोषित किए जाने के बाद भी 70 मिनट तक चला); उन रनर के 48 घंटे पुराने
चेकआउट हटाता है जिनकी यूनिट **रुकी हुई** है; डिस्क ≥ 85 %, मेमोरी PSI
`full/avg60` ≥ 10 %, और `MAX_ACTIVE_RUNNERS` से अधिक लिसनर होने पर
omniroute/अन्य विभाजन के साथ अलर्ट करता है। Exit 1 = ध्यान देना आवश्यक है; लॉग पढ़ें।

## रनर यूनिट: KillMode

रनर का डिफ़ॉल्ट `KillMode=process`, किसी यूनिट को रोके या पुनः आरंभ किए जाने पर `Runner.Worker → npm → next-build`
को चालू छोड़ देता है — अनाथ बिल्ड बिना किसी संबद्ध जॉब के RAM और
CPU का उपयोग करता रहता है। प्रत्येक OmniRoute यूनिट में एक ड्रॉप-इन
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
होता है, जिसमें `KillMode=mixed` है: पहले लिसनर को SIGTERM, फिर
`TimeoutStop` पर पूरे cgroup को SIGKILL। यह यूनिट के अगले पुनरारंभ पर प्रभावी होता है — **एक
समय में केवल एक रनर को, और केवल उसके निष्क्रिय होने पर** पुनः आरंभ करें; निष्क्रियता की जाँच और पुनरारंभ
एक ही कमांड में करें।

## संचालन नियम

- **एक समय में केवल एक Turbopack build — label द्वारा लागू।** पूर्ण Turbopack
  `next build` चलाने वाला प्रत्येक job `[self-hosted, omni-build]` को लक्षित करता है, और केवल
  **`omniroute-113-5`** पर वह label है: `ci.yml` का `Build`, `npm-publish.yml` का `publish`,
  `nightly-v4-build`, `preview-artifact`, nightly a11y build (#16853) और
  `docker-publish.yml` का **amd64** (BuildKit के भीतर webpack — वहाँ Turbopack panic हुआ था,
  run 33253576569)। arm64 Docker चरण `ubuntu-24.04-arm` पर ही रहता है।
  `docker-publish` का amd64, `ci.yml` के `Build` के साथ `heavy-build-main` concurrency group
  साझा करता है (`cancel-in-progress: false`)। Docker Engine का `omniroute-113-5` पर होना
  आवश्यक है। दूसरा Turbopack slot 78 GB में समा नहीं सकता (2 × 33–37 GB और साथ में मशीन की
  बाकी ज़रूरतें); दूसरा slot केवल webpack builds के लिए सुरक्षित है।
- **Release-Green का अपना slot है (2026-10-18)।** तब तक दोनों Release-Green validations
  `omni-build` पर चलती थीं: प्रत्येक push पर (~10/hour, एक दिन में 100 push runs में से 97
  बीच काम में cancel हो गईं) और हर दिन तीन ~2 h की पूर्ण sweeps (05:29 वाली sweep ने slot के
  लिए 6 h प्रतीक्षा की) — एकमात्र build slot पर उसकी क्षमता से कई गुना अधिक भार था और
  own-origin PR Builds को घंटों प्रतीक्षा करनी पड़ी। `release-green` और `main-green` अब
  `OMNIROUTE_USE_TURBOPACK=0` के साथ `omni-release` (केवल `omniroute-113-6`) को लक्षित करते
  हैं, और शुरू हो चुका run अब किसी नए push द्वारा cancel नहीं किया जाता (pending slot अभी भी
  इस तूफ़ान को समेट देता है)। `tests/unit/build/runner-capacity-routing.test.ts` routing,
  webpack switch और इस बात को स्थिर करता है कि `omni-release` पर कुछ भी Turbopack से build
  न हो।
- **हल्का pool: `omni-light`।** `omniroute-113` और `omniroute-113-2` वे nightlies चलाते हैं
  जिन्हें केवल backend का `next build` (~5–6 GB; webpack) और `quality.yml` का `lint-guard`
  चाहिए। `omniroute-113` पर 2026-10-18 तक `MemoryHigh=4G` था — promptfoo build वहाँ
  54 minutes तक reclaim करते हुए आगे बढ़ा; 8 GB throttling हटा देता है।
- **जानबूझकर कम listeners।** 2026-08-29 को चार OmniRoute units disable कर दी गई थीं —
  प्रत्येक अतिरिक्त listener ऊपर दिए गए memory budget का एक और tenant है। janitor की सीमा
  6 है (cron में `MAX_ACTIVE_RUNNERS=6`): यह मशीन पर मौजूद प्रत्येक `Runner.Listener` को
  गिनता है, और हमारे चार के अतिरिक्त OmniHeuris + OmniMind दो और जोड़ते हैं।
- **किसी भी runner के व्यस्त रहने के दौरान `/tmp` या `_work` को कभी भी हाथ से साफ़ न करें।**
  जाँच और deletion के बीच अंतराल रखने वाली check-then-delete प्रक्रिया के कारण
  2026-08-27 को एक सक्रिय Build job का `_work` नष्ट हो गया था। janitor जाँच और removal
  एक ही चरण में करता है; उसे ही करने दें।
- किसी runner को job के बीच में रोकने से job cancel हो जाता है (प्रत्यक्ष रूप से देखा गया):
  `systemctl stop` केवल तभी करें जब उसके listener का कोई `Runner.Worker` child न हो — और
  इसे एक ही command में करें।
- Workflows को artefacts `/tmp` में नहीं रखने चाहिए (यह RAM है)। `$RUNNER_TEMP` में
  download करें (disk पर, प्रत्येक runner के लिए अलग) — 1.3 GB के `next-build` artefact को
  tmpfs पर पहुँचने में 27–32 minutes लगे और disk से upload होने में 2 minutes लगे।
- `.15` VPS केवल homologation के लिए है — उस पर CI runners कभी नहीं चलते।
