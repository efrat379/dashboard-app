import ProductList from './ProductList.jsx';

/*const handleViewDetail = (productId: string) => {
    // Di sini, Anda akan menavigasi ke halaman detail produk
    console.log(`Navigating to detail for product ID: ${productId}`);
    // Contoh: router.push(`/product/${productId}`);
};*/

export default function ProductListPage() {

    return (
        <div>
            <ProductList />
        </div>
    );
}