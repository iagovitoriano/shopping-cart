const { productRepository } = require('./repositories')
const { UpdateProductQuantity } = require('../../../domain/interactors')
const getCartCompose = require('./get-cart-compose')

module.exports = () => {
  const updateProductQuantity = new UpdateProductQuantity({
    productRepository,
    getCartInteractor: getCartCompose(),
  })

  return updateProductQuantity
}
