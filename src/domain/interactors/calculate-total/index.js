const { totalizeProducts } = require('./helper')

class CalculateTotal {
  execute({ products, discountCoupon, shipping, serviceFee }) {
    const totalProductsValue = totalizeProducts(products)

    const total = totalProductsValue + shipping + serviceFee - discountCoupon

    return {
      subTotal: totalProductsValue,
      shipping,
      serviceFee,
      discountCoupon,
      total,
    }
  }
}

module.exports = CalculateTotal
