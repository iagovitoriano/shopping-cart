const { totalizeProducts, secureTotalizeCart } = require('./helper')

class CalculateTotal {
  execute({ products, discountCoupon, shipping, serviceFee }) {
    const totalProductsValue = totalizeProducts(products)

    const total = secureTotalizeCart({
      products: totalProductsValue,
      shipping,
      serviceFee,
      discountCoupon,
    })

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
