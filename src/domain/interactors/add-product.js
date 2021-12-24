const CheckProductAvailable = require('./check-product-available')
const { ConflictError } = require('../../transportLayer/http/errors')

class AddProduct {
  constructor({ productRepository, getCartInteractor }) {
    this.productRepository = productRepository
    this.getCartInteractor = getCartInteractor
  }

  async execute({ cartId, product }) {
    const { external_id, sku, quantity } = product

    const checkProductAvailable = new CheckProductAvailable()

    const productAvailable = await checkProductAvailable.execute({
      external_id,
      sku,
      quantity,
    })

    if (!productAvailable.inStock || productAvailable.disabled)
      throw new ConflictError('Product Unavailable')

    const productSchema = {
      ...product,
      cart_id: cartId,
    }

    const productAlreadyExists = await this.productRepository.findByKeys({
      conditions: {
        product_id: productSchema.product_id,
        deleted: false,
      },
    })

    if (!productAlreadyExists)
      await this.productRepository.create({
        data: productSchema,
      })

    const cart = await this.getCartInteractor.execute({ id: cartId })

    return cart
  }
}

module.exports = AddProduct
