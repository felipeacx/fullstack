const products = require("../data/products")

let cart = []

const addToCart = (req, res) => {
  const { id } = req.body
  const product = products.find((p) => p.id === id)
  if (product) {
    cart.push(product)
    res.json({ message: "Producto agregado al carrito", cart })
  } else {
    res.status(404).json({ message: "Producto no encontrado" })
  }
}

const getCart = (req, res) => {
  res.json(cart)
}

const deleteCart = (req, res) => {
  cart = []
  res.json(cart)
}

module.exports = { addToCart, getCart, deleteCart }
