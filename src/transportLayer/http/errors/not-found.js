const httpStatus = require('http-status')

const CustomError = require('./custom-error')

class NotFoundError extends CustomError {
  constructor(message) {
    super(message)
    this.statusCode = httpStatus.NOT_FOUND
  }
}

module.exports = NotFoundError
