const express = require("express")
const router = express.Router()
const { getProducts } = require("../controllers/products.controller")
const { addToCart, getCart, deleteCart } = require("../controllers/cart.controller")

router.get("/products", getProducts)

router.get("/cart", getCart)
router.post("/cart", addToCart)
router.delete("/deletecart", deleteCart)

module.exports = router
