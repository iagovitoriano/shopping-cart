const { Router } = require('express')

const { cartRoutes } = require('../routes')

module.exports = (app) => {
  const router = Router()

  app.use('/api/v1', router)

  cartRoutes(router)
}
