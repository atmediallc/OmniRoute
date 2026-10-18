# Self-Hosted Runner Box Operations (.113 pool) (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

자체 호스팅 풀은 **.113** 머신(`tomni-proxmox-113`)에서 실행됩니다. 2026-10-18부터 각
OmniRoute 러너에는 **하나의 역할**과 하나의 레이블만 할당되며, `MemoryHigh`의 합계가
물리 RAM에 근접하도록 메모리/CPU 예산이 설정되어 있습니다.

| 러너                 | 레이블          | 역할                                                                                                                  | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`    | Turbopack 빌드: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, 야간 a11y 빌드 | 40 GB / 44 GB (스왑 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release`  | Release-Green(`release-green` + `main-green`), webpack 빌드                                                           | 20 GB / 24 GB (스왑 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`    | 야간 작업(Schemathesis, promptfoo, garak, k6, a11y 부팅) 및 `quality.yml` `lint-guard`                                | 12 GB / 16 GB (스왑 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`    | 위와 동일한 풀                                                                                                        | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (각 리포지토리) | Dependabot만 실행(각각 최대 155 MB, 2026-10-18)                                                                       | 4 GB / 6 GB                | 각각 200 % |

2026-10-18 측정 결과:

| 리소스    | 값                      | 스케줄링에 미치는 의미                                                                                                                                                                                                                                                                                   |
| --------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32코어**      | Turbopack 프로덕션 빌드는 cgroup 상한이 적용된 상태에서 최대 33–37 GB를 사용합니다(상한 미적용 시 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`). webpack 빌드는 약 14–16 GB를 사용합니다. Turbopack 빌드 하나와 webpack 빌드 하나는 동시에 실행할 수 있지만, Turbopack 빌드 두 개는 불가능합니다 |
| 스왑      | 16 GB                   | `omniroute-113-5`는 스왑이 비활성화된 상태(`MemorySwapMax=0`)로 실행되므로, 통제 불능 상태의 빌드가 머신 전체를 스왑에 빠뜨리는 대신 설정된 상한에서 종료됩니다                                                                                                                                          |
| `/tmp`    | **12 GB tmpfs = RAM**   | 여기에 저장되는 모든 데이터는 메모리를 사용하며, 남은 파일은 3시간 후 정리됩니다                                                                                                                                                                                                                         |
| CPU       | 32코어에서 부하 60 관측 | 할당량 적용 전에는 하나의 Turbopack 빌드(약 1166 % CPU)와 커버리지 스위트가 동일한 머신에서 실행되면서 다른 리스너의 하트비트가 중단되었습니다(`The self-hosted runner lost communication`, #16853)                                                                                                      |
| 러너      | **리스너 6개**          | OmniRoute 4개 + OmniHeuris + OmniMind이며, `omniroute-113-3/-4/-7/-8`은 비활성화되어 있습니다(`systemctl enable --now`로 하나를 다시 활성화할 수 있음)                                                                                                                                                   |

제한은 각 유닛의 `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`에
설정되어 있으며(이전 값은 `override.conf.bak-20261018`로 보관), 재시작 없이
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…`로 실시간 적용되었으므로
실행 중인 작업에는 영향이 없었습니다. 레이블도 러너 API를 통해
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) 실시간으로 변경됩니다.

## 정리기 설치(서버에서 한 번만 수행)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron(root): 30분마다 실행하고 /var/log/runner-janitor.log에 기록
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof`가 필요합니다. 정리기는 경로를 제거하기 전에 열린 파일의 단일 스냅샷을 사용하여 해당 경로가 유휴 상태인지 확인하며, 이 도구가 없으면 아무것도 제거하지 않고 그 사실을 알립니다(exit 1). 변경 사항은 먼저 `--dry-run`으로 시험해 보십시오. 수행할 작업을 정확히 출력하며 아무것도 변경하지 않습니다.

매번 실행할 때 수행하는 작업: **tmpfs에서는 3시간**, 디스크의 `_work/_temp`에서는 24시간이 지난 자체 잔여 파일(`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`)을 정리합니다. 75분 넘게 실행된 `next-build`를 종료합니다(어떤 작업도 그렇게 오래 실행되지 않음. 2026-08-27에는 GitHub가 작업을 유실된 것으로 선언한 후에도 하나가 70분 동안 실행됨). 유닛이 **중지된** 러너의 48시간 지난 체크아웃을 제거합니다. 디스크 사용률 ≥ 85%, 메모리 PSI `full/avg60` ≥ 10%, 또는 리스너 수가 `MAX_ACTIVE_RUNNERS`를 초과하면 경고합니다(omniroute/기타 내역 포함). Exit 1 = 주의가 필요하므로 로그를 확인하십시오.

## 러너 유닛: KillMode

러너의 기본값인 `KillMode=process`는 유닛이 중지되거나 재시작될 때 `Runner.Worker → npm → next-build`를
살아 있는 상태로 남겨 둡니다. 즉, 고아 빌드가 연결된 작업 없이 계속 RAM과
CPU를 소모합니다. 모든 OmniRoute 유닛에는
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
드롭인이 있으며, `KillMode=mixed`를 사용합니다. 먼저 리스너에 SIGTERM을 보내고,
`TimeoutStop` 시점에 전체 cgroup에 SIGKILL을 보냅니다. 이 설정은 유닛이 다음에 재시작될 때
적용됩니다. **한 번에 러너 하나만, 유휴 상태일 때만** 재시작하고, 유휴 상태 확인과 재시작을 동일한 명령에서 수행하십시오.

## 운영 규칙

- **한 번에 하나의 Turbopack 빌드만 실행 — 레이블로 강제됩니다.** 전체 Turbopack
  `next build`를 실행하는 모든 작업은 `[self-hosted, omni-build]`를 대상으로 하며, 해당
  레이블은 **`omniroute-113-5`**에만 지정되어 있습니다: `ci.yml`의 `Build`, `npm-publish.yml`의 `publish`, `nightly-v4-build`, `preview-artifact`,
  야간 a11y 빌드(#16853), 그리고 `docker-publish.yml`의 **amd64**(BuildKit 내부에서는 webpack 사용 —
  해당 환경에서 Turbopack이 패닉을 일으킴, 실행 33253576569). arm64 Docker 작업은 계속 `ubuntu-24.04-arm`에서 실행됩니다.
  `docker-publish` amd64는 `ci.yml`의 `Build`와 `heavy-build-main` 동시 실행 그룹을 공유합니다
  (`cancel-in-progress: false`). Docker Engine은 반드시 `omniroute-113-5`에 있어야 합니다. 두 번째 Turbopack
  슬롯은 78 GB에 맞지 않습니다(33–37 GB × 2에 시스템의 나머지 사용량까지 포함). 두 번째 슬롯은
  webpack 빌드에만 안전합니다.
- **Release-Green에는 자체 슬롯이 있습니다(2026-10-18).** 그전까지 두 Release-Green 검증은 모두
  `omni-build`에서 실행되었습니다. 모든 push마다(~시간당 10회, 하루 동안 push 실행 100개 중 97개가
  작업 도중 취소됨) 실행되었고, 하루에 세 번 약 2시간짜리 전체 검사를 수행했습니다(05:29 검사는 슬롯을
  6시간 기다림). 단일 빌드 슬롯의 용량이 여러 배로 초과되었고, 동일 저장소에서 생성된 PR의 Build는
  몇 시간씩 대기했습니다. 이제 `release-green`과 `main-green`은 `OMNIROUTE_USE_TURBOPACK=0`을 사용하여
  `omni-release`(`omniroute-113-6`만 해당)를 대상으로 하며, 시작된 실행은 더 이상 새로운 push로 인해
  취소되지 않습니다(대기 슬롯은 여전히 폭주하는 요청을 하나로 통합함). `tests/unit/build/runner-capacity-routing.test.ts`는
  라우팅과 webpack 전환을 고정하고, `omni-release`의 어떤 작업도 Turbopack으로 빌드하지 않도록 보장합니다.
- **경량 풀: `omni-light`.** `omniroute-113`과 `omniroute-113-2`는 백엔드 전용 `next build`
  (~5–6 GB, webpack)가 필요한 야간 작업과 `quality.yml`의 `lint-guard`를 실행합니다. `omniroute-113`에는
  2026-10-18까지 `MemoryHigh=4G`가 설정되어 있었습니다. 그곳에서 promptfoo 빌드는 메모리 회수를 반복하며
  54분 동안 실행되었고, 8 GB로 늘리면 스로틀링이 제거됩니다.
- **리스너 수를 의도적으로 줄였습니다.** 2026-08-29에 OmniRoute 유닛 4개를 비활성화했습니다. 추가되는
  각 리스너는 위 메모리 예산을 나눠 쓰는 또 하나의 테넌트입니다. janitor의 상한은 6입니다(cron의 `MAX_ACTIVE_RUNNERS=6`). 이는
  시스템에 있는 모든 `Runner.Listener`를 계산하며, OmniHeuris와 OmniMind가 네 개의 OmniRoute 리스너에 두 개를 더합니다.
- **어떤 러너든 사용 중일 때는 절대로 `/tmp`나 `_work`를 수동으로 정리하지 마십시오.** 확인과
  삭제 사이에 간격이 있는 확인 후 삭제 방식 때문에 2026-08-27에 실행 중이던 Build 작업의
  `_work`가 삭제되었습니다. janitor는 확인과 삭제를 한 단계에서 수행하므로
  그대로 맡기십시오.
- 작업 도중 러너를 중지하면 해당 작업이 취소됩니다(실제 환경에서 확인됨). `systemctl stop`은
  해당 리스너에 `Runner.Worker` 자식 프로세스가 없을 때만 실행해야 하며, 확인과 중지를 하나의 명령으로 수행하십시오.
- 워크플로는 아티팩트를 `/tmp`에 두면 안 됩니다(여기는 RAM입니다). `$RUNNER_TEMP`로
  다운로드하십시오(러너별 디스크 공간). 1.3 GB 크기의 `next-build` 아티팩트를 tmpfs에 저장하는 데 27–32분이
  걸렸지만, 디스크에서는 업로드하는 데 2분이 걸렸습니다.
- `.15` VPS는 사전 검증 전용이며, CI 러너를 절대로 실행하지 않습니다.
