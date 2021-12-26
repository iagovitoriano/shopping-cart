const status = require('http-status')
const Joi = require('joi')

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

  async getDto() {
    const product = Joi.object({
      product_id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
      external_id: Joi.string().min(1).max(10).required(),
      sku: Joi.string(),
      name: Joi.string().min(2).max(30).required(),
      description: Joi.string().min(2).max(30).required(),
      quantity: Joi.number().integer().positive().required(),
      value: Joi.number().positive().precision(2).required(),
      tags: Joi.array().items(Joi.string()),
      created_at: Joi.date().required(),
      updated_at: Joi.date().required(),
      published_at: Joi.date().required(),
      images: Joi.array().items(Joi.string().uri()),
      variants: Joi.array().items(Joi.object().unknown()),
    })

    return product
  }
}

module.exports = new AddProductController()
