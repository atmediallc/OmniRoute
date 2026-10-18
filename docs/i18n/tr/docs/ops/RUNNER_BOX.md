# Self-Hosted Runner Box Operations (.113 pool) (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Kendi sunucunuzda barındırılan havuz **.113** makinesinde (`tomni-proxmox-113`) çalışır. 2026-10-18 tarihinden beri her
OmniRoute runner'ının **tek bir rolü**, tek bir etiketi ve `MemoryHigh` toplamını fiziksel RAM'e
yakın tutan bir bellek/CPU bütçesi vardır:

| runner               | etiket           | rol                                                                                                                                  | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`     | Turbopack derlemeleri: `ci.yml` `Build`, Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, gecelik a11y derlemesi | 40 GB / 44 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), webpack derlemesi                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`     | gecelik işler (Schemathesis, promptfoo, garak, k6, a11y başlatma) ve `quality.yml` `lint-guard`                                      | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`     | yukarıdakiyle aynı havuz                                                                                                             | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (kendi depoları) | yalnızca Dependabot (her biri en fazla 155 MB, 2026-10-18)                                                                           | 4 GB / 6 GB                | her biri 200 % |

2026-10-18 tarihinde ölçüldü:

| kaynak     | değer                         | zamanlama açısından anlamı                                                                                                                                                                                                                                                                    |
| ---------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 çekirdek**       | bir Turbopack üretim derlemesi, cgroup sınırı altında 33–37 GB ile zirve yapar (sınırsızken 49 GB, `tests/unit/ci-build-bundler-webpack.test.ts`); bir webpack derlemesi ise yaklaşık 14–16 GB kullanır. Bir Turbopack + bir webpack derlemesi birlikte sığar; iki Turbopack derlemesi sığmaz |
| swap       | 16 GB                         | `omniroute-113-5`, swap kapalıyken (`MemorySwapMax=0`) çalışır; böylece kontrolden çıkan bir derleme, makineyi swap kullanmaya zorlamak yerine kendi sınırında sonlandırılır                                                                                                                  |
| `/tmp`     | **12 GB tmpfs = RAM**         | burada tutulan her şey bellek kullanır; artıklar 3 saat sonra temizlenir                                                                                                                                                                                                                      |
| CPU        | 32 çekirdekte 60 yük gözlendi | kotalardan önce, bir Turbopack derlemesi (~1166 % CPU) ile aynı makinedeki bir kapsam paketi diğer listener'ların heartbeat'lerini aksatıyordu (`The self-hosted runner lost communication`, #16853)                                                                                          |
| runner'lar | **6 listener**                | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` devre dışıdır (`systemctl enable --now` bunlardan birini yeniden etkinleştirir)                                                                                                                                               |

Sınırlar, her bir unit'in `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
dosyasında bulunur (önceki değerler `override.conf.bak-20261018` olarak saklanmıştır) ve
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` ile çalışırken uygulanmıştır — yeniden başlatma yapılmadığı için
çalışan hiçbir işe dokunulmamıştır. Etiketler, runners API aracılığıyla
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) yine çalışırken değiştirilir.

## Temizleyiciyi kurma (tek seferlik, makine üzerinde)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): her 30 dakikada bir, /var/log/runner-janitor.log dosyasına kaydet
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` gereklidir: temizleyici, bir yolu kaldırmadan önce açık dosyaların tek bir
anlık görüntüsünü kullanarak yolun boşta olduğunu doğrular; araç yoksa hiçbir şeyi
kaldırmaz ve bunu bildirir (çıkış kodu 1). Her değişikliği önce `--dry-run` ile
deneyin — tam olarak ne yapacağını yazdırır ve hiçbir şeye dokunmaz.

Her çalıştırmada yaptıkları: kendi artıklarımızı (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) **tmpfs üzerinde 3 saat**, diskteki
`_work/_temp` altında ise 24 saat sonra temizler; 75 dakikadan eski bir
`next-build` işlemini sonlandırır (hiçbir iş bu kadar uzun sürmez — 2026-08-27
tarihinde bir işlem, GitHub işin kaybedildiğini bildirdikten sonra 70 dakika
çalışmıştı); birimi **durdurulmuş** çalıştırıcıların 48 saatten eski çalışma
kopyalarını siler; disk kullanımı ≥ %85, bellek PSI `full/avg60` ≥ %10 olduğunda
ve dinleyici sayısı `MAX_ACTIVE_RUNNERS` değerini aştığında uyarı verir
(omniroute/diğer dağılımıyla birlikte). Çıkış kodu 1 = ilgilenilmesi gerekiyor;
günlüğü okuyun.

## Runner birimleri: KillMode

