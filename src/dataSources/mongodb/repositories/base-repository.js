const { ObjectId } = require('mongodb')

class BaseRepository {
  constructor({ model }) {
    this.model = model
  }

  formatResponse(data) {
    const { _id, ...entity } = data

    return {
      ...entity,
      id: _id.toString(),
    }
  }

  async findById({ id }) {
    const document = await this.model.findOne({ _id: ObjectId(id) })

    return this.formatResponse(document)
  }

  async create({ data }) {
    await this.model.insertOne(data)

    return this.formatResponse(data)
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
