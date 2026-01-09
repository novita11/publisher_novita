// ==================== DATA BUKU ==================== 
const bukuDatabase = [
    {
        id: 1,
        judul: "Cahaya di Tengah Gelap",
        penulis: "Siti Nurhaliza",
        harga: 89000,
        rating: 4.8,
        reviews: 245,
        isbn: "978-602-1234-56-7",
        kategori: "fiksi",
        cover: "https://via.placeholder.com/300x400?text=Cahaya+Gelap",
        deskripsi: "Sebuah novel yang menyentuh hati tentang perjuangan seorang gadis muda menemukan harapan di tengah kehidupan yang penuh tantangan.",
        terbitan: "2024",
        penerbit: "Penerbit Nusantara",
        jumlahHalaman: 256,
        berat: "300g",
        dimensi: "15x23 cm"
    },
    {
        id: 2,
        judul: "Seni Berbisnis Modern",
        penulis: "Budi Hartono",
        harga: 125000,
        rating: 4.7,
        reviews: 189,
        isbn: "978-602-1234-57-4",
        kategori: "non-fiksi",
        cover: "https://via.placeholder.com/300x400?text=Seni+Bisnis",
        deskripsi: "Panduan lengkap untuk memulai dan mengembangkan bisnis di era digital dengan strategi yang terbukti efektif.",
        terbitan: "2024",
        penerbit: "Penerbit Nusantara",
        jumlahHalaman: 320,
        berat: "380g",
        dimensi: "15x23 cm"
    },
    {
        id: 3,
        judul: "Kisah Hidup Seorang Pejuang",
        penulis: "Ahmad Yani",
        harga: 95000,
        rating: 4.9,
        reviews: 312,
        isbn: "978-602-1234-58-1",
        kategori: "biografi",
        cover: "https://via.placeholder.com/300x400?text=Kisah+Pejuang",
        deskripsi: "Biografi inspiratif dari tokoh penting Indonesia yang mengubah masa depan bangsa dengan dedikasi dan kerja keras.",
        terbitan: "2024",
        penerbit: "Penerbit Nusantara",
        jumlahHalaman: 288,
        berat: "340g",
        dimensi: "15x23 cm"
    },
    {
        id: 4,
        judul: "Mindset Kemenangan",
        penulis: "Dr. Dewi Lestari",
        harga: 85000,
        rating: 4.6,
        reviews: 156,
        isbn: "978-602-1234-59-8",
        kategori: "self-help",
        cover: "https://via.placeholder.com/300x400?text=Mindset",
        deskripsi: "Teknik-teknik praktis untuk mengubah pola pikir dan mencapai kesuksesan dalam setiap aspek kehidupan.",
        terbitan: "2024",
        penerbit: "Penerbit Nusantara",
        jumlahHalaman: 224,
        berat: "280g",
        dimensi: "15x23 cm"
    },
    {
        id: 5,
        judul: "Petualangan Aji dan Teman-Temannya",
        penulis: "Ratna Indah",
        harga: 65000,
        rating: 4.9,
        reviews: 421,
        isbn: "978-602-1234-60-4",
        kategori: "anak-anak",
        cover: "https://via.placeholder.com/300x400?text=Petualangan",
        deskripsi: "Cerita seru dan penuh pembelajaran untuk anak-anak tentang petualangan, persahabatan, dan nilai-nilai kehidupan.",
        terbitan: "2024",
        penerbit: "Penerbit Nusantara",
        jumlahHalaman: 128,
        berat: "200g",
        dimensi: "13x20 cm"
    },
    {
        id: 6,
        judul: "Revolusi Pendidikan Indonesia",
        penulis: "Prof. Ira Prasetya",
        harga: 115000,
        rating: 4.8,
        reviews: 198,
        isbn: "978-602-1234-61-1",
        kategori: "pendidikan",
        cover: "https://via.placeholder.com/300x400?text=Revolusi+Pendidikan",
        deskripsi: "Analisis mendalam tentang tantangan dan solusi untuk meningkatkan kualitas pendidikan di Indonesia.",
        terbitan: "2024",
        penerbit: "Penerbit Nusantara",
        jumlahHalaman: 352,
        berat: "420g",
        dimensi: "15x23 cm"
    },
    {
        id: 7,
        judul: "Langit Biru dan Mimpi Hijau",
        penulis: "Maya Santosa",
        harga: 79000,
        rating: 4.7,
        reviews: 267,
        isbn: "978-602-1234-62-8",
        kategori: "fiksi",
        cover: "https://via.placeholder.com/300x400?text=Langit+Biru",
        deskripsi: "Romansa yang manis dan menyentuh tentang dua orang yang menemukan cinta di tempat yang tidak terduga.",
        terbitan: "2024",
        penerbit: "Penerbit Nusantara",
        jumlahHalaman: 272,
        berat: "320g",
        dimensi: "15x23 cm"
    },
    {
        id: 8,
        judul: "Kode Sukses Digital Marketing",
        penulis: "Randi Setiawan",
        harga: 130000,
        rating: 4.8,
        reviews: 234,
        isbn: "978-602-1234-63-5",
        kategori: "non-fiksi",
        cover: "https://via.placeholder.com/300x400?text=Digital+Marketing",
        deskripsi: "Strategi komprehensif untuk menguasai digital marketing dan meningkatkan penjualan bisnis Anda secara eksponensial.",
        terbitan: "2024",
        penerbit: "Penerbit Nusantara",
        jumlahHalaman: 296,
        berat: "360g",
        dimensi: "15x23 cm"
    }
];

