const {Author, Blog} = require("../model/author.model")

const createAuthor = async(req,res) => {
    try {
    const author = await Author.create(req.body)
    res.status(201).json(author)
    } catch (error) {
        res.status(400).json({
            message:error.message ? error.message : "Internal Server Error"
        })
    }
    
}
const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const { authorId } = req.params;
        const user = await Author.findById(authorId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateAuthorById = async (req, res) => {
    try{
        const {authorId} = req.params
        const user = await Author.findByIdAndUpdate(authorId,req.body,{new:true})
        console.log(user)
        if (!user) {
            return res.status(404).json({ message: "Author does not exist" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteAuthorById = async (req, res) => {
    try{
        const {authorId} = req.params
        const user = await Author.findByIdAndDelete(authorId)
        console.log(user)
        if (!user) {
            return res.status(404).json({ message: "Author does not exist" });
        }
        res.status(204).json({message: "Author has been deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createBlog = async(req,res) => {
    try {
    const blog = await Blog.create(req.body)
    res.status(201).json(blog)
    } catch (error) {
        res.status(400).json({
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
    createAuthor,
    getAuthors,
    getUserById,
    updateAuthorById,
    deleteAuthorById,
    createBlog,
    getBlog,   
    getBlogById,
    updateBlogById,
    deleteBlogById
}