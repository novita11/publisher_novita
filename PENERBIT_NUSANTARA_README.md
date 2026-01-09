# 📚 Penerbit Nusantara

Platform Penerbitan Digital Profesional Indonesia dengan Sertifikasi ISBN Internasional

## 🎯 Deskripsi

**Penerbit Nusantara** adalah website publisher Indonesia yang dirancang dengan standar internasional, meniru konsep profesional dari penerbit-penerbit besar seperti Gramedia dan penerbit terakreditasi lainnya. Platform ini menyediakan solusi lengkap untuk penerbitan, distribusi, dan manajemen buku dengan nomor ISBN yang sah dan terdaftar.

## ✨ Fitur Utama

### 1. **Autentikasi & User Management**
- Login/Register sistem
- Dummy user untuk testing: 
  - **Email:** `novita@testmail.com`
  - **Password:** `123456`
- Session management dengan Local Storage
- Role-based access (Admin, Publisher, Superadmin)

### 2. **Catalog Management**
- Katalog buku interaktif dengan 8+ dummy books
- Filter kategori (Fiksi, Non-Fiksi, Anak-anak, Semua)
- Informasi detail: ISBN, penulis, deskripsi, harga
- Responsive book card design

### 3. **Service Packages**
- **Paket Starter** (Rp 2.5 juta): Penerbitan dasar dengan ISBN
- **Paket Professional** (Rp 5 juta): Premium dengan distribusi nasional
- **Paket Enterprise**: Custom dengan dedicated manager

### 4. **Design Premium**
- **Theme:** Hitam & Gold (Perpusnas inspired)
- **Color Scheme:**
  - Primary Gold: `#D4AF37`
  - Dark Gold: `#B8860B`
  - Black: `#0a0a0a` - `#2a2a2a`
- Logo SVG custom berbentuk buku
- Animasi smooth & professional

### 5. **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop full experience
- Touch-friendly navigation

### 6. **Kontak & Support**
- Contact form terintegrasi
- Info lengkap perusahaan
- Social media links
- Newsletter subscription

## 🗂️ Struktur File

```
penerbit-nusantara/
├── penerbit-nusantara-index.html      # Main HTML file
├── penerbit-nusantara-styles.css      # Styling (hitam & gold)
├── penerbit-nusantara-script.js       # JavaScript interaktif
├── README.md                           # Dokumentasi
└── assets/
    └── logo-nusantara.svg             # Logo (optional)
```

## 🚀 Cara Menggunakan

### 1. Setup Awal
```bash
# Clone atau download folder prototype
# Buka file penerbit-nusantara-index.html di browser
```

### 2. Testing Login
```
Email:    novita@testmail.com
Password: 123456
```

### 3. Fitur Testing
- Klik "Login" untuk test autentikasi
- Gunakan email/password dummy di atas
- Jelajahi katalog buku
- Test filter kategori
- Hubungi form support
- Subscribe newsletter

## 🎨 Design System

### Color Palette
```
Primary Gold:      #D4AF37
Dark Gold:         #B8860B
Secondary Gold:    #8B6914
Black Primary:     #0a0a0a
Black Secondary:   #1a1a1a
Black Tertiary:    #2a2a2a
Light Gray:        #f5f5f5
White:             #ffffff
```

### Typography
- **Headings:** Georgia, Serif (Premium feel)
- **Body:** Segoe UI, sans-serif (Modern & readable)
- **Font Weight:** 400, 500, 600, 700

### Components
- **Navbar:** Sticky, glassmorphism effect
- **Buttons:** Gradient primary & transparent secondary
- **Cards:** Hover elevation effect
- **Modals:** Smooth animations
- **Forms:** Full-width inputs dengan focus states

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** 480px - 767px
- **Small Mobile:** < 480px

## 🔐 User Roles

### Admin
- Akses penuh semua fitur
- Manage publishers
- View analytics

### Publisher
- Publish buku
- Manage katalog
- View sales

### Superadmin
- Kontrol penuh sistem
- Manage users & roles
- Platform settings

## 🔧 JavaScript Functions

### Authentication
```javascript
handleLogin(event)        // Process login form
handleRegister(event)     // Process registration
logout()                  // Logout user
UserSession.save(user)    // Save session
UserSession.load()        // Load session
UserSession.isLoggedIn()  // Check login status
```

