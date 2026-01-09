/* ============================================
   PENERBIT NUSANTARA - INTERACTIVE SCRIPT
   Includes: Auth, Modal, Navigation, Catalog
   ============================================ */

// ============================================
// DUMMY USERS DATABASE
// ============================================

const dummyUsers = [
    {
        id: 1,
        email: 'novita@testmail.com',
        password: '123456',
        name: 'Novita Rani Brginting',
        company: 'Penerbit Nusantara',
        role: 'Admin',
        verified: true
    },
    {
        id: 2,
        email: 'admin@penerbitnusantara.id',
        password: 'admin123',
        name: 'Admin Nusantara',
        company: 'Penerbit Nusantara',
        role: 'Superadmin',
        verified: true
    }
];

// ============================================
// DUMMY CATALOG DATA
// ============================================

const booksData = [
    {
        id: 1,
        title: 'Jejak Leluhur Nusantara',
        author: 'Dr. Bambang Sutrisno',
        isbn: '978-602-1234-01-1',
        category: 'nonfiksi',
        price: 85000,
        description: 'Sejarah lengkap budaya Indonesia dari Sabang sampai Merauke'
    },
    {
        id: 2,
        title: 'Petualangan di Hutan Rimba',
        author: 'Siti Nurhaliza',
        isbn: '978-602-1234-02-8',
        category: 'fiksi',
        price: 72000,
        description: 'Kisah petualangan mendebarkan di jantung hutan tropis'
    },
    {
        id: 3,
        title: 'Cerita Si Kancil yang Cerdik',
        author: 'Purnomo Prawoto',
        isbn: '978-602-1234-03-5',
        category: 'anak',
        price: 45000,
        description: 'Fabel tradisional Indonesia dengan ilustrasi penuh warna'
    },
    {
        id: 4,
        title: 'Buku Pintar Memasak Indonesia',
        author: 'Chef Dodo Khardiman',
        isbn: '978-602-1234-04-2',
        category: 'nonfiksi',
        price: 125000,
        description: '500+ resep masakan Indonesia autentik dengan langkah detail'
    },
    {
        id: 5,
        title: 'Cinta di Bawah Bulan Purnama',
        author: 'Diana Widjaja',
        isbn: '978-602-1234-05-9',
        category: 'fiksi',
        price: 68000,
        description: 'Novel romantis yang menyentuh hati pembaca Indonesia'
    },
    {
        id: 6,
        title: 'Aku Belajar Membaca dengan Suku Kata',
        author: 'Tim Edukasi Nusantara',
        isbn: '978-602-1234-06-6',
        category: 'anak',
        price: 35000,
        description: 'Buku pembelajaran anak dengan metode suku kata modern'
    },
    {
        id: 7,
        title: 'Teknologi Blockchain untuk Indonesia',
        author: 'Prof. Hendro Setio',
        isbn: '978-602-1234-07-3',
        category: 'nonfiksi',
        price: 95000,
        description: 'Panduan lengkap blockchain dan cryptocurrency untuk Indonesia'
    },
    {
        id: 8,
        title: 'Sang Pembaca di Tengah Malam',
        author: 'Aditya Kurniawan',
        isbn: '978-602-1234-08-0',
        category: 'fiksi',
        price: 78000,
        description: 'Misteri psikologi yang menggugah dalam setiap halaman'
    }
];

// ============================================
// LOCAL STORAGE
// ============================================

class UserSession {
    static save(user) {
        localStorage.setItem('currentUser', JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email,
            company: user.company,
            role: user.role
        }));
    }

    static load() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    }

    static clear() {
        localStorage.removeItem('currentUser');
    }

    static isLoggedIn() {
        return this.load() !== null;
    }
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function openLoginModal() {
    document.getElementById('loginModal').classList.add('show');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('show');
}

function openRegisterModal() {
    document.getElementById('registerModal').classList.add('show');
}

function closeRegisterModal() {
    document.getElementById('registerModal').classList.remove('show');
}

