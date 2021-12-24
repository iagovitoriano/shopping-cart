const totalizeProducts = (products) =>
  products.reduce((total, product) => total + product.value, 0)

const secureTotalizeCart = ({
  products,
  shipping,
  serviceFee,
  discountCoupon,
}) => {
  const total = parseFloat(
    (
      products +
      shipping.value +
      serviceFee.value -
      discountCoupon.value
    ).toFixed(2)
  )

  return total >= 0 ? total : 0
}

module.exports = {
  totalizeProducts,
  secureTotalizeCart,
}
