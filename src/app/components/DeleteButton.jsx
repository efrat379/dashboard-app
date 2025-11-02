"use client";

import styles from '../css/3dButton.module.css';

const DeleteButton =({ children, color = 'yellow', onClick, ...props })   => {

    const colorClass = color === 'red' ? styles.aquaButtonRed : styles.aquaButtonYellow;

    return (
        <div>
            <button
                className={`${styles.macAquaButton} ${colorClass}`}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        </div>
    );
};

export default DeleteButton;