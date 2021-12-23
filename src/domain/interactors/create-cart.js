class CreateCart {
  constructor({ cartRepository }) {
    this.cartRepository = cartRepository
  }

  async execute({ customer }) {
    const cart = await this.cartRepository.create({ customer })

    return {
      ...cart,
      products: [],
    }
  }
}

module.exports = CreateCart
