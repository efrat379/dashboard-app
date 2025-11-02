"use client";

import styles from '../css/Button.module.css';


const SoftButton = ({ children, isPrimary = false, onClick, ...props})  => {

    const buttonClasses = isPrimary ? `${styles.button} ${styles.primary}` : styles.button;

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

export default SoftButton;