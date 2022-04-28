const { MongoClient, ObjectId } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function run() {
  try {
    // 开启连接
    await client.connect()
    const testDb = client.db('test')
    const runoobCollection = testDb.collection('runoob')

    // 创建文档
    // const ret = await runoobCollection.insertOne({
    //   a: 1,
    //   b: '2',
    //   c: true,
    //   d: [1, 2, 3]
    // })
    // console.log(ret)

    // 查询文档
    // const ret = await runoobCollection.findOne({
    //   name: 'jcak'
    // })
    // find() ret.toArray()
    // findOne() ret
    // console.log(ret)
    // console.log(await ret.toArray())

    // 删除文档
    // const ret = await runoobCollection.deleteOne({
    //   _id: ObjectId('626a404f733b000012000242')
    // })
    // console.log(ret)

    // 更新文档
    const ret = await runoobCollection.updateOne({
      _id: ObjectId('626a418f5ddad84298bf5e0a')
    }, {
      $set: {
        "b": 'bb3',
        "name": 'john'
      }
    })
    console.log(ret)

  } catch (err) {
    // 连接失败
    console.log('连接失败', err)
  } finally {
    // 断开连接
    await client.close()
  }
}

run()

// // 开启连接
// client.connect().then(() => {
//   // 连接成功
// }).catch(() => {
//   console.log('连接失败')
// })
