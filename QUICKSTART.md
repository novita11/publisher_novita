# ⚡ QUICK START GUIDE - PENERBIT NUSANTARA

Panduan cepat untuk memulai dan menjalankan website Penerbit Nusantara.

---

## 🚀 5 MINUTES SETUP

### Step 1: Buka Website di Browser
```
File → Open File
Pilih: penerbit-nusantara-index.html
Atau: Drag & drop file ke browser
```

### Step 2: Test Login
```
Email:    novita@testmail.com
Password: 123456
Klik:     Tombol "Login"
```

### Step 3: Explore Features
- Jelajahi katalog buku
- Filter kategori
- Lihat paket layanan
- Test form kontak
- Klik "Terbit Buku" (setelah login)

### Step 4: Akses Dashboard
Setelah login, tekan "Logout" untuk kembali, atau buka:
```
dashboard.html
```

---

## 📁 Files to Know

| File | Tujuan | Action |
|------|--------|--------|
| `penerbit-nusantara-index.html` | **Main file** - Buka ini | ⭐ MULAI DARI SINI |
| `penerbit-nusantara-styles.css` | Design/styling | ✏️ Edit untuk ubah design |
| `penerbit-nusantara-script.js` | Logic/interaksi | ✏️ Edit untuk ubah fungsi |
| `dashboard.html` | User dashboard | 👤 Akses setelah login |
| `PENERBIT_NUSANTARA_README.md` | Dokumentasi | 📖 Baca untuk detil |
| `DEPLOYMENT_GUIDE.md` | Deploy guide | 🚀 Baca sebelum launch |
| `PROJECT_SUMMARY.md` | Project overview | 📋 Ringkasan lengkap |

---

## 🔑 Test Credentials

### Primary User
```
📧 Email:    novita@testmail.com
🔑 Password: 123456
👑 Role:     Admin
```

### Secondary User (Try This Too)
```
📧 Email:    admin@penerbitnusantara.id
🔑 Password: admin123
👑 Role:     Superadmin
```

---

## 💡 Quick Tips

### Login / Register
- Klik tombol "Login" di navbar
- Test login dengan email/password di atas
- Atau klik "Daftar" untuk register baru

### View Books
- Scroll ke section "Katalog Buku"
- Klik filter buttons: Semua, Fiksi, Non-Fiksi, Anak-anak
- Klik card buku untuk detail

### Edit Content
- **Warna:** Ubah CSS di `penerbit-nusantara-styles.css`
- **Text:** Edit HTML di `penerbit-nusantara-index.html`
- **Logic:** Ubah JS di `penerbit-nusantara-script.js`

### Add More Books
```javascript
// Di penerbit-nusantara-script.js, tambahkan ke booksData:
{
    id: 9,
    title: 'Judul Buku Baru',
    author: 'Nama Penulis',
    isbn: '978-602-1234-09-7',
    category: 'fiksi',
    price: 75000,
    description: 'Deskripsi buku...'
}
```

### Change Company Name
```javascript
// Search untuk "Penerbit Nusantara" dan ganti dengan nama Anda
// Atau update di multiple places untuk consistency
```

---

## 🎨 Easy Customizations

### Ubah Warna Gold Jadi Silver
```css
/* Di penerbit-nusantara-styles.css */
/* Cari --primary-gold dan ubah nilai hex */
--primary-gold: #C0C0C0;      /* Silver */
--primary-dark-gold: #A9A9A9;  /* Dark silver */
```

### Ubah Nama Perusahaan
```html
<!-- Di penerbit-nusantara-index.html -->
<!-- Search "Penerbit Nusantara" dan ganti -->
<!-- Search "novita@testmail.com" dan ganti email -->
```

### Add Social Media Links
```html
<!-- Di footer section -->
<a href="https://facebook.com/yourusername">Facebook</a>
<a href="https://instagram.com/yourusername">Instagram</a>
```

---

## 🐛 Troubleshooting

### CSS/Style tidak jalan?
```
✓ Pastikan 3 files ada di folder yang sama:
  - penerbit-nusantara-index.html
  - penerbit-nusantara-styles.css
  - penerbit-nusantara-script.js
✓ Refresh browser (Ctrl+F5 atau Cmd+Shift+R)
```

### Login tidak bisa?
```
✓ Check console: F12 → Console tab
✓ Email harus tepat: novita@testmail.com
✓ Password harus tepat: 123456
✓ Clear localStorage jika perlu:
  - F12 → Application → Local Storage → Clear
```

### Modal/Form tidak muncul?
```
✓ Check F12 → Console untuk errors
✓ Pastikan JavaScript enabled di browser
✓ Try reload halaman
```

