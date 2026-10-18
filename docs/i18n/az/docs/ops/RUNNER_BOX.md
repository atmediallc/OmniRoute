# Self-Hosted Runner Box Operations (.113 pool) (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Özündə host edilən hovuz **.113** maşınında (`tomni-proxmox-113`) işləyir. 2026-10-18 tarixindən etibarən hər
OmniRoute runner-in **bir rolu**, bir etiketi və `MemoryHigh` cəmini fiziki RAM həcminə yaxın saxlayan
yaddaş/CPU büdcəsi var:

| runner               | etiket         | rol                                                                                                                               | `MemoryHigh` / `MemoryMax` | `CPUQuota`          |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack build-ləri: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, gecəlik a11y build-i | 40 GB / 44 GB (swap 0)     | 1600 %              |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack build-i                                                                   | 20 GB / 24 GB (swap 4 GB)  | 800 %               |
| `omniroute-113-2`    | `omni-light`   | gecəlik işlər (Schemathesis, promptfoo, garak, k6, a11y işə salınması) və `quality.yml` `lint-guard`                              | 12 GB / 16 GB (swap 4 GB)  | 600 %               |
| `omniroute-113`      | `omni-light`   | yuxarıdakı ilə eyni hovuz                                                                                                         | 8 GB / 12 GB               | 400 %               |
| OmniHeuris, OmniMind | (öz repoları)  | yalnız Dependabot (hər biri üçün pik 155 MB, 2026-10-18)                                                                          | 4 GB / 6 GB                | hər biri üçün 200 % |

2026-10-18 tarixində ölçülüb:

