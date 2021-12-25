const httpStatus = require('http-status')

const CustomError = require('./custom-error')

class UnprocessableEntityError extends CustomError {
  constructor(message) {
    super(message)
    this.statusCode = httpStatus.UNPROCESSABLE_ENTITY
  }
}

module.exports = UnprocessableEntityError
