# 🚀 DEPLOYMENT GUIDE - PENERBIT NUSANTARA

Panduan lengkap untuk deploy website Penerbit Nusantara ke GitHub dan custom domain.

## 📋 Persyaratan

- Akun GitHub aktif
- Domain berbayar (optional, tapi recommended)
- Web hosting (jika tidak menggunakan GitHub Pages)
- Browser modern

## 🐙 Cara 1: GitHub Pages (GRATIS)

### Step 1: Setup Repository

```bash
# Buka https://github.com/new
# Buat repository baru dengan nama: penerbit-nusantara
# Pilih "Public"
# Jangan tambahkan README dulu
```

### Step 2: Upload Files via Terminal

```bash
# Navigasi ke folder project
cd /Users/novitarianibrginting/Downloads/prototype

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Penerbit Nusantara website"

# Add remote repository
git remote add origin https://github.com/USERNAME/penerbit-nusantara.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Buka https://github.com/USERNAME/penerbit-nusantara/settings
2. Scroll ke section "GitHub Pages"
3. Under "Source", pilih "Deploy from a branch"
4. Branch: `main`, folder: `/ (root)`
5. Klik "Save"

Website akan accessible di: `https://USERNAME.github.io/penerbit-nusantara`

### Step 4: Upload via GitHub Web UI (ALTERNATIF)

Jika tidak ingin menggunakan terminal:

1. Buka repository GitHub Anda
2. Klik "Add file" → "Upload files"
3. Drag and drop semua files dari folder prototype
4. Commit changes
5. GitHub Pages akan auto-deploy

---

## 🌐 Cara 2: Domain Berbayar + Hosting

### Recommended Hosting Services:

1. **Netlify** (GRATIS tier tersedia)
   - Deploy langsung dari GitHub
   - SSL automatic
   - CDN gratis

2. **Vercel**
   - Optimal untuk Next.js
   - Deploy dari GitHub easy

3. **Hosting Tradisional** (Niagahoster, Rumahweb, dll)
   - Upload via FTP/File Manager
   - Lebih kontrol penuh

### Step 1: Koneksi Domain dengan Hosting

#### Jika menggunakan Netlify:

```bash
# 1. Buka https://app.netlify.com
# 2. Click "New site from Git"
# 3. Pilih GitHub
# 4. Authorize Netlify
# 5. Pilih repository penerbit-nusantara
# 6. Deploy settings:
#    - Build command: (kosongkan)
#    - Publish directory: / (root)
# 7. Click "Deploy"
```

#### Jika menggunakan Hosting Tradisional:

```bash
# 1. Download FileZilla atau hosting control panel
# 2. Connect ke server dengan FTP credentials
# 3. Upload semua files ke public_html folder
# 4. Update domain DNS ke hosting
```

### Step 2: Setup Custom Domain

#### Di Netlify:

1. Domain settings → "Add domain"
2. Masukkan domain Anda
3. Ikuti instruksi DNS
4. SSL akan auto-generate

#### Di Hosting Tradisional:

1. Buka control panel hosting
2. Arahkan domain ke IP address server
3. Wait untuk DNS propagation (24 jam)

---

## 🔐 Setup HTTPS (SSL Certificate)

### Automatic (Recommended):
- Netlify: Auto-generated
- GitHub Pages: Auto-generated
- Most modern hostings: Let's Encrypt free

### Manual:
```
1. Buka https://certbot.eff.org
2. Pilih software dan OS Anda
3. Follow instruksi
```

---

## 📝 Update Domain di File HTML

Setelah domain setup, update hardcoded URLs:

```html
<!-- Buka file: penerbit-nusantara-index.html -->
<!-- Cari dan replace: -->

Dari: <link rel="canonical" href="https://penerbitnusantara.id">
Ke:   <link rel="canonical" href="https://yourdomain.id">

Dari: https://penerbitnusantara.id/sitemap.xml
Ke:   https://yourdomain.id/sitemap.xml
```

---

## 🔍 SEO Configuration

### Google Search Console

```bash
# 1. Buka https://search.google.com/search-console
# 2. Pilih "URL prefix"
# 3. Masukkan domain Anda: https://yourdomain.id
# 4. Verify ownership via:
#    - HTML file upload
#    - Meta tag
#    - Google Analytics
#    - Google Tag Manager
# 5. Submit sitemap.xml
```

### Bing Webmaster Tools

```bash
# 1. Buka https://www.bing.com/webmasters
# 2. Add site
# 3. Verify via XML
# 4. Submit sitemap.xml
```

---

## 📧 Email Setup

Update file `penerbit-nusantara-script.js` untuk email notifications:

```javascript
// Ganti SMTP credentials:
const emailConfig = {
    provider: 'sendgrid', // atau gmail, mailgun
    apiKey: 'YOUR_API_KEY',
    from: 'noreply@yourdomain.id'
};
```

---

## 💳 Payment Gateway Integration

### Setup Midtrans (untuk Indonesia):

