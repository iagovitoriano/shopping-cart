const RemoveProductProtectionStock = require('./remove-product-protection-stock')

class RemoveProduct {
  constructor({ productRepository }) {
    this.productRepository = productRepository
  }

  async execute({ cartId, product }) {
    const { sku, quantity } = product

    const removeProductProtectionStock = new RemoveProductProtectionStock()

    await removeProductProtectionStock.execute({ sku, quantity })

    await this.productRepository.deleteById({
      id: product.id,
    })
  }
}

module.exports = RemoveProduct
