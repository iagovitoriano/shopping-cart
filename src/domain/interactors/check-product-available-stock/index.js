const { randomizeStockout } = require('./helper')

class CheckProductAvailableStock {
  async execute({ sku }) {
    const checkStock = randomizeStockout(0.4)

    return checkStock
  }
}

module.exports = CheckProductAvailableStock
