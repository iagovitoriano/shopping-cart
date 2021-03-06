const { sleep } = require('../helpers')

class GetServiceFee {
  async execute({ storeId }) {
    await sleep(100)

    return {
      value: parseFloat((Math.random() * (22 - 5) + 5).toFixed(2)),
    }
  }
}

module.exports = GetServiceFee
