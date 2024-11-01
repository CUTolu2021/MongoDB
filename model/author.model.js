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



module.exports = {Author}