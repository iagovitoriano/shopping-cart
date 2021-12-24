const { cartRepository, productRepository } = require('./repositories')
const {
  GetCart,
  CalculateTotal,
  CheckDiscountCoupon,
  GetServiceFee,
  GetShippingFee,
} = require('../../../domain/interactors')

module.exports = () => {
  const calculateTotal = new CalculateTotal()
  const checkDiscountCoupon = new CheckDiscountCoupon()
  const getServiceFee = new GetServiceFee()
  const getShippingFee = new GetShippingFee()

  const getCartInteractor = new GetCart({
    cartRepository,
    productRepository,
    calculateTotal,
    checkDiscountCoupon,
    getServiceFee,
    getShippingFee,
  })

  return getCartInteractor
}
