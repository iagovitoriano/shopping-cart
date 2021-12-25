const httpStatus = require('http-status')

const CustomError = require('./custom-error')

class BadRequest extends CustomError {
  constructor(message) {
    super(message)
    this.statusCode = httpStatus.BAD_REQUEST
  }
}

module.exports = BadRequest
