require('dotenv').config()

module.exports = {
  port: process.env.PORT || 4033,
  mongoUri: process.env.MONGO_URL || 'mongodb://localhost:27017',
  dbName: process.env.DB_NAME || 'development',
}
