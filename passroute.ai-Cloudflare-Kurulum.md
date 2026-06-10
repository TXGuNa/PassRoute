# passroute.ai'yi Cloudflare Pages'te Yayına Alma (Ücretsiz)

Uygulaman tamamen **statik** (index.html + questions.js + translations.js + PDF). Sunucu/veritabanı gerekmez, bu yüzden Cloudflare Pages'in **ücretsiz** planı fazlasıyla yeter: sınırsız ziyaretçi, ücretsiz SSL (https), global hız.

Yayınlanacak klasör: **TX-CDL-Practice** (içindeki tüm dosyalar).

---

## Adım 1 — Cloudflare hesabı aç
1. https://dash.cloudflare.com/sign-up → ücretsiz hesap oluştur, e-postanı doğrula.

## Adım 2 — passroute.ai'yi Cloudflare'e ekle (DNS yönetimi)
> Apex domain (passroute.ai gibi köfte alan adı) için bu adım gerekli.
1. Cloudflare panelinde **Add a site / Add a domain** → `passroute.ai` yaz → **Free** planı seç.
2. Cloudflare sana **2 tane nameserver** verir (örn. `xxx.ns.cloudflare.com`, `yyy.ns.cloudflare.com`).
3. Alan adını **nereden aldıysan** (registrar: örn. Namecheap, Porkbun, GoDaddy…) oraya gir → domain'in **Nameservers / DNS** ayarına git → mevcut nameserver'ları **sil**, Cloudflare'in verdiği 2 nameserver'ı **yapıştır** → kaydet.
4. Cloudflare'e dön; aktifleşmeyi bekle (genelde birkaç dakika, bazen birkaç saat). "Active" yazınca hazırsın.

## Adım 3 — Siteyi yükle (Pages — Direct Upload)
1. Cloudflare panel → sol menü **Workers & Pages** → **Create** → **Pages** sekmesi → **Upload assets** (Direct Upload / Drag and drop).
2. Proje adı: `passroute` (ya da istediğin) → **Create project**.
3. **TX-CDL-Practice klasörünün içindeki dosyaları** sürükle-bırak:
   - `index.html`
   - `questions.js`
   - `translations.js`
   - `Texas-CDL-Study-Guide.pdf`
   > Önemli: Klasörü değil, **içindeki dosyaları** at (index.html en üst seviyede olmalı). İstersen bu 4 dosyayı bir `.zip` yapıp zip'i de yükleyebilirsin.
4. **Deploy** → birkaç saniyede yayında. Sana `https://passroute.pages.dev` gibi bir geçici adres verir; aç, çalışıyor mu bak.

## Adım 4 — passroute.ai'yi bağla (Custom Domain)
1. Aynı Pages projesinde → **Custom domains** sekmesi → **Set up a custom domain**.
2. `passroute.ai` yaz → **Continue / Activate**. (İstersen ayrıca `www.passroute.ai` de ekle.)
3. Domain Cloudflare'de yönetildiği için DNS kaydı + SSL sertifikası **otomatik** kurulur. Birkaç dakika içinde `https://passroute.ai` sitenle açılır.

## Adım 5 — Güncelleme nasıl yapılır?
Dosyaları değiştirdiğinde (yeni sorular, çeviri vb.):
- Pages projesi → **Create new deployment** → güncel dosyaları tekrar sürükle-bırak → Deploy.
- Yeni sürüm saniyeler içinde canlıya geçer (eski sürümlere de geri dönebilirsin).

---

## Hızlı kontrol listesi
- [ ] Cloudflare hesabı açıldı
- [ ] passroute.ai Cloudflare'e eklendi, nameserver'lar registrar'da değiştirildi, "Active"
- [ ] Pages projesi oluşturuldu, 4 dosya yüklendi, `.pages.dev` adresi çalışıyor
- [ ] Custom domain `passroute.ai` eklendi, https açılıyor

## Notlar
- **Tamamen ücretsiz** kalır (Pages Free planı: sınırsız istek/bant genişliği, ücretsiz SSL).
- Alan adının **yıllık ücreti** registrar'a aittir (`.ai` domain'ler genelde yıllık ~$60-100); hosting ücretsiz.
- Alternatifler: **Netlify** (klasörü netlify.com/drop'a sürükle-bırak) veya **Vercel** — ikisi de ücretsiz; ama domain Cloudflare'deyse Pages en sorunsuz yol.

> İstersen sonraki adımda dosyaları senin için tek bir `.zip` haline getirebilirim, ya da Netlify yöntemini de anlatırım.
