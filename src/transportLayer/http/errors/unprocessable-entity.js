const CustomError = require('./custom-error')

class UnprocessableEntityError extends CustomError {
  constructor(message) {
    super(message)
    this.status = 409
  }
}

module.exports = UnprocessableEntityError
