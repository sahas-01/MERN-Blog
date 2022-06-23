const Blog = require('../models/Blog');

//Add blog controller
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


//Get all blogs controller
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ user: req.user._id });
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


//Update a blog by its id
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({
                message: 'Blog not found',
            });
        }
        console.log(blog);
        const { title, content } = req.body;
        const tags = req.body.tags.split(','); //Split the tags into an array
        blog.title = title;
        blog.content = content;
        blog.tags = tags;
        await blog.save();
        res.status(200).json({
            message: 'Blog updated successfully',
            success: true,
            blog
        });
    }

    catch (err) {
        res.status(500).json({
            message: 'Error updating blog',
            success: false,
        });
    }
}


//Delete a blog by its id
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({
                message: 'Blog not found',
            });
        }
        await blog.remove();
        res.status(200).json({
            message: 'Blog deleted successfully',
            success: true,
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error deleting blog',
            success: false,
        });
    }
}

module.exports = { addBlog, getAllBlogs, updateBlog, deleteBlog };
