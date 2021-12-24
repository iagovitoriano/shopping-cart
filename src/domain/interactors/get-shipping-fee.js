const { sleep } = require('../helpers')

class GetShippingFee {
  async execute({ storeAddress, customerAddress }) {
    await sleep(100)

    return {
      value: parseFloat((Math.random() * (22 - 5) + 5).toFixed(2)),
    }
  }
}

module.exports = GetShippingFee
