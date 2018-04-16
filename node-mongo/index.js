const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/database1';

MongoClient.connect(url, (err, db) => {


    console.log('Connected correctly to server');


});