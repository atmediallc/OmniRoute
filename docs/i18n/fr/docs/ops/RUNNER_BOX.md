# Self-Hosted Runner Box Operations (.113 pool) (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Le pool auto-hébergé s’exécute sur la machine **.113** (`tomni-proxmox-113`). Depuis le 2026-10-18, chaque
runner OmniRoute possède **un seul rôle**, une seule étiquette et un budget mémoire/CPU maintenant la somme des
`MemoryHigh` proche de la RAM physique :

| runner               | étiquette      | rôle                                                                                                                                         | `MemoryHigh` / `MemoryMax` | `CPUQuota`   |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| `omniroute-113-5`    | `omni-build`   | Compilations Turbopack : `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, la compilation a11y nocturne | 40 GB / 44 GB (swap 0)     | 1600 %       |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), compilation webpack                                                                          | 20 GB / 24 GB (swap 4 GB)  | 800 %        |
| `omniroute-113-2`    | `omni-light`   | tâches nocturnes (Schemathesis, promptfoo, garak, k6, démarrage a11y) et `quality.yml` `lint-guard`                                          | 12 GB / 16 GB (swap 4 GB)  | 600 %        |
| `omniroute-113`      | `omni-light`   | même pool que ci-dessus                                                                                                                      | 8 GB / 12 GB               | 400 %        |
| OmniHeuris, OmniMind | (leurs dépôts) | Dependabot uniquement (pic de 155 MB chacun, 2026-10-18)                                                                                     | 4 GB / 6 GB                | 200 % chacun |

Mesures du 2026-10-18 :

| ressource | valeur                             | conséquences pour la planification                                                                                                                                                                                                                                                                                                                 |
| --------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cœurs**               | une compilation de production Turbopack atteint un pic de 33–37 GB sous un plafond cgroup (49 GB sans plafond, `tests/unit/ci-build-bundler-webpack.test.ts`) ; une compilation webpack atteint environ 14–16 GB. Une compilation Turbopack et une compilation webpack peuvent s’exécuter ensemble ; deux compilations Turbopack ne le peuvent pas |
| swap      | 16 GB                              | `omniroute-113-5` s’exécute avec le swap désactivé (`MemorySwapMax=0`), afin qu’une compilation incontrôlée soit interrompue lorsqu’elle atteint son plafond au lieu de faire swapper la machine                                                                                                                                                   |
| `/tmp`    | **12 GB tmpfs = RAM**              | tout ce qui y est stocké consomme de la mémoire ; les fichiers résiduels sont supprimés après 3 h                                                                                                                                                                                                                                                  |
| CPU       | charge de 60 observée sur 32 cœurs | avant l’application des quotas, une compilation Turbopack (~1166 % de CPU) combinée à une suite de couverture sur la même machine privait les autres agents d’écoute de leurs signaux de présence (`The self-hosted runner lost communication`, #16853)                                                                                            |
| runners   | **6 agents d’écoute**              | 4 OmniRoute + OmniHeuris + OmniMind ; `omniroute-113-3/-4/-7/-8` sont désactivés (`systemctl enable --now` permet d’en réactiver un)                                                                                                                                                                                                               |

Les limites se trouvent dans le fichier `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
de chaque unité (les anciennes valeurs sont conservées dans `override.conf.bak-20261018`) et ont été appliquées à chaud avec
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — sans redémarrage, donc aucune
tâche en cours n’a été affectée. Les étiquettes sont modifiées via l’API des runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), également à chaud.

## Installer le nettoyeur (une seule fois, sur la machine)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root) : toutes les 30 min, journalisation dans /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` est requis : le nettoyeur vérifie qu’un chemin est inactif à l’aide d’un instantané des fichiers ouverts avant de le supprimer ; sans cet outil, il ne supprime rien et le signale (exit 1). Testez d’abord toute modification avec `--dry-run` — cette option affiche exactement ce qui serait fait sans rien modifier.

Ce qu’il fait à chaque exécution : supprime nos propres résidus (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) après **3 h sur tmpfs** et 24 h dans `_work/_temp` sur disque ; arrête tout `next-build` datant de plus de 75 min (aucun job ne s’exécute aussi longtemps — le 2026-08-27, l’un d’eux a continué pendant 70 min après que GitHub a déclaré son job perdu) ; supprime les checkouts datant de plus de 48 h des runners dont l’unité est **arrêtée** ; émet une alerte lorsque l’utilisation du disque est ≥ 85 %, que la pression mémoire PSI `full/avg60` est ≥ 10 % ou que le nombre de listeners dépasse `MAX_ACTIVE_RUNNERS` (avec une répartition omniroute/autres). Exit 1 = intervention requise ; consultez le journal.

