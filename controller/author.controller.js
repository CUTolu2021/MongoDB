const bcrypt = require("bcryptjs");

const {Author} = require("../model/author.model");
const {
    createEntity,
    getAllEntities,
    getEntityById,
    updateEntityById,
    deleteEntityById
} = require("./generic.controller");

const createAuthor = createEntity(Author);
const getAuthors = getAllEntities(Author);
const getUserById = getEntityById(Author);
const updateAuthorById = updateEntityById(Author);
const deleteAuthorById = deleteEntityById(Author);

const signIn = async(req,res,next) => {
    const {username, password} = req.body;
    const user = await Author.findOne({username}).select("+password");
    if(!user){
        return res.status(401).json({message: "Invalid Username or Password"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({message: "Invalid Username or Password"});
    }
    user.password = undefined
    
    req.user = user;
    console.log(" logged in");
    res.status(200).json(user);
    
    
}

module.exports = {
    createAuthor,
    getAuthors,
    getUserById,
    updateAuthorById,
    deleteAuthorById,
    signIn
};