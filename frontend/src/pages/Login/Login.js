import React, { useState } from 'react'
import '../SignUp/Signup.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '../../components/AuthButton/Button';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const Login = () => {
    const [loginCreds, setLoginCreds] = useState({
        email: '',
        password: ''
    })
    const [snackbarStatus, setSnackbarStatus] = useState({ severity: "", open: false, message: "" })
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword = (e) => {
        e.preventDefault();
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarStatus({ severity: "", open: false, message: "" })
    };
    const handleLogin = async (e) => {
        e.preventDefault()
        // console.log('submit')
        const { email, password } = loginCreds;
        // console.log(email, password)
        fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    localStorage.setItem('auth-token', data.token)
                    localStorage.setItem('userId', data.user.id)
                    setSnackbarStatus({ open: true, message: data.message, severity: "success" })
                    setTimeout(() => {
                        navigate('/home')
                    }
                        , 2000)
                }
                else {
                    setSnackbarStatus({ open: true, message: data.message, severity: "error" })
                }
            }
            )
    }
    return (

        <>
            <Snackbar open={snackbarStatus.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity={snackbarStatus.severity} sx={{ width: '100%' }}>
                    {snackbarStatus.message}
                </Alert>
            </Snackbar>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='login-form' onSubmit={handleLogin}>
                <h2 className="register">Login here!</h2>
                <div className="input-wrapper">
                    <input type="email" placeholder="E-mail"
                        value={loginCreds.email}
                        onChange={
                            (e) =>
                                setLoginCreds({ ...loginCreds, email: e.target.value })
                        }
                        id="email" className='inputs' required />
                </div>
                <div className="input-wrapper">
                    <input type={passwordType} placeholder="Password"
                        value={loginCreds.password}
                        onChange={
                            (e) =>
                                setLoginCreds({ ...loginCreds, password: e.target.value })
                        }
                        id="password" className='inputs' required />
                    <i className="toggle-password-btn" onClick={togglePassword}>
                        {passwordType === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </i>
                </div>
                <Button text="Login" />
                <p className='signup-text'>Don't have an account? <a href='/'>Register</a></p>
            </form>
        </>
    )
}

export default Login