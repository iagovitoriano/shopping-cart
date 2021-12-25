class BaseError extends Error {
  constructor(message) {
    super(message)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.statusCode = null
  }

  statusCode() {
    return this.status
  }
}

module.exports = BaseError
