// components/DockItem.js
'use client'; // Gunakan Client Component jika Anda menggunakan App Router

import { useState } from 'react';

export default function DockItem({ icon: Icon, label }) {
    const [isHovered, setIsHovered] = useState(false);

  // Styling inline untuk efek zoom yang dinamis
    const style = {
        transform: isHovered ? 'scale(1.5)' : 'scale(1)',
        transition: 'transform 0.2s ease-out',
        // Anda bisa menyesuaikan zoom berdasarkan posisi mouse (lebih kompleks)
    };

    return (
        <div 
        className="dock-item" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={style}
        title={label}
        >
        <Icon size={32} /> {/* Asumsi menggunakan library ikon seperti react-icons */}
        </div>
    );
}