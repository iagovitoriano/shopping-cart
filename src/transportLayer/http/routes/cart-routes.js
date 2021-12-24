const { expressRouterAdapter } = require('../helpers')

const {
  createCartController,
  getCartController,
  addDiscountCoupon,
} = require('../controllers')

module.exports = (router) => {
  router.post('/cart/', expressRouterAdapter(createCartController))
  router.get('/cart/:id', expressRouterAdapter(getCartController))
  router.patch(
    '/cart/:id/discount-coupon',
    expressRouterAdapter(addDiscountCoupon)
  )
}
