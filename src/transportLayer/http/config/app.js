const express = require('express')

require('express-async-errors')

const setupMiddlewares = require('./setup-middlewares')
const setupRouter = require('./setup-router')
const errorHandler = require('../middlewares/error-handler')

const app = express()

setupMiddlewares(app)
setupRouter(app)
app.use(errorHandler)

module.exports = app
