const RemoveProductProtectionStock = require('./remove-product-protection-stock')
const { NotFoundError } = require('../../transportLayer/http/errors')

class RemoveProduct {
  constructor({ productRepository, getCartInteractor }) {
    this.productRepository = productRepository
    this.getCartInteractor = getCartInteractor
  }

  async execute({ cartId, productId }) {
    const product = await this.productRepository.findByKeys({
      conditions: {
        id: productId,
        cart_id: cartId,
        deleted: false,
      },
    })

    if (!product) throw new NotFoundError('Product Not Exists.')

    const { sku, quantity } = product

    await this.productRepository.deleteById({
      id: product.id,
    })

    const removeProductProtectionStock = new RemoveProductProtectionStock()
    await removeProductProtectionStock.execute({ sku, quantity })

    const cart = await this.getCartInteractor.execute({ id: cartId })

    return cart
  }
}

module.exports = RemoveProduct
