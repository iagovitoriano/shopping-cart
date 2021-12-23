const CheckProductAvailableStock = require('./check-product-available-stock')

class UpdateProductQuantity {
  constructor({ productRepository }) {
    this.productRepository = productRepository
  }

  async execute({ cartId, product }) {
    const { sku, quantity } = product

    const checkProductAvailableStock = new CheckProductAvailableStock()

    const productAvailable = await checkProductAvailableStock.execute({
      sku,
      quantity,
    })

    if (!productAvailable.inStock) throw new Error('Product Unavailable')

    await this.productRepository.create({
      ...product,
      cart_id: cartId,
    })
  }
}

module.exports = UpdateProductQuantity
