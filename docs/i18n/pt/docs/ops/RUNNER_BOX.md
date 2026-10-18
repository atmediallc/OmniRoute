# Self-Hosted Runner Box Operations (.113 pool) (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

O conjunto autoalojado é executado na máquina **.113** (`tomni-proxmox-113`). Desde 2026-10-18, cada
agente de execução do OmniRoute tem **uma função**, uma etiqueta e um orçamento de memória/CPU que mantém a soma de
`MemoryHigh` próxima da RAM física:

| agente de execução   | etiqueta                     | função                                                                                                                                  | `MemoryHigh` / `MemoryMax`            | `CPUQuota` |
| -------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`                 | Compilações Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, a compilação noturna a11y | 40 GB / 44 GB (memória de troca 0)    | 1600 %     |
| `omniroute-113-6`    | `omni-release`               | Release-Green (`release-green` + `main-green`), compilação webpack                                                                      | 20 GB / 24 GB (memória de troca 4 GB) | 800 %      |
| `omniroute-113-2`    | `omni-light`                 | execuções noturnas (Schemathesis, promptfoo, garak, k6, arranque a11y) e `quality.yml` `lint-guard`                                     | 12 GB / 16 GB (memória de troca 4 GB) | 600 %      |
| `omniroute-113`      | `omni-light`                 | mesmo conjunto acima                                                                                                                    | 8 GB / 12 GB                          | 400 %      |
| OmniHeuris, OmniMind | (os respetivos repositórios) | apenas Dependabot (pico de 155 MB cada, 2026-10-18)                                                                                     | 4 GB / 6 GB                           | 200 % cada |

Medições de 2026-10-18:

| recurso             | valor                            | o que significa para o agendamento                                                                                                                                                                                                                                                          |
| ------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU           | **78 GB / 32 núcleos**           | uma compilação de produção Turbopack atinge um pico de 33–37 GB sob um limite cgroup (49 GB sem limite, `tests/unit/ci-build-bundler-webpack.test.ts`); uma compilação webpack atinge ~14–16 GB. Uma compilação Turbopack e uma webpack cabem em simultâneo; duas compilações Turbopack não |
| memória de troca    | 16 GB                            | `omniroute-113-5` é executado com a memória de troca desativada (`MemorySwapMax=0`), para que uma compilação descontrolada seja terminada ao atingir o limite, em vez de levar a máquina a usar memória de troca                                                                            |
| `/tmp`              | **12 GB tmpfs = RAM**            | tudo o que aí for colocado ocupa memória; os resíduos são eliminados após 3 h                                                                                                                                                                                                               |
| CPU                 | carga 60 observada em 32 núcleos | antes das quotas, uma compilação Turbopack (~1166 % de CPU), juntamente com um conjunto de cobertura na mesma máquina, privou os sinais de atividade dos outros processos de escuta dos recursos necessários (`The self-hosted runner lost communication`, #16853)                          |
| agentes de execução | **6 processos de escuta**        | 4 do OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` estão desativados (`systemctl enable --now` reativa um)                                                                                                                                                                  |

Os limites encontram-se no ficheiro `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` de cada unidade
(os valores anteriores foram mantidos como `override.conf.bak-20261018`) e foram aplicados em funcionamento com
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — sem reinício, pelo que nenhum
trabalho em execução foi afetado. As etiquetas são alteradas através da API dos agentes de execução
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), também em funcionamento.

## Instalar o processo de limpeza (uma única vez, na máquina)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): a cada 30 min, registar em /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

O `lsof` é obrigatório: o processo de limpeza confirma que um caminho está inativo através de uma única captura dos ficheiros abertos antes de o remover; sem esta ferramenta, não remove nada e informa desse facto (exit 1). Teste primeiro qualquer alteração com `--dry-run` — este mostra exatamente o que faria e não altera nada.

O que faz em cada execução: limpa os nossos próprios resíduos (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) após **3 h em tmpfs** e 24 h no `_work/_temp` do disco; termina um `next-build` com mais de 75 min (nenhum job demora tanto tempo — em 2026-08-27, um deles continuou a ser executado durante 70 min depois de o GitHub ter declarado o respetivo job como perdido); elimina checkouts com 48 h de runners cuja unidade esteja **parada**; emite alertas quando a utilização do disco é ≥ 85 %, o PSI de memória `full/avg60` é ≥ 10 % e existem mais listeners do que `MAX_ACTIVE_RUNNERS` (com uma discriminação entre omniroute/outros). Exit 1 = é necessária atenção; consulte o registo.

