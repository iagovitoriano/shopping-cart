const { productRepository } = require('./repositories')
const { ClearCart } = require('../../../domain/interactors')
const getCartCompose = require('./get-cart-compose')

module.exports = () => {
  const clearCart = new ClearCart({
    productRepository,
    getCartInteractor: getCartCompose(),
  })

  return clearCart
}
