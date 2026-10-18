# Self-Hosted Runner Box Operations (.113 pool) (中文 (简体))

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

自托管运行器池运行在 **.113** 主机（`tomni-proxmox-113`）上。自 2026-10-18 起，每个
OmniRoute 运行器都具有**一个角色**、一个标签，以及使 `MemoryHigh` 总和接近物理内存容量的内存/CPU 预算：

| 运行器               | 标签           | 角色                                                                                                                  | `MemoryHigh` / `MemoryMax`     | `CPUQuota` |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack 构建：`ci.yml` `Build`、Docker amd64、`npm-publish`、`nightly-v4-build`、`preview-artifact`、夜间 a11y 构建 | 40 GB / 44 GB（交换空间 0）    | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green（`release-green` + `main-green`）、webpack 构建                                                         | 20 GB / 24 GB（交换空间 4 GB） | 800 %      |
| `omniroute-113-2`    | `omni-light`   | 夜间任务（Schemathesis、promptfoo、garak、k6、a11y 启动）以及 `quality.yml` `lint-guard`                              | 12 GB / 16 GB（交换空间 4 GB） | 600 %      |
| `omniroute-113`      | `omni-light`   | 与上方相同的运行器池                                                                                                  | 8 GB / 12 GB                   | 400 %      |
| OmniHeuris, OmniMind | （各自的仓库） | 仅运行 Dependabot（每个峰值 155 MB，2026-10-18）                                                                      | 4 GB / 6 GB                    | 每个 200 % |

2026-10-18 实测：

| 资源       | 数值                        | 对调度的意义                                                                                                                                                                                                                       |
| ---------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 内存 / CPU | **78 GB / 32 核**           | 在 cgroup 限制下，Turbopack 生产构建的峰值为 33–37 GB（无限制时为 49 GB，`tests/unit/ci-build-bundler-webpack.test.ts`）；webpack 构建约为 14–16 GB。一个 Turbopack 构建和一个 webpack 构建可以同时运行；两个 Turbopack 构建则不行 |
| 交换空间   | 16 GB                       | `omniroute-113-5` 在禁用交换空间的情况下运行（`MemorySwapMax=0`），因此失控的构建会在达到其上限时被终止，而不会通过交换拖垮整台主机                                                                                                |
| `/tmp`     | **12 GB tmpfs = 内存**      | 存放在其中的任何内容都会占用内存；残留内容会在 3 小时后被清理                                                                                                                                                                      |
| CPU        | 在 32 核上观察到负载达到 60 | 在设置配额之前，一个 Turbopack 构建（约 1166 % CPU）加上同一主机上的覆盖率测试套件会导致其他监听器的心跳得不到资源（`The self-hosted runner lost communication`，#16853）                                                          |
| 运行器     | **6 个监听器**              | 4 个 OmniRoute + OmniHeuris + OmniMind；`omniroute-113-3/-4/-7/-8` 已禁用（`systemctl enable --now` 可重新启用其中一个）                                                                                                           |

这些限制位于每个单元的 `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
中（之前的值保存在 `override.conf.bak-20261018`），并通过
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` 实时应用——无需重启，因此没有
影响任何正在运行的作业。标签通过运行器 API 更改
（`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`），同样实时生效。

## 安装清理程序（仅需一次，在该主机上执行）

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron（root）：每 30 分钟运行一次，日志写入 /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

必须安装 `lsof`：清理程序在删除路径前，会通过一次打开文件快照确认该路径处于空闲状态；如果没有此工具，它不会删除任何内容，并会明确说明原因（退出码为 1）。进行任何更改前，请先使用 `--dry-run` 试运行——它会准确输出将要执行的操作，但不会改动任何内容。

每次运行时，它会执行以下操作：清理我们自己的残留项（`runner-*`、`omniroute-*`、`next-build*`、`e2e-build.tar.gz`），tmpfs 上的项目在 **3 小时**后清理，磁盘上 `_work/_temp` 中的项目在 24 小时后清理；终止运行时间超过 75 分钟的 `next-build`（没有任何作业应该运行这么久——2026-08-27 有一个作业在 GitHub 已宣布其丢失后又运行了 70 分钟）；清理对应单元已**停止**的运行器中存在超过 48 小时的检出目录；当磁盘使用率 ≥ 85%、内存 PSI `full/avg60` ≥ 10%，或监听器数量超过 `MAX_ACTIVE_RUNNERS` 时发出警报（并提供 omniroute/其他监听器的分类统计）。退出码为 1 = 需要处理；请查看日志。

