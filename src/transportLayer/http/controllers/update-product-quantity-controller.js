const status = require('http-status')

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
}

module.exports = new UpdateProductQuantityController()