```javascript
// 1. Daftar di https://dashboard.midtrans.com
// 2. Dapatkan Server Key dan Client Key
// 3. Update di site-config.json:

"midtrans": {
    "enabled": true,
    "server_key": "Mid-server-xxxxx",
    "client_key": "Mid-client-xxxxx"
}
```

### Contoh Integrasi:

```html
<script src="https://app.midtrans.com/snap/snap.js" 
        data-client-key="YOUR_CLIENT_KEY"></script>

<script>
function checkout() {
    snap.pay('SNAP_TOKEN', {
        onSuccess: handleSuccess,
        onPending: handlePending,
        onError: handleError
    });
}
</script>
```

---

## 📊 Analytics Setup

### Google Analytics 4:

```html
<!-- Tambahkan ke <head> di index.html: -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Tag Manager:

```html
<!-- Tambahkan sebelum </head>: -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXXX');</script>

<!-- Tambahkan setelah <body>: -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

---

## 🔧 Backend Integration (Next Steps)

Saat ini website adalah static HTML/CSS/JS. Untuk full functionality:

### Option 1: Use Firebase (No Server Needed)
```javascript
// Authentication
import { auth } from "firebase/auth";

// Database
import { database } from "firebase/database";

// Cloud Functions
import { httpsCallable } from "firebase/functions";
```

### Option 2: Build Node.js Backend
```bash
# Buat folder backend
mkdir penerbit-nusantara-api
cd penerbit-nusantara-api

# Initialize
npm init -y
npm install express mongoose cors dotenv

# Create server.js
```

### Option 3: Use Headless CMS
- Strapi (Self-hosted)
- Contentful (Cloud-based)
- Sanity.io

---

## 📦 Database Setup

### MongoDB Atlas (Cloud):
```bash
# 1. Daftar di https://www.mongodb.com/cloud/atlas
# 2. Create cluster
# 3. Add IP whitelist
# 4. Generate connection string
# 5. Gunakan di backend
```

### PostgreSQL:
```bash
# Install PostgreSQL
brew install postgresql

# Create database
createdb penerbit_nusantara

# Update connection string di backend
DATABASE_URL=postgresql://user:password@localhost:5432/penerbit_nusantara
```

---

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] .env file dengan secrets (tidak commit ke git)
- [ ] Update password test user sebelum launch
- [ ] Setup firewall rules
- [ ] Enable CORS dengan proper domain
- [ ] Rate limiting enabled
- [ ] Input validation pada semua forms
- [ ] SQL injection prevention (gunakan prepared statements)
- [ ] XSS prevention implemented
- [ ] Regular security updates

---

## 📱 Mobile Optimization

Website sudah responsive, tapi untuk PWA improvement:

```bash
# Install PWA builder (optional)
npm install -g pwa-builder

# Generate PWA assets
pwa-builder ./penerbit-nusantara-index.html
```

---

## 🚨 Troubleshooting

### GitHub Pages tidak muncul

```bash
# 1. Cek apakah file ada di root
# 2. Pastikan file utama: index.html atau penerbit-nusantara-index.html
# 3. Rename ke index.html jika perlu
# 4. Clear browser cache (Ctrl+Shift+Delete)
# 5. Wait 5-10 minutes setelah push
```

### CSS/JS tidak load

```bash
# Masalah: Path reference salah
# Solusi: Pastikan paths adalah relative:
<link rel="stylesheet" href="penerbit-nusantara-styles.css">
<!-- BUKAN -->
<link rel="stylesheet" href="/penerbit-nusantara-styles.css">
```

### Email tidak terkirim

```bash
# Check:
# 1. SMTP credentials benar
# 2. Provider email tidak block aplikasi
# 3. Check spam folder
# 4. Enable "Less secure apps" (jika gmail)
```

---

## 📞 Support & Maintenance

### Regular Tasks:
- [ ] Monitor analytics weekly
- [ ] Update dependencies monthly
- [ ] Backup database weekly
- [ ] Security audit quarterly
- [ ] Content updates as needed

### Update Path:
```bash
# Pull latest dari GitHub
git pull origin main

# Update files di hosting
# Deploy ulang
```

---

## 📈 Monitoring & Performance

### Tools:
1. **Google PageSpeed Insights**: https://pagespeed.web.dev
2. **GTmetrix**: https://gtmetrix.com
3. **Lighthouse**: Chrome DevTools → Lighthouse
4. **Uptime Robot**: https://uptimerobot.com

---

## 🎉 Deployment Summary

| Method | Cost | Ease | Control |
|--------|------|------|---------|
| GitHub Pages | FREE | ⭐⭐⭐⭐⭐ | Medium |
| Netlify | FREE tier | ⭐⭐⭐⭐ | High |
| Vercel | FREE tier | ⭐⭐⭐⭐ | High |
| Hosting Tradisional | $$ | ⭐⭐ | Very High |

---

**Selamat! Website Anda siap untuk diluncurkan ke dunia! 🚀**

Untuk bantuan lebih lanjut, hubungi: info@penerbitnusantara.id
