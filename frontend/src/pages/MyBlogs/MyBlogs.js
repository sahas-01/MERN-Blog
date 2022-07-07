import React, { useState, useEffect } from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';


function MyBlogs() {
    const userId = localStorage.getItem('userId')
    const navigate = useNavigate();
    const [myBlogs, setMyBlogs] = useState([])
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
        fetch(`${process.env.REACT_APP_API_URL}/blog/getallblogsofuser/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.user)
                setMyBlogs(data.user)
            }
                , err => {
                    // console.log(err)
                }
            )
    }
        , [])
    // console.log(myBlogs)

    return (
        <>
            <Navbar />
            <div className="home-container">
                {
                    myBlogs && myBlogs.blogs &&
                    myBlogs.blogs.map(blog => {
                        return <BlogCard key={blog._id} title={blog.title} description={blog.content} userName={myBlogs.name}
                            isUser={myBlogs._id === localStorage.getItem('userId')}
                            tags={blog.tags}
                        />

                    }
                    )
                }
            </div>
        </>
    )
}

export default MyBlogs