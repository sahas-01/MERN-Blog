import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import Navbar from '../../components/Navbar/Navbar'

function MyBlogs() {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </>
    )
}

export default MyBlogs