const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
const User = new Schema({
    username:{
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
        name:{type:String,default:'N/A'},
        age:{type:String,default:'N/A'},
        favorite:{type:String,default:'N/A'},
        img:{type:String,default:'N/A'},
        email:{type:String,default:'N/A'},
        gender:{type:String,default:'N/A'},
    }
},{
    collection:'users'
});
module.exports = mongoose.model('users',User);