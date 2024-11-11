const express = require('express')
const { createBlog, getBlog, getBlogById, updateBlogById, deleteBlogById } = require('../controller/blog.controller')   

const router = express.Router()

router.get('/', getBlog)
router.post('/', createBlog)
router.get('/:Id', getBlogById)
router.patch('/:Id', updateBlogById)
router.delete('/:Id', deleteBlogById)


module.exports = router