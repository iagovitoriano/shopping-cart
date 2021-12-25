const securityHeaders = require('./security-headers')
const bodyParser = require('./body-parser')
const cors = require('./cors')
const authenticate = require('./authenticate')

module.exports = {
  securityHeaders,
  bodyParser,
  cors,
  authenticate,
}