Runner'ın varsayılan `KillMode=process` ayarı, bir birim durdurulduğunda veya yeniden
başlatıldığında `Runner.Worker → npm → next-build` sürecini çalışır durumda bırakır —
yetim kalan bir derleme, bağlı bir iş olmadan RAM ve CPU tüketmeye devam eder. Her
OmniRoute birimi, `KillMode=mixed` ayarına sahip bir drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
taşır: önce dinleyiciye SIGTERM, `TimeoutStop` anında ise tüm cgroup'a SIGKILL gönderilir.
Bu ayar, birimin bir sonraki yeniden başlatılmasında etkili olur — boşta olma kontrolü
ve yeniden başlatma aynı komutta olacak şekilde, **yalnızca boşta olduğunda ve her
seferinde bir runner'ı** yeniden başlatın.

## İşletim kuralları

- **Aynı anda yalnızca bir Turbopack derlemesi — etiketle zorunlu kılınır.** Tam bir Turbopack
  `next build` çalıştıran her iş `[self-hosted, omni-build]` hedefler ve bu etiketi yalnızca
  **`omniroute-113-5`** taşır: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, gecelik a11y derlemesi (#16853) ve `docker-publish.yml` **amd64**
  (BuildKit içinde webpack — Turbopack burada çöktü, çalıştırma 33253576569). arm64 Docker ayağı
  `ubuntu-24.04-arm` üzerinde kalır. `docker-publish` amd64, `ci.yml` `Build` ile
  `heavy-build-main` eşzamanlılık grubunu paylaşır (`cancel-in-progress: false`). Docker Engine
  `omniroute-113-5` üzerinde olmalıdır. İkinci bir Turbopack yuvası 78 GB'a sığmaz (2 × 33–37 GB
  artı makinenin geri kalanı); ikinci bir yuva yalnızca webpack derlemeleri için güvenlidir.
- **Release-Green'in kendi yuvası vardır (2026-10-18).** O zamana kadar her iki Release-Green
  doğrulaması da `omni-build` üzerinde çalışıyordu: her push'ta (~10/saat, bir günde 100 push
  çalıştırmasının 97'si işin ortasında iptal edildi) ve günde üç kez yapılan ~2 saatlik tam
  taramalarda (05:29 taraması yuva için 6 saat bekledi) — tek derleme yuvasına kapasitesinin
  birkaç katı kadar iş yüklenmişti ve aynı kaynaktan gelen PR Derlemeleri saatlerce bekliyordu.
  `release-green` ve `main-green` artık `OMNIROUTE_USE_TURBOPACK=0` ile `omni-release`
  (yalnızca `omniroute-113-6`) hedefler ve başlatılmış bir çalıştırma artık daha yeni bir push
  tarafından iptal edilmez (bekleyen yuva yine de yoğunluğu tek işe indirger).
  `tests/unit/build/runner-capacity-routing.test.ts`, yönlendirmeyi, webpack geçişini ve
  `omni-release` üzerindeki hiçbir şeyin Turbopack ile derlenmediğini sabitler.
- **Hafif havuz: `omni-light`.** `omniroute-113` ve `omniroute-113-2`, yalnızca backend için bir
  `next build` gerektiren gecelik işleri (~5–6 GB; webpack) ve `quality.yml` `lint-guard` işini
  çalıştırır. `omniroute-113`, 2026-10-18'e kadar `MemoryHigh=4G` değerine sahipti — promptfoo
  derlemesi burada 54 dakika boyunca bellek geri kazanımıyla ilerledi; 8 GB, kısıtlamayı ortadan
  kaldırır.
- **Dinleyici sayısı bilinçli olarak daha azdır.** Dört OmniRoute birimi 2026-08-29'da devre dışı
  bırakıldı — her ek dinleyici, yukarıdaki bellek bütçesinin başka bir kiracısıdır. Temizleyici
  üst sınırı 6'dır (cron içinde `MAX_ACTIVE_RUNNERS=6`): makinedeki her `Runner.Listener`
  sürecini sayar ve OmniHeuris + OmniMind, bizim dört sürecimize iki tane daha ekler.
- **Herhangi bir runner meşgulken `/tmp` veya `_work` dizinlerini asla elle temizlemeyin.**
  Kontrol ile silme arasında boşluk bulunan bir kontrol-et-sonra-sil işlemi, çalışan bir Build
  işinin 2026-08-27'de `_work` dizinini kaybetmesine neden oldu. Temizleyici, kontrolü ve
  kaldırma işlemini tek adımda yapar; bu işi ona bırakın.
- Bir runner'ı işin ortasında durdurmak işi iptal eder (canlı olarak gözlemlendi): `systemctl stop`
  komutunu yalnızca dinleyicisinin bir `Runner.Worker` alt süreci olmadığında çalıştırın — ve bunu
  tek komutta yapın.
- İş akışları artefaktları `/tmp` içinde tutmamalıdır (burası RAM'dir). İndirmeleri
  `$RUNNER_TEMP` konumuna (diskte, runner başına) yapın — 1,3 GB boyutundaki `next-build`
  artefaktının tmpfs'e ulaşması 27–32 dakika, diskten yüklenmesi ise 2 dakika sürdü.
- `.15` VPS yalnızca homologasyon içindir — üzerinde hiçbir zaman CI runner'ları çalışmaz.
