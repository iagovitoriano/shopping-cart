class ClearCart {
  constructor({ productRepository, getCartInteractor }) {
    this.productRepository = productRepository
    this.getCartInteractor = getCartInteractor
  }

  async execute({ cartId }) {
    await this.productRepository.deleteMany({
      conditions: {
        cart_id: cartId,
      },
    })

    const cart = await this.getCartInteractor.execute({ id: cartId })

    return cart
  }
}

module.exports = ClearCart
