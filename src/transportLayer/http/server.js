const MongoDB = require('../../dataSources/mongodb')
const { port, mongoUri, dbName } = require('./config/env')

MongoDB.connect({
  uri: mongoUri,
  dbName,
})
  .then(() => {
    const app = require('./config/app')

    app.listen(port, () => console.log(`Server running at PORT ${port}`))
  })
  .catch(console.error)
