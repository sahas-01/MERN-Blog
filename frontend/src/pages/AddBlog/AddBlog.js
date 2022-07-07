import React, { useState, useEffect } from 'react'
// import Button from '../../components/AuthButton/Button'
import Navbar from '../../components/Navbar/Navbar'
import './AddBlog.css'
import { useNavigate } from 'react-router-dom'

function AddBlog() {
    const navigate = useNavigate();
    const [blogContent, setBlogContent] = useState({
        title: '',
        content: '',
        tags: ''
    })
    const user = localStorage.getItem('userId')
    // console.log(userId)
    useEffect(() => {
        if (localStorage.getItem('auth-token') === null) {
            navigate('/login')
        }
    }
        , [])

    const handleBlogSubmit = async (e) => {
        e.preventDefault()
        // console.log('submit')
        const { title, content, tags } = blogContent;
        // console.log(title, content, tags)
        const res = await fetch(`${process.env.REACT_APP_API_URL}/blog/addblog`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            },
            body: JSON.stringify({
                title,
                content,
                tags,
                user
            })
        })
        const data = await res.json()
        if (data.success === true) {
            alert(data.message)
        }
        else {
            alert(data.message)
        }
    }


    return (
        <>
            <Navbar />
            <div className="add-blog-container">

                <form className="blog-form" onSubmit={handleBlogSubmit}>
                    <h1 className='blog-form-heading'>Put your thoughts here!</h1>
                    <input
                        className='inputs'
                        id='name'
                        type='text' placeholder='Title'
                        required
                        value={blogContent.title}
                        onChange={(e) => setBlogContent({ ...blogContent, title: e.target.value })}
                    />



                    <textarea
                        name='instructions'
                        id='instructions' placeholder='Content(300 words)'
                        cols='50'
                        rows='100'
                        style={{ resize: 'none' }}
                        className='content'
                        required
                        value={blogContent.content}
                        onChange={(e) => setBlogContent({ ...blogContent, content: e.target.value })}
                    />

                    <input
                        id='clubemail'
                        type='text' placeholder='Tags'
                        required
                        className='inputs'
                        value={blogContent.tags}
                        onChange={(e) => setBlogContent({ ...blogContent, tags: e.target.value })}
                    />
                    <button className='addblog-button' type='submit'>Add Blog</button>

                </form>
            </div>
        </>
    )
}

export default AddBlog