### UI Interaction
```javascript
openLoginModal()         // Open login modal
closeLoginModal()        // Close login modal
openRegisterModal()      // Open register modal
closeRegisterModal()     // Close register modal
toggleNavMenu()          // Toggle mobile menu
scrollToSection(id)      // Smooth scroll
updateNavigation()       // Update nav based on login
```

### Catalog
```javascript
loadBooks(books)         // Load books to grid
filterBooks(category)    // Filter by category
viewBook(bookId)         // View book details
```

### Notifications
```javascript
showNotification(msg, type)  // Show toast notification
// Types: success, error, warning, info
```

## 💾 Data Storage

### Local Storage
- `currentUser`: JSON user session data

### Dummy Database (In-Memory)
- `dummyUsers`: Array of user objects
- `booksData`: Array of book objects

## 📊 Sample Data

### Dummy Books (8 items)
- Jejak Leluhur Nusantara (Non-Fiksi)
- Petualangan di Hutan Rimba (Fiksi)
- Cerita Si Kancil yang Cerdik (Anak-anak)
- Buku Pintar Memasak Indonesia (Non-Fiksi)
- Cinta di Bawah Bulan Purnama (Fiksi)
- Aku Belajar Membaca dengan Suku Kata (Anak-anak)
- Teknologi Blockchain untuk Indonesia (Non-Fiksi)
- Sang Pembaca di Tengah Malam (Fiksi)

### Services
- 3 paket: Starter, Professional, Enterprise
- Detail harga dan fitur lengkap

## 🌐 Integrasi Siap-Siap Untuk

- **Payment Gateway:** Midtrans, GoPay, OVO
- **Email Service:** SendGrid, Mailgun
- **Database:** Firebase, MongoDB, PostgreSQL
- **CMS:** Custom backend API
- **Analytics:** Google Analytics, Hotjar
- **SEO:** Meta tags, sitemap, robots.txt

## 📈 Fitur yang Dapat Dikembangkan

1. **Dashboard Publisher**
   - Analytics penjualan
   - Manajemen buku
   - Invoice & payment tracking

2. **E-Commerce**
   - Shopping cart
   - Payment processing
   - Order management

3. **Admin Panel**
   - User management
   - Book approval system
   - Financial reports

4. **Social Features**
   - User reviews & ratings
   - Wishlist
   - Book sharing
   - Community forum

5. **Advanced Search**
   - Full-text search
   - Filters & facets
   - Recommendations

## 🔍 SEO Optimization

- Meta tags sudah included
- Semantic HTML structure
- Mobile-friendly design
- Schema markup ready
- Fast load time
- Accessibility compliant (WCAG)

## 📞 Contact Information

**Penerbit Nusantara**
- 📍 Jl. Gatot Subroto No. 123, Jakarta Selatan 12345
- 📞 +62 21 1234 5678
- 📧 info@penerbitsnusantara.id
- 🕐 Senin-Jumat: 09:00-17:00, Sabtu: 09:00-13:00

## 📝 License

Hak Cipta © 2024-2025 Penerbit Nusantara. Semua hak dilindungi.

---

## 🎓 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Storage:** Local Storage
- **Version Control:** Git/GitHub ready
- **Hosting:** Compatible dengan GitHub Pages, Vercel, Netlify
- **Domain:** Ready untuk domain berbayar

## 📦 Deployment Instructions

### GitHub Pages
1. Push ke repository
2. Enable GitHub Pages di settings
3. Access via `username.github.io/penerbit-nusantara`

### Custom Domain
1. Setup DNS pointing ke hosting
2. Upload files ke host
3. Update link di form actions jika ada backend

### Local Development
```bash
# Buka di browser lokal
open penerbit-nusantara-index.html

# Atau gunakan live server
npx http-server
# Akses di http://localhost:8080
```

## 🐛 Known Issues & Improvements

- [ ] Add actual payment integration
- [ ] Implement backend API
- [ ] Add image upload untuk buku covers
- [ ] Database persistence
- [ ] Email notifications
- [ ] Advanced search functionality

## ✅ Checklist Sebelum Deploy

- [x] Design profesional & elegan
- [x] Responsive di semua devices
- [x] Authentication system ready
- [x] Dummy data lengkap
- [x] Contact form
- [x] Service packages
- [x] Catalog management
- [x] Modern animations
- [x] Clean code & organized
- [x] Documentation complete

---

**Dibuat dengan ❤️ oleh Penerbit Nusantara**

Siap untuk dipublikasikan dan dikelola untuk skala bisnis Indonesia yang profesional!
