const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },

  fullName: {
    type: String,
    required: false,
  },

  gender: {
    type: Boolean,
    default: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('User', UserSchema, 'users');