## 运行器单元：KillMode

运行器默认的 `KillMode=process` 会在单元停止或重启时留下仍在运行的 `Runner.Worker → npm → next-build`
——孤儿构建会在没有关联作业的情况下继续消耗 RAM 和
CPU。每个 OmniRoute 单元都带有一个插入配置
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)，
其中设置了 `KillMode=mixed`：首先向监听器发送 SIGTERM，并在
`TimeoutStop` 时向整个 cgroup 发送 SIGKILL。该配置会在单元下次重启时生效——**每次只重启一个运行器，
且仅在其空闲时进行**，并将空闲检查和重启放在同一条命令中。

## 运行规则

- **一次只能运行一个 Turbopack 构建——通过标签强制执行。** 每个运行完整 Turbopack
  `next build` 的作业都以 `[self-hosted, omni-build]` 为目标，并且只有 **`omniroute-113-5`**
  带有该标签：`ci.yml` 的 `Build`、`npm-publish.yml` 的 `publish`、`nightly-v4-build`、`preview-artifact`、
  夜间 a11y 构建（#16853），以及 `docker-publish.yml` 的 **amd64**（在 BuildKit 内使用 webpack——
  Turbopack 曾在那里发生 panic，运行编号为 33253576569）。arm64 Docker 分支仍在 `ubuntu-24.04-arm`
  上运行。`docker-publish` 的 amd64 与 `ci.yml` 的 `Build` 共享 `heavy-build-main` 并发组
  （`cancel-in-progress: false`）。`omniroute-113-5` 上必须运行 Docker Engine。第二个 Turbopack
  槽位无法容纳在 78 GB 内存中（2 × 33–37 GB，再加上机器上的其余负载）；第二个槽位仅对
  webpack 构建是安全的。
- **Release-Green 拥有自己的槽位（2026-10-18）。** 在此之前，两个 Release-Green 验证都运行在
  `omni-build` 上：每次推送都会运行（约 10 次/小时，有一天的 100 次推送运行中有 97 次在执行期间被取消），
  每天还会进行三次约 2 小时的完整扫描（05:29 的扫描为等待槽位耗时 6 小时）——单个构建
  槽位的超额占用一度达到数倍，来自自身仓库的 PR `Build` 需要等待数小时。
  `release-green` 和 `main-green` 现在以 `omni-release`（仅 `omniroute-113-6`）为目标，并设置
  `OMNIROUTE_USE_TURBOPACK=0`；已开始的运行也不会再被较新的推送取消（待处理槽位仍会合并这类
  突发请求）。`tests/unit/build/runner-capacity-routing.test.ts`
  固定了路由、webpack 切换逻辑，并确保 `omni-release` 上没有任何构建使用 Turbopack。
- **轻量池：`omni-light`。** `omniroute-113` 和 `omniroute-113-2` 运行需要仅后端
  `next build`（约 5–6 GB；webpack）的夜间任务，以及 `quality.yml` 的 `lint-guard`。`omniroute-113`
  在 2026-10-18 之前设置了 `MemoryHigh=4G`——promptfoo 构建在那里因内存回收而受限，持续了 54 分钟；
  8 GB 可消除这种限流。
- **有意减少监听器数量。** 2026-08-29 禁用了四个 OmniRoute 单元——每增加一个
  监听器，就会为上述内存预算增加一个租户。清理程序的上限为 6（cron 中的 `MAX_ACTIVE_RUNNERS=6`）：它会统计
  机器上的每个 `Runner.Listener`，而 OmniHeuris + OmniMind 会在我们的四个之外再增加两个。
- **当任何运行器处于忙碌状态时，绝不要手动清理 `/tmp` 或 `_work`。**
  先检查、隔一段时间再删除的做法，曾导致一个正在运行的 `Build` 作业在
  2026-08-27 丢失其 `_work`。清理程序会在一个步骤中完成检查和删除；
  让它处理即可。
- 在作业执行期间停止运行器会取消该作业（已在线上观察到）：仅当监听器没有
  `Runner.Worker` 子进程时才能执行 `systemctl stop`——并且要在一条命令中完成。
- 工作流不得将工件存放在 `/tmp` 中（它位于 RAM 上）。应下载到
  `$RUNNER_TEMP`（位于磁盘上，每个运行器独享）——1.3 GB 的 `next-build` 工件写入 tmpfs 耗时 27–32
  分钟，而从磁盘上传仅需 2 分钟。
- `.15` VPS 仅用于验收环境——绝不运行 CI 运行器。
