class ClearCart {
  constructor({ productRepository, getCartInteractor }) {
    this.productRepository = productRepository
    this.getCartInteractor = getCartInteractor
  }

  async execute({ id }) {
    await this.productRepository.deleteMany({
      conditions: {
        cart_id: id,
      },
    })

    const cart = await this.getCartInteractor.execute({ id })

    return cart
  }
}

module.exports = ClearCart
