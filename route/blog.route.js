const express = require('express')
const { createBlog, getBlog, getBlogById, updateBlogById, deleteBlogById } = require('../controller/author.controller')   

const router = express.Router()

router.get('/', getBlog)
router.post('/', createBlog)
router.get('/:blogId', getBlogById)
router.patch('/:blogId', updateBlogById)
router.delete('/:blogId', deleteBlogById)


module.exports = router