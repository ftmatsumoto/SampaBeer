const mongoose = require('mongoose');

const db = require('./connect.js');
const model = require('./model.js');

module.exports = {
  email: {
    addEmail: addEmail
  }
};

function addEmail(email) {
  let newEmail = new model.user({
    _id: new mongoose.Types.ObjectId,
    email: email
  });
  newEmail.save()
    .then((err, email) => {
      return email;
    });
}

