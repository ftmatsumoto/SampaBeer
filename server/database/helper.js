const mongoose = require('mongoose');

const db = require('./connect.js');
const model = require('./model.js');

module.exports = {
  user: {
    registerUser: registerUser
  }
};

function registerUser(data) {
  console.log(data);
  let newRegister = new model.user({
    _id: new mongoose.Types.ObjectId,
    full_name: data.fullname,
    email: data.email,
    birthday: data.bday,
    allowed_by_spbeer: false,
    // updated: { type: Date, default: Date.now },
    // indicated_by: { type: Schema.Types.ObjectId, ref: 'User' },
    // uid: { type: String }
  });
  newRegister.save()
    .then((err, user) => {
      return user;
    });
}

