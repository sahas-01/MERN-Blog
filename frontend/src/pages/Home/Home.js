import React, { useState, useEffect } from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

const Home = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    // let loginURL = window.location.href;
    // console.log(loginURL);
    // let studentId = loginURL.split("/")[4];
    // console.log(studentId);
    useEffect(() => {
        if (localStorage.getItem('auth-token') === null) {
            setTimeout(() => {
                navigate('/login')
            }
                , 250)
        }
        // navigate('/login')

    }
        , [

        ])
    // const [error, setError] = useState('')
    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}/blog/getallblogs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('auth-token')
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBlogs(data.blogs)
                setLoading(false)
            }
                , err => {
                    console.log(err)
                    setLoading(false)
                }
            )
    }

        , [])



    // console.log(blogs)


    return (
        <>
            <Navbar />
            <div className="home-container">
                {loading ? <Loading /> :


                    blogs && !loading &&
                    blogs.map(blog => {
                        return <BlogCard key={blog._id} title={blog.title} description={blog.content} userName={blog.user.name} 
                            tags={blog.tags} />
                    }
                    )

                }



            </div>

        </>
    )
}

export default Home