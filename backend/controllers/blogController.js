const Blog = require('../models/Blog');
const User = require('../models/User');

//Add blog controller
const addBlog = async (req, res) => {
    const { title, content, user } = req.body;
    const tags = req.body.tags.split(','); //Split the tags into an array
    let existingUser;
    try {
        existingUser = await User.findById(user);
        if (!existingUser) {
            return res.status(404).json({
                message: 'User not found',
            });
        }
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
    const blog = new Blog({
        title,
        content,
        tags,
        user
    });
    try {
        await blog.save();
        existingUser.blogs.push(blog);
        await existingUser.save();
        res.status(200).json({
            message: 'Blog added successfully',
            success: true,
            blog
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }

}


//Get all blogs controller
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('user');
        res.status(200).json({
            message: 'Blogs retrieved successfully',
            success: true,
            blogs
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}


//Get all blogs of a particular user
const getAllBlogsOfUser = async (req, res) => {
    try {
        console.log(req.user.id);
        const blogs = await User.findById(req.user.id).populate('blogs');
        res.status(200).json({
            message: 'Blogs retrieved successfully',
            success: true,
            user: blogs
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
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


//Get a blog by its id
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('user');
        res.status(200).json({
            message: 'Blog retrieved successfully',
            success: true,
            blog
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error retrieving blog',
            success: false,
        });
    }
}


module.exports = { addBlog, getAllBlogs, updateBlog, deleteBlog, getAllBlogsOfUser, getBlogById };
