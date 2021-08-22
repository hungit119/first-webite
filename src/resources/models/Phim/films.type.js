const mongoose = require('mongoose');

const FilmsTypeSchema = new mongoose.Schema({
  Tenloai: {
    type: String,
    unique: true,
    required: true,
  },

});

module.exports = mongoose.model('FilmsType', FilmsTypeSchema, 'filmstype');
