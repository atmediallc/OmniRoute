# Self-Hosted Runner Box Operations (.113 pool) (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Nhóm máy tự lưu trữ chạy trên máy chủ **.113** (`tomni-proxmox-113`). Kể từ 2026-10-18, mỗi
runner OmniRoute có **một vai trò**, một nhãn và hạn mức bộ nhớ/CPU giúp giữ tổng
`MemoryHigh` gần với dung lượng RAM vật lý:

| runner               | nhãn           | vai trò                                                                                                                               | `MemoryHigh` / `MemoryMax` | `CPUQuota`       |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------------- |
| `omniroute-113-5`    | `omni-build`   | Các bản dựng Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, bản dựng a11y hằng đêm | 40 GB / 44 GB (swap 0)     | 1600 %           |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), bản dựng webpack                                                                      | 20 GB / 24 GB (swap 4 GB)  | 800 %            |
| `omniroute-113-2`    | `omni-light`   | các tác vụ hằng đêm (Schemathesis, promptfoo, garak, k6, khởi động a11y) và `quality.yml` `lint-guard`                                | 12 GB / 16 GB (swap 4 GB)  | 600 %            |
| `omniroute-113`      | `omni-light`   | cùng nhóm như trên                                                                                                                    | 8 GB / 12 GB               | 400 %            |
| OmniHeuris, OmniMind | (repo của họ)  | Chỉ Dependabot (mỗi runner đạt đỉnh 155 MB, 2026-10-18)                                                                               | 4 GB / 6 GB                | 200 % mỗi runner |

Đo vào 2026-10-18:

