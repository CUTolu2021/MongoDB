const {Blog} = require("../model/author.model")
const asyncHandler = require('express-async-handler')
const errorHandler = require("./error.controller")



const createBlog = async(req,res) => {
    try {
    const blog = await Blog.create(req.body)
    res.status(201).json(blog)
    } catch (error) {
        res.status(500).json({
            message:error.message ? error.message : "Internal Server Error"
        })
    }
    
}
const getBlog = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.json(blog); // Change 'user' to 'blog'
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateBlogById = async (req, res) => {
    try{
        const {blogId} = req.params
        const blog = await Blog.findByIdAndUpdate(blogId,req.body,{new:true})
        console.log(blog)
        if (!blog) {
            return res.status(404).json({ message: "Blog does not exist" });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteBlogById = async (req, res) => {
    try{
        const { blogId } = req.params;
        const blog = await Blog.findByIdAndDelete(blogId);
        console.log(blog);
        if (!blog) {
            return res.status(404).json({ message: "Blog does not exist" });
        }
        res.status(204).json({message : "Blog has been deleted"}); // No content to send back
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createBlog,
    getBlog,   
    getBlogById,
    updateBlogById,
    deleteBlogById
}