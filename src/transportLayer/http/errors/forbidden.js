const httpStatus = require('http-status')

const CustomError = require('./custom-error')

class ForbiddenError extends CustomError {
  constructor(message) {
    super(message)
    this.statusCode = httpStatus.FORBIDDEN
  }
}

module.exports = ForbiddenError
