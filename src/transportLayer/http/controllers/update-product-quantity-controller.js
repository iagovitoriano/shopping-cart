const status = require('http-status')
const Joi = require('joi')

const { updateProductQuantityCompose } = require('../composers')

class UpdateProductQuantityController {
  async route(httpRequest) {
    const { cartId, id } = httpRequest.params

    const updateProductQuantityInteractor = updateProductQuantityCompose()

    const cart = await updateProductQuantityInteractor.execute({
      cartId,
      product: {
        ...httpRequest.body,
        id,
      },
    })

    return {
      status: status.OK,
      body: cart,
    }
  }

  async getDto() {
    const product = Joi.object({
      quantity: Joi.number().integer().positive().required(),
    })

    return product
  }
}

module.exports = new UpdateProductQuantityController()
