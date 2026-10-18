# Self-Hosted Runner Box Operations (.113 pool) (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Pool yang di-host sendiri berjalan pada mesin **.113** (`tomni-proxmox-113`). Sejak 2026-10-18, setiap
runner OmniRoute memiliki **satu peran**, satu label, serta anggaran memori/CPU yang menjaga jumlah
`MemoryHigh` tetap mendekati RAM fisik:

| runner               | label          | peran                                                                                                                      | `MemoryHigh` / `MemoryMax` | `CPUQuota`          |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------- |
| `omniroute-113-5`    | `omni-build`   | Build Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, build a11y nightly | 40 GB / 44 GB (swap 0)     | 1600 %              |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), build webpack                                                              | 20 GB / 24 GB (swap 4 GB)  | 800 %               |
| `omniroute-113-2`    | `omni-light`   | proses nightly (Schemathesis, promptfoo, garak, k6, boot a11y) dan `quality.yml` `lint-guard`                              | 12 GB / 16 GB (swap 4 GB)  | 600 %               |
| `omniroute-113`      | `omni-light`   | pool yang sama seperti di atas                                                                                             | 8 GB / 12 GB               | 400 %               |
| OmniHeuris, OmniMind | (repo mereka)  | Hanya Dependabot (puncak masing-masing 155 MB, 2026-10-18)                                                                 | 4 GB / 6 GB                | masing-masing 200 % |

Diukur pada 2026-10-18:

