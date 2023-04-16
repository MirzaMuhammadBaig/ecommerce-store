const express = require("express");
const {
    createSubCategory,
    updateSubCategory,
    deleteSubCategory,
    getSubCategory,
    getallSubCategory,
} = require("../controller/prodsubcategory");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createSubCategory);
router.put("/:id", authMiddleware, isAdmin, updateSubCategory);
router.delete("/:id", authMiddleware, isAdmin, deleteSubCategory);
router.get("/:id", getSubCategory);
router.get("/", getallSubCategory);

module.exports = router;
