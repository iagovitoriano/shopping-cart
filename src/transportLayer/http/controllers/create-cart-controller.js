const status = require('http-status')

const { createCartCompose } = require('../composers')

class CreateCartController {
  async route(httpRequest) {
    const { customer, store } = httpRequest.body

    const createCartInteractor = createCartCompose()

    const cart = await createCartInteractor.execute({
      customer,
      store,
    })

    return {
      status: status.CREATED,
      body: cart,
    }
  }
}

module.exports = new CreateCartController()
