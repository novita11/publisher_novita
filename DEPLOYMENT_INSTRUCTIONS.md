# 🚀 MANUAL DEPLOYMENT GUIDE - PENERBIT NUSANTARA

## Step-by-Step Deployment ke GitHub

### Step 1: Open Terminal di Mac Anda

```bash
open -a Terminal
```

### Step 2: Navigate ke Prototype Folder

```bash
cd ~/Downloads/prototype
```

### Step 3: Initialize Git (jika belum)

```bash
git init
```

### Step 4: Add Remote Repository

```bash
git remote add origin https://github.com/novita11/publisher_novita.git
```

### Step 5: Pull Latest dari GitHub

```bash
git pull origin main
```

### Step 6: Add All Changes

```bash
git add .
```

### Step 7: Commit dengan Pesan Deskriptif

```bash
git commit -m "🎨 Update: Improve themes hitam-gold elegan + AI chatbot + fix login

- Themes: Updated to elegant black & gold design
- Navigation: Gold underline on hover
- Hero section: Enhanced styling with gold borders
- Cards: Dark gradient backgrounds dengan gold accents
- Chatbot: Full AI chatbot dengan knowledge base (chatbot.html)
- Login: Fixed dummy user authentication (novita@testmail.com / 123456)
- User menu: Dynamic user profile dropdown
- Responsive: Improved mobile design
- Animations: Smooth transitions dan hover effects"
```

### Step 8: Push ke GitHub

```bash
git push origin main -u
```

### Step 9: Verify di GitHub

Buka: https://github.com/novita11/publisher_novita

---

## ✅ Fitur yang Sudah Di-Update

### 🎨 Theme Improvements
- ✅ Hitam & Gold elegan (primary: #0f0f0f, accent: #d4af37)
- ✅ Gradient backgrounds yang sophisticated
- ✅ Gold underline animation on nav links
- ✅ Enhanced shadows & hover effects
- ✅ Improved text contrast untuk readability

### 🤖 AI Chatbot
- ✅ Full-featured chatbot page (chatbot.html)
- ✅ Knowledge base dengan 8+ categories
- ✅ Typing indicator animation
- ✅ Quick response buttons
- ✅ Auto-scroll messaging
- ✅ Responsive design

### 🔐 Login & Authentication
- ✅ Dummy user working: novita@testmail.com / 123456
- ✅ User profile dropdown in navbar
- ✅ Logout functionality
- ✅ Current user tracking dengan localStorage
- ✅ Login demo info box di modal

### 🔗 Navigation Updates
- ✅ AI Bot link di navbar
- ✅ Dynamic user menu
- ✅ Smooth scroll behavior
- ✅ Mobile responsive hamburger menu

---

## 📱 Testing Checklist Sebelum Deploy

Buka `index.html` di browser dan test:

- [ ] **Warna Theme**: Lihat background hitam dengan gold accents
- [ ] **Navigation**: Hover di nav links, lihat gold underline animation
- [ ] **Login**: Klik "Masuk", input email: `novita@testmail.com`, password: `123456`
- [ ] **User Menu**: Setelah login, lihat nama user di navbar dropdown
- [ ] **AI Chatbot**: Klik "AI Bot" di navbar, test berbagai pertanyaan
- [ ] **Shopping Cart**: Add buku ke cart, lihat badge update
- [ ] **Search & Filter**: Test search by judul/penulis/ISBN
- [ ] **Mobile**: Resize browser ke 375px, test responsiveness

---

## 🌐 GitHub Pages Configuration

### Enable GitHub Pages:

1. Buka: https://github.com/novita11/publisher_novita/settings
2. Scroll ke "Pages" section
3. Source: **main** branch
4. Save
5. Website akan live di: `https://novita11.github.io/publisher_novita`

### Setup Custom Domain (Optional):

1. Beli domain (IDwebhost, Niagahoster, Namecheap)
2. Di GitHub Pages settings, masukkan domain name
3. Update DNS di registrar domain:
   - A record → `185.199.108.153`
   - CNAME → `novita11.github.io`
4. Wait 24-48 hours untuk propagasi
5. Enable "Enforce HTTPS" di settings

---

## 📊 File-File yang Sudah Updated

| File | Changes |
|------|---------|
| `index.html` | + AI Bot link, fixed login form, user menu |
| `styles.css` | Complete theme redesign (black & gold) |
| `script.js` | + Login functions, user authentication |
| `chatbot.html` | NEW - Full AI chatbot with KB |
| `keranjang.html` | Styling update untuk new theme |
| `tentang.html` | Styling update untuk new theme |
| `privacy.html` | Styling update untuk new theme |
| `terms.html` | Styling update untuk new theme |

---

## 🔗 Links Penting

- **Repository**: https://github.com/novita11/publisher_novita
- **Live Site (setelah pages)**: https://novita11.github.io/publisher_novita
- **Chatbot Page**: https://novita11.github.io/publisher_novita/chatbot.html

---

## 🐛 Troubleshooting

### Git Push Rejected?
```bash
# Force pull latest
git pull origin main --rebase

# Try push again
git push origin main
```

### Files Not Updating?
```bash
# Clear cache
git rm -r --cached .
git add .
git commit -m "Clear cache"
git push origin main
```

### GitHub Pages Not Showing?
```bash
1. Wait 5-10 minutes after enabling
2. Do hard refresh: Cmd+Shift+R (Mac)
3. Check settings → Pages again
4. Make sure main branch is selected
```

---

## 💡 Next Steps untuk Production

1. **Domain Berbayar**: Setup custom domain dengan SSL
2. **Backend API**: Build API untuk login real, produk database, payment gateway
3. **Database**: Setup PostgreSQL/MySQL untuk data users, buku, orders
4. **Payment Gateway**: Integrate Midtrans, iPaymu, atau Doku
5. **Email Service**: Setup SMTP untuk order confirmations
6. **Analytics**: Setup Google Analytics & tracking
7. **CDN**: Setup Cloudflare untuk faster delivery

---

## ✨ Features Siap untuk Development

Semua fitur sudah didesain untuk mudah di-extend:

- **Dummy User Data**: Mudah replace dengan database real
- **Knowledge Base**: Chatbot KB di-hardcode, bisa pindah ke database
- **Book Database**: Sample data 8 buku, easily scalable
- **Shopping Cart**: Sudah full functional dengan localStorage
- **Form Validation**: Bootstrap form validation built-in
- **Responsive Design**: Mobile-first approach

---

**Selamat! Penerbit Nusantara Anda sudah siap deploy! 🚀**

Hubungi saya jika ada pertanyaan atau membutuhkan bantuan lebih lanjut.
