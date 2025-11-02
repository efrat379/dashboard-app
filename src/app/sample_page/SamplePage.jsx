"use client";

import { useState } from "react";
// components/PersonForm.jsx
import DButton from "../components/3dButton";
import AquaButton from "../components/AquaButton";
import AquaTextField from "../components/AquaTextField";
import SoftButton from "../components/SoftButton";

const SamplePage = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = (buttonName) => {
        alert(`${buttonName} diklik!`);
    };

    return (
        <div style={{overflowX : "auto", overflowY:"auto"}}>
        <h1>Formulir Input Data Diri</h1>
            <form>
                <div>
                    <AquaTextField type="text" label="Username" id="username" value={username} placeholder="insert your username"
                        onChange={(e) => setUsername(e.target.value)} autoComplete="off"
                    />
                    <AquaTextField type="text" id="email" label="Email" value={email} placeholder="insert email address"
                        onChange={(e)=> setEmail(e.target.value)} autoComplete="off"
                    />
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <DButton id="login" onClick={() => alert('Biru Diklik')}>Login</DButton>
                        <DButton id="register" color="grey" onClick={() => alert('Abu Diklik')}>Register</DButton>
                        <AquaButton id="submit" isPrimary onClick={()=>handleClick('Button Save nih')}>Save</AquaButton>
                        <AquaButton id="cancelButton" onClick={()=> handleClick('Button Cancel nih Bos')}>Cencel</AquaButton>
                        <SoftButton id="updateButton" onClick={()=>handleClick('Button Edit nih')}>Update</SoftButton>
                        <SoftButton id="deleteButton" isPrimary onClick={()=>handleClick('Button Remove nih')}>Remove</SoftButton>
                    </div>
                </div>
                
            </form>
        </div>
    );
};

export default SamplePage;