const { sleep } = require('../helpers')

class GetServiceFee {
  async execute({ code }) {
    await sleep(1500)

    return {
      value: parseFloat((Math.random() * (22 - 5) + 5).toFixed(2)),
    }
  }
}

module.exports = GetServiceFee
