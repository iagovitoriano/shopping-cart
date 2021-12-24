const { ObjectId } = require('mongodb')

class BaseRepository {
  constructor({ model }) {
    this.model = model
  }

  formatResponse({ response }) {
    if (Array.isArray(response))
      return response.map((item) => this.setSchema({ data: item }))

    return this.setSchema({ data: response })
  }

  setSchema({ data }) {
    const { _id, deleted, ...entity } = data

    return {
      ...entity,
      id: _id.toString(),
    }
  }

  async findById({ id }) {
    const document = await this.model.findOne({ _id: ObjectId(id) })

    return this.formatResponse({ response: document })
  }

  async findMany({ conditions }) {
    const documents = await this.model.find({ ...conditions }).toArray()

    return this.formatResponse({ response: documents })
  }

  async create({ data }) {
    const payload = {
      ...data,
      deleted: false,
    }

    await this.model.insertOne(payload)

    return this.formatResponse({ response: payload })
  }

  async updateById({ id, data }) {
    await this.model.updateOne({ _id: ObjectId(id) }, { $set: { ...data } })

    const document = await this.findById({ id })

    return document
  }

  async updateMany({ conditions, data }) {
    await this.model.updateMany({ ...conditions }, { $set: { ...data } })
  }

  async deleteById({ id }) {
    await this.updateById({
      id,
      data: {
        deleted: true,
      },
    })
  }

  async deleteMany({ conditions }) {
    await this.updateMany({
      conditions,
      data: {
        deleted: true,
      },
    })
  }
}

module.exports = BaseRepository
