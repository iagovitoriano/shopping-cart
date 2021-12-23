class GetCart {
  constructor({
    cartRepository,
    productRepository,
    calculateTotal,
    getShippingFee,
    getServiceFee,
    checkDiscountCoupon,
  }) {
    this.cartRepository = cartRepository
    this.productRepository = productRepository
    this.calculateTotal = calculateTotal
    this.getShippingFee = getShippingFee
    this.getServiceFee = getServiceFee
    this.checkDiscountCoupon = checkDiscountCoupon
  }

  async execute({ id }) {
    const cart = await this.cartRepository.findById({ id })
    const products = await this.productRepository.findMany({
      conditions: {
        cart_id: id,
        deleted: false,
      },
    })
    const discountCoupon = await this.checkDiscountCoupon({
      code: cart.discountCoupon,
    })

    return {
      ...cart,
      products,
      fee: this.calculateTotal.execute({
        products,
        discountCoupon,
        shipping: this.getShippingFee.execute({
          storeAddress: cart.store.address,
          customerAddress: cart.customer.address,
        }),
        serviceFee: this.getServiceFee.execute({
          storeId: cart.store.id,
        }),
      }),
    }
  }
}

module.exports = GetCart
