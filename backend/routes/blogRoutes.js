const BlogSchema = require('../models/Blog');
const router = require('express').Router();
const blogController = require('../controllers/blogController');
const fetchUser = require('../middleware/fetchUser');
//Add a new blog to the database
router.post('/addblog', fetchUser, blogController.addBlog);

//Get all blogs
router.get('/getallblogs', blogController.getAllBlogs);

//Get user specific blog
// router.get('/getblog', fetchUser, blogController.getUserBlogs);

//Update a blog
router.patch('/updateblog/:id', fetchUser, blogController.updateBlog);

//Delete a blog by its id
router.delete('/deleteblog/:id', fetchUser, blogController.deleteBlog);

//Get all blogs of a particular user
router.get('/getallblogsofuser/:id', fetchUser, blogController.getAllBlogsOfUser);


//Get a blog by its id
router.get('/getblog/:id', fetchUser, blogController.getBlogById);

module.exports = router;
