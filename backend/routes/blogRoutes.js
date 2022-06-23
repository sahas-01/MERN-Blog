const BlogSchema = require('../models/Blog');
const router = require('express').Router();
const blogController = require('../controllers/blogController');
const fetchUser = require('../middleware/fetchUser');

//Add a new blog to the database
router.post('/addblog', fetchUser, blogController.addBlog);

//Get all blogs of a user
router.get('/getallblogs', fetchUser, blogController.getAllBlogs);

//Update a blog
router.patch('/updateblog/:id', fetchUser, blogController.updateBlog);

//Delete a blog by its id
router.delete('/deleteblog/:id', fetchUser, blogController.deleteBlog);


module.exports = router;
