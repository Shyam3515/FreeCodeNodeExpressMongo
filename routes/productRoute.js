const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  updateProduct,
  createProduct,
  deletedProduct,
} = require("../controllers/productController.js");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deletedProduct);

module.exports = router;
