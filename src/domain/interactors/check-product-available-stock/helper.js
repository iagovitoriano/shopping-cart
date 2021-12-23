const randomizeStockout = (percent) => {
  let inStock

  if (Math.random() < percent) inStock = false
  else inStock = true

  return {
    inStock,
  }
}

module.exports = {
  randomizeStockout,
}
