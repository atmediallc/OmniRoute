# Self-Hosted Runner Box Operations (.113 pool) (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Kumpulan dihos sendiri berjalan pada mesin **.113** (`tomni-proxmox-113`). Sejak 2026-10-18, setiap
pelaksana OmniRoute mempunyai **satu peranan**, satu label dan belanjawan memori/CPU yang mengekalkan jumlah
`MemoryHigh` hampir dengan RAM fizikal:

| pelaksana            | label               | peranan                                                                                                                           | `MemoryHigh` / `MemoryMax` | `CPUQuota`        |
| -------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------- |
| `omniroute-113-5`    | `omni-build`        | Binaan Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, binaan a11y setiap malam | 40 GB / 44 GB (swap 0)     | 1600 %            |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), binaan webpack                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %             |
| `omniroute-113-2`    | `omni-light`        | tugas setiap malam (Schemathesis, promptfoo, garak, k6, but a11y) dan `quality.yml` `lint-guard`                                  | 12 GB / 16 GB (swap 4 GB)  | 600 %             |
| `omniroute-113`      | `omni-light`        | kumpulan yang sama seperti di atas                                                                                                | 8 GB / 12 GB               | 400 %             |
| OmniHeuris, OmniMind | (repositori mereka) | Dependabot sahaja (puncak 155 MB setiap satu, 2026-10-18)                                                                         | 4 GB / 6 GB                | 200 % setiap satu |

Diukur pada 2026-10-18:

