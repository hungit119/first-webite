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
    }
});
User.method.envcryptPassword = function (password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(5),null);
}
User.method.validPassword = function (password) {
 return bcrypt.compareSync(password,this.password);
}
module.exports = mongoose.model('users',User);