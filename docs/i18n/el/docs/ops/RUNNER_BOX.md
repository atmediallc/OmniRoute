# Self-Hosted Runner Box Operations (.113 pool) (Ελληνικά)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Η αυτοφιλοξενούμενη ομάδα εκτελείται στο μηχάνημα **.113** (`tomni-proxmox-113`). Από τις 2026-10-18, κάθε
runner του OmniRoute έχει **έναν ρόλο**, μία ετικέτα και έναν προϋπολογισμό μνήμης/CPU που διατηρεί το άθροισμα του
`MemoryHigh` κοντά στη φυσική RAM:

| runner               | ετικέτα              | ρόλος                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`         | Builds Turbopack: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, το νυχτερινό build a11y | 40 GB / 44 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release`       | Release-Green (`release-green` + `main-green`), build webpack                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`         | νυχτερινές εργασίες (Schemathesis, promptfoo, garak, k6, εκκίνηση a11y) και `quality.yml` `lint-guard`                           | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`         | ίδια ομάδα με την παραπάνω                                                                                                       | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (τα αποθετήριά τους) | μόνο Dependabot (κορύφωση 155 MB το καθένα, 2026-10-18)                                                                          | 4 GB / 6 GB                | 200 % το καθένα |

Μετρήσεις στις 2026-10-18:

| πόρος     | τιμή                                 | τι σημαίνει για τον προγραμματισμό εργασιών                                                                                                                                                                                                                     |
| --------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 πυρήνες**               | ένα build παραγωγής Turbopack κορυφώνεται στα 33–37 GB υπό όριο cgroup (49 GB χωρίς όριο, `tests/unit/ci-build-bundler-webpack.test.ts`)· ένα build webpack στα ~14–16 GB. Ένα build Turbopack + ένα build webpack χωρούν μαζί· δύο builds Turbopack δεν χωρούν |
| swap      | 16 GB                                | το `omniroute-113-5` εκτελείται με απενεργοποιημένο swap (`MemorySwapMax=0`), ώστε ένα ανεξέλεγκτο build να τερματίζεται στο όριό του αντί να αναγκάζει το μηχάνημα να χρησιμοποιεί swap                                                                        |
| `/tmp`    | **12 GB tmpfs = RAM**                | οτιδήποτε αποθηκεύεται εκεί καταναλώνει μνήμη· τα υπολείμματα καθαρίζονται μετά από 3 ώρες                                                                                                                                                                      |
| CPU       | παρατηρήθηκε φορτίο 60 σε 32 πυρήνες | πριν από τις ποσοστώσεις, ένα build Turbopack (~1166 % CPU) μαζί με μια σουίτα κάλυψης στο ίδιο μηχάνημα στερούσαν από τις άλλες διεργασίες ακρόασης τους παλμούς διατήρησης σύνδεσης (`The self-hosted runner lost communication`, #16853)                     |
| runners   | **6 διεργασίες ακρόασης**            | 4 OmniRoute + OmniHeuris + OmniMind· τα `omniroute-113-3/-4/-7/-8` είναι απενεργοποιημένα (το `systemctl enable --now` επαναφέρει ένα σε λειτουργία)                                                                                                            |

Τα όρια βρίσκονται στο `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` κάθε μονάδας
(οι προηγούμενες τιμές διατηρούνται ως `override.conf.bak-20261018`) και εφαρμόστηκαν ζωντανά με
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — χωρίς επανεκκίνηση, επομένως δεν
επηρεάστηκε καμία εκτελούμενη εργασία. Οι ετικέτες αλλάζουν μέσω του API των runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), επίσης ζωντανά.

## Εγκατάσταση του janitor (μία φορά, στο μηχάνημα)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): κάθε 30 λεπτά, καταγραφή στο /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

Το `lsof` είναι απαραίτητο: το janitor επιβεβαιώνει ότι μια διαδρομή είναι αδρανής μέσω ενός στιγμιότυπου των ανοιχτών
αρχείων πριν την καταργήσει, ενώ χωρίς το εργαλείο δεν καταργεί τίποτα και το αναφέρει
(exit 1). Δοκιμάστε πρώτα κάθε αλλαγή με `--dry-run` — εμφανίζει ακριβώς τι θα έκανε
χωρίς να τροποποιεί τίποτα.

Τι κάνει σε κάθε εκτέλεση: καθαρίζει τα δικά μας υπολείμματα (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) μετά από **3 ώρες στο tmpfs** και 24 ώρες στο
`_work/_temp` του δίσκου· τερματίζει ένα `next-build` παλαιότερο των 75 λεπτών (καμία εργασία δεν εκτελείται για τόσο μεγάλο διάστημα — στις
2026-08-27 μία εκτελούνταν για 70 λεπτά αφότου το GitHub είχε δηλώσει ότι η εργασία της χάθηκε)· διαγράφει checkouts ηλικίας 48 ωρών
από runners των οποίων η μονάδα είναι **σταματημένη**· ειδοποιεί όταν η χρήση δίσκου είναι ≥ 85 %, το PSI μνήμης
`full/avg60` είναι ≥ 10 % και υπάρχουν περισσότεροι listeners από το `MAX_ACTIVE_RUNNERS` (με
ανάλυση σε omniroute/άλλους). Exit 1 = απαιτείται προσοχή· διαβάστε το αρχείο καταγραφής.

## Μονάδες runner: KillMode

