const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function run() {
  try {
    // 开启连接
    await client.connect()
    const testDb = client.db('test')
    const runoobCollection = testDb.collection('runoob')
    const ret = await runoobCollection.find()
    
    console.log(await ret.toArray())
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
