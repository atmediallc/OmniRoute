# Self-Hosted Runner Box Operations (.113 pool) (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

El pool autoalojado se ejecuta en la máquina **.113** (`tomni-proxmox-113`). Desde el 2026-10-18, cada
runner de OmniRoute tiene **un rol**, una etiqueta y un presupuesto de memoria/CPU que mantiene la suma de
`MemoryHigh` cerca de la RAM física:

| runner               | etiqueta       | rol                                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`   | Compilaciones con Turbopack: `Build` de `ci.yml`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact` y la compilación nocturna de a11y | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), compilación con webpack                                                                                 | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`   | procesos nocturnos (Schemathesis, promptfoo, garak, k6, arranque de a11y) y `lint-guard` de `quality.yml`                                               | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`   | el mismo pool que el anterior                                                                                                                           | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (sus repos)    | Solo Dependabot (pico de 155 MB cada uno, 2026-10-18)                                                                                                   | 4 GB / 6 GB                | 200 % cada uno |

Mediciones del 2026-10-18:

| recurso   | valor                               | qué significa para la programación                                                                                                                                                                                                                                                                                 |
| --------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 núcleos**              | una compilación de producción con Turbopack alcanza picos de 33–37 GB con un límite de cgroup (49 GB sin límite, `tests/unit/ci-build-bundler-webpack.test.ts`); una compilación con webpack, ~14–16 GB. Una compilación con Turbopack y una con webpack caben simultáneamente; dos compilaciones con Turbopack no |
| swap      | 16 GB                               | `omniroute-113-5` se ejecuta con el swap desactivado (`MemorySwapMax=0`), por lo que una compilación fuera de control se interrumpe al alcanzar su límite en lugar de hacer que la máquina use swap                                                                                                                |
| `/tmp`    | **12 GB tmpfs = RAM**               | todo lo que se deje allí consume memoria; los restos se eliminan después de 3 h                                                                                                                                                                                                                                    |
| CPU       | carga de 60 en 32 núcleos observada | antes de las cuotas, una compilación con Turbopack (~1166 % de CPU) junto con un conjunto de pruebas de cobertura en la misma máquina impedía que los otros listeners enviaran sus señales de actividad (`The self-hosted runner lost communication`, #16853)                                                      |
| runners   | **6 listeners**                     | 4 de OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` están deshabilitados (`systemctl enable --now` vuelve a activar uno)                                                                                                                                                                            |

Los límites se encuentran en el archivo `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
de cada unidad (los valores anteriores se conservan como `override.conf.bak-20261018`) y se aplicaron en vivo con
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…`, sin reiniciar, por lo que no se
afectó a ningún trabajo en ejecución. Las etiquetas se cambian mediante la API de runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), también en vivo.

## Instalar el proceso de limpieza (una sola vez, en la máquina)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): cada 30 min, registrar en /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` es obligatorio: el proceso de limpieza comprueba que una ruta está inactiva mediante una instantánea de los archivos abiertos antes de eliminarla; sin la herramienta, no elimina nada e informa de ello (código de salida 1). Pruebe primero cualquier cambio con `--dry-run`: muestra exactamente lo que haría y no modifica nada.

Qué hace en cada ejecución: limpia nuestros propios residuos (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) después de **3 h en tmpfs** y 24 h en
`_work/_temp` del disco; finaliza cualquier `next-build` de más de 75 min (ningún
trabajo tarda tanto; el 2026-08-27 uno siguió ejecutándose durante 70 min después
de que GitHub declarase perdido su trabajo); elimina checkouts de más de 48 h de
runners cuya unidad está **detenida**; alerta si el uso del disco es ≥ 85 %, si
`full/avg60` del PSI de memoria es ≥ 10 % y si hay más listeners que
`MAX_ACTIVE_RUNNERS` (con un desglose entre omniroute y otros). Código de salida
1 = requiere atención; consulte el registro.

## Unidades de runner: KillMode

El valor predeterminado `KillMode=process` del runner deja
`Runner.Worker → npm → next-build` activo cuando una unidad se detiene o reinicia:
una compilación huérfana continúa consumiendo RAM y CPU sin tener ningún trabajo
asociado. Cada unidad de OmniRoute incluye un archivo drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
con `KillMode=mixed`: primero envía SIGTERM al listener y, al llegar a
`TimeoutStop`, envía SIGKILL a todo el cgroup. Entra en vigor en el siguiente
reinicio de la unidad: reinicia **un runner a la vez, únicamente cuando esté
inactivo**, con la comprobación de inactividad y el reinicio en el mismo comando.

## Reglas operativas

- **Una compilación de Turbopack a la vez, aplicado mediante una etiqueta.** Cada trabajo que ejecuta un
  `next build` completo con Turbopack apunta a `[self-hosted, omni-build]`, y solo
  **`omniroute-113-5`** tiene esa etiqueta: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, la compilación nocturna de a11y (#16853) y
  `docker-publish.yml` **amd64** (webpack dentro de BuildKit; Turbopack sufrió un fallo crítico
  allí, ejecución 33253576569). La variante arm64 de Docker permanece en `ubuntu-24.04-arm`.
  La variante amd64 de `docker-publish` comparte el grupo de concurrencia `heavy-build-main` con
  `ci.yml` `Build` (`cancel-in-progress: false`). Docker Engine debe estar en `omniroute-113-5`.
  Una segunda ranura de Turbopack no cabe en 78 GB (2 × 33–37 GB más el resto de la máquina);
  una segunda ranura solo es segura para compilaciones con webpack.
- **Release-Green tiene su propia ranura (2026-10-18).** Hasta entonces, ambas validaciones de
  Release-Green se ejecutaban en `omni-build`: en cada push (~10/hora, 97 de 100 ejecuciones de
  push canceladas a mitad del trabajo en un día) y tres barridos completos diarios de ~2 h (el
  barrido de las 05:29 esperó 6 h por la ranura); la única ranura de compilación estaba
  sobresuscrita varias veces por encima de su capacidad y las compilaciones de PR del mismo origen
  esperaban durante horas. `release-green` y `main-green` ahora apuntan a `omni-release`
  (solo `omniroute-113-6`) con `OMNIROUTE_USE_TURBOPACK=0`, y una ejecución ya iniciada dejó de
  cancelarse por un push más reciente (la ranura pendiente sigue condensando la avalancha).
  `tests/unit/build/runner-capacity-routing.test.ts` fija el enrutamiento, el cambio a webpack y
  garantiza que nada en `omni-release` se compile con Turbopack.
- **Grupo ligero: `omni-light`.** `omniroute-113` y `omniroute-113-2` ejecutan los procesos nocturnos
  que necesitan un `next build` solo del backend (~5–6 GB; webpack) y `quality.yml` `lint-guard`.
  `omniroute-113` tenía `MemoryHigh=4G` hasta 2026-10-18; la compilación de promptfoo avanzó
  recuperando memoria durante 54 minutos allí; 8 GB elimina la limitación.
- **Menos listeners de forma deliberada.** Se deshabilitaron cuatro unidades de OmniRoute el
  2026-08-29; cada listener adicional es otro inquilino para el presupuesto de memoria anterior.
  El límite del proceso de limpieza es 6 (`MAX_ACTIVE_RUNNERS=6` en cron): cuenta cada
  `Runner.Listener` de la máquina, y OmniHeuris + OmniMind añaden dos a nuestros cuatro.
- **Nunca limpies `/tmp` ni `_work` manualmente mientras algún runner esté ocupado.** Una
  comprobación seguida de una eliminación, con un intervalo entre ambas, hizo que un trabajo
  `Build` activo perdiera su `_work` el 2026-08-27. El proceso de limpieza realiza la comprobación
  y la eliminación en un solo paso; deja que se encargue.
- Detener un runner en mitad de un trabajo cancela el trabajo (observado en vivo): usa
  `systemctl stop` únicamente cuando su listener no tenga ningún proceso hijo `Runner.Worker`,
  y hazlo con un solo comando.
- Los workflows no deben almacenar artefactos en `/tmp` (está en la RAM). Descárgalos en
  `$RUNNER_TEMP` (en disco, por runner): el artefacto `next-build` de 1.3 GB tardó entre 27 y 32
  minutos en copiarse al tmpfs y 2 minutos en cargarse desde el disco.
- El VPS `.15` es exclusivamente para homologación; nunca ejecuta runners de CI.
