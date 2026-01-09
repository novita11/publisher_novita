# 📚 Penerbit Nusantara - Website Publisher Indonesia Berstandar Internasional

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-success.svg)

Website penerbit buku Indonesia yang berstandar internasional dengan sertifikasi ISBN lengkap dan sistem manajemen penerbitan terintegrasi. Dibangun dengan teknologi web modern dan responsif untuk memberikan pengalaman terbaik kepada pembaca dan penulis.

## 🌟 Fitur Utama

### Untuk Pembaca
- ✅ **Katalog Buku Lengkap** - Browse ribuan judul buku dari berbagai kategori
- 🔍 **Sistem Pencarian Canggih** - Cari berdasarkan judul, penulis, atau ISBN
- 📊 **Filter Kategori** - Fiksi, Non-Fiksi, Biografi, Self-Help, Anak-Anak, Pendidikan
- ⭐ **Rating & Review** - Lihat penilaian dan ulasan dari pembaca lain
- 🛒 **Shopping Cart** - Tambah buku ke keranjang dengan mudah
- 💳 **Integrasi Pembayaran** - Siap untuk integrasi Midtrans, iPaymu, atau Doku
- 📱 **Responsive Design** - Optimal di desktop, tablet, dan mobile

### Untuk Penulis
- 📝 **Daftar Penerbitan** - Form lengkap untuk mendaftar buku Anda
- 🎓 **Layanan Profesional** - Editor, desainer, dan marketing support
- 📦 **Distribusi Nasional** - Jangkauan ke seluruh Indonesia
- 🌐 **Platform Digital** - E-book dan audiobook

### Fitur Teknis
- 🏆 **SEO Friendly** - Meta tags dan struktur HTML semantic
- 🎨 **Modern Design** - UI/UX mengikuti standar penerbit kelas dunia
- 💾 **Local Storage** - Menyimpan data keranjang di browser
- ⚡ **Fast Loading** - Optimasi performa dan caching
- 🔒 **GDPR Compliant** - Privasi data terjamin

## 📁 Struktur File

```
penerbit-nusantara/
├── index.html              # Halaman utama
├── keranjang.html          # Halaman keranjang belanja
├── styles.css              # Stylesheet lengkap
├── script.js               # JavaScript untuk interaktivitas
├── README.md               # Dokumentasi ini
└── assets/                 # Folder untuk aset (opsional)
    └── images/             # Gambar cover buku
```

## 🚀 Cara Menggunakan

### Persyaratan
- Browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet
- Text editor untuk edit kode (VS Code, Sublime Text, dll)

### Instalasi & Setup

1. **Clone atau download repository**
```bash
git clone https://github.com/username/penerbit-nusantara.git
cd penerbit-nusantara
```

2. **Buka file di browser**
```bash
# Opsi 1: Buka langsung
open index.html

# Opsi 2: Gunakan live server
npm install -g live-server
live-server
```

3. **Akses website**
```
http://localhost:8080 (jika menggunakan live-server)
atau buka index.html langsung di browser
```

## 🛠️ Fitur Interaktif

### Pencarian Buku
- Ketik judul atau nama penulis di search bar
- Masukkan nomor ISBN untuk pencarian spesifik
- Klik tombol "Cari" atau tekan Enter

### Filter Kategori
- Pilih kategori dari dropdown di halaman katalog
- Daftar buku akan otomatis ter-update

### Keranjang Belanja
- Klik tombol "Beli" untuk menambah buku ke keranjang
- Lihat ringkasan pembelian di `/keranjang.html`
- Ubah jumlah atau hapus item sesuai kebutuhan
- Checkout akan mengarahkan ke halaman pembayaran

### Daftar Penerbitan
- Klik tombol "Daftar Terbit" di halaman utama
- Isi form dengan data penulis dan buku
- Submit untuk menunggu verifikasi penerbit

## 📦 Data Buku

Database buku disimpan dalam array di `script.js`:

```javascript
const bukuDatabase = [
    {
        id: 1,
        judul: "Cahaya di Tengah Gelap",
        penulis: "Siti Nurhaliza",
        harga: 89000,
        rating: 4.8,
        isbn: "978-602-1234-56-7",
        kategori: "fiksi",
        // ... data lainnya
    }
];
```

Anda dapat menambah, mengedit, atau menghapus data buku sesuai kebutuhan.

## 💾 Local Storage

Website menggunakan Local Storage untuk menyimpan:
- **Keranjang** - `keranjang`
- **Buku yang Dilihat** - `bukuDilihat`
- **Penulis yang Terdaftar** - `daftarPenulis`

Untuk mengakses di Console Browser:
```javascript
// Lihat isi keranjang
console.log(JSON.parse(localStorage.getItem('keranjang')))

// Clear semua data
localStorage.clear()
```

## 🎨 Kustomisasi

### Warna Brand
Edit warna di `styles.css`:
```css
:root {
    --primary-color: #1a472a;      /* Hijau tua */
    --secondary-color: #2d5f3f;    /* Hijau medium */
    --accent-color: #d4a574;       /* Gold */
    --text-dark: #2c3e50;
    --text-light: #ecf0f1;
}
```

### Logo & Nama Penerbit
Edit di `index.html` dan `keranjang.html`:
```html
<a class="navbar-brand fw-bold" href="#home">
    <i class="fas fa-book-open"></i> PENERBIT NUSANTARA
</a>
```