| tài nguyên | giá trị                        | ý nghĩa đối với việc lập lịch                                                                                                                                                                                                                                                                                   |
| ---------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 lõi**             | một bản dựng production bằng Turbopack đạt đỉnh 33–37 GB khi bị giới hạn bởi cgroup (49 GB khi không giới hạn, `tests/unit/ci-build-bundler-webpack.test.ts`); một bản dựng webpack dùng khoảng 14–16 GB. Một bản dựng Turbopack + một bản dựng webpack có thể chạy cùng nhau; hai bản dựng Turbopack thì không |
| swap       | 16 GB                          | `omniroute-113-5` chạy với swap bị tắt (`MemorySwapMax=0`), nên một bản dựng mất kiểm soát sẽ bị dừng tại giới hạn thay vì khiến máy chủ phải dùng swap                                                                                                                                                         |
| `/tmp`     | **12 GB tmpfs = RAM**          | mọi thứ được lưu ở đó đều chiếm bộ nhớ; dữ liệu còn sót lại được dọn sau 3 giờ                                                                                                                                                                                                                                  |
| CPU        | đã ghi nhận tải 60 trên 32 lõi | trước khi áp dụng hạn mức, một bản dựng Turbopack (~1166 % CPU) cùng với một bộ kiểm thử coverage trên cùng máy chủ đã làm nghẽn heartbeat của các listener khác (`The self-hosted runner lost communication`, #16853)                                                                                          |
| runner     | **6 listener**                 | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` bị vô hiệu hóa (`systemctl enable --now` sẽ khôi phục một runner)                                                                                                                                                                               |

Các giới hạn nằm trong `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` của từng unit
(các giá trị trước đó được giữ lại dưới tên `override.conf.bak-20261018`) và đã được áp dụng trực tiếp bằng
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — không cần khởi động lại, vì vậy không có
job đang chạy nào bị ảnh hưởng. Các nhãn được thay đổi thông qua runners API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), cũng được thực hiện trực tiếp.

## Cài đặt trình dọn dẹp (một lần, trên máy)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): chạy mỗi 30 phút, ghi nhật ký vào /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` là bắt buộc: trình dọn dẹp xác minh một đường dẫn đang ở trạng thái rảnh bằng một ảnh chụp nhanh duy nhất về các tệp đang mở trước khi xóa đường dẫn đó; nếu không có công cụ này, trình dọn dẹp sẽ không xóa gì và sẽ thông báo rõ điều đó
(exit 1). Trước tiên, hãy thử mọi thay đổi với `--dry-run` — tùy chọn này in chính xác những gì sẽ được thực hiện
và không thay đổi gì.

Công việc được thực hiện trong mỗi lần chạy: dọn các phần còn sót lại của chúng ta (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) sau **3 giờ trên tmpfs** và 24 giờ trên
`_work/_temp` của đĩa; chấm dứt một `next-build` tồn tại lâu hơn 75 phút (không job nào chạy lâu đến vậy — vào
2026-08-27, một job đã chạy 70 phút sau khi GitHub tuyên bố job đó bị mất); dọn các
checkout cũ hơn 48 giờ của những runner có unit **đã dừng**; cảnh báo khi mức sử dụng đĩa ≥ 85 %, PSI bộ nhớ
`full/avg60` ≥ 10 %, và số listener vượt quá `MAX_ACTIVE_RUNNERS` (kèm phân tích
omniroute/khác). Exit 1 = cần chú ý; hãy đọc nhật ký.

## Các unit runner: KillMode

Giá trị mặc định `KillMode=process` của runner khiến `Runner.Worker → npm → next-build`
vẫn chạy khi một unit bị dừng hoặc khởi động lại — một bản build mồ côi tiếp tục tiêu tốn RAM và
CPU dù không còn job nào gắn với nó. Mỗi unit OmniRoute đều có một drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
với `KillMode=mixed`: trước tiên gửi SIGTERM đến listener, sau đó gửi SIGKILL đến toàn bộ cgroup khi
đạt `TimeoutStop`. Thiết lập này có hiệu lực trong lần khởi động lại tiếp theo của unit — chỉ khởi động lại **từng runner một,
và chỉ khi đang rảnh**, với bước kiểm tra trạng thái rảnh và khởi động lại nằm trong cùng một lệnh.

## Quy tắc vận hành

- **Mỗi lần chỉ chạy một bản dựng Turbopack — được thực thi bằng nhãn.** Mọi job chạy một
  `next build` Turbopack đầy đủ đều nhắm đến `[self-hosted, omni-build]`, và chỉ
  **`omniroute-113-5`** mang nhãn đó: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, bản dựng a11y hằng đêm (#16853) và
  `docker-publish.yml` **amd64** (webpack bên trong BuildKit — Turbopack đã panic tại đó,
  lượt chạy 33253576569). Nhánh Docker arm64 vẫn chạy trên `ubuntu-24.04-arm`.
  `docker-publish` amd64 dùng chung nhóm đồng thời `heavy-build-main` với `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine phải chạy trên `omniroute-113-5`. Khe Turbopack
  thứ hai không đủ sức chứa trong 78 GB (2 × 33–37 GB cộng với phần còn lại của máy); khe thứ
  hai chỉ an toàn cho các bản dựng webpack.
- **Release-Green có khe riêng (2026-10-18).** Trước thời điểm đó, cả hai quy trình xác thực
  Release-Green đều chạy trên `omni-build`: với mỗi lần push (~10 lần/giờ, 97 trên 100 lượt chạy
  push bị hủy giữa chừng trong một ngày) và ba lượt quét đầy đủ ~2 giờ mỗi ngày (lượt quét lúc
  05:29 đã chờ khe trong 6 giờ) — khe dựng duy nhất đã bị đăng ký vượt công suất gấp nhiều lần,
  khiến các PR Build có nguồn gốc nội bộ phải chờ hàng giờ. `release-green` và `main-green` hiện
  nhắm đến `omni-release` (chỉ `omniroute-113-6`) với `OMNIROUTE_USE_TURBOPACK=0`, và một lượt
  chạy đã bắt đầu sẽ không còn bị hủy bởi lần push mới hơn (khe đang chờ vẫn hợp nhất cơn bão
  lượt chạy). `tests/unit/build/runner-capacity-routing.test.ts` cố định việc định tuyến, chuyển
  sang webpack và đảm bảo rằng không có tác vụ nào trên `omni-release` dựng bằng Turbopack.
- **Nhóm nhẹ: `omni-light`.** `omniroute-113` và `omniroute-113-2` chạy các tác vụ hằng đêm chỉ
  cần `next build` cho backend (~5–6 GB; webpack) và `quality.yml` `lint-guard`.
  `omniroute-113` có `MemoryHigh=4G` cho đến 2026-10-18 — bản dựng promptfoo đã phải liên tục
  thu hồi bộ nhớ trong suốt 54 phút tại đó; 8 GB loại bỏ tình trạng điều tiết này.
- **Cố ý sử dụng ít listener hơn.** Bốn unit OmniRoute đã bị vô hiệu hóa vào 2026-08-29 — mỗi
  listener bổ sung là một bên thuê khác chia sẻ ngân sách bộ nhớ nêu trên. Giới hạn tối đa của
  janitor là 6 (`MAX_ACTIVE_RUNNERS=6` trong cron): nó đếm mọi `Runner.Listener` trên máy, và
  OmniHeuris + OmniMind bổ sung thêm hai listener vào bốn listener của chúng ta.
- **Không bao giờ dọn dẹp `/tmp` hoặc `_work` thủ công khi bất kỳ runner nào đang bận.** Việc
  kiểm tra rồi xóa với một khoảng trễ giữa hai thao tác là nguyên nhân khiến một job Build đang
  chạy bị mất `_work` vào 2026-08-27. Janitor thực hiện việc kiểm tra và xóa trong một bước;
  hãy để nó xử lý.
- Việc dừng một runner giữa chừng sẽ hủy job (đã quan sát trực tiếp): chỉ chạy `systemctl stop`
  khi listener của runner đó không có tiến trình con `Runner.Worker` — và hãy thực hiện trong
  một lệnh duy nhất.
- Các workflow không được lưu artefact trong `/tmp` (đó là RAM). Hãy tải xuống
  `$RUNNER_TEMP` (trên đĩa, riêng cho từng runner) — artefact `next-build` dung lượng 1.3 GB mất
  27–32 phút để được ghi vào tmpfs và 2 phút để tải lên từ đĩa.
- VPS `.15` chỉ dành cho homologation — tuyệt đối không chạy các CI runner.
