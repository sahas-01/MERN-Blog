import React, { useState, useEffect } from 'react'
// import Button from '../../components/AuthButton/Button'
import Navbar from '../../components/Navbar/Navbar'
import './AddBlog.css'
import { useNavigate } from 'react-router-dom'
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function AddBlog() {
    const [data, setData] = useState('');
    const navigate = useNavigate();
    const [snackbarStatus, setSnackbarStatus] = useState({ severity: "", open: false, message: "" })
    const [blogContent, setBlogContent] = useState({
        title: '',
        content: '',
        tags: ''
    })
    const [edit, setEdit] = useState(
        {
            title: '',
            content: '',
            tags: ''
        }
    )
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    let blogId = window.location.pathname.split('/')[2]
    console.log(blogId)
    const user = localStorage.getItem('userId')
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarStatus({ severity: "", open: false, message: "" })
    };
    // console.log(userId)
    useEffect(() => {
        if (localStorage.getItem('auth-token') === null) {
            navigate('/login')
        }
    }
        , [])

    //Get blog by its id
    useEffect(() => {
        if (blogId) {
            fetch(`${process.env.REACT_APP_API_URL}/blog/getblog/${blogId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token')
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.blog)
                    setData(data.blog)
                    setBlogContent({
                        title: data.title,
                        content: data.content,
                        tags: data.tags
                    })
                }
                )
        }
    }, [])



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
            setSnackbarStatus({ open: true, message: data.message, severity: "success" })
            setTimeout(() => {
                navigate('/home')
                setBlogContent({
                    title: '',
                    content: '',
                    tags: ''
                })
            }
                , 2000)
        }
        else {
            setSnackbarStatus({ open: true, message: data.message, severity: "error" })

        }
    }

    const handleEditBlog = async (e) => {
        e.preventDefault()
        // console.log('submit')
        const { title, content, tags } = edit;
        console.log(title, content, tags)
        const res = await fetch(`${process.env.REACT_APP_API_URL}/blog/updateblog/${blogId}`, {
            method: 'PATCH',
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
            setSnackbarStatus({ open: true, message: data.message, severity: "success" })
            setTimeout(() => {
                navigate('/home')
                setBlogContent({
                    title: '',
                    content: '',
                    tags: ''
                })
            }
                , 1000)
        }
        else {
            setSnackbarStatus({ open: true, message: data.message, severity: "error" })

        }
    }


    return (
        <>
            <Navbar />
            <div className="add-blog-container">
                <Snackbar open={snackbarStatus.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity={snackbarStatus.severity} sx={{ width: '100%' }}>
                        {snackbarStatus.message}
                    </Alert>
                </Snackbar>
                {
                    blogId ?
                        <form className="blog-form" onSubmit={handleEditBlog}>
                            <h1 className='blog-form-heading'>Edit Your Blog</h1>
                            <input
                                className='inputs'
                                id='name'
                                type='text' placeholder='Title'
                                required
                                defaultValue={
                                    data ? data.title : edit.title
                                }
                                onChange={(e) => {
                                    setEdit({ ...edit, title: e.target.value })

                                }
                                }
                            />



                            <textarea
                                name='instructions'
                                id='instructions' placeholder='Content(300 words)'
                                cols='50'
                                rows='100'
                                style={{ resize: 'none' }}
                                className='content'
                                required
                                defaultValue={
                                    data ? data.content : edit.content
                                }
                                onChange={(e) => {
                                    setEdit({ ...edit, content: e.target.value })
                                }}
                            />

                            <input
                                id='clubemail'
                                type='text' placeholder='Tags'
                                required
                                className='inputs'
                                defaultValue={
                                    data ? data.tags : edit.tags
                                }
                                onChange={(e) => {
                                    e.preventDefault()
                                    setEdit({ ...edit, tags: e.target.value })
                                }
                                }
                            />
                            <button className='addblog-button' type='submit'>Edit Blog</button>

                        </form>
                        :
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
                }
            </div>
        </>
    )
}

export default AddBlog