const {MongoClient} = require('mongodb');
const dburl = 'mongodb://localhost:27017';
const dbname = 'ts_node';


async function connectDB() {
    const client = new MongoClient(dburl);
    await client.connect();
    // console.log('ket noi thanh cong');
    return client.db(dbname);
}


module.exports = connectDB;