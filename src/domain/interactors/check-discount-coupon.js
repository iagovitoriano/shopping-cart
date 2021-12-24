const { sleep } = require('../helpers')

class CheckDiscountCoupon {
  async execute({ code }) {
    if (code !== 'NATAL2021')
      return {
        value: 0,
      }

    await sleep(100)

    return {
      value: parseFloat((Math.random() * (7 - 2) + 2).toFixed(2)),
    }
  }
}

module.exports = CheckDiscountCoupon
