const { productRepository } = require('./repositories')
const { AddProduct } = require('../../../domain/interactors')
const getCartCompose = require('./get-cart-compose')

module.exports = () => {
  const addProduct = new AddProduct({
    productRepository,
    getCartInteractor: getCartCompose(),
  })

  return addProduct
}
