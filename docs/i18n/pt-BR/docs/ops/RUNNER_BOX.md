# Self-Hosted Runner Box Operations (.113 pool) (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

O pool auto-hospedado é executado na máquina **.113** (`tomni-proxmox-113`). Desde 2026-10-18, cada
runner do OmniRoute tem **uma função**, um label e um orçamento de memória/CPU que mantém a soma de
`MemoryHigh` próxima à RAM física:

| runner               | label               | função                                                                                                                              | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`        | Builds do Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, o build noturno de a11y | 40 GB / 44 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), build do webpack                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`        | execuções noturnas (Schemathesis, promptfoo, garak, k6, inicialização de a11y) e `quality.yml` `lint-guard`                         | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`        | mesmo pool acima                                                                                                                    | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (seus repositórios) | somente Dependabot (pico de 155 MB cada, 2026-10-18)                                                                                | 4 GB / 6 GB                | 200 % cada |

Medições de 2026-10-18:

| recurso   | valor                            | o que isso significa para o agendamento                                                                                                                                                                                                                                             |
| --------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 núcleos**           | um build de produção do Turbopack atinge um pico de 33–37 GB sob um limite de cgroup (49 GB sem limite, `tests/unit/ci-build-bundler-webpack.test.ts`); um build do webpack usa cerca de 14–16 GB. Um build do Turbopack + um do webpack cabem juntos; dois builds do Turbopack não |
| swap      | 16 GB                            | `omniroute-113-5` é executado com o swap desativado (`MemorySwapMax=0`), portanto um build fora de controle é encerrado ao atingir seu limite, em vez de colocar a máquina em swap                                                                                                  |
| `/tmp`    | **12 GB tmpfs = RAM**            | tudo o que for armazenado ali ocupa memória; resíduos são removidos após 3 h                                                                                                                                                                                                        |
| CPU       | carga 60 observada em 32 núcleos | antes das cotas, um build do Turbopack (~1166 % de CPU) mais uma suíte de cobertura na mesma máquina privava os heartbeats dos outros listeners (`The self-hosted runner lost communication`, #16853)                                                                               |
| runners   | **6 listeners**                  | 4 do OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` estão desabilitados (`systemctl enable --now` reativa um deles)                                                                                                                                                  |

Os limites ficam no arquivo `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` de cada unidade
(os valores anteriores foram mantidos como `override.conf.bak-20261018`) e foram aplicados em tempo real com
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — sem reinicialização, portanto nenhum
job em execução foi afetado. Os labels são alterados por meio da API de runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), também em tempo real.

## Instale o janitor (uma única vez, na máquina)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): a cada 30 min, registrar em /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` é obrigatório: o janitor comprova que um caminho está ocioso usando um único snapshot dos arquivos
abertos antes de removê-lo e, sem a ferramenta, não remove nada e informa o motivo
(saída 1). Teste qualquer alteração primeiro com `--dry-run` — ele mostra exatamente o que faria
sem modificar nada.

O que ele faz a cada execução: remove nossos próprios resíduos (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) após **3 h no tmpfs** e 24 h no
`_work/_temp` do disco; encerra um `next-build` com mais de 75 min (nenhum job demora tanto — em
2026-08-27, um deles ficou em execução por 70 min depois que o GitHub declarou seu job como perdido);
remove checkouts com mais de 48 h de runners cuja unidade esteja **parada**; alerta quando o uso do disco
é ≥ 85%, o PSI de memória `full/avg60` é ≥ 10% e há mais listeners que o definido em
`MAX_ACTIVE_RUNNERS` (com detalhamento entre omniroute/outros). Saída 1 = atenção necessária; consulte o log.

## Unidades de runner: KillMode