## Unidades de runner: KillMode

O `KillMode=process` predefinido do runner deixa `Runner.Worker → npm → next-build`
em execução quando uma unidade é parada ou reiniciada — uma compilação órfã continua a consumir RAM e
CPU sem qualquer tarefa associada. Cada unidade OmniRoute inclui um drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
com `KillMode=mixed`: SIGTERM primeiro para o listener, SIGKILL para todo o cgroup ao
atingir `TimeoutStop`. Entra em vigor no reinício seguinte da unidade — reinicie **um runner de
cada vez, apenas quando estiver inativo**, com a verificação de inatividade e o reinício no mesmo comando.

## Regras de funcionamento

- **Uma compilação Turbopack de cada vez — imposto por etiqueta.** Todos os jobs que executam um
  `next build` completo com Turbopack destinam-se a `[self-hosted, omni-build]`, e apenas
  **`omniroute-113-5`** possui essa etiqueta: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, a compilação noturna de a11y (#16853) e
  `docker-publish.yml` **amd64** (webpack dentro do BuildKit — o Turbopack entrou em pânico nesse
  caso, execução 33253576569). A etapa Docker arm64 permanece em `ubuntu-24.04-arm`.
  O amd64 de `docker-publish` partilha o grupo de concorrência `heavy-build-main` com o `Build`
  de `ci.yml` (`cancel-in-progress: false`). O Docker Engine tem de estar em `omniroute-113-5`.
  Um segundo slot Turbopack não cabe em 78 GB (2 × 33–37 GB mais o restante consumo da máquina);
  um segundo slot só é seguro para compilações com webpack.
- **O Release-Green tem o seu próprio slot (2026-10-18).** Até essa data, ambas as validações
  Release-Green eram executadas em `omni-build`: em cada push (~10/hora, 97 de 100 execuções de
  push canceladas a meio num só dia) e três verificações completas de ~2 h por dia (a verificação
  das 05:29 esperou 6 h pelo slot) — o único slot de compilação estava várias vezes acima da sua
  capacidade e os Builds de PR da própria origem esperavam durante horas. `release-green` e
  `main-green` destinam-se agora a `omni-release` (apenas `omniroute-113-6`) com
  `OMNIROUTE_USE_TURBOPACK=0`, e uma execução iniciada já não é cancelada por um push mais recente
  (o slot pendente continua a consolidar a avalanche). `tests/unit/build/runner-capacity-routing.test.ts`
  fixa o encaminhamento, a mudança para webpack e garante que nada em `omni-release` é compilado
  com Turbopack.
- **Pool leve: `omni-light`.** `omniroute-113` e `omniroute-113-2` executam os processos noturnos
  que necessitam de um `next build` apenas do backend (~5–6 GB; webpack) e o `lint-guard` de
  `quality.yml`. `omniroute-113` tinha `MemoryHigh=4G` até 2026-10-18 — a compilação do promptfoo
  passou 54 minutos a recuperar memória nesse runner; 8 GB eliminam a limitação.
- **Menos listeners de propósito.** Quatro unidades OmniRoute foram desativadas em 2026-08-29 —
  cada listener adicional é mais um consumidor do orçamento de memória acima. O limite do janitor
  é 6 (`MAX_ACTIVE_RUNNERS=6` no cron): conta todos os `Runner.Listener` na máquina, e o
  OmniHeuris + OmniMind acrescentam dois aos nossos quatro.
- **Nunca limpe `/tmp` nem `_work` manualmente enquanto algum runner estiver ocupado.** Uma
  verificação seguida de eliminação, com um intervalo entre ambas, foi a forma como um job
  `Build` ativo perdeu o respetivo `_work` em 2026-08-27. O janitor efetua a verificação e a
  remoção num único passo; deixe-o fazê-lo.
- Parar um runner a meio de um job cancela o job (observado em direto): execute `systemctl stop`
  apenas quando o respetivo listener não tiver nenhum processo filho `Runner.Worker` — e faça-o
  num único comando.
- Os workflows não podem armazenar artefactos em `/tmp` (está em RAM). Transfira-os para
  `$RUNNER_TEMP` (em disco, por runner) — o artefacto `next-build` de 1,3 GB demorou 27–32
  minutos a ser descarregado para o tmpfs e 2 minutos a ser carregado a partir do disco.
- O VPS `.15` destina-se apenas a homologação — nunca executa runners de CI.
