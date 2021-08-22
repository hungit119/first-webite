const mongoose = require('mongoose');
const filmsType = require('./films.type');

const FilmsSchema = new mongoose.Schema({
  theLoai: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FilmsType',
    required: true,
  },
  quocGia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FilmsRegion',
    required: true,
  },
  namSuatBan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FilmsYear',
    required: true,
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FilmsCategory',
    required: true,
  },
  name: {
    type: String,
    default: "N/A"
  },
  img: {
    type: String,
    default: "N/A"
  },
  rate: {
    type: String,
    default: "N/A"
  },
  thoiLuong: {
    type: String,
    default: "N/A"
  },
  trailer: {
    type: String,
    default: "N/A"
  },
  full: {
    type: String,
    default: "N/A"
  },
  moTa: {
    type: String,
    default: "N/A"
  },
  daoDien: {
    type: String,
    default: "N/A"
  },
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

module.exports = mongoose.model('Films', FilmsSchema, 'films');