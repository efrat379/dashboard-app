import AboutContent from '../AboutContent';
import AquaModal from '../components/AquaModal';
import MenuBar from '../components/MenuBar';
import LoginDialog from '../login/LoginDialog';

export default function ModalController({ children }) {

    const [modalType, setModalType] = useState(null); // Bisa: 'about', 'login', atau null

    const handleOpenAbout = () => setModalType('about');
    const handleOpenLogin = () => setModalType('login');
    const handleCloseModal = () => setModalType(null);

    let wTitle = "Jendela Aplikasi";
    let modalContent = null;
    
    // Tentukan konten yang akan disuntikkan
    if (modalType === 'login') {
        wTitle = "Login ke Sistem";
        modalContent = <LoginDialog onClose={handleCloseModal} />;
    } else if (modalType === 'about') {
        wTitle = "Information About Neural X Soft";
        modalContent = <AboutContent onClose={handleCloseModal} />;
    }

    return (
        <>
            {/* Teruskan handler pembuka modal ke MenuBar */}
            <MenuBar
                onOpenAboutModal={handleOpenAbout} // Panggil handler baru
                onOpenLoginModal={handleOpenLogin} // Panggil handler baru
            />

            {/* Panggil AquaModal hanya jika modalType BUKAN null */}
            {modalType && (
                <AquaModal
                    onClose={handleCloseModal}
                    title={wTitle} // Judul yang dinamis
                >
                    {modalContent} {/* Konten yang dinamis */}
                </AquaModal>
            )}
            <div style={{ paddingTop: '22px' }}>
                {children}
            </div>
        </>
    );
};