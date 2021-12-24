class AddDiscountCoupon {
  constructor({ cartRepository, checkDiscountCoupon, getCartInteractor }) {
    this.cartRepository = cartRepository
    this.checkDiscountCoupon = checkDiscountCoupon
    this.getCartInteractor = getCartInteractor
  }

  async execute({ cartId, code }) {
    await this.checkDiscountCoupon.execute({
      code,
    })

    await this.cartRepository.updateById(
      {
        id: cartId,
      },
      {
        discount_coupon: code,
      }
    )

    const cart = await this.getCartInteractor.execute({ id: cartId })

    return cart
  }
}

module.exports = AddDiscountCoupon
