// components/MacModal.jsx

"use client";

import { useEffect } from 'react';
import styles from '../css/AquaModal.module.css';

const AquaModal = ({ onClose, title, children }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className={styles.overlay}>
            <div className={styles.modalWindow}>
                <div className={styles.titleBar}>
                    <div className={styles.trafficLights}>
                        {/* Merah: Panggil onClose */}
                        <div className={`${styles.light} ${styles.close}`} onClick={onClose} title="Tutup"></div>
                        {/* Kuning: Placeholder, fungsi Minimize (Saat ini melakukan onClose) */}
                        <div className={`${styles.light} ${styles.minimize}`} onClick={onClose} title="Minimalkan"></div>
                        {/* Hijau: Placeholder, fungsi Maximize (Saat ini melakukan onClose) */}
                        <div className={`${styles.light} ${styles.maximize}`} onClick={onClose} title="Maksimalkan"></div>
                    </div>
                    <div className={styles.windowTitle}>{title || "Jendela Aplikasi"}</div> 
                </div>
                <div className={styles.content}>
                        {children}
                </div>
            </div>
        </div>
    );
};

export default AquaModal;