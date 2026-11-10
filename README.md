# OPTICA — React E-commerce Starter

Bu paket, mevcut Create React App projesinin `src` klasörüne uyarlanacak şekilde hazırlanmıştır.

## Özellikler
- React Router DOM ile çok sayfalı yapı
- Türkçe / İngilizce dil seçimi
- Light / Dark tema (localStorage ile kalıcı)
- Ürün listeleme, kategori/çerçeve/fiyat filtreleri ve sıralama
- Ürün detay sayfası
- Favoriler
- Sepet ve miktar yönetimi
- WhatsApp sipariş yönlendirmesi
- Responsive tasarım

## Kurulum

Proje kök dizininde:

```bash
npm install react-router-dom lucide-react
npm start
```

## Dosyaları yerleştirme

Arşivdeki `src` klasörünü mevcut projenin `src` klasörüyle birleştir. Mevcut `public` klasörünü silme. CRA projesindeki `public/index.html` dosyası kullanılmaya devam eder.

## Önemli düzenlemeler
1. `src/pages/card.jsx` içindeki `905550000000` numarasını işletmenin WhatsApp numarasıyla değiştir. Ülke koduyla, başında `+` olmadan yaz.
2. `src/pages/home.jsx` içindeki mağaza adresi, telefon ve Google Maps bağlantısını gerçek işletme bilgileriyle değiştir.
3. Ürünleri `src/data/products.js` içinden düzenle. Fiyatlar örnek veridir.
4. Ürün görselleri örnek Unsplash bağlantılarıdır. Kendi ürün fotoğraflarını ekleyerek değiştirebilirsin.
5. Ürünler ve sepet şu an tarayıcı `localStorage` alanında tutulur. Gerçek stok, kullanıcı hesabı ve online ödeme için backend / veritabanı entegrasyonu gerekir.

## Sayfalar
- `/` — Ana sayfa
- `/urunler` — Ürün listesi
- `/urun/:id` — Ürün detay
- `/sepet` — Sepet
- `/favoriler` — Favoriler
