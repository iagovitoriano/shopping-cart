const CheckProductAvailable = require('./check-product-available')
const {
  ConflictError,
  NotFoundError,
} = require('../../transportLayer/http/errors')

class UpdateProductQuantity {
  constructor({ productRepository, getCartInteractor }) {
    this.productRepository = productRepository
    this.getCartInteractor = getCartInteractor
  }

  async execute({ cartId, product }) {
    const { quantity } = product

    const productData = await this.productRepository.findByKeys({
      conditions: {
        id: product.id,
        cart_id: cartId,
        deleted: false,
      },
    })

    if (!productData) throw new NotFoundError('Product Not Exists.')

    const { external_id, sku } = productData

    const checkProductAvailable = new CheckProductAvailable()

    const productAvailable = await checkProductAvailable.execute({
      external_id,
      sku,
      quantity,
    })

    if (!productAvailable.inStock || productAvailable.disabled)
      throw new ConflictError('Product Unavailable')

    await this.productRepository.updateById({
      id: product.id,
      data: {
        quantity,
      },
    })

    const cart = await this.getCartInteractor.execute({ id: cartId })

    return cart
  }
}

module.exports = UpdateProductQuantity
