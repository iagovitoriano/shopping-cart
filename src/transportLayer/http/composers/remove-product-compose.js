const { productRepository } = require('./repositories')
const { RemoveProduct } = require('../../../domain/interactors')
const getCartCompose = require('./get-cart-compose')

module.exports = () => {
  const removeProduct = new RemoveProduct({
    productRepository,
    getCartInteractor: getCartCompose(),
  })

  return removeProduct
}
