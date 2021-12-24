const CustomError = require('./custom-error')

class InternalServerError extends CustomError {
  constructor(message) {
    super(message)
    this.status = 500
  }
}

module.exports = InternalServerError
