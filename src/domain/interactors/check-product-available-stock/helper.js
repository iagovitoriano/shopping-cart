const { sleep } = require('../../helpers')

const randomizeStockout = async (percent) => {
  await sleep(1500)

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