## Unités de runners : KillMode

Le paramètre par défaut `KillMode=process` du runner laisse `Runner.Worker → npm → next-build`
actif lorsqu’une unité est arrêtée ou redémarrée — un build orphelin continue de consommer de la RAM et
du CPU sans qu’aucun job ne lui soit associé. Chaque unité OmniRoute comporte un drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
avec `KillMode=mixed` : SIGTERM est d’abord envoyé au listener, puis SIGKILL à l’ensemble du cgroup à
`TimeoutStop`. Il prend effet au prochain redémarrage de l’unité — redémarrez **un seul runner à
la fois, uniquement lorsqu’il est inactif**, en exécutant la vérification d’inactivité et le redémarrage dans la même commande.

## Règles d’exploitation

- **Un seul build Turbopack à la fois — imposé par un label.** Chaque job qui exécute un
  `next build` Turbopack complet cible `[self-hosted, omni-build]`, et seul
  **`omniroute-113-5`** porte ce label : `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, le build a11y nocturne (#16853) et
  `docker-publish.yml` **amd64** (webpack dans BuildKit — Turbopack y a paniqué, exécution
  33253576569). L’étape Docker arm64 reste sur `ubuntu-24.04-arm`. L’étape amd64 de
  `docker-publish` partage le groupe de concurrence `heavy-build-main` avec `Build` de
  `ci.yml` (`cancel-in-progress: false`). Docker Engine doit être installé sur
  `omniroute-113-5`. Un deuxième créneau Turbopack ne tient pas dans 78 Go (2 × 33–37 Go,
  plus le reste de la machine) ; un deuxième créneau n’est sûr que pour les builds webpack.
- **Release-Green dispose de son propre créneau (2026-10-18).** Jusqu’alors, les deux validations
  Release-Green s’exécutaient sur `omni-build` : à chaque push (~10/heure, 97 exécutions sur
  100 déclenchées par push ayant été annulées en cours de traitement en une journée) et lors de
  trois balayages complets quotidiens d’environ 2 h (celui de 05:29 a attendu 6 h pour obtenir
  le créneau) — l’unique créneau de build était suralloué plusieurs fois et les Builds des PR
  provenant du dépôt attendaient pendant des heures. `release-green` et `main-green` ciblent
  désormais `omni-release` (`omniroute-113-6` uniquement) avec
  `OMNIROUTE_USE_TURBOPACK=0`, et une exécution démarrée n’est plus annulée par un nouveau push
  (le créneau en attente continue d’absorber la rafale). Le fichier
  `tests/unit/build/runner-capacity-routing.test.ts` verrouille le routage, le basculement vers
  webpack et garantit que rien sur `omni-release` n’effectue de build avec Turbopack.
- **Pool léger : `omni-light`.** `omniroute-113` et `omniroute-113-2` exécutent les tâches
  nocturnes nécessitant uniquement un `next build` du backend (~5–6 Go ; webpack), ainsi que
  `lint-guard` de `quality.yml`. `omniroute-113` avait `MemoryHigh=4G` jusqu’au 2026-10-18 —
  le build promptfoo y a passé 54 minutes à récupérer de la mémoire ; 8 Go suppriment cette
  limitation.
- **Moins de listeners, volontairement.** Quatre unités OmniRoute ont été désactivées le
  2026-08-29 — chaque listener supplémentaire est un locataire de plus pour le budget mémoire
  ci-dessus. Le plafond du janitor est de 6 (`MAX_ACTIVE_RUNNERS=6` dans cron) : il compte
  chaque `Runner.Listener` présent sur la machine, et OmniHeuris + OmniMind en ajoutent deux
  à nos quatre.
- **Ne jamais nettoyer `/tmp` ou `_work` manuellement lorsqu’un runner est occupé.** Une
  vérification suivie d’une suppression, avec un délai entre les deux, a entraîné la perte du
  répertoire `_work` d’un job Build actif le 2026-08-27. Le janitor effectue la vérification
  et la suppression en une seule étape ; laissez-le faire.
- Arrêter un runner en cours de job annule le job (constaté en direct) : n’exécutez
  `systemctl stop` que lorsque son listener n’a aucun processus enfant `Runner.Worker` — et
  faites-le en une seule commande.
- Les workflows ne doivent pas stocker d’artefacts dans `/tmp` (c’est de la RAM).
  Téléchargez-les dans `$RUNNER_TEMP` (sur disque, propre à chaque runner) — le téléchargement
  de l’artefact `next-build` de 1,3 Go sur le tmpfs a pris 27 à 32 minutes, contre 2 minutes
  pour son envoi depuis le disque.
- Le VPS `.15` est réservé à l’homologation — il n’exécute jamais de runners CI.
