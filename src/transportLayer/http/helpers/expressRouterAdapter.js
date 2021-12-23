module.exports = (router) => async (req, res) => {
  const httpRequest = {
    body: req.body,
    params: req.params,
    query: req.query,
  }

  const httpResponse = await router.route(httpRequest)

  res.status(httpResponse.status).json(httpResponse.body)
}
