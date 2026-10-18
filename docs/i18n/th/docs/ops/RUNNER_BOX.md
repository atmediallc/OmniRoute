# Self-Hosted Runner Box Operations (.113 pool) (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

พูลแบบโฮสต์เองทำงานอยู่บนเครื่อง **.113** (`tomni-proxmox-113`) ตั้งแต่ 2026-10-18 เป็นต้นมา
runner ของ OmniRoute แต่ละตัวมี **หนึ่งบทบาท** หนึ่ง label และงบประมาณหน่วยความจำ/CPU ที่ทำให้ผลรวมของ
`MemoryHigh` ใกล้เคียงกับ RAM จริง:

| runner               | label           | บทบาท                                                                                                                                    | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`    | งาน build ด้วย Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact` และงาน build a11y รายคืน | 40 GB / 44 GB (สว็อป 0)    | 1600 %      |
| `omniroute-113-6`    | `omni-release`  | Release-Green (`release-green` + `main-green`), งาน build ด้วย webpack                                                                   | 20 GB / 24 GB (สว็อป 4 GB) | 800 %       |
| `omniroute-113-2`    | `omni-light`    | งานรายคืน (Schemathesis, promptfoo, garak, k6, การบูต a11y) และ `quality.yml` `lint-guard`                                               | 12 GB / 16 GB (สว็อป 4 GB) | 600 %       |
| `omniroute-113`      | `omni-light`    | พูลเดียวกับด้านบน                                                                                                                        | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (repo ของตนเอง) | เฉพาะ Dependabot (สูงสุดตัวละ 155 MB, 2026-10-18)                                                                                        | 4 GB / 6 GB                | ตัวละ 200 % |

วัดเมื่อ 2026-10-18:

| ทรัพยากร  | ค่า                   | ความหมายต่อการจัดตารางงาน                                                                                                                                                                                                                                                                                                  |
| --------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 คอร์**   | งาน build สำหรับ production ด้วย Turbopack ใช้สูงสุด 33–37 GB ภายใต้ขีดจำกัด cgroup (49 GB เมื่อไม่จำกัด, `tests/unit/ci-build-bundler-webpack.test.ts`); งาน build ด้วย webpack ใช้ประมาณ 14–16 GB งาน build ด้วย Turbopack หนึ่งงานและ webpack หนึ่งงานสามารถทำงานพร้อมกันได้ แต่งาน build ด้วย Turbopack สองงานทำไม่ได้ |
| สว็อป     | 16 GB                 | `omniroute-113-5` ทำงานโดยปิดสว็อป (`MemorySwapMax=0`) เพื่อให้งาน build ที่ทำงานผิดปกติถูกตัดเมื่อถึงขีดจำกัด แทนที่จะใช้สว็อปของเครื่อง                                                                                                                                                                                  |
| `/tmp`    | **tmpfs 12 GB = RAM** | ทุกอย่างที่เก็บไว้ในนั้นจะใช้หน่วยความจำ; ไฟล์ตกค้างจะถูกล้างหลังจาก 3 ชม.                                                                                                                                                                                                                                                 |
| CPU       | พบโหลด 60 บน 32 คอร์  | ก่อนกำหนดโควตา งาน build ด้วย Turbopack หนึ่งงาน (CPU ประมาณ 1166 %) ร่วมกับชุดทดสอบ coverage บนเครื่องเดียวกัน ทำให้ heartbeat ของ listener อื่นขาดทรัพยากร (`runner แบบโฮสต์เองขาดการติดต่อ`, #16853)                                                                                                                    |
| runner    | **listener 6 ตัว**    | OmniRoute 4 ตัว + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` ถูกปิดใช้งาน (`systemctl enable --now` สามารถเปิดตัวใดตัวหนึ่งกลับมาได้)                                                                                                                                                                               |

ขีดจำกัดต่าง ๆ อยู่ใน `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` ของแต่ละ unit
(เก็บค่าก่อนหน้าไว้เป็น `override.conf.bak-20261018`) และถูกนำมาใช้กับระบบที่กำลังทำงานผ่าน
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` โดยไม่ต้องรีสตาร์ต จึงไม่มี
งานที่กำลังทำงานอยู่ได้รับผลกระทบ การเปลี่ยน label ทำผ่าน API ของ runner
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) และมีผลทันทีเช่นกัน

## ติดตั้งตัวทำความสะอาด (ครั้งเดียว บนเครื่อง)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): ทุก 30 นาที บันทึกล็อกไปยัง /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

