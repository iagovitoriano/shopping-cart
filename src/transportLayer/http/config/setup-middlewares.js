const {
  securityHeaders,
  bodyParser,
  cors,
  authenticate,
} = require('../middlewares')

module.exports = (app) => {
  app.use(securityHeaders)
  app.use(bodyParser)
  app.use(cors)
  app.use(authenticate)
}