| sumber daya | nilai                          | artinya bagi penjadwalan                                                                                                                                                                                                                                                |
| ----------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU   | **78 GB / 32 core**            | build produksi Turbopack mencapai puncak 33–37 GB di bawah batas cgroup (49 GB tanpa batas, `tests/unit/ci-build-bundler-webpack.test.ts`); build webpack sekitar 14–16 GB. Satu build Turbopack + satu build webpack dapat berjalan bersama; dua build Turbopack tidak |
| swap        | 16 GB                          | `omniroute-113-5` berjalan dengan swap dinonaktifkan (`MemorySwapMax=0`), sehingga build yang tidak terkendali dihentikan saat mencapai batasnya alih-alih menyebabkan mesin melakukan swapping                                                                         |
| `/tmp`      | **12 GB tmpfs = RAM**          | apa pun yang disimpan di sana menggunakan memori; sisa-sisa dibersihkan setelah 3 jam                                                                                                                                                                                   |
| CPU         | beban 60 pada 32 core teramati | sebelum kuota diterapkan, satu build Turbopack (~1166 % CPU) ditambah rangkaian coverage pada mesin yang sama membuat heartbeat listener lain kekurangan sumber daya (`The self-hosted runner lost communication`, #16853)                                              |
| runner      | **6 listener**                 | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` dinonaktifkan (`systemctl enable --now` mengaktifkan kembali salah satunya)                                                                                                                             |

Batas tersebut berada di `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` milik
setiap unit (nilai sebelumnya disimpan sebagai `override.conf.bak-20261018`) dan diterapkan langsung dengan
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — tanpa restart, sehingga
tidak ada job yang sedang berjalan yang terpengaruh. Label diubah melalui API runner
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), juga secara langsung.

## Instal janitor (satu kali, pada mesin)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): setiap 30 menit, catat log ke /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` diperlukan: janitor memastikan suatu path sedang tidak digunakan melalui satu snapshot file
yang terbuka sebelum menghapusnya, dan tanpa alat ini, janitor tidak menghapus apa pun serta memberi tahu
hal tersebut (exit 1). Uji setiap perubahan dengan `--dry-run` terlebih dahulu — opsi ini mencetak secara persis tindakan yang akan
dilakukan tanpa mengubah apa pun.

Yang dilakukan pada setiap eksekusi: membersihkan sisa-sisa milik kita sendiri (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) setelah **3 jam di tmpfs** dan 24 jam di
`_work/_temp` pada disk; menghentikan `next-build` yang berumur lebih dari 75 menit (tidak ada job yang berjalan selama itu — pada
2026-08-27, satu job berjalan selama 70 menit setelah GitHub menyatakan job tersebut hilang); membersihkan
checkout berumur 48 jam dari runner yang unitnya **dihentikan**; mengirim peringatan saat penggunaan disk ≥ 85%, PSI memori
`full/avg60` ≥ 10%, dan jumlah listener melebihi `MAX_ACTIVE_RUNNERS` (dengan perincian
omniroute/lainnya). Exit 1 = perlu perhatian; baca log.

## Unit runner: KillMode

`KillMode=process` bawaan runner membiarkan `Runner.Worker → npm → next-build`
tetap hidup saat unit dihentikan atau dimulai ulang — build yatim piatu terus menghabiskan RAM dan
CPU tanpa job yang terhubung. Setiap unit OmniRoute memiliki drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
dengan `KillMode=mixed`: SIGTERM dikirimkan terlebih dahulu ke listener, lalu SIGKILL ke seluruh cgroup saat
`TimeoutStop`. Konfigurasi ini mulai berlaku saat unit dimulai ulang berikutnya — mulai ulang **satu runner
pada satu waktu, hanya saat idle**, dengan pemeriksaan idle dan proses mulai ulang dalam perintah yang sama.

## Aturan operasional

- **Satu build Turbopack pada satu waktu — diberlakukan berdasarkan label.** Setiap job yang menjalankan
  `next build` Turbopack penuh menargetkan `[self-hosted, omni-build]`, dan hanya
  **`omniroute-113-5`** yang memiliki label tersebut: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, build a11y nightly (#16853), dan
  `docker-publish.yml` **amd64** (webpack di dalam BuildKit — Turbopack mengalami panic di sana,
  run 33253576569). Tahap Docker arm64 tetap menggunakan `ubuntu-24.04-arm`.
  `docker-publish` amd64 berbagi concurrency group `heavy-build-main` dengan `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine harus berada di `omniroute-113-5`. Slot Turbopack
  kedua tidak muat dalam 78 GB (2 × 33–37 GB ditambah proses lain di mesin tersebut); slot kedua
  hanya aman untuk build webpack.
- **Release-Green memiliki slotnya sendiri (2026-10-18).** Hingga saat itu, kedua validasi
  Release-Green berjalan di `omni-build`: pada setiap push (~10/jam, 97 dari 100 run push dibatalkan
  saat sedang berjalan dalam satu hari) dan tiga pemeriksaan penuh berdurasi ~2 jam per hari
  (pemeriksaan pukul 05:29 menunggu slot selama 6 jam) — slot build tunggal mengalami kelebihan
  permintaan hingga beberapa kali kapasitasnya, dan Build PR dari origin sendiri menunggu selama
  berjam-jam. `release-green` dan `main-green` kini menargetkan `omni-release`
  (hanya `omniroute-113-6`) dengan `OMNIROUTE_USE_TURBOPACK=0`, dan run yang telah dimulai tidak
  lagi dibatalkan oleh push yang lebih baru (slot yang tertunda tetap menggabungkan lonjakan
  tersebut). `tests/unit/build/runner-capacity-routing.test.ts` menetapkan routing, peralihan ke
  webpack, dan memastikan bahwa tidak ada proses di `omni-release` yang melakukan build dengan
  Turbopack.
- **Pool ringan: `omni-light`.** `omniroute-113` dan `omniroute-113-2` menjalankan proses nightly
  yang memerlukan `next build` khusus backend (~5–6 GB; webpack) dan `quality.yml` `lint-guard`.
  `omniroute-113` memiliki `MemoryHigh=4G` hingga 2026-10-18 — build promptfoo terus melakukan
  reklamasi memori selama 54 menit di sana; 8 GB menghilangkan throttling tersebut.
- **Jumlah listener sengaja dikurangi.** Empat unit OmniRoute dinonaktifkan pada 2026-08-29 —
  setiap listener tambahan menjadi pengguna lain dalam anggaran memori di atas. Batas maksimum
  janitor adalah 6 (`MAX_ACTIVE_RUNNERS=6` di cron): batas tersebut menghitung setiap
  `Runner.Listener` di mesin, dan OmniHeuris + OmniMind menambahkan dua listener ke empat listener
  milik kami.
- **Jangan pernah membersihkan `/tmp` atau `_work` secara manual ketika ada runner yang sibuk.**
  Proses memeriksa-lalu-menghapus dengan jeda di antara kedua langkah tersebut menyebabkan job
  Build yang aktif kehilangan `_work` miliknya pada 2026-08-27. Janitor melakukan pemeriksaan dan
  penghapusan dalam satu langkah; biarkan janitor yang menanganinya.
- Menghentikan runner saat job sedang berjalan akan membatalkan job tersebut (diamati secara
  langsung): jalankan `systemctl stop` hanya ketika listener-nya tidak memiliki proses turunan
  `Runner.Worker` — dan lakukan dalam satu perintah.
- Workflow tidak boleh menyimpan artefak di `/tmp` (lokasi tersebut menggunakan RAM). Unduh ke
  `$RUNNER_TEMP` (berada di disk, terpisah untuk setiap runner) — artefak `next-build` berukuran
  1,3 GB memerlukan 27–32 menit untuk tersimpan di tmpfs dan 2 menit untuk diunggah dari disk.
- VPS `.15` hanya untuk homologasi — jangan pernah menjalankan runner CI.
