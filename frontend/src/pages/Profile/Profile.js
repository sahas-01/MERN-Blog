import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Profile.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
function Profile() {
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
                        <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100" />
                        <h4>Name</h4>
                        <p>Designation</p>
                    </div>
                    <div class="right">
                        <div class="info">
                            <h3>Information</h3>
                            <div class="info_data">
                                <div class="data">
                                    <h4>Email</h4>
                                    <p>alex@gmail.com</p>
                                </div>
                                <div class="data">
                                    <h4>Phone</h4>
                                    <p>0001-213-998761</p>
                                </div>
                            </div>
                        </div>

                        <div class="projects">
                            <h3>Blogs</h3>
                            <div class="projects_data">
                                <div class="data">
                                    <h4>Recent</h4>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div class="data">
                                    <h4>Most Viewed</h4>
                                    <p>dolor sit amet.</p>
                                </div>
                            </div>
                        </div>

                        <div class="social_media">
                            <ul>
                                <li><a href="#"><InstagramIcon /></a></li>
                                <li><a href="#"><TwitterIcon /></a></li>
                                <li><a href="#"><FacebookIcon /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile