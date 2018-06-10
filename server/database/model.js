const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  full_name: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  birthday: {type: String, required: false, unique: false},
  updated: { type: Date, default: Date.now },
  indicated_by: { type: Schema.Types.ObjectId, ref: 'User' }
});
let User = mongoose.model('User', userSchema)

module.exports = {
  user: User
};
