const { expressRouterAdapter } = require('../helpers')

const {
  createCartController,
  getCartController,
  clearCartController,
  addDiscountCoupon,
  addProductController,
  removeProductController,
  updateProductQuantityController,
} = require('../controllers')

module.exports = (router) => {
  router
    .post('/cart/', expressRouterAdapter(createCartController))
    .get('/cart/:id', expressRouterAdapter(getCartController))
    .patch('/cart/:id/clear', expressRouterAdapter(clearCartController))
    .patch('/cart/:id/discount-coupon', expressRouterAdapter(addDiscountCoupon))

  router
    .post('/cart/:cartId/product', expressRouterAdapter(addProductController))
    .patch(
      '/cart/:cartId/product/:id/quantity',
      expressRouterAdapter(updateProductQuantityController)
    )
    .patch(
      '/cart/:cartId/product/:id/clear',
      expressRouterAdapter(removeProductController)
    )
}
