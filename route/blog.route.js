const express = require("express");
const {
  createBlog,
  getBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
  restrictTo,
} = require("../controller/blog.controller");
const { verifyJWTAuthToken } = require("../middleware/hashPassword");

const router = express.Router();

router.get("/", verifyJWTAuthToken, getBlog);
router.post("/", verifyJWTAuthToken, restrictTo(["user"]), createBlog);
router.get("/:Id", getBlogById);
router.patch("/:Id", updateBlogById);
router.delete("/:Id", deleteBlogById);

module.exports = router;
