const BlogSchema = require('../models/Blog');
const router = require('express').Router();
const blogController = require('../controllers/blogController');

//Add a new blog to the database
router.post('/addblog', blogController.addBlog);

router.get('/getallblogs', blogController.getAllBlogs);


module.exports = router;
