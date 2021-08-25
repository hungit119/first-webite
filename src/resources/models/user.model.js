const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const User = new Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    personalInformations:{
        name:{type:String},
        age:{type:String},
        favorite:{type:String},
        img:{type:String}
    }
},{
    collection:'users'
});
module.exports = mongoose.model('users',User);