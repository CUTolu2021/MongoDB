const {Blog} = require("../model/blog.model");
const {
    createEntity,
    getAllEntities,
    getEntityById,
    updateEntityById,
    deleteEntityById
} = require("./generic.controller");

const createBlog = createEntity(Blog);
const getBlog = getAllEntities(Blog);
const getBlogById = getEntityById(Blog);
const updateBlogById = updateEntityById(Blog);
const deleteBlogById = deleteEntityById(Blog);

module.exports = {
    createBlog,
    getBlog,
    getBlogById,
    updateBlogById,
    deleteBlogById
};