const express = require('express')

require('express-async-errors')

const setupMiddlewares = require('./setup-middlewares')
const setupRouter = require('./setup-router')

const app = express()

setupMiddlewares(app)
setupRouter(app)

module.exports = app