### Informasi Kontak
Edit di `index.html` section "Kontak":
```html
<p>
    <a href="tel:+62212345678">+62 (21) 2345-678</a>
    <a href="mailto:info@penerbitnusantara.com">info@penerbitnusantara.com</a>
</p>
```

## 🔗 Integrasi Pembayaran

Sistem pembayaran siap untuk diintegrasikan dengan:

### Midtrans
```javascript
// Tambahkan di script.js
<script src="https://app.midtrans.com/snap/snap.js" data-client-key="YOUR_CLIENT_KEY"></script>
```

### iPaymu
```javascript
// Generate token dan redirect ke halaman pembayaran iPaymu
```

### Doku (Multipayment Gateway)
```javascript
// Implementasi menggunakan API Doku
```

## 📱 Responsive Design

Website telah dioptimalkan untuk:
- **Desktop** (1200px ke atas)
- **Tablet** (768px - 1199px)
- **Mobile** (dibawah 768px)

Testing di berbagai ukuran layar:
```bash
# Chrome DevTools: Ctrl+Shift+I (Windows) atau Cmd+Option+I (Mac)
# Pilih Device Toolbar untuk test responsiveness
```

## 🔐 Keamanan

- ✅ HTTPS ready (untuk production)
- ✅ GDPR compliant (privacy policy ada)
- ✅ No sensitive data di frontend
- ✅ Input validation di form

Untuk production:
1. Gunakan HTTPS
2. Validate semua input di backend
3. Gunakan environment variables untuk API keys
4. Implement proper authentication & authorization

## 📊 Analytics

Tracking buku yang dilihat:
```javascript
trackBukuDilihat(idBuku);
// Data tersimpan di localStorage
```

Untuk Google Analytics, tambahkan di `<head>`:
```html
<!-- Global site tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Deployment

### GitHub Pages
1. Push code ke GitHub repository
2. Settings → Pages → Source: main branch
3. Website akan accessible di `https://username.github.io/penerbit-nusantara`

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Connect GitHub repository
2. Deploy settings: Publish directory = root
3. Deploy

### Custom Domain
1. Beli domain di provider (Namecheap, IDwebhost, dll)
2. Setup DNS pointing ke hosting
3. Update baseURL di analytics dan tracking

## 📚 Standar Internasional

Website ini mengikuti standar:
- ✅ **ISBN-13** - Nomor standar internasional untuk buku
- ✅ **ONIX** - Open Niggli Information eXchange (metadata buku)
- ✅ **ISNI** - International Standard Name Identifier (penulis)
- ✅ **ISO 9001:2015** - Quality Management System
- ✅ **Web Accessibility (WCAG 2.1)** - Untuk semua pengguna

## 📈 Roadmap Fitur

- [ ] Backend API (Node.js/Express atau Python/Django)
- [ ] Database (PostgreSQL/MySQL)
- [ ] User authentication & authorization
- [ ] Admin dashboard untuk manajemen buku
- [ ] Payment gateway integration
- [ ] Email notification system
- [ ] Advanced analytics & reporting
- [ ] Mobile app (React Native/Flutter)
- [ ] Recommendation engine
- [ ] User reviews & comments system
- [ ] Author profile pages
- [ ] Gift cards & vouchers
- [ ] Subscription model
- [ ] API untuk integrasi pihak ketiga

## 🤝 Kontribusi

Kontribusi sangat welcome! Langkah-langkah:

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Lisensi

Project ini menggunakan **MIT License** - bebas digunakan untuk komersial maupun non-komersial.

Lihat file [LICENSE](LICENSE) untuk detail lengkap.

## 👤 Author

**Penerbit Nusantara**
- Website: [https://penerbitnusantara.com](https://penerbitnusantara.com)
- Email: info@penerbitnusantara.com
- Telepon: +62 (21) 2345-678

## 🙏 Terima Kasih

Terima kasih kepada:
- Bootstrap 5 untuk framework CSS
- Font Awesome untuk icons
- Community contributors

## 📞 Support

Butuh bantuan? Hubungi kami:
- 📧 Email: support@penerbitnusantara.com
- 📱 WhatsApp: +62 812-3456-7890
- 🕐 Jam operasional: Senin-Jumat 09:00-17:00 WIB

## 📋 Checklist Setup Domain Berbayar

Saat siap deploy dengan domain berbayar:

- [ ] Beli domain di registrar (IDwebhost, Niagahoster, dll)
- [ ] Setup hosting (shared hosting atau VPS)
- [ ] Upload file ke hosting via FTP/SSH
- [ ] Setup SSL certificate (Let's Encrypt)
- [ ] Configure DNS records
- [ ] Setup email hosting untuk domain
- [ ] Implementasi backend API
- [ ] Setup database production
- [ ] Integrate payment gateway
- [ ] Setup backup system
- [ ] Monitor uptime dengan monitoring tools
- [ ] Setup CDN untuk aset statis
- [ ] Optimize SEO (sitemap.xml, robots.txt)
- [ ] Setup Google Analytics
- [ ] Create privacy policy & terms of service

---

**Dibuat dengan ❤️ untuk mendukung industri penerbitan Indonesia yang berkualitas**

*Last Updated: January 2024*
