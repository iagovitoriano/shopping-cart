const totalizeProducts = (products) =>
  products.reduce((total, product) => total + product.value, 0)

module.exports = {
  totalizeProducts,
}
