const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmsYear = new Schema({
    year:{
        type:String,
        required:true,
        unique:true
    }
});
module.exports = mongoose.model('FilmsYear',FilmsYear,'filmsYear')