# SEO Analyzer — Prototype (Client POV)

Ringkasan: prototype halaman klien untuk aplikasi AI Digital Marketing yang menganalisis elemen SEO halaman (title, meta description, H1, word count, canonical, robots, PageSpeed estimator). Data bisa diambil langsung dari halaman (menggunakan proxy CORS) atau dari mock JSON. Ada placeholder untuk integrasi Apify (token optional).

Cara pakai:

1. Buka `seo-analyzer.html` di browser (double-click file atau serve via local server).
2. Masukkan URL yang ingin dianalisis, tekan **Fetch from Apify** untuk mencoba ambil data (jika Anda punya Apify token, masukkan token terlebih dahulu). Jika Apify tidak tersedia, prototype akan mengambil HTML via CORS proxy dan mengekstrak metadata.
3. Atau tekan **Use Mock Data** untuk memuat data contoh (`apify-mock.json`).
4. Tekan **Analyze** untuk melihat skor / rekomendasi.

Catatan teknis:

- Untuk prototype cepat, fetching halaman menggunakan: `https://api.allorigins.win/raw?url=` sebagai proxy CORS. Ini hanya untuk demo; untuk produk nyata gunakan backend atau Apify actor + dataset yang tepat.
- Integrasi Apify: contoh kode mencoba memanggil `https://api.apify.com/v2/datasets/DEFAULT/items?token=...` sebagai usaha cepat — di produk nyata Anda harus memilih dataset/actor ID dan orchestration yang benar.
- Analisis menggunakan heuristik sederhana dan menghasilkan saran ringkas. Untuk produk final, ganti heuristik dengan model AI/ML atau aturan bisnis yang lebih canggih.

Pengembangan:

- `seo-analyzer.html` — UI
- `seo-analyzer.css` — styling
- `seo-analyzer.js` — logika fetch, parse, analyze, render
- `apify-mock.json` — data mock

Lisensi: contoh prototipe internal.
