const { randomizeStockout } = require('./helper')

class CheckProductAvailableStock {
  async execute() {
    const checkStock = await randomizeStockout(0.4)

    return checkStock
  }
}

module.exports = CheckProductAvailableStock
