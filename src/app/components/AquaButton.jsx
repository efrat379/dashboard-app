"use client";

import styles from '../css/AquaButton.module.css';


const AquaButton = ({ children, isPrimary = false, onClick, ...props})  => {

    const buttonClasses = isPrimary ? `${styles.customButton} ${styles.primaryButton}` : styles.customButton;

    /*const buttonClasses = isPrimary ? `${styles['aqua-button-grey']}` : styles['aqua-button-blue'] ;*/

    return (
        <div>
            <button 
                className={buttonClasses} 
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        </div>
    );
};

export default AquaButton;