---

## 📱 Test di Device Berbeda

### Desktop
```
Buka di browser, tekan F12
Klik "Toggle Device Toolbar" (Ctrl+Shift+M)
Pilih device: iPhone, iPad, Android
```

### Mobile Real Device
```
1. Pasang server lokal:
   - Download: http-server (npm install -g http-server)
   - Run: http-server /path/to/prototype
   - Akses: http://[IP-KOMPUTER]:8080

2. Atau langsung buka file di mobile:
   - Share folder ke mobile device
   - Buka file di browser mobile
```

---

## 🚀 Deploy ke GitHub (3 Steps)

### Step 1: Create Repository
```
1. Buka https://github.com/new
2. Nama: penerbit-nusantara
3. Pilih Public
4. Create repository
```

### Step 2: Upload Files
```
1. Buka repository
2. Klik "Upload files"
3. Drag & drop semua files
4. Commit changes
```

### Step 3: Enable GitHub Pages
```
1. Settings → GitHub Pages
2. Source: main branch
3. Save
4. Akses: username.github.io/penerbit-nusantara
```

---

## 📊 Monitoring & Analytics

### Simple Tracking
```javascript
// Contoh: Tracking button clicks
document.getElementById('myButton').addEventListener('click', () => {
    console.log('Button clicked!');
    // Send to analytics later
});
```

### Google Analytics (Setup Later)
```html
<!-- Tambahkan ini di <head> setelah analytics ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX');
</script>
```

---

## ✅ Checklist Sebelum Deploy

- [ ] Login testing (novita@testmail.com / 123456)
- [ ] Semua links berfungsi
- [ ] Form submission works
- [ ] Mobile responsive (test di F12)
- [ ] Tidak ada console errors (F12 → Console)
- [ ] Images loaded properly
- [ ] CSS/JS loaded properly
- [ ] Meta tags updated dengan info Anda
- [ ] Contact info updated
- [ ] Terms & Privacy pages linked

---

## 🎯 Common Tasks

### Add New Service Package
```html
<!-- Di section "services" -->
<div class="service-card">
    <h3>Paket Baru</h3>
    <p class="price">Rp X.XXX.000</p>
    <ul>
        <li>✓ Feature 1</li>
        <li>✓ Feature 2</li>
    </ul>
    <button class="btn-secondary">Pilih Paket</button>
</div>
```

### Add New Team Member
```javascript
// Di penerbit-nusantara-script.js
const dummyUsers = [
    // ... existing users ...
    {
        id: 3,
        email: 'newuser@testmail.com',
        password: 'password123',
        name: 'New User',
        company: 'Penerbit Nusantara',
        role: 'Publisher',
        verified: true
    }
];
```

### Change Service Package Prices
```javascript
// Di site-config.json
"starter": {
    "price": 2500000,  // ← Edit di sini
    ...
}
```

---

## 📞 Need Help?

### Find & Replace Text
```
Keyboard: Ctrl+H (Windows) atau Cmd+Option+F (Mac)
Tujuan: Replace "old text" dengan "new text"
```

### Debug JavaScript
```
1. Buka F12 → Console
2. Ketik: console.log(localStorage.getItem('currentUser'))
3. Lihat hasil untuk debugging
```

### Check Element
```
1. F12 → Inspector tab
2. Click icon (select element)
3. Click elemen di halaman
4. Lihat HTML dan CSS-nya
```

---

## 🎓 Learning Resources

### Dokumentasi Lengkap
- [PENERBIT_NUSANTARA_README.md](PENERBIT_NUSANTARA_README.md) - Features & functions
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deploy ke production
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Project overview

### External Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [GitHub Pages Help](https://docs.github.com/en/pages) - Deploy help
- [HTML Validator](https://validator.w3.org/) - Check HTML
- [CSS Validator](https://jigsaw.w3.org/css-validator/) - Check CSS

---

## 🎉 You're Ready!

Semuanya sudah siap. Tinggal:

1. ✅ Buka `penerbit-nusantara-index.html` di browser
2. ✅ Test fitur-fiturnya
3. ✅ Customize sesuai kebutuhan
4. ✅ Deploy ke GitHub atau hosting
5. ✅ Setup custom domain
6. ✅ Launch ke publik!

**Happy Publishing! 📚✨**

---

## 💬 Questions?

- Baca dokumentasi lengkap: [PENERBIT_NUSANTARA_README.md](PENERBIT_NUSANTARA_README.md)
- Lihat deployment guide: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- Check project summary: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

**Hubungi:** info@penerbitnusantara.id | +62 21 1234 5678
