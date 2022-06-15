const Blog = require('../models/Blog');

const addBlog = async (req, res) => {
    const { title, content } = req.body;
    const tags = req.body.tags.split(','); //Split the tags into an array
    console.log(title, content, tags);
    try {
        const blog = await Blog.create({ title, content, tags });
        res.status(201).json({
            message: 'Blog created successfully',
            success: true,
            blog
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error creating blog',
            success: false,
        });
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            message: 'Blogs retrieved successfully',
            success: true,
            blogs
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error retrieving blogs',
            success: false,
        });
    }
}

module.exports = { addBlog, getAllBlogs };