function switchToRegister() {
    closeLoginModal();
    openRegisterModal();
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (e.target === loginModal) {
        closeLoginModal();
    }
    if (e.target === registerModal) {
        closeRegisterModal();
    }
});

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    const user = dummyUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
        UserSession.save(user);
        closeLoginModal();
        
        // Show success notification
        showNotification(`Selamat datang kembali, ${user.name}!`, 'success');
        
        // Reset form
        document.getElementById('loginForm').reset();
        
        // Update UI
        updateNavigation();
        
        // Redirect to dashboard (you can modify this)
        setTimeout(() => {
            window.location.href = '#home';
        }, 1000);
    } else {
        showNotification('Email atau password salah. Coba username: novita@testmail.com password: 123456', 'error');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const company = document.getElementById('reg-company').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const confirm = document.getElementById('reg-confirm').value.trim();
    
    if (password !== confirm) {
        showNotification('Password tidak cocok!', 'error');
        return;
    }
    
    if (dummyUsers.some(u => u.email === email)) {
        showNotification('Email sudah terdaftar!', 'error');
        return;
    }
    
    const newUser = {
        id: dummyUsers.length + 1,
        email: email,
        password: password,
        name: company,
        company: company,
        role: 'Publisher',
        verified: false
    };
    
    dummyUsers.push(newUser);
    
    closeRegisterModal();
    showNotification('Pendaftaran berhasil! Silahkan login dengan akun Anda.', 'success');
    
    document.getElementById('registerForm').reset();
    
    setTimeout(() => {
        openLoginModal();
    }, 1500);
}

function logout() {
    UserSession.clear();
    showNotification('Anda telah logout', 'info');
    updateNavigation();
    window.location.href = '#home';
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function toggleNavMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('show');
}

function updateNavigation() {
    const authButtons = document.querySelector('.navbar-auth');
    const isLoggedIn = UserSession.isLoggedIn();
    
    if (isLoggedIn) {
        const user = UserSession.load();
        authButtons.innerHTML = `
            <span style="color: #D4AF37; font-weight: bold;">Halo, ${user.name.split(' ')[0]}</span>
            <button class="btn-login" onclick="logout()">Logout</button>
        `;
    } else {
        authButtons.innerHTML = `
            <button class="btn-login" onclick="openLoginModal()">Login</button>
            <button class="btn-register" onclick="openRegisterModal()">Daftar</button>
            <button class="navbar-toggle" onclick="toggleNavMenu()">☰</button>
        `;
    }
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
});

// ============================================
// CATALOG FUNCTIONS
// ============================================

function loadBooks(books = booksData) {
    const booksGrid = document.getElementById('booksGrid');
    
    if (books.length === 0) {
        booksGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Tidak ada buku ditemukan.</p>';
        return;
    }
    
    booksGrid.innerHTML = books.map(book => `
        <div class="book-card" onclick="viewBook(${book.id})">
            <div class="book-cover">
                ${book.title}
            </div>
            <div class="book-info">
                <h4>${book.title}</h4>
                <p class="book-author">oleh ${book.author}</p>
                <p>${book.description}</p>
                <div class="book-meta">
                    <span class="isbn">ISBN: ${book.isbn}</span>
                    <span class="book-price">Rp ${book.price.toLocaleString('id-ID')}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function filterBooks(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (category === 'all') {
        loadBooks(booksData);
    } else {
        const filteredBooks = booksData.filter(book => book.category === category);
        loadBooks(filteredBooks);
    }
}

function viewBook(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (book) {
        if (UserSession.isLoggedIn()) {
            showNotification(`Membuka detail buku: ${book.title}`, 'info');
            // In production, redirect to detail page
        } else {
            showNotification('Silahkan login untuk melihat detail buku', 'warning');
            openLoginModal();
        }
    }
}

// ============================================
// CONTACT FORM
// ============================================

function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    // Simulate form submission
    showNotification('Pesan Anda telah dikirim! Tim kami akan menghubungi Anda segera.', 'success');
    
    document.getElementById('contact-form') ? document.getElementById('contact-form').reset() : 
    event.target.reset();
}

// ============================================
// NOTIFICATIONS
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    
    // Set colors based on type
    const colors = {
        success: { bg: '#4caf50', color: '#fff' },
        error: { bg: '#f44336', color: '#fff' },
        warning: { bg: '#ff9800', color: '#fff' },
        info: { bg: '#2196f3', color: '#fff' }
    };
    
    const colorScheme = colors[type] || colors.info;
    notification.style.backgroundColor = colorScheme.bg;
    notification.style.color = colorScheme.color;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Load books on page load
    loadBooks();
    
    // Update navigation on page load
    updateNavigation();
    
    // Log dummy user info to console
    console.log('=== PENERBIT NUSANTARA - DUMMY USER ===');
    console.log('Email: novita@testmail.com');
    console.log('Password: 123456');
    console.log('========================================');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format currency to IDR
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Get current date in Indonesian format
function getCurrentDateID() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// EXPORT FOR TESTING (Optional)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        dummyUsers,
        booksData,
        UserSession,
        showNotification
    };
}
