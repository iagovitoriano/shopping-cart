const httpStatus = require('http-status')

const CustomError = require('./custom-error')

class ConflictError extends CustomError {
  constructor(message) {
    super(message)
    this.statusCode = httpStatus.CONFLICT
  }
}

module.exports = ConflictError
