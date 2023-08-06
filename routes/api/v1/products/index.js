const express = require("express");
const router = express.Router();
const products = require("../../../../api/v1/products");

router.get("/", products.getProducts);
router.post("/create", products.create);
router.put("/:id/update_quantity", products.update);
router.delete("/:id", products.delete);

module.exports = router;
