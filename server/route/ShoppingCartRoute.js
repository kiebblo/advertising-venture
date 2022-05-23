const express = require("express");
const router = express.Router();

const ShoppingCartController = require("../controller/ShoppingCartController");
const auth = require("../middleware/auth");

router.post("/", auth, ShoppingCartController.addProductToShoppingCart);
router.get("/shoppingCart", auth, ShoppingCartController.getUsersShoppingCart);
router.delete("/:id", auth, ShoppingCartController.deleteProductFromShoppingCart);

module.exports = router;