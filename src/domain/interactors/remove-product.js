const RemoveProductProtectionStock = require('./remove-product-protection-stock')

class RemoveProduct {
  constructor({ productRepository, getCartInteractor }) {
    this.productRepository = productRepository
    this.getCartInteractor = getCartInteractor
  }

  async execute({ cartId, product }) {
    const { sku, quantity } = product

    const removeProductProtectionStock = new RemoveProductProtectionStock()

    await removeProductProtectionStock.execute({ sku, quantity })

    await this.productRepository.deleteById({
      id: product.id,
    })

    const cart = await this.getCartInteractor.execute({ id: cartId })

    return cart
  }
}

module.exports = RemoveProduct
