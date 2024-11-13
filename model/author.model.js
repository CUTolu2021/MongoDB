const { Schema, model } = require("mongoose");

const authorschema = new Schema(
  {
    name: String,
    username: {
      type: String,
      unique: true,
      required: [true, "Username is a required field."],
    },
    age: Number,
    image: String,
    password: {
      type: String,
      select: false,
      required: [true, "Password is a required field."],
    },
    email: String,
    role: {
      type: String,
      enum: ["author", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);
const Author = model("Author", authorschema);

module.exports = { Author };
