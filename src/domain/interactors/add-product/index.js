const CheckProductAvailableStock = require('../check-product-available-stock')

class AddProduct {
  constructor({ cartRepository, productRepository }) {
    this.cartRepository = cartRepository
    this.productRepository = productRepository
  }

  async execute({ cartId, product }) {
    const checkProductAvailableStock = new CheckProductAvailableStock()

    const productAvailable = await checkProductAvailableStock.execute({
      sku: product.sku,
    })

    if (!productAvailable.inStock) throw new Error('Product Unavailable')

    await this.productRepository.create({
      ...product,
      cartId,
    })

    const cart = await this.cartRepository.getById({ id: cartId })

    return cart
  }
}

module.exports = AddProduct
