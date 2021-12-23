class GetCart {
  constructor({ cartRepository, productRepository }) {
    this.cartRepository = cartRepository
    this.productRepository = productRepository
  }

  async execute({ id }) {
    const cart = await this.cartRepository.findById({ id })

    return {
      ...cart,
    }
  }
}

module.exports = GetCart
