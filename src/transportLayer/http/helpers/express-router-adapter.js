const { UnprocessableEntityError } = require('../errors')

module.exports = (router) => async (req, res) => {
  const httpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
  }

  if (router.getDto) {
    const dto = await router.getDto()

    try {
      await dto.validateAsync(httpRequest.body, {
        abortEarly: false,
      })
    } catch (err) {
      throw new UnprocessableEntityError('Invalid Schema')
    }
  }

  const httpResponse = await router.route(httpRequest)

  res.status(httpResponse.status).json(httpResponse.body)
}
