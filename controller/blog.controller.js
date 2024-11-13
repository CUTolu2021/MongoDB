const { Blog } = require("../model/blog.model");
const {
  createEntity,
  getAllEntities,
  getEntityById,
  updateEntityById,
  deleteEntityById,
} = require("./generic.controller");

const createBlog = createEntity(Blog);
const getBlog = getAllEntities(Blog);
const getBlogById = getEntityById(Blog);
const updateBlogById = updateEntityById(Blog);
const deleteBlogById = deleteEntityById(Blog);

const restrictTo = (roles) => (req, res, next) => {
  if (!roles.includes(req.user?.user?._doc?.role)) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = {
  createBlog,
  getBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
  restrictTo,
};
