const asyncHandler = require('express-async-handler');
const errorHandler = require("./error.controller");

const createEntity = (Model) => asyncHandler(async (req, res) => {
    const entity = await Model.create(req.body);
    res.status(201).json({
        status: "success",
        description: `Created successfully`,
        data:entity
    });
}, errorHandler);

const getAllEntities = (Model) => asyncHandler(async (req, res) => {
    const entities = await Model.find();
    res.json({
        status: "success",
        description: `Retrieved successfully`,
        data:entities
    });
}, errorHandler);

const getEntityById = (Model) => asyncHandler(async (req, res) => {
    const { id } = req.params;
    const entity = await Model.findById(id);
    if (!entity) {
        return res.status(404).json({ message: "Entity not found" });
    }
    res.json({
        status: "success",
        description: `Retrieved successfully`,
        data:entity
    });;
}, errorHandler);

const updateEntityById = (Model) => asyncHandler(async (req, res) => {
    const { id } = req.params;
    const entity = await Model.findByIdAndUpdate(id, req.body, { new: true });
    if (!entity) {
        return res.status(404).json({ message: "Entity does not exist" });
    }
    res.json({
        status: "success",
        description: `Edited successfully`,
        data:entity
    });
}, errorHandler);

const deleteEntityById = (Model) => asyncHandler(async (req, res) => {
    const { id } = req.params;
    const entity = await Model.findByIdAndDelete(id);
    if (!entity) {
        return res.status(404).json({ message: "Entity does not exist" });
    }
    res.status(204).json({ message: "Entity has been deleted" });
}, errorHandler);

module.exports = {
    createEntity,
    getAllEntities,
    getEntityById,
    updateEntityById,
    deleteEntityById
};