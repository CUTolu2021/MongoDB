const { Schema, model } = require("mongoose");

const authorschema = new Schema({
    name : String,
    age : Number,
    image : String,
    password : {
        type:String,
        select: false,
        required:[true,"Password is a required field."]
    },
    email : String
},
{
    timestamps:true
})
const Author = model("Author",authorschema)

const blogSchema = new Schema({
    title : String,
    description : String,
    image : String,
    author : {
        type : Schema.Types.ObjectId,
        ref : "Author"
    }
},
{
    timestamps:true
})
const Blog = model("Blog",blogSchema)

module.exports = {Author,Blog}