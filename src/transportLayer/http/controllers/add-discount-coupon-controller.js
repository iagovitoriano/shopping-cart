const status = require('http-status')
const Joi = require('joi')

const { addDiscountCouponCompose } = require('../composers')

class AddDiscountCouponController {
  async route(httpRequest) {
    const { id } = httpRequest.params
    const { code } = httpRequest.body

    const addDiscountCouponInteractor = addDiscountCouponCompose()

    const cart = await addDiscountCouponInteractor.execute({
      cartId: id,
      code,
    })

    return {
      status: status.OK,
      body: cart,
    }
  }

  async getDto() {
    return Joi.object({
      code: Joi.string().min(4).max(16).required(),
    })
  }
}

module.exports = new AddDiscountCouponController()
