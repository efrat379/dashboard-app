// components/Dock.js
import DockItem from './DockItem.jsx';
// Import ikon yang Anda inginkan (contoh: menggunakan react-icons/fi)
import { FiHome, FiMail, FiSettings, FiTerminal } from 'react-icons/fi';

const dockItems = [
    { id: 1, icon: FiHome, label: 'Home' },
    { id: 2, icon: FiSettings, label: 'Settings' },
    { id: 3, icon: FiMail, label: 'Mail' },
    { id: 4, icon: FiTerminal, label: 'Terminal' },
];

export default function Dock() {
    return (
        <div className="dock-container">
            <div className="dock-bar">
                {dockItems.map(item => (
                <DockItem key={item.id} icon={item.icon} label={item.label} />
                ))}
            </div>
        </div>
    );
}