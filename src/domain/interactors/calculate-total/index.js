const { totalizeProducts } = require('./helper')

class CalculateTotal {
  execute({ products, discountCoupon, shipping, serviceFee }) {
    const totalProductsValue = totalizeProducts(products)

    const total = parseFloat(
      (
        totalProductsValue +
        shipping.value +
        serviceFee.value -
        discountCoupon.value
      ).toFixed(2)
    )

    return {
      subTotal: totalProductsValue,
      shipping: shipping.value,
      service_fee: serviceFee.value,
      discount_coupon: discountCoupon.value,
      total,
    }
  }
}

module.exports = CalculateTotal