O `KillMode=process` padrão do runner deixa `Runner.Worker → npm → next-build`
ativo quando uma unidade é interrompida ou reiniciada — uma build órfã continua consumindo RAM e
CPU sem nenhum job associado. Cada unidade do OmniRoute possui um drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
com `KillMode=mixed`: SIGTERM primeiro para o listener e SIGKILL para todo o cgroup ao
atingir `TimeoutStop`. Isso entra em vigor na próxima reinicialização da unidade — reinicie **um runner
por vez, somente quando estiver ocioso**, com a verificação de ociosidade e a reinicialização no mesmo comando.

## Regras operacionais

- **Uma compilação do Turbopack por vez — imposta por label.** Todo job que executa um
  `next build` completo com Turbopack tem como destino `[self-hosted, omni-build]`, e somente
  **`omniroute-113-5`** possui essa label: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, a compilação noturna de a11y (#16853) e
  `docker-publish.yml` **amd64** (webpack dentro do BuildKit — o Turbopack entrou em pânico ali,
  execução 33253576569). A etapa de Docker arm64 permanece em `ubuntu-24.04-arm`.
  O amd64 de `docker-publish` compartilha o grupo de concorrência `heavy-build-main` com o
  `Build` de `ci.yml` (`cancel-in-progress: false`). O Docker Engine deve estar em
  `omniroute-113-5`. Um segundo slot do Turbopack não cabe em 78 GB (2 × 33–37 GB mais o restante
  da máquina); um segundo slot só é seguro para compilações com webpack.
- **Release-Green tem seu próprio slot (2026-10-18).** Até então, ambas as validações
  Release-Green eram executadas em `omni-build`: a cada push (~10/hora, 97 de 100 execuções de
  push canceladas durante o trabalho em um dia) e três varreduras completas de ~2 h por dia
  (a varredura das 05:29 esperou 6 h pelo slot) — o único slot de compilação estava com demanda
  várias vezes acima da capacidade, e os Builds de PRs da própria origem esperavam por horas.
  `release-green` e `main-green` agora têm como destino `omni-release` (somente
  `omniroute-113-6`) com `OMNIROUTE_USE_TURBOPACK=0`, e uma execução iniciada não é mais
  cancelada por um push mais recente (o slot pendente ainda consolida a enxurrada).
  `tests/unit/build/runner-capacity-routing.test.ts` fixa o roteamento, a mudança para webpack e
  garante que nada em `omni-release` seja compilado com Turbopack.
- **Pool leve: `omni-light`.** `omniroute-113` e `omniroute-113-2` executam os jobs noturnos que
  precisam de um `next build` somente do backend (~5–6 GB; webpack) e o `lint-guard` de
  `quality.yml`. `omniroute-113` tinha `MemoryHigh=4G` até 2026-10-18 — a compilação do promptfoo
  passou 54 minutos recuperando memória ali; 8 GB eliminam a limitação.
- **Menos listeners de propósito.** Quatro unidades do OmniRoute foram desativadas em 2026-08-29
  — cada listener adicional é mais um consumidor do orçamento de memória acima. O limite do
  janitor é 6 (`MAX_ACTIVE_RUNNERS=6` no cron): ele conta cada `Runner.Listener` na máquina, e
  OmniHeuris + OmniMind adicionam dois aos nossos quatro.
- **Nunca limpe `/tmp` ou `_work` manualmente enquanto qualquer runner estiver ocupado.** Uma
  verificação seguida de exclusão, com um intervalo entre as duas, foi como um job `Build` ativo
  perdeu seu `_work` em 2026-08-27. O janitor faz a verificação e a remoção em uma única etapa;
  deixe-o fazer isso.
- Interromper um runner durante um job cancela o job (observado ao vivo): use `systemctl stop`
  somente quando seu listener não tiver nenhum processo filho `Runner.Worker` — e faça isso em
  um único comando.
- Os workflows não devem armazenar artefatos em `/tmp` (ele fica na RAM). Faça o download para
  `$RUNNER_TEMP` (em disco, por runner) — o artefato `next-build` de 1,3 GB levou de 27 a 32
  minutos para ser gravado no tmpfs e 2 minutos para ser enviado a partir do disco.
- O VPS `.15` é somente para homologação — nunca executa runners de CI.
