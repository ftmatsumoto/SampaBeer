const admin = require('firebase-admin');
let serviceAccount;

if (process.env.FIREBASE_PVT_KEY_ID) {
  serviceAccount = {
    "type": "service_account",
    "project_id": "sampabeer2018",
    "private_key_id": process.env.FIREBASE_PVT_KEY_ID,
    "private_key": JSON.parse(process.env.FIREBASE_PVT_KEY),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
  }
} else {
  serviceAccount = require('./SampaBeer-c32b7eec86f5.json');
}
const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sampabeer2018.firebaseio.com/"
});

module.exports = firebaseAdmin;
