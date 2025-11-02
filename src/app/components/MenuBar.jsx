"use client";

import { useEffect, useState } from 'react';
import styles from '../css/MenuBar.module.css';

const MenuBar = ({ onOpenAboutModal, onOpenLoginModal }) => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (menuName) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.closest(`.${styles.menuBar}`) === null) {
                setOpenMenu(null);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [openMenu]);

    return (
        <div className={styles.menuBar}>
            <div className={styles.leftSide}>
                <img
                    src="/icons/neural.png"
                    alt="Apple Logo"
                    className={styles.appleIcon}
                />
                <div className={styles.menuItemWrapper}>
                    <span className={styles.menuItem} onClick={() => handleMenuClick('Finder')}>
                        Finder
                    </span>
                    {openMenu === 'Finder' && (
                        <div className={styles.dropdown}>
                            <ul>
                                <li onClick={() => { setOpenMenu(null); onOpenAboutModal(); }}>
                                    About Apps
                                </li>
                                <li onClick={() => {
                                        setOpenMenu(null); 
                                        onOpenLoginModal(); // Panggil handler di layout
                                    }}
                                >Login</li>
                                <li>Empty Trash...</li>
                            </ul>
                        </div>
                    )}
                </div>
                <span className={styles.menuItem}>File</span>
            </div>
            <div className={styles.rightSide}>
                <span className={styles.statusItem}>Wi-Fi</span>
                <span className={styles.statusItem}>Jam</span>
            </div>
            
        </div>
    );
};

export default MenuBar;