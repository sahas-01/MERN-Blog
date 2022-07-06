import React, { useState } from 'react'
import '../SignUp/Signup.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '../../components/AuthButton/Button';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginCreds, setLoginCreds] = useState({
        email: '',
        password: ''
    })
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
    const handleLogin = async (e) => {
        e.preventDefault()
        console.log('submit')
        const { email, password } = loginCreds;
        console.log(email, password)
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
                    navigate(`/home`)
                }
                else {
                    alert(data.message)
                }
            }
            )
    }
    return (

        <>
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