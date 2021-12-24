const status = require('http-status')

const { getCartCompose } = require('../composers')

class GetCartController {
  async route(httpRequest) {
    const { id } = httpRequest.params

    const getCartInteractor = getCartCompose()

    const cart = await getCartInteractor.execute({
      id,
    })

    return {
      status: status.OK,
      body: cart,
    }
  }
}

module.exports = new GetCartController()
