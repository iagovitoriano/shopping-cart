const MongoDB = require('../../../dataSources/mongodb')
const {
  CartRepository,
  ProductRepository,
} = require('../../../dataSources/mongodb/repositories')

const { db } = MongoDB

module.exports = {
  cartRepository: new CartRepository({
    model: db.collection('cart'),
  }),
  productRepository: new ProductRepository({
    model: db.collection('cart_products'),
  }),
}
