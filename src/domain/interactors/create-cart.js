class CreateCart {
  constructor({ cartRepository, getCartInteractor }) {
    this.cartRepository = cartRepository
    this.getCartInteractor = getCartInteractor
  }

  async execute({ customer, store }) {
    const { id } = await this.cartRepository.create({
      data: {
        customer,
        store,
      },
    })

    const cart = await this.getCartInteractor.execute({ id })

    return cart
  }
}

module.exports = CreateCart
