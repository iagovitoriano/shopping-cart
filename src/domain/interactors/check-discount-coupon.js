const { sleep } = require('../helpers')

class CheckDiscountCoupon {
  async execute({ code }) {
    if (code !== 'NATAL2021')
      return {
        value: 0,
      }

    await sleep(1500)

    return {
      value: parseFloat((Math.random() * (22 - 5) + 5).toFixed(2)),
    }
  }
}

module.exports = CheckDiscountCoupon
