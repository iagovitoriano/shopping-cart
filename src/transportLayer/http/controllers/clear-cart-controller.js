const status = require('http-status')

const { clearCartCompose } = require('../composers')

class ClearCartController {
  async route(httpRequest) {
    const { id } = httpRequest.params

    const clearCartInteractor = clearCartCompose()

    const cart = await clearCartInteractor.execute({
      id,
    })

    return {
      status: status.OK,
      body: cart,
    }
  }
}

module.exports = new ClearCartController()
