import React from 'react'
import Button from '../../components/AuthButton/Button'
import Navbar from '../../components/Navbar/Navbar'
import './AddBlog.css'

function AddBlog() {
    return (
        <>
            <Navbar />
            <div className="add-blog-container">

                <form className="blog-form">
                    <h1 className='blog-form-heading'>Put your thoughts here!</h1>
                    <input
                        className='inputs'
                        id='name'
                        type='text' placeholder='Title'
                        required
                    />



                    <textarea
                        name='instructions'
                        id='instructions' placeholder='Content(300 words)'
                        cols='50'
                        rows='100'
                        style={{ resize: 'none' }}
                        className='content'
                    />

                    <input
                        id='clubemail'
                        type='text' placeholder='Tags'
                        required
                        className='inputs'
                    />
                    <button className='addblog-button' type='submit'>Add Blog</button>

                </form>
            </div>
        </>
    )
}

export default AddBlog