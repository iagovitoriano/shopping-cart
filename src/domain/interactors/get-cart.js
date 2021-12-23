class GetCart {
  constructor({ cartRepository }) {
    this.cartRepository = cartRepository
  }

  async execute({ id }) {
    const cart = await this.cartRepository.findById({ id })

    return {
      ...cart,
    }
  }
}

module.exports = GetCart
