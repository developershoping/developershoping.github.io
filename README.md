# Toko Online WhatsApp dengan GitHub Pages & AdSense

Ini adalah proyek template untuk membuat situs web penjualan online statis yang dihosting secara gratis di GitHub Pages. Proses pemesanan pelanggan diarahkan langsung ke WhatsApp penjual, membuatnya sangat efisien untuk usaha kecil dan menengah.

Proyek ini menggunakan sistem build otomatis dengan GitHub Actions, di mana Anda hanya perlu mengelola data produk dalam satu file JSON, dan semua halaman HTML akan dibuat secara otomatis.

## Fitur Utama

-   **Hosting Gratis:** Dijalankan sepenuhnya di GitHub Pages.
-   **Pemesanan via WhatsApp:** Alur pemesanan yang sederhana dan langsung terhubung ke nomor Anda.
-   **Generator Produk Otomatis:** Cukup perbarui file `data/products.json`, dan GitHub Actions akan membuat halaman produk dan memperbarui galeri secara otomatis.
-   **Desain Modern:** Tampilan yang bersih dengan tema terinspirasi dari WhatsApp untuk meningkatkan kepercayaan pelanggan.
-   **Monetisasi Iklan:** Slot iklan Google AdSense sudah terintegrasi untuk memberikan penghasilan tambahan.
-   **SEO-Friendly:** Struktur URL yang bersih (contoh: `/produk/nama-produk-keren.html`).

## Cara Kerja

1.  **Sumber Data Tunggal:** Semua informasi produk disimpan dalam file `data/products.json`.
2.  **Template:** Tampilan halaman utama (`index_template.html`) dan halaman detail produk (`templates/product_template.html`) sudah disiapkan.
3.  **Build Otomatis:** Setiap kali ada perubahan pada `data/products.json` di branch `main`, sebuah skrip (`build.js`) akan dijalankan oleh GitHub Actions.
4.  **Hasil:** Skrip tersebut akan membuat file HTML untuk setiap produk di folder `produk/` dan memperbarui galeri di `index.html`. Perubahan ini kemudian secara otomatis di-commit kembali ke repositori Anda.

---

## Panduan Instalasi dan Penggunaan

Ikuti langkah-langkah ini untuk menjalankan toko online Anda.

### Tahap 1: Persiapan Repositori di GitHub

