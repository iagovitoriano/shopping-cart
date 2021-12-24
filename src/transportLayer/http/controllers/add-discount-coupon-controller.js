const status = require('http-status')

const { addDiscountCouponCompose } = require('../composers')

class AddDiscountCouponController {
  async route(httpRequest) {
    const { id } = httpRequest.params
    const { code } = httpRequest.body

    const addDiscountCouponInteractor = await addDiscountCouponCompose()

    await addDiscountCouponInteractor.execute({
      cartId: id,
      code,
    })

    return {
      status: status.NO_CONTENT,
    }
  }
}

module.exports = new AddDiscountCouponController()
