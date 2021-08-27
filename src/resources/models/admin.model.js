const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const Admin = new Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        default:'admin',
        type:String,
        required:true,
    },
},{
    collection:'admins'
});
module.exports = mongoose.model('admins',Admin);