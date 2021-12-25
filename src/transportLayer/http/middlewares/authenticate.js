const { UnAuthorizedError } = require('../errors')

module.exports = (req, _res, next) => {
  if (!req.headers.authorization)
    throw new UnAuthorizedError('Token Not Provided.')

  const [tokenType, token] = req.headers.authorization.split(' ')
  const validTokenTypes = ['token', 'bearer']

  if (!validTokenTypes.includes(tokenType))
    throw new UnAuthorizedError('Invalid Token Type.')

  if (
    token !==
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  )
    throw new UnAuthorizedError('Invalid Token.')

  const destructuredTokenSample = {
    id: '1f998a63-78af-467c-b3fc-48d8e0f9ead0',
    first_name: 'leta',
    last_name: 'McCullough',
    email: 'leopold.Lueilwitz@hotmail.com',
    document: '26439482033',
    birth_date: '1997-10-17',
    address: {
      street: 'Malibu Point',
      number: '10880',
      complement: 'A',
      neighborhood: 'Central Malibu',
      city: 'Malibu',
      state: 'CA',
      country: 'US',
      zip_code: '24210460',
    },
  }

  req.user = destructuredTokenSample

  next()
}
