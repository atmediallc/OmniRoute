# Self-Hosted Runner Box Operations (.113 pool) (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

המאגר באירוח עצמי פועל על שרת **.113** (`tomni-proxmox-113`). מאז 2026-10-18, לכל runner של
OmniRoute יש **תפקיד אחד**, תווית אחת ותקציב זיכרון/מעבד ששומר על סכום ערכי
`MemoryHigh` קרוב לנפח ה-RAM הפיזי:

| runner               | תווית          | תפקיד                                                                                                                            | `MemoryHigh` / `MemoryMax`    | `CPUQuota`    |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | בניות Turbopack: ‏`ci.yml` `Build`, ‏Docker amd64, ‏`npm-publish`, ‏`nightly-v4-build`, ‏`preview-artifact`, בניית ה-a11y הלילית | 40 GB / 44 GB (ללא swap)      | 1600 %        |
| `omniroute-113-6`    | `omni-release` | ‏Release-Green (`release-green` + `main-green`), בניית webpack                                                                   | 20 GB / 24 GB (‏4 GB של swap) | 800 %         |
| `omniroute-113-2`    | `omni-light`   | משימות ליליות (Schemathesis, ‏promptfoo, ‏garak, ‏k6, אתחול a11y) ו-`quality.yml` `lint-guard`                                   | 12 GB / 16 GB (‏4 GB של swap) | 600 %         |
| `omniroute-113`      | `omni-light`   | אותו מאגר כמתואר לעיל                                                                                                            | 8 GB / 12 GB                  | 400 %         |
| OmniHeuris, OmniMind | (המאגרים שלהם) | Dependabot בלבד (שיא של 155 MB לכל אחד, 2026-10-18)                                                                              | 4 GB / 6 GB                   | 200 % לכל אחד |

נמדד ב-2026-10-18:

| משאב      | ערך                         | המשמעות מבחינת תזמון                                                                                                                                                                                                                                              |
| --------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 ליבות**        | בניית production של Turbopack מגיעה בשיא ל-33–37 GB תחת מגבלת cgroup ‏(49 GB ללא מגבלה, `tests/unit/ci-build-bundler-webpack.test.ts`); בניית webpack מגיעה לכ-14–16 GB. בניית Turbopack אחת ובניית webpack אחת יכולות לפעול יחד; שתי בניות Turbopack אינן יכולות |
| swap      | 16 GB                       | ‏`omniroute-113-5` פועל כאשר ה-swap מושבת (`MemorySwapMax=0`), כך שבנייה שיוצאת משליטה נעצרת במגבלה שלה במקום לגרום לשרת לבצע swapping                                                                                                                            |
| `/tmp`    | **12 GB tmpfs = RAM**       | כל מה שמאוחסן שם צורך זיכרון; שאריות מנוקות לאחר 3 שעות                                                                                                                                                                                                           |
| CPU       | נצפה עומס של 60 על 32 ליבות | לפני החלת המכסות, בניית Turbopack אחת (כ-1166 % CPU) יחד עם חבילת בדיקות coverage באותו שרת מנעו מה-listeners האחרים לשלוח פעימות תקינות (`The self-hosted runner lost communication`, #16853)                                                                    |
| runners   | **6 listeners**             | 4 של OmniRoute וכן OmniHeuris ו-OmniMind; ‏`omniroute-113-3/-4/-7/-8` מושבתים (`systemctl enable --now` מחזיר אחד מהם לפעולה)                                                                                                                                     |

המגבלות מוגדרות בקובץ `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` של כל unit
(הערכים הקודמים נשמרו בשם `override.conf.bak-20261018`) והוחלו בזמן אמת באמצעות
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — ללא הפעלה מחדש, ולכן אף
job פעיל לא הושפע. התוויות משתנות באמצעות ה-API של ה-runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), גם כן בזמן אמת.

## התקנת המנקה (פעם אחת, על השרת)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron ‏(root): כל 30 דקות, תיעוד ביומן /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` נדרש: המנקה מוודא שנתיב אינו בשימוש באמצעות תמונת מצב יחידה של קבצים
פתוחים לפני הסרתו, וללא הכלי הוא אינו מסיר דבר ומדווח על כך
(exit 1). נסו תחילה כל שינוי עם `--dry-run` — הוא מדפיס בדיוק מה היה
מבצע ואינו משנה דבר.

מה הוא עושה בכל הרצה: מנקה את השאריות שלנו (`runner-*`,‏ `omniroute-*`,
‏`next-build*`,‏ `e2e-build.tar.gz`) לאחר **3 שעות ב-tmpfs** ולאחר 24 שעות
ב-`_work/_temp` שעל הדיסק; מפסיק תהליך `next-build` שגילו עולה על 75 דקות (אף משימה אינה פועלת זמן רב כל כך —
ב-2026-08-27 אחת מהן פעלה במשך 70 דקות לאחר ש-GitHub כבר הכריז שהמשימה שלה אבדה);
מסיר עותקי עבודה בני 48 שעות של runners שהיחידה שלהם **מופסקת**; מתריע כאשר ניצולת הדיסק היא ≥ 85%,
כאשר PSI הזיכרון `full/avg60` הוא ≥ 10%, וכאשר מספר המאזינים גדול מ-`MAX_ACTIVE_RUNNERS` (עם
פירוט לפי omniroute/אחרים). Exit 1 = נדרשת התייחסות; קראו את היומן.

## יחידות Runner: ‏KillMode

