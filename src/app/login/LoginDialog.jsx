"use client"

import { useState } from "react";
import ThreeDButton from '../components/3dButton';
import AquaTextField from '../components/AquaTextField';

const LoginDialog = ({ onClose })=>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan Login Mutation di sini...
        console.log('Attempting login...');
        onClose();
    };

    return(
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div style={{ padding: '0 15px' }}>
                <h2>Your Session is Expired Please Login</h2>
                <AquaTextField type="text" label="Username" id="username" value={username} placeholder="insert your username or email"
                    onChange={(e) => setUsername(e.target.value)} autoComplete="off"
                />
                <AquaTextField type="password" label="password" id="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} autoComplete="off"
                />
                <ThreeDButton type="submit" id="login" onClick={() => {
                        alert('Login Success');
                        
                    }
                }>Login</ThreeDButton>
            </div>
        </form>
        
    );

};

export default LoginDialog;