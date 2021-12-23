const MongoDB = require('../../dataSources/mongodb')
const { port, mongoUri, dbName } = require('./config/env')
const app = require('./config/app')

MongoDB.connect({
  uri: mongoUri,
  dbName,
})
  .then(() => {
    app.listen(port, () => console.log(`Server running at PORT ${port}`))
  })
  .catch(console.error)
