"use client";

import { usePathname, useRouter } from 'next/navigation';
import styles from '../css/MenuSidebar.module.css';


const MenuSidebar = () => {

    const pathname = usePathname();

    const menuItems = {
        'PLACES': [
            { label: 'Guest', href: '/' },
            { label: 'Product', href: './product' },
            { label: 'Person', href: './person' }, 
        ],
    };

    const router = useRouter();

    const isActive = (href) => {
          // Ambil segmen rute pertama dari pathname, misal:
        // Jika pathname adalah '/product/123', rootSegment akan menjadi 'product'.
        // Jika pathname adalah '/', rootSegment akan menjadi ''.
        const rootSegment = pathname.split('/')[1]; 
        
        // 1. KASUS RUTE ROOT (href='/'):
        // Item 'Guest' hanya aktif jika tidak ada segmen rute lain (pathname === '/')
        if (href === '/') {
            return pathname === '/';
        }

        // 2. KASUS RUTE LAINNYA (href='/product', '/documents', dll.):
        // Item aktif jika href cocok dengan segmen rute teratas.
        // Contoh: '/product' cocok dengan 'product'
        const itemSegment = href.split('/')[1]; 
        
        return itemSegment === rootSegment;
    };

    const handleNavigation = (href) =>{
        router.push(href);
    }

    return (
        <div className={styles.sidebar}>
            {Object.keys(menuItems).map((sectionTitle) => (
                <div key={sectionTitle} className={styles.section}>
                    <h3 className={styles.sectionHeader}>{sectionTitle}</h3>
                    {menuItems[sectionTitle].map((item) => (
                        <div
                            key={item.label}
                            onClick={()=> handleNavigation(item.href)}
                            className={`
                                    ${styles.listItem}
                                    ${isActive(item.href) ? styles.active : ''}
                                `}
                        >
                            <span className={styles.itemText}>{item.label}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

};

export default MenuSidebar;