ברירת המחדל של ה-runner, ‏`KillMode=process`, משאירה את
`Runner.Worker → npm → next-build` פעיל כאשר יחידה נעצרת או מופעלת מחדש — תהליך build יתום ממשיך לצרוך RAM ו-
CPU בלי שמשויכת אליו משימה. לכל יחידת OmniRoute יש drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
עם `KillMode=mixed`: ‏SIGTERM נשלח תחילה ל-listener, ולאחר מכן SIGKILL לכל ה-cgroup בנקודת
`TimeoutStop`. ההגדרה נכנסת לתוקף בהפעלה מחדש הבאה של היחידה — יש להפעיל מחדש **runner אחד
בכל פעם, ורק כשהוא במצב סרק**, כאשר בדיקת הסרק וההפעלה מחדש מתבצעות באותה פקודה.

## כללי תפעול

- **בנייה אחת של Turbopack בכל פעם — נאכף באמצעות תווית.** כל משימה שמריצה
  `next build` מלא של Turbopack מיועדת אל `[self-hosted, omni-build]`, ורק
  **`omniroute-113-5`** נושא את התווית הזו: `ci.yml` `Build`, ‏`npm-publish.yml` `publish`,
  ‏`nightly-v4-build`, ‏`preview-artifact`, בניית הנגישות הלילית (#16853) ו-**amd64** של
  `docker-publish.yml` (‏webpack בתוך BuildKit — ‏Turbopack קרס שם בפאניקה, ריצה
  33253576569). מסלול ה-Docker של arm64 נשאר על `ubuntu-24.04-arm`.
  ‏amd64 של `docker-publish` חולק את קבוצת המקביליות `heavy-build-main` עם `Build` של
  `ci.yml` ‏(`cancel-in-progress: false`). Docker Engine חייב לפעול על `omniroute-113-5`.
  סלוט שני של Turbopack אינו נכנס ב-78 GB ‏(2 × 33–37 GB בתוספת שאר העומס על המכונה);
  סלוט שני בטוח רק לבניות webpack.
- **ל-Release-Green יש סלוט משלו (2026-10-18).** עד אז, שתי בדיקות ה-Release-Green רצו
  על `omni-build`: בכל push (כ-10 בשעה, כאשר 97 מתוך 100 ריצות push בוטלו באמצע העבודה
  ביום אחד) ובשלוש סריקות מלאות של כשעתיים ביום (הסריקה של 05:29 המתינה 6 שעות לסלוט) —
  סלוט הבנייה היחיד סבל מעודף ביקוש של פי כמה, ובניות של בקשות משיכה מאותו מקור המתינו
  שעות. `release-green` ו-`main-green` מיועדים כעת אל `omni-release`
  (רק `omniroute-113-6`) עם `OMNIROUTE_USE_TURBOPACK=0`, וריצה שכבר התחילה אינה מבוטלת
  עוד על ידי push חדש יותר (הסלוט הממתין עדיין מאחד את מבול הריצות).
  `tests/unit/build/runner-capacity-routing.test.ts` מעגן את הניתוב, את המעבר ל-webpack
  ואת העובדה ששום דבר על `omni-release` אינו נבנה באמצעות Turbopack.
- **מאגר קל: `omni-light`.** ‏`omniroute-113` ו-`omniroute-113-2` מריצים את המשימות
  הליליות שדורשות `next build` לצד השרת בלבד (כ-5–6 GB; ‏webpack) ואת `lint-guard` של
  `quality.yml`. ל-`omniroute-113` הייתה הגדרת `MemoryHigh=4G` עד 2026-10-18 — הבנייה של
  promptfoo התקדמה שם במשך 54 דקות תוך פינוי זיכרון חוזר ונשנה; 8 GB מבטלים את ההאטה.
- **פחות מאזינים בכוונה.** ארבע יחידות OmniRoute הושבתו ב-2026-08-29 — כל מאזין נוסף
  הוא צרכן נוסף של תקציב הזיכרון שלעיל. התקרה של המנקה היא 6
  (`MAX_ACTIVE_RUNNERS=6` ב-cron): הוא סופר כל `Runner.Listener` במכונה, ו-OmniHeuris +
  OmniMind מוסיפים שניים לארבעת המאזינים שלנו.
- **לעולם אין לנקות ידנית את `/tmp` או את `_work` בזמן שמריץ כלשהו עסוק.**
  בדיקה ולאחריה מחיקה, עם פער בין השתיים, היא הסיבה לכך שמשימת Build פעילה איבדה את
  `_work` שלה ב-2026-08-27. המנקה מבצע את הבדיקה וההסרה בצעד אחד;
  הניחו לו לעשות זאת.
- עצירת מריץ באמצע משימה מבטלת את המשימה (נצפה בזמן אמת): יש להריץ `systemctl stop` רק
  כאשר למאזין שלו אין תהליך צאצא מסוג `Runner.Worker` — ויש לעשות זאת בפקודה אחת.
- אסור לתהליכי עבודה להחנות ארטיפקטים ב-`/tmp` (הוא נמצא ב-RAM). יש להוריד אל
  `$RUNNER_TEMP` (על הדיסק, בנפרד לכל מריץ) — לארטיפקט `next-build` בגודל 1.3 GB נדרשו
  27–32 דקות להגיע אל tmpfs ו-2 דקות להעלות מהדיסק.
- שרת ה-VPS ‏`.15` מיועד להומולוגציה בלבד — הוא לעולם אינו מריץ מריצי CI.
