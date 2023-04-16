const subCategory = require("../models/prodsubcategory");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createSubCategory = asyncHandler(async (req, res) => {
    try {
        const newSubCategory = await subCategory.create(req.body);
        res.json(newSubCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const updateSubCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedSubCategory = await subCategory.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedSubCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteSubCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedSubCategory = await subCategory.findByIdAndDelete(id);
        res.json(deletedSubCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getSubCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaSubCategory = await subCategory.findById(id);
        res.json(getaSubCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const getallSubCategory = asyncHandler(async (req, res) => {
    try {
        const getallSubCategory = await subCategory.find();
        res.json(getallSubCategory);
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = {
    createSubCategory,
    updateSubCategory,
    deleteSubCategory,
    getSubCategory,
    getallSubCategory,
};
