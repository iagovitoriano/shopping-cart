const httpStatus = require('http-status')

const CustomError = require('./custom-error')

class UnAuthorizedError extends CustomError {
  constructor(message) {
    super(message)
    this.statusCode = httpStatus.UNAUTHORIZED
  }
}

module.exports = UnAuthorizedError
