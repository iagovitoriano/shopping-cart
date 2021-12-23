const BaseRepository = require('./base-repository')

class ProductRepository extends BaseRepository {
  constructor({ model }) {
    super({ model })
  }
}

module.exports = ProductRepository
