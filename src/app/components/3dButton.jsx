import styles from '../css/3dButton.module.css';

// Defaultkan ke warna 'blue' jika tidak ada prop yang diberikan
export default function AquaButton({ children, color = 'blue', onClick, ...props }) {
    
    // Pilih kelas warna berdasarkan prop 'color'
    const colorClass = color === 'grey' ? styles.aquaButtonGrey : styles.aquaButtonBlue;

    return (
        <div>
            <button
                // Gabungkan kelas dasar (macAquaButton) dengan kelas warna yang dipilih
                className={`${styles.macAquaButton} ${colorClass}`}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        </div>
    );
}