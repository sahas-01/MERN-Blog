import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Profile.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom'
function Profile() {
    const [user, setUser] = useState({})
    const [recent, setRecent] = useState({})
    const navigate = useNavigate();
    let recentBlog;
    // const name = 'sahas_01';

    useEffect(() => {
        if (localStorage.getItem('auth-token') === null) {
            setTimeout(() => {
                navigate('/login')
            }
                , 250)
        }
        // navigate('/login')
    }
        , [])


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/user/getuser/${localStorage.getItem('userId')
            }`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.user)
                const newU = data.user.blogs
                // console.log(newU)
                recentBlog = newU[newU.length - 1]
                fetch(`${process.env.REACT_APP_API_URL}/blog/getblog/${recentBlog}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.getItem('auth-token')
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        setRecent(data.blog)
                    }
                        , err => {
                            // console.log(err)
                        }
                    )

            }
                , err => {
                    // console.log(err)
                }
            )
    }
        , [])
    // console.log(user)
    return (
        <>

            <Navbar />
            <div className="profile-container">
                {/* <div className="blog-form">
                    <h1 className='blog-form-heading'>User's Profile</h1>
                    <p
                        className='inputs'
                        id='name'
                        type='text' placeholder='Title'
                        required
                    />



                    <p
                        name='instructions'
                        id='instructions' placeholder='Content(300 words)'
                        cols='50'
                        rows='100'
                        style={{ resize: 'none' }}
                        className='content'
                    />

                    <p
                        id='clubemail'
                        type='text' placeholder='Tags'
                        required
                        className='inputs'
                    />
                </div> */}
                <div class="wrapper">
                    <div class="left">
                        <img src={
                            user.profile_pic === null ?
                                'https://www.w3schools.com/howto/img_avatar.png'
                                : user.profilePicture
                        } width="100"
                            className="profile-img" />

                        <h4>{user.name}</h4>
                        <p>Designation</p>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>Information</h3>
                            <div class="info_data">
                                <div class="data">
                                    <h4>Email</h4>
                                    <p>{
                                        user.email
                                    }</p>
                                </div>
                                <div class="data">
                                    <h4>Phone</h4>
                                    <p>{
                                        user.phone
                                    }</p>
                                </div>
                            </div>
                        </div>

                        <div class="projects">
                            <h3>Blogs</h3>
                            <div class="projects_data">
                                <div class="data">
                                    <h4>Recent</h4>
                                    <p>
                                        {
                                            recent ? recent.title : 'No blogs yet'
                                        }
                                    </p>
                                </div>
                                <div class="data">
                                    <h4>Total Blogs</h4>
                                    <p>
                                        {user.blogs ?
                                            user.blogs.length
                                            : 0}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="social_media">
                            <ul>
                                <li><a href={`http://instagram.com/${user.instagram}`} target="_blank" rel='noreferrer'><InstagramIcon /></a></li>
                                <li><a href={`http://twitter.com/${user.twitter}`} target="_blank" rel='noreferrer'><TwitterIcon /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Profile