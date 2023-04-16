const express = require("express");
const multer = require("multer");
const {
  createProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        imageSize: 1 * 1024 * 1024,
    },
});

router.post("/", authMiddleware, upload.single('image'), isAdmin, createProduct);

router.get("/:slug", getProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, upload.single('file'), isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.get("/", getAllProduct);

module.exports = router;
