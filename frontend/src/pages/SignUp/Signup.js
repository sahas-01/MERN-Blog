import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './Signup.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '../../components/AuthButton/Button';
// import { Link } from '@mui/material';
// import Alert from '@mui/material/Alert';

//Todo, setup custom error alerts
//Confirm password eye icon not working properly
const Signup = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [showPassword, setShowPassword] = useState("password");
    // const [error, setError] = useState("");
    const [signUp, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        instagram: '',
        twitter: '',
    })
    const [phone, setPhone] = useState(0)
    const togglePassword = (e) => {
        e.preventDefault();
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const confirmPasswordToggle = (e) => {
        console.log("confirmPasswordToggle working")
        e.preventDefault();
        if (showPassword === "password") {
            console.log(showPassword)
            setShowPassword("text")
            return;
        }
        setShowPassword("password")
    }
    const handleSignup = async (e) => {
        e.preventDefault()
        console.log('submit')
        if (signUp.password !== signUp.confirmPassword) {
            alert("Passwords do not match")
        }
        const { name, email, password, instagram, twitter } = signUp;
        console.log(name, email, password)
        fetch(`${process.env.REACT_APP_API_URL}/user/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
                instagram,
                twitter,

            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success !== true) {
                    alert(data.message)
                }
                else {
                    alert('Signup success,proceed to login')
                }
            }
            )
            .catch(err => console.log(err))


    }


    return (
        <>
            <div className="background-signup">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='login-signup-form' onSubmit={handleSignup}>
                <h2 className="register">Register with Us!</h2>
                <div className="input-wrapper">
                    <input type="text" placeholder="Username"
                        value={signUp.name}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, name: e.target.value })
                        }
                        id="username" className='inputs' required />
                </div>
                <div className="input-wrapper">
                    <input type="email" placeholder="E-mail"
                        value={signUp.email}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, email: e.target.value })
                        }
                        id="email" className='email-inputs'
                        required />
                    <input type="number" placeholder="Phone Number"
                        value={phone && Math.max(0, phone)}
                        min="0"
                        step="1"
                        onChange={e =>
                            setPhone(e.target.value ? Number(e.target.value) : e.target.value)}
                        className='phone-inputs' />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Instagram" className='social-inputs'
                        value={signUp.instagram}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, instagram: e.target.value })
                        }
                    />
                    {/* <input type="text" placeholder="Facebook" className='social-inputs' /> */}
                    <input type="text" placeholder="Twitter" className='social-inputs'
                        value={signUp.twitter}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, twitter: e.target.value })
                        }
                    />
                </div>
                <div className="input-wrapper">
                    <input type={passwordType} placeholder="Password"
                        value={signUp.password}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, password: e.target.value })
                        }
                        id="password" className='inputs' required />
                    <i className="toggle-password-btn" onClick={togglePassword}>
                        {passwordType === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </i>
                </div>
                <div className="input-wrapper">
                    <input type="password"
                        value={signUp.confirmPassword}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, confirmPassword: e.target.value })
                        }
                        placeholder="Confirm password" id="confirm-password" className='inputs' required />
                    <i className="toggle-password-btn" onClick={confirmPasswordToggle}>
                        {showPassword === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </i>
                </div>
                <Button text="Sign Up" />
                <p className='signup-text'>Already have an account? <a href='/login'>Login</a></p>
            </form>
        </>
    )
}

export default Signup