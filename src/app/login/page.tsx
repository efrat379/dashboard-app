import LoginDialog from './LoginDialog';

const handleClose = () => {
    console.log("Login dialog ditutup. (Fungsi ini tidak melakukan apa-apa di halaman mandiri)");
};

export default function LoginPage(){

    return(
        <div>
            <LoginDialog onClose={handleClose}/>
        </div>
    );
}