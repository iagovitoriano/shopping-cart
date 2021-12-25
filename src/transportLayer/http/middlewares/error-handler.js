const { InternalServerError } = require('../errors')

module.exports = (err, _req, res, _next) => {
  let error = err

  if (!error.statusCode)
    error = new InternalServerError('Internal Server Error.')

  return res.status(error.statusCode).json({
    name: error.name,
    status_code: error.statusCode,
    message: error.message,
  })
}