| sumber    | nilai                               | maknanya untuk penjadualan                                                                                                                                                                                                                                                            |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 teras**                | binaan pengeluaran Turbopack memuncak pada 33–37 GB di bawah had cgroup (49 GB tanpa had, `tests/unit/ci-build-bundler-webpack.test.ts`); binaan webpack pula sekitar 14–16 GB. Satu binaan Turbopack + satu binaan webpack boleh berjalan serentak; dua binaan Turbopack tidak boleh |
| swap      | 16 GB                               | `omniroute-113-5` berjalan dengan swap dimatikan (`MemorySwapMax=0`) supaya binaan yang tidak terkawal dihentikan pada hadnya dan bukannya menyebabkan mesin menggunakan swap                                                                                                         |
| `/tmp`    | **12 GB tmpfs = RAM**               | apa-apa yang diletakkan di situ menggunakan memori; baki fail dibersihkan selepas 3 jam                                                                                                                                                                                               |
| CPU       | beban 60 pada 32 teras diperhatikan | sebelum kuota digunakan, satu binaan Turbopack (~1166 % CPU) bersama suit liputan pada mesin yang sama menyebabkan denyutan pendengar lain kekurangan sumber (`Pelaksana dihos sendiri terputus komunikasi`, #16853)                                                                  |
| pelaksana | **6 pendengar**                     | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` dinyahdayakan (`systemctl enable --now` mengaktifkan semula salah satunya)                                                                                                                                            |

Had tersebut berada dalam `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` bagi setiap unit
(nilai sebelumnya disimpan sebagai `override.conf.bak-20261018`) dan digunakan secara langsung dengan
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — tanpa mula semula, jadi tiada
tugas yang sedang berjalan terjejas. Label diubah melalui API pelaksana
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), juga secara langsung.

## Pasang janitor (sekali sahaja, pada mesin)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): setiap 30 minit, log ke /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` diperlukan: janitor memastikan sesuatu laluan tidak digunakan melalui satu petikan fail
terbuka sebelum mengalih keluarnya, dan tanpa alat tersebut ia tidak mengalih keluar apa-apa serta
memaklumkannya (exit 1). Cuba sebarang perubahan dengan `--dry-run` terlebih dahulu — ia memaparkan
dengan tepat tindakan yang akan dilakukan dan tidak mengubah apa-apa.

Perkara yang dilakukannya pada setiap pelaksanaan: membersihkan sisa kita sendiri (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) selepas **3 jam pada tmpfs** dan 24 jam pada
`_work/_temp` dalam cakera; menghentikan `next-build` yang berusia lebih daripada 75 minit (tiada tugas berjalan selama itu — pada
2026-08-27 satu daripadanya berjalan selama 70 minit selepas GitHub mengisytiharkan tugasnya hilang); memangkas
checkout yang berusia 48 jam bagi runner yang unitnya **dihentikan**; memberi amaran apabila penggunaan cakera ≥ 85 %, PSI memori
`full/avg60` ≥ 10 %, dan bilangan listener melebihi `MAX_ACTIVE_RUNNERS` (dengan pecahan
omniroute/lain-lain). Exit 1 = perhatian diperlukan; baca log.

## Unit pelaksana: KillMode

`KillMode=process` lalai pelaksana membiarkan `Runner.Worker → npm → next-build`
terus hidup apabila unit dihentikan atau dimulakan semula — binaan yatim terus menggunakan RAM dan
CPU tanpa kerja yang terikat padanya. Setiap unit OmniRoute mempunyai fail tambahan
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
dengan `KillMode=mixed`: SIGTERM kepada pendengar terlebih dahulu, kemudian SIGKILL kepada seluruh cgroup apabila
`TimeoutStop`. Ia berkuat kuasa pada permulaan semula unit yang berikutnya — mulakan semula **satu pelaksana pada
satu-satu masa, hanya apabila melahu**, dengan semakan melahu dan permulaan semula dalam perintah yang sama.

## Peraturan operasi

- **Satu binaan Turbopack pada satu-satu masa — dikuatkuasakan melalui label.** Setiap tugas yang menjalankan binaan penuh Turbopack
  `next build` menyasarkan `[self-hosted, omni-build]`, dan hanya **`omniroute-113-5`** mempunyai
  label tersebut: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  binaan a11y setiap malam (#16853) dan `docker-publish.yml` **amd64** (webpack dalam BuildKit —
  Turbopack mengalami panik di situ, larian 33253576569). Bahagian Docker arm64 kekal pada `ubuntu-24.04-arm`.
  `docker-publish` amd64 berkongsi kumpulan keserentakan `heavy-build-main` dengan `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine mesti tersedia pada `omniroute-113-5`. Slot Turbopack
  kedua tidak muat dalam 78 GB (2 × 33–37 GB serta proses lain pada mesin); slot kedua hanya selamat untuk
  binaan webpack.
- **Release-Green mempunyai slotnya sendiri (2026-10-18).** Sebelum itu, kedua-dua pengesahan Release-Green berjalan
  pada `omni-build`: pada setiap push (~10/jam, 97 daripada 100 larian push dibatalkan ketika sedang berjalan dalam satu hari)
  dan tiga sapuan penuh ~2 j sehari (sapuan 05:29 menunggu 6 j untuk mendapatkan slot) — satu-satunya slot binaan
  telah terlebih langgan beberapa kali ganda dan Build PR daripada asal sendiri menunggu selama berjam-jam.
  `release-green` dan `main-green` kini menyasarkan `omni-release` (`omniroute-113-6` sahaja) dengan
  `OMNIROUTE_USE_TURBOPACK=0`, dan larian yang telah bermula tidak lagi dibatalkan oleh push yang lebih baharu (slot
  yang belum dimulakan masih menggabungkan lonjakan tersebut). `tests/unit/build/runner-capacity-routing.test.ts`
  mengunci penghalaan, pertukaran webpack dan memastikan tiada apa-apa pada `omni-release` dibina dengan Turbopack.
- **Kumpulan ringan: `omni-light`.** `omniroute-113` dan `omniroute-113-2` menjalankan tugas setiap malam yang memerlukan
  `next build` bahagian belakang sahaja (~5–6 GB; webpack) dan `quality.yml` `lint-guard`. `omniroute-113`
  mempunyai `MemoryHigh=4G` sehingga 2026-10-18 — binaan promptfoo meneruskan proses penuntutan semula memori selama 54 minit
  di situ; 8 GB menghapuskan pendikitan tersebut.
- **Bilangan pendengar yang lebih sedikit adalah disengajakan.** Empat unit OmniRoute telah dilumpuhkan pada 2026-08-29 — setiap
  pendengar tambahan ialah penyewa lain bagi belanjawan memori di atas. Had maksimum janitor ialah 6 (`MAX_ACTIVE_RUNNERS=6` dalam cron): ia mengira
  setiap `Runner.Listener` pada mesin, dan OmniHeuris + OmniMind menambah dua kepada empat milik kami.
- **Jangan sekali-kali membersihkan `/tmp` atau `_work` secara manual semasa mana-mana runner sibuk.** Proses
  semak-kemudian-padam dengan sela masa antara kedua-duanya menyebabkan tugas Build yang sedang berjalan kehilangan
  `_work` pada 2026-08-27. Janitor melakukan semakan dan penghapusan dalam satu langkah;
  biarkannya.
- Menghentikan runner ketika tugas sedang berjalan akan membatalkan tugas tersebut (diperhatikan secara langsung): `systemctl stop` hanya
  apabila listener tidak mempunyai proses anak `Runner.Worker` — dan lakukan dalam satu perintah.
- Aliran kerja tidak boleh meletakkan artifak dalam `/tmp` (ia menggunakan RAM). Muat turun ke
  `$RUNNER_TEMP` (pada cakera, bagi setiap runner) — artifak `next-build` bersaiz 1.3 GB mengambil masa 27–32
  minit untuk ditempatkan pada tmpfs dan 2 minit untuk dimuat naik dari cakera.
- VPS `.15` adalah untuk homologasi sahaja — ia tidak pernah menjalankan runner CI.
