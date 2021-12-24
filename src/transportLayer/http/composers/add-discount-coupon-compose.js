const { cartRepository } = require('./repositories')
const {
  AddDiscountCoupon,
  CheckDiscountCoupon,
} = require('../../../domain/interactors')
const getCartCompose = require('./get-cart-compose')

module.exports = () => {
  const checkDiscountCoupon = new CheckDiscountCoupon()

  const addDiscountCoupon = new AddDiscountCoupon({
    cartRepository,
    checkDiscountCoupon,
    getCartInteractor: getCartCompose(),
  })

  return addDiscountCoupon
}
