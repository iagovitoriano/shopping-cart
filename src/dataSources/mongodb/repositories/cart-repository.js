const BaseRepository = require('./base-repository')

class CartRepository extends BaseRepository {
  constructor({ model }) {
    super({ model })
  }
}

module.exports = CartRepository
