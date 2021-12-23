const { securityHeaders, bodyParser, cors } = require('../middlewares')

module.exports = (app) => {
  app.use(securityHeaders)
  app.use(bodyParser)
  app.use(cors)
}
