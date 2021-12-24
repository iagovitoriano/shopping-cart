const { sleep } = require('../../helpers')

const randomizeAvailable = async (percent) => {
  await sleep(100)

  let inStock

  if (Math.random() < percent) inStock = false
  else inStock = true

  return {
    inStock,
    disabled: false,
  }
}

module.exports = {
  randomizeAvailable,
}
