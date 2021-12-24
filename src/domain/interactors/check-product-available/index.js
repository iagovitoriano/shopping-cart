const { randomizeAvailable } = require('./helper')

class CheckProductAvailable {
  async execute() {
    const checkAvailable = await randomizeAvailable(0.4)

    return checkAvailable
  }
}

module.exports = CheckProductAvailable
