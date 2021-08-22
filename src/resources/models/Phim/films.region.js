const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmsRegion = new Schema({
    region:{
        type:String,
        required:true,
        unique:true
    }
});
module.exports = mongoose.model('FilmsRegion',FilmsRegion,'filmsRegions')