1.  **Buat Akun GitHub:** Jika belum punya, daftar di [github.com](https://github.com).
2.  **Buat Repositori Baru:**
    -   Klik tombol `+` di pojok kanan atas, pilih **New repository**.
    -   Beri nama repositori Anda (misalnya: `toko-online-saya`).
    -   Pastikan repositori diatur ke **Public**.
    -   Centang **Add a README file**.
    -   Klik **Create repository**.
3.  **Aktifkan GitHub Pages:**
    -   Di halaman repositori Anda, klik tab **Settings**.
    -   Di menu samping, klik **Pages**.
    -   Pada bagian "Build and deployment", di bawah "Source", pilih **Deploy from a branch**.
    -   Pilih branch **main** dan folder **/ (root)**. Klik **Save**.
    -   GitHub akan memberikan Anda URL situs (misalnya: `https://<username>.github.io/toko-online-saya/`). Mungkin perlu beberapa menit untuk aktif pertama kali.

### Tahap 2: Unggah File Proyek

Sekarang, unggah semua file dari paket ini ke repositori Anda.

1.  Di halaman utama repositori, klik **Add file** > **Upload files**.
2.  Unggah file-file berikut ke **folder utama (root)**:
    -   `README.md` (file ini)
    -   `index_template.html`
    -   `style.css`
    -   `build.js`
    -   `package.json`
3.  Buat folder dan unggah file di dalamnya:
    -   **Untuk folder `data`:** Klik **Add file > Create new file**. Ketik `data/products.json` di kotak nama file, lalu salin dan tempel konten untuk `products.json`.
    -   **Untuk folder `templates`:** Klik **Add file > Create new file**. Ketik `templates/product_template.html` di kotak nama, lalu salin dan tempel kontennya.
    -   **Untuk folder `.github/workflows`:** Klik **Add file > Create new file**. Ketik `.github/workflows/build_site.yml` di kotak nama, lalu salin dan tempel kontennya.
4.  Setelah semua file ada di tempatnya, **Commit** semua perubahan.

### Tahap 3: Kustomisasi Toko Anda

1.  **Ubah Nama Toko:**
    -   Buka file `index_template.html` dan `templates/product_template.html`.
    -   Cari semua teks `NAMA TOKO ANDA` dan ganti dengan nama toko Anda.
2.  **Ubah Copyright:**
    -   Buka `index_template.html` dan ganti teks `Copyright © Nama Toko Anda 2023`.

### Tahap 4: Menambahkan Produk Baru (Alur Kerja Harian)

Ini adalah satu-satunya langkah yang perlu Anda lakukan setiap kali ingin menambah atau mengubah produk.

1.  Buka file `data/products.json` di repositori GitHub Anda.
2.  File ini berisi sebuah array `[...]`. Setiap produk adalah sebuah objek `{...}` di dalam array tersebut.
3.  Untuk menambahkan produk baru, tambahkan koma `,` setelah objek produk terakhir, lalu salin-tempel dan edit objek baru di bawahnya.

    ```json
    [
      {
        "name": "Produk Lama",
        "price": 100000,
        "image": "https://.../gambar-lama.jpg",
        "description": "Deskripsi produk lama.",
        "seller_whatsapp": "6281234567890"
      },
      {
        "name": "Produk Baru Saya",
        "price": 150000,
        "image": "https://.../gambar-baru.jpg",
        "description": "Ini produk keren yang baru saya tambahkan.",
        "seller_whatsapp": "6281234567890"
      }
    ]
    ```
4.  Setelah selesai mengedit, klik tombol **Commit changes**.
5.  Tunggu 1-2 menit. GitHub Actions akan berjalan dan membangun ulang situs Anda secara otomatis. Cek URL GitHub Pages Anda untuk melihat perubahannya.

### Tahap 5: Integrasi Google AdSense

**Penting:** Anda harus memiliki akun **Google AdSense yang sudah disetujui** sebelum memulai.

1.  **Pasang Kode Auto Ads (Wajib):**
    -   Login ke akun AdSense Anda, dapatkan kode **Iklan Otomatis**.
    -   Buka file `index_template.html` dan `templates/product_template.html`.
    -   Tempelkan kode tersebut tepat sebelum tag `</head>`. Ganti `ca-pub-XXXXXXXXXXXXXXXX` dengan ID Publisher Anda.
        ```html
        <!-- Kode Google AdSense Anda di sini -->
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
             crossorigin="anonymous"></script>
        ```

2.  **Pasang Unit Iklan Manual di Halaman Detail:**
    -   Buat sebuah **Unit Iklan Display (Responsif)** di AdSense (misal, bernama `Detail_Produk_Bawah_Tombol`).
    -   Buka file `templates/product_template.html`.
    -   Cari bagian `<!-- == SLOT IKLAN GOOGLE ADSENSE == -->`.
    -   Ganti placeholder di dalamnya dengan kode unit iklan yang baru Anda buat. Pastikan `data-ad-client` dan `data-ad-slot` sudah benar.

3.  **Pasang Unit Iklan Manual di Galeri:**
    -   Buat **Unit Iklan In-feed** atau **Display (Responsif)** di AdSense (misal, bernama `Galeri_In-feed`).
    -   Buka file `build.js`.
    -   Cari variabel `const adCode = \`...\``
    -   Ganti placeholder di dalamnya dengan kode unit iklan yang baru Anda buat.

Setelah semua kode terpasang dan di-commit, iklan akan mulai muncul setelah beberapa waktu sesuai dengan kebijakan AdSense. Selamat!