จำเป็นต้องมี `lsof`: ตัวทำความสะอาดจะยืนยันว่าพาธไม่มีการใช้งานจากสแนปช็อตไฟล์ที่เปิดอยู่
หนึ่งครั้งก่อนลบ และหากไม่มีเครื่องมือนี้ ตัวทำความสะอาดจะไม่ลบสิ่งใดพร้อมแจ้งให้ทราบ
(exit 1) ให้ลองการเปลี่ยนแปลงทุกครั้งด้วย `--dry-run` ก่อน — ระบบจะแสดงอย่างชัดเจนว่าจะ
ทำอะไรและจะไม่แก้ไขสิ่งใด

สิ่งที่ทำในการรันแต่ละครั้ง: กวาดไฟล์ตกค้างของเราเอง (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) หลังจาก **3 ชม. บน tmpfs** และ 24 ชม. บนดิสก์
ใน `_work/_temp`; ยุติ `next-build` ที่ทำงานนานกว่า 75 นาที (ไม่มีงานใดทำงานนานขนาดนั้น —
เมื่อ 2026-08-27 มีงานหนึ่งทำงานต่ออีก 70 นาทีหลังจาก GitHub ประกาศว่างานสูญหายแล้ว);
ลบ checkout ที่มีอายุ 48 ชม. ของรันเนอร์ซึ่งยูนิต **หยุดทำงาน**; แจ้งเตือนเมื่อดิสก์ ≥ 85 %,
ค่า PSI ของหน่วยความจำ `full/avg60` ≥ 10 % และมีตัวรับงานมากกว่า `MAX_ACTIVE_RUNNERS`
(พร้อมแจกแจงเป็น omniroute/อื่น ๆ) Exit 1 = ต้องตรวจสอบ; อ่านล็อก

## ยูนิต runner: KillMode

ค่าเริ่มต้น `KillMode=process` ของ runner ปล่อยให้ `Runner.Worker → npm → next-build`
ยังคงทำงานอยู่เมื่อยูนิตถูกหยุดหรือรีสตาร์ต — build ที่กำพร้าจะยังคงกิน RAM และ
CPU โดยไม่มี job ผูกอยู่ ทุกยูนิตของ OmniRoute มี drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
ที่ใช้ `KillMode=mixed`: ส่ง SIGTERM ไปยัง listener ก่อน แล้วส่ง SIGKILL ไปยัง cgroup ทั้งหมดเมื่อถึง
`TimeoutStop` การตั้งค่านี้จะมีผลเมื่อรีสตาร์ตยูนิตครั้งถัดไป — ให้รีสตาร์ต **ครั้งละหนึ่ง runner
และเฉพาะตอนที่ไม่มีงานอยู่เท่านั้น** โดยให้การตรวจสอบสถานะว่างและการรีสตาร์ตอยู่ในคำสั่งเดียวกัน

## กฎการปฏิบัติงาน

