# Self-Hosted Runner Box Operations (.113 pool) (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

セルフホストプールは **.113** マシン（`tomni-proxmox-113`）上で稼働しています。2026-10-18 以降、各
OmniRoute ランナーには **1 つの役割**、1 つのラベル、および `MemoryHigh` の合計が
物理 RAM 容量付近に収まるように設定されたメモリ/CPU 予算があります。

| runner               | label            | role                                                                                                                         | `MemoryHigh` / `MemoryMax`     | `CPUQuota` |
| -------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| `omniroute-113-5`    | `omni-build`     | Turbopack ビルド：`ci.yml` の `Build`、Docker amd64、`npm-publish`、`nightly-v4-build`、`preview-artifact`、夜間 a11y ビルド | 40 GB / 44 GB（スワップ 0）    | 1600 %     |
| `omniroute-113-6`    | `omni-release`   | Release-Green（`release-green` + `main-green`）、webpack ビルド                                                              | 20 GB / 24 GB（スワップ 4 GB） | 800 %      |
| `omniroute-113-2`    | `omni-light`     | 夜間ジョブ（Schemathesis、promptfoo、garak、k6、a11y ブート）および `quality.yml` の `lint-guard`                            | 12 GB / 16 GB（スワップ 4 GB） | 600 %      |
| `omniroute-113`      | `omni-light`     | 上記と同じプール                                                                                                             | 8 GB / 12 GB                   | 400 %      |
| OmniHeuris, OmniMind | （各リポジトリ） | Dependabot のみ（各ピーク 155 MB、2026-10-18）                                                                               | 4 GB / 6 GB                    | 各 200 %   |

2026-10-18 測定：

| resource  | value                   | what it means for scheduling                                                                                                                                                                                                                                                |
| --------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 コア**     | Turbopack の本番ビルドは、cgroup 上限下でピーク時に 33～37 GB を使用する（上限なしでは 49 GB、`tests/unit/ci-build-bundler-webpack.test.ts`）。webpack ビルドは約 14～16 GB。Turbopack ビルド 1 件と webpack ビルド 1 件は同時実行できるが、Turbopack ビルド 2 件はできない |
| swap      | 16 GB                   | `omniroute-113-5` はスワップ無効（`MemorySwapMax=0`）で実行されるため、暴走したビルドはマシンをスワップさせる代わりに上限で停止される                                                                                                                                       |
| `/tmp`    | **12 GB tmpfs = RAM**   | ここに置かれたものはすべてメモリを消費する。残存物は 3 時間後に削除される                                                                                                                                                                                                   |
| CPU       | 32 コアで負荷 60 を観測 | クォータ設定前は、Turbopack ビルド 1 件（CPU 使用率約 1166 %）とカバレッジスイートを同じマシン上で実行すると、他のリスナーのハートビートに必要なリソースが不足した（`The self-hosted runner lost communication`、#16853）                                                   |
| runners   | **6 リスナー**          | OmniRoute 4 台 + OmniHeuris + OmniMind。`omniroute-113-3/-4/-7/-8` は無効化されている（`systemctl enable --now` で 1 台を復帰可能）                                                                                                                                         |

制限は各ユニットの `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
にあり（以前の値は `override.conf.bak-20261018` として保持）、実行中に
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` を使用して適用されました。再起動は行っていないため、
実行中のジョブには影響していません。ラベルも runners API
（`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`）を通じて、実行中に変更されます。

