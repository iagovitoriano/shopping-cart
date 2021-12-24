const RemoveProductProtectionStock = require('./remove-product-protection-stock')

class RemoveProduct {
  constructor({ productRepository, getCartInteractor }) {
    this.productRepository = productRepository
    this.getCartInteractor = getCartInteractor
  }

  async execute({ cartId, productId }) {
    const product = await this.productRepository.findById({ id: productId })
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
