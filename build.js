const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

// Baca data dan template
const products = JSON.parse(fs.readFileSync('data/products.json', 'utf8'));
const productTemplate = fs.readFileSync('templates/product_template.html', 'utf8');
let indexTemplate = fs.readFileSync('index_template.html', 'utf8');

const produkDir = 'produk';
if (!fs.existsSync(produkDir)) {
    fs.mkdirSync(produkDir);
}

let galleryHtml = '';

// Kode unit iklan untuk disisipkan di galeri. GANTI DENGAN KODE ANDA.
const adCode = `
<div class="col-12">
    <div class="ads-container my-3 text-center">
        <!-- PASTE KODE UNIT IKLAN ANDA (Galeri_In-feed) DI SINI -->
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-format="fluid"
             data-ad-layout-key="-fb+5w+4e-db+86"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="ZZZZZZZZZZ"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>
</div>`;

products.forEach((product, index) => {
    // Buat nama file yang aman
    const fileName = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '.html';

    // Generate Halaman Produk Individual
    let productPageContent = productTemplate
        .replace(/{{PRODUCT_NAME}}/g, product.name)
        .replace(/{{PRODUCT_PRICE_RAW}}/g, product.price)
        .replace(/{{PRODUCT_PRICE_FORMATTED}}/g, new Intl.NumberFormat('id-ID').format(product.price))
        .replace(/{{PRODUCT_IMAGE}}/g, product.image)
        .replace(/{{PRODUCT_DESCRIPTION}}/g, product.description)
        .replace(/{{SELLER_WHATSAPP}}/g, product.seller_whatsapp);
        
    fs.writeFileSync(path.join(produkDir, fileName), productPageContent);
    console.log(`Generated: ${fileName}`);

    // Generate Kartu Galeri
    galleryHtml += `
    <div class="col-lg-4 col-md-6">
        <div class="card product-card h-100">
            <a href="produk/${fileName}"><img class="card-img-top" src="${product.image}" alt="${product.name}"></a>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title flex-grow-1"><a href="produk/${fileName}">${product.name}</a></h5>
                <p class="card-text text-muted small">${product.description}</p>
                <div class="price mt-2 mb-3">Rp ${new Intl.NumberFormat('id-ID').format(product.price)}</div>
            </div>
            <div class="card-footer">
                <a href="produk/${fileName}" class="btn btn-whatsapp w-100">
                    <i class="bi bi-bag-check-fill"></i> Lihat Produk
                </a>
            </div>
        </div>
    </div>\n`;

    // Sisipkan iklan setelah setiap 6 produk
    if ((index + 1) % 6 === 0 && (index + 1) < products.length) {
        galleryHtml += adCode;
    }
});

// Update index.html dengan galeri yang sudah jadi
const finalIndexHtml = indexTemplate.replace('<!-- PRODUCT_GALLERY_MARKER -->', galleryHtml);
fs.writeFileSync('index.html', finalIndexHtml);

console.log('Site built successfully!');
