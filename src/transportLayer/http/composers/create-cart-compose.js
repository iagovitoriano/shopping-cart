const { cartRepository } = require('./repositories')
const { CreateCart } = require('../../../domain/interactors')
const getCartCompose = require('./get-cart-compose')

module.exports = () => {
  const createCartInteractor = new CreateCart({
    cartRepository,
    getCartInteractor: getCartCompose(),
  })

  return createCartInteractor
}
