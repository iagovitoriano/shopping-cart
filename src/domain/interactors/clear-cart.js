class ClearCart {
  constructor({ productRepository }) {
    this.productRepository = productRepository
  }

  async execute({ cartId }) {
    const cart = await this.productRepository.deleteMany({
      conditions: {
        cart_id: cartId,
      },
    })

    return cart
  }
}

module.exports = ClearCart
