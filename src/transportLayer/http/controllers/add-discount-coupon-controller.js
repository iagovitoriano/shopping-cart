const status = require('http-status')

const { addDiscountCouponCompose } = require('../composers')

class AddDiscountCouponController {
  async route(httpRequest) {
    const { id } = httpRequest.params
    const { code } = httpRequest.body

    const addDiscountCouponInteractor = await addDiscountCouponCompose()

    const cart = await addDiscountCouponInteractor.execute({
      cartId: id,
      code,
    })

    return {
      status: status.OK,
      body: cart,
    }
  }
}

module.exports = new AddDiscountCouponController()
