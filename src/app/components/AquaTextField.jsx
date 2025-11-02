// components/AquaTextField.jsx

import styles from '../css/AquaTextField.module.css';

const AquaTextField = ({ label, type,id, name, value, onChange, autoComplete, ...rest }) => {
    return (
        <div className={styles.rowContainer}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className={styles.input}
                // Jika Anda mendefinisikannya secara terpisah, pastikan ini benar:
                autoComplete={rest.autocomplete || 'off'} // <-- Hati-hati dengan ini!

                // JANGAN LAKUKAN INI (ini yang menyebabkan error):
                // autocomplete="on"
                {...rest}
            />
        </div>
    );
};

export default AquaTextField;