- **อนุญาตให้มีการ build ด้วย Turbopack ได้ครั้งละหนึ่งงานเท่านั้น — บังคับใช้ด้วย label** ทุก job ที่รัน
  `next build` แบบเต็มด้วย Turbopack จะกำหนดเป้าหมายเป็น `[self-hosted, omni-build]` และมีเพียง
  **`omniroute-113-5`** เท่านั้นที่มี label ดังกล่าว ได้แก่ `ci.yml` `Build`, `npm-publish.yml`
  `publish`, `nightly-v4-build`, `preview-artifact`, build สำหรับ a11y รายคืน (#16853) และ
  `docker-publish.yml` **amd64** (ใช้ webpack ภายใน BuildKit — Turbopack เกิด panic ที่นั่นใน run 33253576569) ส่วน Docker ขา arm64 ยังคงทำงานบน `ubuntu-24.04-arm` ขา amd64 ของ
  `docker-publish` ใช้ concurrency group `heavy-build-main` ร่วมกับ `ci.yml` `Build`
  (`cancel-in-progress: false`) ต้องมี Docker Engine อยู่บน `omniroute-113-5` เครื่องที่มีหน่วยความจำ
  78 GB ไม่สามารถรองรับสล็อต Turbopack สล็อตที่สองได้ (2 × 33–37 GB บวกกับส่วนอื่น ๆ ของเครื่อง)
  สล็อตที่สองปลอดภัยเฉพาะสำหรับ build ด้วย webpack เท่านั้น
- **Release-Green มีสล็อตของตัวเองแล้ว (2026-10-18)** ก่อนหน้านั้น การตรวจสอบ Release-Green
  ทั้งสองแบบทำงานบน `omni-build`: ทุกครั้งที่ push (~10 ครั้ง/ชั่วโมง โดย 97 จาก 100 push run
  ถูกยกเลิกกลางคันภายในวันเดียว) และการตรวจสอบเต็มรูปแบบวันละสามครั้งซึ่งใช้เวลาครั้งละ ~2 ชั่วโมง
  (การตรวจสอบรอบ 05:29 ต้องรอสล็อตนาน 6 ชั่วโมง) — สล็อต build เพียงสล็อตเดียวมีงานเกินขีดความสามารถ
  หลายเท่า และ PR Build จากต้นทางของเราเองต้องรอหลายชั่วโมง ขณะนี้ `release-green` และ
  `main-green` กำหนดเป้าหมายเป็น `omni-release` (เฉพาะ `omniroute-113-6`) โดยใช้
  `OMNIROUTE_USE_TURBOPACK=0` และ run ที่เริ่มแล้วจะไม่ถูกยกเลิกโดย push ที่ใหม่กว่าอีกต่อไป
  (สล็อตที่รอดำเนินการยังคงยุบงานจำนวนมากให้เหลือเพียงงานล่าสุด) ไฟล์
  `tests/unit/build/runner-capacity-routing.test.ts` ตรึงการกำหนดเส้นทาง การสลับไปใช้ webpack
  และข้อกำหนดว่าจะไม่มีสิ่งใดบน `omni-release` ที่ build ด้วย Turbopack
- **พูลงานเบา: `omni-light`** `omniroute-113` และ `omniroute-113-2` รันงานรายคืนที่ต้องใช้
  `next build` เฉพาะ backend (~5–6 GB; webpack) รวมถึง `quality.yml` `lint-guard`
  ก่อนถึง 2026-10-18 `omniroute-113` มี `MemoryHigh=4G` — build ของ promptfoo ต้องคอยเรียกคืน
  หน่วยความจำตลอดระยะเวลา 54 นาทีบนเครื่องนั้น การเพิ่มเป็น 8 GB ช่วยขจัดการควบคุมลดประสิทธิภาพนี้
- **ตั้งใจให้มี listener น้อยลง** OmniRoute จำนวนสี่ unit ถูกปิดใช้งานเมื่อ 2026-08-29 —
  listener ที่เพิ่มขึ้นทุกตัวคือ tenant อีกรายที่ใช้โควตาหน่วยความจำข้างต้น ขีดจำกัดสูงสุดของ janitor
  คือ 6 (`MAX_ACTIVE_RUNNERS=6` ใน cron): โดยนับ `Runner.Listener` ทุกตัวบนเครื่อง และ
  OmniHeuris + OmniMind เพิ่มอีกสองตัวจากสี่ตัวของเรา
- **ห้ามล้าง `/tmp` หรือ `_work` ด้วยตนเองขณะที่ runner ใดก็ตามกำลังทำงาน** การตรวจสอบแล้วค่อยลบ
  โดยมีช่วงเวลาคั่นกลางระหว่างสองขั้นตอน เป็นสาเหตุให้ job Build ที่กำลังทำงานสูญเสีย `_work`
  เมื่อ 2026-08-27 janitor จะตรวจสอบและลบในขั้นตอนเดียว ปล่อยให้ janitor จัดการ
- การหยุด runner กลาง job จะยกเลิก job (พบจากการใช้งานจริง): ใช้ `systemctl stop` เฉพาะเมื่อ
  listener ของมันไม่มี process ลูก `Runner.Worker` เท่านั้น — และให้ดำเนินการภายในคำสั่งเดียว
- Workflow ต้องไม่พัก artefact ไว้ใน `/tmp` (พื้นที่นี้ใช้ RAM) ให้ดาวน์โหลดไปยัง
  `$RUNNER_TEMP` (อยู่บนดิสก์และแยกตาม runner) — artefact `next-build` ขนาด 1.3 GB ใช้เวลา
  27–32 นาทีในการดาวน์โหลดลง tmpfs และใช้เวลา 2 นาทีในการอัปโหลดจากดิสก์
- VPS `.15` ใช้สำหรับ homologation เท่านั้น — ห้ามรัน CI runner โดยเด็ดขาด
