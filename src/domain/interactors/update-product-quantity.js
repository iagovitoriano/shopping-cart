const CheckProductAvailable = require('./check-product-available')
const { ConflictError } = require('../../transportLayer/http/errors')

class UpdateProductQuantity {
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

    await this.productRepository.updateById({
      id: product.id,
      data: productSchema,
    })

    const cart = await this.getCartInteractor.execute({ id: cartId })

    return cart
  }
}

module.exports = UpdateProductQuantity