// ==================== SHOPPING CART ==================== 
let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];

function tambahKeKeranjang(idBuku) {
    const buku = bukuDatabase.find(b => b.id === idBuku);
    const itemKeranjang = keranjang.find(item => item.id === idBuku);
    
    if (itemKeranjang) {
        itemKeranjang.jumlah++;
    } else {
        keranjang.push({
            ...buku,
            jumlah: 1
        });
    }
    
    simpanKeranjang();
    updateKeranjangBadge();
    tampilkanNotifikasi('Buku berhasil ditambahkan ke keranjang!', 'success');
}

function simpanKeranjang() {
    localStorage.setItem('keranjang', JSON.stringify(keranjang));
}

function updateKeranjangBadge() {
    const badge = document.querySelector('.cart-badge');
    const totalItem = keranjang.reduce((total, item) => total + item.jumlah, 0);
    if (badge) {
        badge.textContent = totalItem;
        badge.style.display = totalItem > 0 ? 'inline-block' : 'none';
    }
}

function tampilkanNotifikasi(pesan, tipe = 'info') {
    const notifikasi = document.createElement('div');
    notifikasi.className = `alert alert-${tipe} position-fixed top-0 start-50 translate-middle-x mt-3`;
    notifikasi.style.zIndex = '9999';
    notifikasi.textContent = pesan;
    notifikasi.style.animation = 'fadeInUp 0.3s ease';
    
    document.body.appendChild(notifikasi);
    
    setTimeout(() => {
        notifikasi.style.animation = 'fadeOutDown 0.3s ease';
        setTimeout(() => notifikasi.remove(), 300);
    }, 3000);
}

// ==================== SEARCH & FILTER ==================== 
function cariKarya() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const isbnTerm = document.getElementById('isbnInput').value.toLowerCase();
    
    let hasilCari = bukuDatabase.filter(buku => {
        const cocokJudul = buku.judul.toLowerCase().includes(searchTerm);
        const cocokPenulis = buku.penulis.toLowerCase().includes(searchTerm);
        const cocokISBN = buku.isbn.toLowerCase().includes(isbnTerm);
        
        return (searchTerm === '' || cocokJudul || cocokPenulis) && 
               (isbnTerm === '' || cocokISBN);
    });
    
    tampilkanBuku(hasilCari);
    
    if (hasilCari.length === 0) {
        tampilkanNotifikasi('Tidak ada buku yang ditemukan', 'warning');
    } else {
        tampilkanNotifikasi(`Ditemukan ${hasilCari.length} buku`, 'info');
    }
}

function filterBuku() {
    const kategori = document.getElementById('filterKategori').value;
    
    let bukuTerfilter = bukuDatabase;
    if (kategori) {
        bukuTerfilter = bukuDatabase.filter(buku => buku.kategori === kategori);
    }
    
    tampilkanBuku(bukuTerfilter);
}

