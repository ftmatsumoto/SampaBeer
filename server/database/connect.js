const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const uri = process.env.MONGODB_URI || 'mongodb://localhost/sampabeer';
// console.log(process.env.MONGODB_URI);

mongoose.connect(uri);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
});

module.exports = db;
