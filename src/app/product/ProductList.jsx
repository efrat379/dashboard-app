"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import tableData from '../../../public/temp/Product.json'; // Import data dari file JSON
import AquaTable from '../components/AquaTable';

const fileHeaders = [
    { key: 'name', label: 'Name', searchable: true },
    { key: 'date', label: 'Date Modified', searchable: true },
    { key: 'size', label: 'Size', searchable: true },
    { key: 'kind', label: 'Kind', searchable: true },
];

const ProductList = (/*{onViewDetail}*/) => {

    const [expandedRow, setExpandedRow] = useState(null);
    
    const router = useRouter();

    const handleRowClick = (product) => {
        // Logika untuk menampilkan detail inline:
        // Jika baris yang sama diklik lagi, tutup detailnya.
        // Jika tidak, buka detail untuk baris yang baru.
        if(expandedRow && expandedRow.no === product.no){
            setExpandedRow(null);
        }else{
            setExpandedRow(product);
        }
    };

    const handleViewDetail = (product) => {
        if (onViewDetail) {
            onViewDetail(product);
        }
    };
    
    return (
        <div style={{ padding: '20px' }}>
            <h1>Product List</h1>
            <AquaTable
                headers={fileHeaders}
                data={tableData}
                uniqueKey="no"
                onRowClick={handleRowClick}
            />
            {/* Hapus semua elemen desain yang sudah ada di layout.js */}
        </div>
    );

};

export default ProductList;