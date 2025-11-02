// src/components/ReusableModal.jsx
"use client";

import { useRef } from 'react';
import styles from '../css/DialogModal.module.css';

const ReusableModal = ({ isOpen, onClose, children, title = "Dialog" }) => {
    
    // Jangan merender apa pun jika modal tidak terbuka
    if (!isOpen) return null;

    // Gunakan useRef untuk merujuk ke modal content div
    const modalContentRef = useRef(null);

    // Menutup modal jika backdrop diklik (di luar konten)
    const handleBackdropClick = (e) => {
        // Jika elemen yang diklik BUKAN bagian dari modal content, tutup modal
        if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
            onClose();
        }
    };
    
    return (
        // Overlay/Backdrop utama. Klik di sini akan menutup modal.
        <div className={styles.modalContainer} ref={modalContentRef}>
            
            {/* Modal Container */}
            <div className={styles.modalHeader}>

                <div className={styles.trafficLights}>
                    {/* Merah: Panggil onClose */}
                    <div className={`${styles.light} ${styles.close}`} onClick={onClose} title="Tutup"></div>
                    {/* Kuning: Placeholder, fungsi Minimize (Saat ini melakukan onClose) */}
                    <div className={`${styles.light} ${styles.minimize}`} onClick={onClose} title="Minimalkan"></div>
                    {/* Hijau: Placeholder, fungsi Maximize (Saat ini melakukan onClose) */}
                    <div className={`${styles.light} ${styles.maximize}`} onClick={onClose} title="Maksimalkan"></div>
                </div>
                
                {/* Header Modal (dengan judul, opsional) */}
                <div className={styles.modalHeader}>
                    <h3>{title}</h3>
                    {/* Tombol X untuk menutup, jika diperlukan */}
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                </div>
                
                {/* Konten Spesifik (diteruskan melalui prop children) */}
                <div className={styles.modalBody}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ReusableModal;