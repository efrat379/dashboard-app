// components/AboutContent.jsx

import AquaButton from './components/AquaButton';
import styles from './css/AquaModal.module.css'; // Gunakan CSS modal untuk styling internal

const AboutContent = ({ onClose }) => { // Menerima onClose jika diperlukan
    return (
        <>
            
            <h1 className={styles.osTitle}>Neural X Soft</h1>
            <p className={styles.osVersion}>Version 0.0.2</p>
            <AquaButton>Aggiornamento Software...</AquaButton>
            
            <div className={styles.infoRow}>
                <div className={styles.infoLabel}>Processore</div>
                <div className={styles.infoValue}>4.30 GHz Intel Core 2 Solo</div>
            </div>
            {/* ... infoRow lainnya ... */}
            
            <AquaButton className={styles.moreInfoButton}>Più informasi...</AquaButton>
            
            <p className={styles.copyright}>
                TM e © 1983–2011 Apple Inc. <br />
                Tutti i diritti riservati.
            </p>
        </>
    );
};

export default AboutContent;