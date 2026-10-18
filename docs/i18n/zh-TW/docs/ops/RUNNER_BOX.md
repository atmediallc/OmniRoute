# Self-Hosted Runner Box Operations (.113 pool) (中文 (繁體))

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md)

---

自架集區在 **.113** 主機 (`tomni-proxmox-113`) 上執行。自 2026-10-18 起，每個
OmniRoute 執行器都有**一個角色**、一個標籤，以及使 `MemoryHigh` 總和接近實體 RAM 的
記憶體/CPU 配額：

| 執行器               | 標籤             | 角色                                                                                                                  | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`     | Turbopack 建置：`ci.yml` `Build`、Docker amd64、`npm-publish`、`nightly-v4-build`、`preview-artifact`、每晚 a11y 建置 | 40 GB / 44 GB（swap 0）    | 1600 %     |
| `omniroute-113-6`    | `omni-release`   | Release-Green（`release-green` + `main-green`）、webpack 建置                                                         | 20 GB / 24 GB（swap 4 GB） | 800 %      |
| `omniroute-113-2`    | `omni-light`     | 每晚執行項目（Schemathesis、promptfoo、garak、k6、a11y 啟動）以及 `quality.yml` `lint-guard`                          | 12 GB / 16 GB（swap 4 GB） | 600 %      |
| `omniroute-113`      | `omni-light`     | 與上述相同的集區                                                                                                      | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | （各自的儲存庫） | 僅執行 Dependabot（每個峰值 155 MB，2026-10-18）                                                                      | 4 GB / 6 GB                | 每個 200 % |

2026-10-18 實測：

| 資源      | 數值                      | 對排程的意義                                                                                                                                                                                                                     |
| --------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 核心**       | Turbopack 正式環境建置在 cgroup 上限下的峰值為 33–37 GB（無上限時為 49 GB，`tests/unit/ci-build-bundler-webpack.test.ts`）；webpack 建置約為 14–16 GB。一個 Turbopack 加上一個 webpack 建置可同時容納；兩個 Turbopack 建置則不行 |
| swap      | 16 GB                     | `omniroute-113-5` 停用 swap（`MemorySwapMax=0`），因此失控的建置會在達到上限時被終止，而不是讓主機開始使用 swap                                                                                                                  |
| `/tmp`    | **12 GB tmpfs = RAM**     | 任何放在這裡的內容都會占用記憶體；殘留項目會在 3 小時後清除                                                                                                                                                                      |
| CPU       | 在 32 核心上觀察到負載 60 | 在設定配額之前，一個 Turbopack 建置（約 1166 % CPU）加上同一主機上的覆蓋率測試套件，會使其他監聽器的心跳得不到資源（`自架執行器失去通訊`，#16853）                                                                               |
| 執行器    | **6 個監聽器**            | 4 個 OmniRoute + OmniHeuris + OmniMind；`omniroute-113-3/-4/-7/-8` 已停用（`systemctl enable --now` 可重新啟用其中一個）                                                                                                         |

限制設定存放在各單元的 `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
中（先前的值保留為 `override.conf.bak-20261018`），並透過
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` 即時套用——不需重新啟動，因此沒有
影響任何執行中的工作。標籤透過執行器 API 變更
（`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`），同樣為即時生效。

## 安裝清理程式（一次性，在該主機上執行）

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron（root）：每 30 分鐘執行一次，記錄至 /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

需要 `lsof`：清理程式會先取得一次開啟中檔案的快照，以確認路徑處於閒置狀態，才會將其移除；若沒有此工具，它不會移除任何內容，並會明確說明
（結束碼 1）。任何變更都應先使用 `--dry-run` 測試——它會精確列出將執行的操作，
且不會變更任何內容。

每次執行時會進行以下操作：清除我們自己的殘留項目（`runner-*`、`omniroute-*`、
`next-build*`、`e2e-build.tar.gz`），在 **tmpfs 上超過 3 小時**或磁碟上的
`_work/_temp` 中超過 24 小時即清除；終止執行超過 75 分鐘的 `next-build`（沒有任何工作會執行這麼久——
2026-08-27 有一個工作在 GitHub 已宣告其遺失後仍執行了 70 分鐘）；清除所屬單元為
**已停止**之執行器中超過 48 小時的簽出項目；在磁碟使用率 ≥ 85%、記憶體 PSI
`full/avg60` ≥ 10%，以及監聽器數量超過 `MAX_ACTIVE_RUNNERS` 時發出警示（並分別列出
omniroute/其他的數量）。結束碼 1 = 需要處理；請查看日誌。

## Runner 單元：KillMode

Runner 預設的 `KillMode=process` 會在單元停止或重新啟動時，讓 `Runner.Worker → npm → next-build`
繼續存活——孤兒建置程序會在沒有任何工作與其關聯的情況下持續消耗 RAM 和
CPU。每個 OmniRoute 單元都帶有一個置入式設定
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)，
其中設定 `KillMode=mixed`：先向監聽器傳送 SIGTERM，並在
`TimeoutStop` 時對整個 cgroup 傳送 SIGKILL。此設定會在單元下次重新啟動時生效——**一次只重新啟動一個 runner，而且僅能在閒置時進行**，並將閒置檢查與重新啟動放在同一個命令中。

## 操作規則

- **一次只能執行一個 Turbopack 建置——透過標籤強制執行。** 每個執行完整 Turbopack
  `next build` 的工作都以 `[self-hosted, omni-build]` 為目標，而且只有 **`omniroute-113-5`** 帶有該
  標籤：`ci.yml` 的 `Build`、`npm-publish.yml` 的 `publish`、`nightly-v4-build`、`preview-artifact`、
  每夜 a11y 建置（#16853），以及 `docker-publish.yml` 的 **amd64**（在 BuildKit 內使用 webpack——
  Turbopack 曾在該處發生 panic，執行編號 33253576569）。arm64 Docker 階段仍在 `ubuntu-24.04-arm` 上執行。
  `docker-publish` 的 amd64 與 `ci.yml` 的 `Build` 共用 `heavy-build-main` 並行群組
  （`cancel-in-progress: false`）。Docker Engine 必須位於 `omniroute-113-5` 上。第二個 Turbopack
  執行槽無法容納於 78 GB 中（2 × 33–37 GB，再加上主機上的其他項目）；第二個執行槽僅適合
  webpack 建置。
- **Release-Green 擁有自己的執行槽（2026-10-18）。** 在此之前，兩項 Release-Green 驗證都在
  `omni-build` 上執行：每次推送時執行（約每小時 10 次；某一天的 100 次推送執行中，有 97 次在工作途中遭取消），
  且每天執行三次約 2 小時的完整掃描（05:29 的掃描為了等待執行槽而等了 6 小時）——單一建置
  執行槽的需求量數度超出容量數倍，而來自自身來源的 PR 建置必須等待數小時。
  `release-green` 和 `main-green` 現在以 `omni-release`（僅限 `omniroute-113-6`）為目標，並設定
  `OMNIROUTE_USE_TURBOPACK=0`，而且已開始的執行不再會因較新的推送而被取消（待處理執行槽仍會合併這波大量請求）。
  `tests/unit/build/runner-capacity-routing.test.ts`
  固定了路由、webpack 切換設定，以及 `omni-release` 上不得有任何項目使用 Turbopack 建置的規則。
- **輕量集區：`omni-light`。** `omniroute-113` 和 `omniroute-113-2` 執行需要
  僅後端 `next build`（約 5–6 GB；webpack）的每夜工作，以及 `quality.yml` 的 `lint-guard`。`omniroute-113`
  在 2026-10-18 之前使用 `MemoryHigh=4G`——promptfoo 建置在該處花了 54 分鐘反覆回收記憶體才完成；
  8 GB 可消除此限流情況。
- **刻意減少接聽器數量。** 2026-08-29 停用了四個 OmniRoute 單元——每增加一個
  接聽器，就會成為上述記憶體預算的另一個租用者。清理程式的上限為 6（cron 中的 `MAX_ACTIVE_RUNNERS=6`）：它會計算
  主機上的每個 `Runner.Listener`，而 OmniHeuris + OmniMind 會在我們的四個之外再增加兩個。
- **當任何執行器忙碌時，絕不要手動清理 `/tmp` 或 `_work`。** 先檢查後刪除，
  且兩個動作之間存在時間差，正是導致一個進行中的 Build 工作在 2026-08-27 遺失其
  `_work` 的原因。清理程式會在單一步驟中完成檢查與移除；
  交由它處理。
- 在工作途中停止執行器會取消該工作（已在實際環境中觀察到）：僅在其接聽器沒有
  `Runner.Worker` 子程序時才能執行 `systemctl stop`——而且必須用單一命令完成。
- 工作流程不得將成品暫存在 `/tmp`（它位於 RAM 中）。請下載至
  `$RUNNER_TEMP`（位於磁碟上，且每個執行器各自獨立）——1.3 GB 的 `next-build` 成品下載至 tmpfs 花了 27–32
  分鐘，而從磁碟上傳只需 2 分鐘。
- `.15` VPS 僅供驗收測試使用——絕不執行 CI 執行器。
