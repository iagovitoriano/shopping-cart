const status = require('http-status')

const { removeProductCompose } = require('../composers')

class RemoveProductController {
  async route(httpRequest) {
    const { cartId, id } = httpRequest.params

    const removeProductInteractor = removeProductCompose()

    const cart = await removeProductInteractor.execute({
      cartId,
      productId: id,
    })

    return {
      status: status.OK,
      body: cart,
    }
  }
}

module.exports = new RemoveProductController()
