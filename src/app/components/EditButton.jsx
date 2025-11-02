"use client";

import styles from '../css/Button.module.css';

const EditButton = ({ children, isEdit = false, onClick, ...props})  => {

    const buttonClasses = isEdit ? `${styles.delete} ${styles.edit}` : styles.delete;

    return (
        <div>
            <button className={buttonClasses} onClick={onClick} {...props}>
            {children}
            </button>
        </div>
    );
};

export default EditButton;