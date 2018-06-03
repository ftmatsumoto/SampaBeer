const admin = require('firebase-admin');

const serviceAccount = require('./SampaBeer-c32b7eec86f5.json');
const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sampabeer2018.firebaseio.com/"
});

module.exports = firebaseAdmin;