function tampilkanBuku(daftarBuku) {
    const container = document.getElementById('bukuContainer');
    
    if (daftarBuku.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p>Tidak ada buku yang sesuai dengan pencarian Anda.</p></div>';
        return;
    }
    
    container.innerHTML = daftarBuku.map(buku => `
        <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="book-card">
                <div class="book-image">
                    <img src="${buku.cover}" alt="${buku.judul}">
                    <span class="book-badge">${buku.kategori.charAt(0).toUpperCase() + buku.kategori.slice(1)}</span>
                </div>
                <div class="book-info">
                    <p class="book-category">${buku.kategori}</p>
                    <h6 class="book-title">${buku.judul}</h6>
                    <p class="book-author">
                        <i class="fas fa-pen"></i> ${buku.penulis}
                    </p>
                    <div class="book-rating">
                        ${Array(5).fill().map((_, i) => `
                            <i class="fas fa-star" style="color: ${i < Math.floor(buku.rating) ? '#d4a574' : '#ddd'}"></i>
                        `).join('')}
                        <span> ${buku.rating} (${buku.reviews})</span>
                    </div>
                    <p class="book-isbn">
                        <strong>ISBN:</strong> ${buku.isbn}
                    </p>
                    <p class="book-price">Rp ${buku.harga.toLocaleString('id-ID')}</p>
                    <div class="book-actions">
                        <button class="btn-detail" onclick="lihatDetail(${buku.id})">
                            <i class="fas fa-eye"></i> Detail
                        </button>
                        <button class="btn-beli" onclick="tambahKeKeranjang(${buku.id})">
                            <i class="fas fa-shopping-cart"></i> Beli
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function lihatDetail(idBuku) {
    const buku = bukuDatabase.find(b => b.id === idBuku);
    
    let modal = document.getElementById('detailModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'detailModal';
        modal.className = 'modal fade';
        modal.setAttribute('tabindex', '-1');
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${buku.judul}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4 mb-3 mb-md-0">
                            <img src="${buku.cover}" alt="${buku.judul}" class="img-fluid rounded">
                        </div>
                        <div class="col-md-8">
                            <h6 class="text-muted">Penulis</h6>
                            <p class="fw-bold">${buku.penulis}</p>
                            
                            <h6 class="text-muted mt-3">Penerbit</h6>
                            <p>${buku.penerbit}</p>
                            
                            <h6 class="text-muted">ISBN</h6>
                            <p class="font-monospace">${buku.isbn}</p>
                            
                            <div class="row">
                                <div class="col-6">
                                    <h6 class="text-muted">Tahun Terbit</h6>
                                    <p>${buku.terbitan}</p>
                                </div>
                                <div class="col-6">
                                    <h6 class="text-muted">Halaman</h6>
                                    <p>${buku.jumlahHalaman} halaman</p>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-6">
                                    <h6 class="text-muted">Berat</h6>
                                    <p>${buku.berat}</p>
                                </div>
                                <div class="col-6">
                                    <h6 class="text-muted">Dimensi</h6>
                                    <p>${buku.dimensi}</p>
                                </div>
                            </div>
                            
                            <h6 class="text-muted mt-3">Rating</h6>
                            <div class="mb-3">
                                ${Array(5).fill().map((_, i) => `
                                    <i class="fas fa-star" style="color: ${i < Math.floor(buku.rating) ? '#d4a574' : '#ddd'}; margin-right: 2px;"></i>
                                `).join('')}
                                <span class="ms-2">${buku.rating} dari 5 (${buku.reviews} ulasan)</span>
                            </div>
                            
                            <h4 class="text-primary mt-4">Rp ${buku.harga.toLocaleString('id-ID')}</h4>
                        </div>
                    </div>
                    
                    <hr>
                    
                    <h6>Deskripsi Buku</h6>
                    <p>${buku.deskripsi}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                    <button type="button" class="btn btn-primary" onclick="tambahKeKeranjang(${buku.id}); bootstrap.Modal.getInstance(document.getElementById('detailModal')).hide();">
                        <i class="fas fa-shopping-cart"></i> Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    `;
    
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

// ==================== FORM HANDLERS ==================== 
function daftarBuku(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const dataBuku = {
        nama: formData.get('nama'),
        email: formData.get('email'),
        telepon: formData.get('telepon'),
        tglSubmit: new Date().toLocaleString('id-ID')
    };
    
    let daftarPenulis = JSON.parse(localStorage.getItem('daftarPenulis')) || [];
    daftarPenulis.push(dataBuku);
    localStorage.setItem('daftarPenulis', JSON.stringify(daftarPenulis));
    
    tampilkanNotifikasi('Aplikasi penerbitan Anda telah dikirim! Kami akan menghubungi Anda segera.', 'success');
    event.target.reset();
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('daftarModal'));
    if (modal) modal.hide();
}

function kirimPesan(event) {
    event.preventDefault();
    
    tampilkanNotifikasi('Pesan Anda telah terkirim! Terima kasih telah menghubungi kami.', 'success');
    event.target.reset();
}

function daftarAkun() {
    tampilkanNotifikasi('Fitur pendaftaran akun akan segera tersedia!', 'info');
}

// ==================== EVENT LISTENERS ==================== 
document.addEventListener('DOMContentLoaded', function() {
    tampilkanBuku(bukuDatabase);
    updateKeranjangBadge();
    
    // Event untuk search input
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            cariKarya();
        }
    });
    
    document.getElementById('isbnInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            cariKarya();
        }
    });
});

// ==================== SMOOTH SCROLLING ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== ANALYTICS & TRACKING ==================== 
function trackBukuDilihat(idBuku) {
    let bukuDilihat = JSON.parse(localStorage.getItem('bukuDilihat')) || [];
    if (!bukuDilihat.includes(idBuku)) {
        bukuDilihat.push(idBuku);
    }
    localStorage.setItem('bukuDilihat', JSON.stringify(bukuDilihat));
}

// ==================== UTILITY FUNCTIONS ==================== 
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

function getTanggalSekarang() {
    return new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
