const httpStatus = require('http-status')

const CustomError = require('./custom-error')

class InternalServerError extends CustomError {
  constructor(message) {
    super(message)
    this.statusCode = httpStatus.INTERNAL_SERVER_ERROR
  }
}

module.exports = InternalServerError