| resurs     | dəyər                            | planlaşdırma üçün mənası                                                                                                                                                                                                                                                            |
| ---------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 nüvə**              | Turbopack production build-i cgroup limiti altında pikdə 33–37 GB istifadə edir (limitsiz 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); webpack build-i isə təxminən 14–16 GB. Bir Turbopack və bir webpack build-i birlikdə yerləşir; iki Turbopack build-i isə yerləşmir |
| swap       | 16 GB                            | `omniroute-113-5` swap söndürülmüş halda (`MemorySwapMax=0`) işləyir; beləliklə, nəzarətdən çıxan build maşını swap istifadə etməyə məcbur etmək əvəzinə öz limitində dayandırılır                                                                                                  |
| `/tmp`     | **12 GB tmpfs = RAM**            | orada saxlanılan hər şey yaddaş istifadə edir; qalıqlar 3 saatdan sonra təmizlənir                                                                                                                                                                                                  |
| CPU        | 32 nüvədə 60 yük müşahidə edilib | kvotalardan əvvəl bir Turbopack build-i (~1166 % CPU) ilə eyni maşındakı coverage dəsti digər dinləyicilərin heartbeat-lərini resursdan məhrum edirdi (`The self-hosted runner lost communication`, #16853)                                                                         |
| runner-lər | **6 dinləyici**                  | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` deaktivdir (`systemctl enable --now` onlardan birini yenidən işə salır)                                                                                                                                             |

Limitlər hər unit-in `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` faylında yerləşir
(əvvəlki dəyərlər `override.conf.bak-20261018` kimi saxlanılıb) və
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` ilə canlı şəkildə tətbiq edilib — yenidən başlatma olmayıb, buna görə də
icra olunan heç bir job-a toxunulmayıb. Etiketlər də canlı şəkildə runners API vasitəsilə dəyişdirilir
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Təmizləyicini quraşdırın (bir dəfə, qutuda)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): hər 30 dəqiqədən bir, jurnalı /var/log/runner-janitor.log faylına yaz
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` tələb olunur: təmizləyici yolu silməzdən əvvəl açıq faylların bir ani görüntüsündən istifadə edərək onun boş olduğunu təsdiqləyir; bu alət olmadıqda heç nəyi silmir və bunu bildirir
(exit 1). İstənilən dəyişikliyi əvvəlcə `--dry-run` ilə sınayın — o, nə edəcəyini dəqiq göstərir
və heç nəyə toxunmur.

Hər işəsalmada etdikləri: öz qalıqlarımızı (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) **tmpfs üzərində 3 saatdan**, diskdəki
`_work/_temp` daxilində isə 24 saatdan sonra təmizləyir; 75 dəqiqədən köhnə `next-build` prosesini dayandırır (heç bir job bu qədər uzun çəkmir — 2026-08-27 tarixində GitHub onun job-unu itirilmiş elan etdikdən sonra biri 70 dəqiqə işləməyə davam etmişdi); unit-i **dayandırılmış** runner-lərin 48 saatdan köhnə checkout-larını təmizləyir; disk istifadəsi ≥ 85 %, yaddaş PSI
`full/avg60` ≥ 10 % olduqda və listener sayı `MAX_ACTIVE_RUNNERS` dəyərini keçdikdə xəbərdarlıq edir (omniroute/digər bölgüsü ilə). Exit 1 = müdaxilə tələb olunur; jurnalı oxuyun.

## Runner vahidləri: KillMode

Runner-in standart `KillMode=process` parametri vahid dayandırıldıqda və ya yenidən başladıldıqda `Runner.Worker → npm → next-build`
proseslərini işlək saxlayır — yetim qalmış build heç bir job-a bağlı olmadan RAM və
CPU istifadə etməyə davam edir. Hər OmniRoute vahidində
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
ünvanında `KillMode=mixed` parametrli əlavə konfiqurasiya var: əvvəlcə listener-ə SIGTERM, `TimeoutStop`
zamanında isə bütün cgroup-a SIGKILL göndərilir. Bu, vahid növbəti dəfə yenidən başladıldıqda qüvvəyə minir — **eyni anda yalnız bir runner-i və
yalnız boş olduqda**, boşluq yoxlaması ilə yenidən başlatmanı eyni komandada icra edərək yenidən başladın.

## İş qaydaları

- **Eyni anda yalnız bir Turbopack yığması — etiketlə məcburi tətbiq edilir.** Tam Turbopack
  `next build` işlədən hər bir iş `[self-hosted, omni-build]` hədəfləyir və bu etiketi yalnız
  **`omniroute-113-5`** daşıyır: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, gecəlik a11y yığması (#16853) və `docker-publish.yml` **amd64** (BuildKit daxilində
  webpack — Turbopack orada xəta ilə dayandı, işə salınma 33253576569). arm64 Docker mərhələsi
  `ubuntu-24.04-arm` üzərində qalır. `docker-publish` amd64, `ci.yml` `Build` ilə `heavy-build-main`
  paralellik qrupunu paylaşır (`cancel-in-progress: false`). Docker Engine `omniroute-113-5`
  üzərində olmalıdır. İkinci Turbopack yuvası 78 GB-a sığmır (2 × 33–37 GB və sistemin qalan
  hissəsi); ikinci yuva yalnız webpack yığmaları üçün təhlükəsizdir.
- **Release-Green-in öz yuvası var (2026-10-18).** Həmin vaxta qədər hər iki Release-Green yoxlaması
  `omni-build` üzərində işləyirdi: hər push zamanı (~10/saat, bir gündə 100 push işə salınmasının
  97-si işin ortasında ləğv edildi) və gündə üç dəfə ~2 saatlıq tam yoxlama (05:29 yoxlaması yuva
  üçün 6 saat gözlədi) — yeganə yığma yuvasının tutumu dəfələrlə aşılmışdı və öz mənbəyimizdən
  gələn PR Build işləri saatlarla gözləyirdi. `release-green` və `main-green` indi
  `OMNIROUTE_USE_TURBOPACK=0` ilə `omni-release` (`omniroute-113-6` yalnız) hədəfləyir və başlamış
  işə salınma artıq daha yeni push tərəfindən ləğv edilmir (gözləyən yuva yenə də axını
  birləşdirir). `tests/unit/build/runner-capacity-routing.test.ts` marşrutlaşdırmanı, webpack
  keçidini və `omni-release` üzərində heç nəyin Turbopack ilə yığılmamasını təsbit edir.
- **Yüngül hovuz: `omni-light`.** `omniroute-113` və `omniroute-113-2`, yalnız backend üçün
  `next build` tələb edən gecəlik işləri (~5–6 GB; webpack) və `quality.yml` `lint-guard` işini
  icra edir. `omniroute-113` üzərində 2026-10-18 tarixinədək `MemoryHigh=4G` idi — promptfoo
  yığması orada 54 dəqiqə ərzində yaddaşı geri almağa çalışaraq irəlilədi; 8 GB məhdudlaşdırmanı
  aradan qaldırır.
- **Qəsdən daha az listener.** 2026-08-29 tarixində dörd OmniRoute vahidi deaktiv edildi — hər
  əlavə listener yuxarıdakı yaddaş büdcəsinin daha bir istifadəçisidir. Təmizləyicinin yuxarı
  həddi 6-dır (cron daxilində `MAX_ACTIVE_RUNNERS=6`): o, maşındakı hər bir `Runner.Listener`
  prosesini sayır və OmniHeuris + OmniMind bizim dörd prosesimizə daha ikisini əlavə edir.
- **Hər hansı runner məşğul olarkən heç vaxt `/tmp` və ya `_work` qovluğunu əl ilə təmizləməyin.**
  Yoxlama ilə silmə arasında fasilə olan bir yoxla-sonra-sil əməliyyatı 2026-08-27 tarixində aktiv
  Build işinin `_work` qovluğunu itirməsinə səbəb oldu. Təmizləyici yoxlamanı və silməni bir
  addımda edir; bu işi ona buraxın.
- Runner-i işin ortasında dayandırmaq işi ləğv edir (canlı müşahidə olunub): `systemctl stop`
  yalnız onun listener prosesinin heç bir `Runner.Worker` törəmə prosesi olmadıqda işlədilməlidir
  — və bunu bir əmrlə edin.
- Workflow-lar artefaktları `/tmp` daxilində saxlamamalıdır (bu, RAM-dır). `$RUNNER_TEMP`
  qovluğuna endirin (diskdədir, hər runner üçün ayrıdır) — 1.3 GB-lıq `next-build` artefaktının
  tmpfs-ə yazılması 27–32 dəqiqə, diskdən yüklənməsi isə 2 dəqiqə çəkdi.
- `.15` VPS yalnız homoloqasiya üçündür — orada heç vaxt CI runner-ləri işləmir.