Η προεπιλεγμένη ρύθμιση `KillMode=process` του runner αφήνει τη διεργασία `Runner.Worker → npm → next-build`
ενεργή όταν μια μονάδα διακόπτεται ή επανεκκινείται — ένα ορφανό build συνεχίζει να καταναλώνει RAM και
CPU χωρίς να είναι συνδεδεμένο με κάποια εργασία. Κάθε μονάδα του OmniRoute διαθέτει ένα drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
με `KillMode=mixed`: SIGTERM πρώτα στον listener και SIGKILL σε ολόκληρο το cgroup κατά το
`TimeoutStop`. Τίθεται σε ισχύ στην επόμενη επανεκκίνηση της μονάδας — επανεκκινείτε **έναν runner κάθε
φορά, μόνο όταν είναι αδρανής**, με τον έλεγχο αδράνειας και την επανεκκίνηση στην ίδια εντολή.

## Κανόνες λειτουργίας

- **Ένα build Turbopack κάθε φορά — επιβάλλεται μέσω label.** Κάθε job που εκτελεί ένα πλήρες
  `next build` με Turbopack στοχεύει το `[self-hosted, omni-build]`, και μόνο το **`omniroute-113-5`** φέρει αυτό το
  label: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  το νυχτερινό build a11y (#16853) και το **amd64** του `docker-publish.yml` (webpack μέσα στο BuildKit —
  το Turbopack έκανε panic εκεί, run 33253576569). Το σκέλος Docker arm64 παραμένει στο `ubuntu-24.04-arm`.
  Το amd64 του `docker-publish` μοιράζεται το concurrency group `heavy-build-main` με το `Build` του `ci.yml`
  (`cancel-in-progress: false`). Το Docker Engine πρέπει να βρίσκεται στο `omniroute-113-5`. Ένα δεύτερο slot
  Turbopack δεν χωρά στα 78 GB (2 × 33–37 GB συν τα υπόλοιπα φορτία του μηχανήματος)· ένα δεύτερο slot είναι ασφαλές μόνο για
  builds webpack.
- **Το Release-Green έχει το δικό του slot (2026-10-18).** Μέχρι τότε, και τα δύο validations του Release-Green εκτελούνταν
  στο `omni-build`: σε κάθε push (~10/ώρα, 97 από τα 100 push runs ακυρώθηκαν κατά την εκτέλεση μέσα σε μία ημέρα)
  και τρία πλήρη sweeps διάρκειας ~2 ωρών την ημέρα (το sweep των 05:29 περίμενε 6 ώρες για το slot) — το μοναδικό build
  slot είχε υπερκαλυφθεί πολλαπλάσια και τα PR Builds ίδιας προέλευσης περίμεναν για ώρες.
  Τα `release-green` και `main-green` πλέον στοχεύουν το `omni-release` (μόνο το `omniroute-113-6`) με
  `OMNIROUTE_USE_TURBOPACK=0`, και ένα run που έχει ξεκινήσει δεν ακυρώνεται πλέον από νεότερο push (το
  εκκρεμές slot εξακολουθεί να συμπτύσσει την καταιγίδα). Το `tests/unit/build/runner-capacity-routing.test.ts`
  κατοχυρώνει το routing, τη μετάβαση σε webpack και το ότι τίποτα στο `omni-release` δεν κάνει build με Turbopack.
- **Ελαφρύ pool: `omni-light`.** Τα `omniroute-113` και `omniroute-113-2` εκτελούν τα nightlies που χρειάζονται
  ένα `next build` μόνο για το backend (~5–6 GB· webpack) και το `lint-guard` του `quality.yml`. Το `omniroute-113`
  είχε `MemoryHigh=4G` έως τις 2026-10-18 — το build promptfoo προχωρούσε μέσω reclaim για 54 λεπτά
  εκεί· τα 8 GB εξαλείφουν το throttling.
- **Λιγότεροι listeners, σκόπιμα.** Τέσσερα units του OmniRoute απενεργοποιήθηκαν στις 2026-08-29 — κάθε επιπλέον
  listener είναι ένας ακόμη tenant για το παραπάνω όριο μνήμης. Το ανώτατο όριο του janitor είναι 6 (`MAX_ACTIVE_RUNNERS=6` στο cron): μετρά
  κάθε `Runner.Listener` στο μηχάνημα, ενώ τα OmniHeuris + OmniMind προσθέτουν δύο στους δικούς μας τέσσερις.
- **Ποτέ μην καθαρίζετε το `/tmp` ή το `_work` με το χέρι όσο οποιοσδήποτε runner είναι απασχολημένος.** Μια
  διαδικασία ελέγχου και κατόπιν διαγραφής, με κενό μεταξύ των δύο ενεργειών, ήταν ο λόγος που ένα ενεργό job Build έχασε το
  `_work` του στις 2026-08-27. Ο janitor εκτελεί τον έλεγχο και την αφαίρεση σε ένα βήμα·
  αφήστε τον να το κάνει.
- Η διακοπή ενός runner κατά τη διάρκεια ενός job ακυρώνει το job (παρατηρήθηκε σε πραγματικές συνθήκες): χρησιμοποιήστε `systemctl stop` μόνο
  όταν ο listener του δεν έχει child `Runner.Worker` — και κάντε το με μία εντολή.
- Τα workflows δεν πρέπει να αποθηκεύουν artefacts στο `/tmp` (είναι RAM). Κάντε λήψη στο
  `$RUNNER_TEMP` (σε δίσκο, ανά runner) — το artefact `next-build` των 1.3 GB χρειάστηκε 27–32
  λεπτά για να αποθηκευτεί στο tmpfs και 2 λεπτά για να γίνει upload από τον δίσκο.
- Το VPS `.15` προορίζεται μόνο για homologation — δεν εκτελεί ποτέ CI runners.
