const status = require('http-status')
const Joi = require('joi')

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

  async getDto() {
    const address = Joi.object({
      street: Joi.string().min(3).max(30).required(),
      number: Joi.number().integer().positive().required(),
      complement: Joi.string().min(1).max(30),
      neighborhood: Joi.string().min(3).max(30).required(),
      city: Joi.string().min(3).max(30).required(),
      state: Joi.string().length(2).required(),
      country: Joi.string().min(2).max(30).required(),
      zip_code: Joi.string()
        .pattern(/^[0-9]+$/, 'numbers')
        .length(8)
        .required(),
    })

    const customer = Joi.object({
      id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      first_name: Joi.string().min(1).max(30).required(),
      last_name: Joi.string().min(1).max(30).required(),
      email: Joi.string().email(),
      document: Joi.string(),
      birth_date: Joi.date().required(),
      address,
    })

    const store = Joi.object({
      id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      external_id: Joi.string().min(1).max(10).required(),
      name: Joi.string().min(2).max(30).required(),
      address,
    })

    return Joi.object({
      customer,
      store,
    })
  }
}

module.exports = new CreateCartController()
