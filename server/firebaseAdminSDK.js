const admin = require('firebase-admin');

const serviceAccount = require('./SampaBeer-2e0c90e54c71.json');
const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sampabeer2018.firebaseio.com/"
});

module.exports = firebaseAdmin;
