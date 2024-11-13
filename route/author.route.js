const express = require("express");
const {
  createAuthor,
  getAuthors,
  getUserById,
  updateAuthorById,
  deleteAuthorById,
  signIn,
  sameUser,
} = require("../controller/author.controller");
const {
  hashPassword,
  verifyJWTAuthToken,
} = require("../middleware/hashPassword");
const router = express.Router();

router.route("/").get(getAuthors).post(hashPassword, createAuthor);
router
  .route("/:id")
  .get(getUserById)
  .patch(verifyJWTAuthToken, sameUser, hashPassword, updateAuthorById)
  .delete(deleteAuthorById);
router.route("/signin").post(signIn);

module.exports = router;
