// components/NeumorphicButton.js

import styles from '../css/GlassButton.module.css';

const GlassButton = ({ children, onClick, icon, ...props }) => {

    

    return (
    <button
        className={styles.glassButton}
        onClick={onClick}
        {...props}
    >
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
    </button>
    );
};

export default GlassButton;