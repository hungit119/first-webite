const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmsCategory = new Schema({
    category:{
        type:String,
        required:true,
        unique:true
    }
});
module.exports = mongoose.model('FilmsCategory',FilmsCategory,'filmsCategory')