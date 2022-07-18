import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import './Signup.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '../../components/AuthButton/Button';
// import { Link } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
//Todo, setup custom error alerts
//Confirm password eye icon not working properly
const Signup = () => {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [baseImage, setBaseImage] = useState("");
    const [snackbarStatus, setSnackbarStatus] = useState({ severity: "", open: false, message: "" })
    const [passwordType, setPasswordType] = useState("password");
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarStatus({ severity: "", open: false, message: "" })
    };
    const [signUp, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        instagram: '',
        twitter: '',
        profilePicture: '',
    })
    const [phone, setPhone] = useState('')
    const togglePassword = (e) => {
        e.preventDefault();
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const onChange = (e) => {
        console.log(e.target.files[0])
        setBaseImage(e.target.files[0])
        console.log(baseImage)
    }



    const handleSignup = async (e) => {
        e.preventDefault()
        // console.log('submit')
        const { name, email, password, instagram, twitter, profilePicture } = signUp;
        fetch(`${process.env.REACT_APP_API_URL}/user/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phone,
                instagram,
                twitter,
                data: signUp.profilePicture,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success !== true) {
                    setSnackbarStatus({ open: true, message: data.message, severity: "error" })
                }
                else {
                    setSnackbarStatus({ open: true, message: data.message, severity: "success" })
                }
            }
            )
            .catch(err => console.log(err))

        setSignup({
            name: '',
            email: '',
            password: '',
            phone: '',
            instagram: '',
            twitter: '',
            profilePicture: '',
        })

        setSuccess(false)
    }


    return (
        <>
            <Snackbar open={snackbarStatus.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity={snackbarStatus.severity} sx={{ width: '100%' }}>
                    {snackbarStatus.message}
                </Alert>
            </Snackbar>
            <div className="background-signup">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='login-signup-form' onSubmit={handleSignup}
            >
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

                    <input type="file"
                        accept=".png, .jpg, .jpeg"
                        placeholder="Profile Picture"
                        onChange={onChange}
                        className='profile-picture-inputs' />


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
                <Button text="Sign Up" />
                <p className='signup-text'>Already have an account? <a href='/login'>Login</a></p>
            </form>

        </>
    )
}

export default Signup