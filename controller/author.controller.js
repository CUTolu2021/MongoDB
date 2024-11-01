const {Author} = require("../model/author.model")
const asyncHandler = require('express-async-handler')
const errorHandler = require("./error.controller")


    const author = await Author.create(req.body)
    res.status(201).json(author)
}, errorHandler)


const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById = asyncHandler(async (req, res) => {
        const { authorId } = req.params;
        const user = await Author.findById(authorId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
}, errorHandler)

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




module.exports = {
    createAuthor,
    getAuthors,
    getUserById,
    updateAuthorById,
    deleteAuthorById
}