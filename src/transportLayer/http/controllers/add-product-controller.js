const status = require('http-status')

const { addProductCompose } = require('../composers')

class AddProductController {
  async route(httpRequest) {
    const { cartId } = httpRequest.params

    const addProductInteractor = addProductCompose()

    const cart = await addProductInteractor.execute({
      cartId,
      product: httpRequest.body,
    })

    return {
      status: status.OK,
      body: cart,
    }
  }
}

module.exports = new AddProductController()
