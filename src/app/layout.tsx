// app/layout.js

"use client"; // Diperlukan karena Anda menggunakan state dan komponen client

import { useState } from 'react';
import AboutContent from "./AboutContent";
import AquaModal from "./components/AquaModal";
import MenuBar from "./components/MenuBar";
import MenuSidebar from "./components/MenuSidebar";
import LoginDialog from './login/LoginDialog';

// Layout utama aplikasi Anda

type ModalType = 'about' | 'login' | null;

export default function RootLayout({ children }: {
    children: React.ReactNode 
}){

    const [modalType, setModalType] = useState<ModalType>(null);
    
    const handleOpenAbout = () => setModalType('about');
    const handleOpenLogin = () => setModalType('login');
    const handleCloseModal = () => setModalType(null);

    let wTitle = "Jendela Aplikasi";
    let modalContent = null;
    
    if (modalType === 'login') {
        wTitle = "Login to System";
        modalContent = <LoginDialog onClose={handleCloseModal} />;
    } else if (modalType === 'about') {
        wTitle = "Information About Neural X Soft";
        modalContent = <AboutContent onClose={handleCloseModal} />;
    }

    
    // Perhatikan bahwa "activeItem" tidak lagi diperlukan di sini
    // karena navigasi ditangani oleh Next.js, bukan state.

    return (
        <html lang="id">
            <body>
                <MenuBar 
                    onOpenAboutModal={handleOpenAbout} // Pasang handler About
                    onOpenLoginModal={handleOpenLogin} // Pasang handler Login
                />
                
                {/* HAPUS display: 'flex' dari sini karena Sidebar sudah Fixed */}
                <div> 
                    <MenuSidebar />
                    
                    <div style={{ marginLeft: '200px', padding: '20px', flexGrow: 1 }}>
                        {children}
                        
                    </div>
                    
                </div>
                {modalType && (
                    <AquaModal
                        onClose={handleCloseModal}
                        title={wTitle} // Judul yang dinamis
                    >
                        {modalContent} {/* Konten About atau Login yang dinamis */}
                    </AquaModal>
                )}
            </body>
        </html>
    );
}