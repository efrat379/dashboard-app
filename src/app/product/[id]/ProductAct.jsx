
const ProductAct = ({ product, onGoBack }) => { // Tambahkan prop ini
    return (
        <div>
            <button onClick={onGoBack}>Kembali ke Daftar Produk</button>
            <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h1>Detail Produk: {product.name}</h1>
                <p><strong>ID:</strong> {product.no}</p>
                <p><strong>Tanggal:</strong> {product.date}</p>
                <p><strong>Ukuran:</strong> {product.size}</p>
                <p><strong>Jenis:</strong> {product.kind}</p>
            </div>
        </div>
    );
};
export default ProductAct;