## janitor のインストール（マシン上で 1 回のみ）

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron（root）：30 分ごとに実行し、/var/log/runner-janitor.log に記録
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` は必須です。janitor はパスを削除する前に、開いているファイルのスナップショットを 1 回取得して、そのパスが使用されていないことを確認します。このツールがない場合は何も削除せず、その旨を通知します（終了コード 1）。変更を加える場合は、まず `--dry-run` で試してください。実行予定の処理が正確に表示され、実際には何も変更されません。

実行のたびに行う処理：**tmpfs 上では 3 時間後**、ディスク上の
`_work/_temp` では 24 時間後に、独自の残留物（`runner-*`、`omniroute-*`、
`next-build*`、`e2e-build.tar.gz`）を削除する。75 分を超えた `next-build`
を強制終了する（これほど長時間実行されるジョブはない。2026-08-27 には、
GitHub がジョブの消失を宣言した後も 1 件が 70 分間実行され続けた）。ユニットが
**停止中**のランナーについて、48 時間以上前のチェックアウトを削除する。ディスク使用率
≥ 85 %、メモリ PSI `full/avg60` ≥ 10 %、またはリスナー数が
`MAX_ACTIVE_RUNNERS` を超えた場合に警告する（omniroute/その他の内訳も表示）。
終了コード 1 = 対応が必要です。ログを確認してください。

## Runnerユニット: KillMode

runnerのデフォルトである`KillMode=process`では、ユニットを停止または再起動しても`Runner.Worker → npm → next-build`が生き残ります。孤児化したビルドは、紐づくジョブがないままRAMとCPUを消費し続けます。すべてのOmniRouteユニットには、`KillMode=mixed`を指定したdrop-in（`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`）があります。これは最初にlistenerへSIGTERMを送り、`TimeoutStop`到達時にcgroup全体へSIGKILLを送ります。この設定はユニットの次回再起動時に有効になります。**一度に1つのrunnerだけを、アイドル時に限って**再起動し、アイドル確認と再起動を同じコマンド内で実行してください。

## 運用ルール

- **Turbopack ビルドは一度に 1 つ — ラベルで強制。** 完全な Turbopack
  `next build` を実行するすべてのジョブは `[self-hosted, omni-build]` を対象とし、その
  ラベルが付いているのは **`omniroute-113-5`** のみです。対象は `ci.yml` の `Build`、`npm-publish.yml` の `publish`、`nightly-v4-build`、`preview-artifact`、
  nightly a11y ビルド（#16853）、および `docker-publish.yml` の **amd64**（BuildKit 内では webpack —
  そこで Turbopack がパニックしました。run 33253576569）です。arm64 Docker ジョブは引き続き `ubuntu-24.04-arm` を使用します。
  `docker-publish` の amd64 は、`ci.yml` の `Build` と `heavy-build-main` concurrency group を共有します
  （`cancel-in-progress: false`）。Docker Engine は `omniroute-113-5` 上になければなりません。2 つ目の Turbopack
  スロットは 78 GB には収まりません（2 × 33–37 GB に加え、マシン上の他の処理もあるため）。2 つ目のスロットが安全なのは
  webpack ビルドの場合のみです。
- **Release-Green には専用スロットがあります（2026-10-18）。** それまでは、両方の Release-Green 検証が
  `omni-build` 上で実行されていました。すべての push 時（約 10 回/時。ある 1 日では push run 100 件中 97 件が処理途中でキャンセル）
  と、1 日 3 回の約 2 時間に及ぶフルスイープ（05:29 のスイープはスロットを 6 時間待機）です。このため単一のビルド
  スロットは処理能力を数倍上回る負荷となり、同一オリジンの PR Build が数時間待機していました。
  `release-green` と `main-green` は現在、`OMNIROUTE_USE_TURBOPACK=0` を指定して
  `omni-release`（`omniroute-113-6` のみ）を対象としており、開始済みの run は新しい push によってキャンセルされなくなりました
  （保留中のスロットでは、引き続き大量発生した run が集約されます）。`tests/unit/build/runner-capacity-routing.test.ts` は、
  ルーティング、webpack への切り替え、および `omni-release` 上では何も Turbopack でビルドされないことを固定します。
- **軽量プール: `omni-light`。** `omniroute-113` と `omniroute-113-2` は、
  バックエンドのみの `next build`（約 5～6 GB、webpack）が必要な nightly と、`quality.yml` の `lint-guard` を実行します。`omniroute-113`
  には 2026-10-18 まで `MemoryHigh=4G` が設定されており、promptfoo ビルドはそこで 54 分間メモリを回収しながら処理を進めていました。
  8 GB にすることでスロットリングが解消されます。
- **リスナーを意図的に削減。** 2026-08-29 に 4 つの OmniRoute unit を無効化しました。追加の
  リスナーはそれぞれ、上記のメモリ予算を消費する別のテナントになります。janitor の上限は 6 です（cron の `MAX_ACTIVE_RUNNERS=6`）。これは
  マシン上のすべての `Runner.Listener` をカウントし、OmniHeuris と OmniMind が、こちらの 4 つにさらに 2 つを加えます。
- **runner が 1 つでも稼働中の場合、`/tmp` や `_work` を手動でクリーンアップしないでください。**
  チェックと削除の間に間隔がある check-then-delete により、2026-08-27 に稼働中の Build ジョブの
  `_work` が失われました。janitor はチェックと削除を 1 ステップで実行します。
  janitor に任せてください。
- ジョブ実行中に runner を停止すると、そのジョブはキャンセルされます（実環境で確認済み）。`systemctl stop` は、
  listener に `Runner.Worker` 子プロセスがない場合にのみ実行し、確認と停止を 1 つのコマンドで行ってください。
- ワークフローでアーティファクトを `/tmp` に置いたままにしてはなりません（RAM 上にあります）。
  `$RUNNER_TEMP`（runner ごとに用意されたディスク上の領域）へダウンロードしてください。1.3 GB の `next-build` アーティファクトは、
  tmpfs への保存に 27～32 分かかりましたが、ディスクからのアップロードは 2 分でした。
- `.15` VPS は homologation 専用です。CI runner は決して実行しません。
