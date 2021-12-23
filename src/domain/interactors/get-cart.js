class GetCart {
  constructor({ cartRepository, productRepository }) {
    this.cartRepository = cartRepository
    this.productRepository = productRepository
  }

  async execute({ id }) {
    const cart = await this.cartRepository.findById({ id })
    const products = await this.productRepository.findMany({
      conditions: {
        cart_id: id,
        deleted: false,
      },
    })

    return {
      ...cart,
      products,
    }
  }
}

module.exports = GetCart
