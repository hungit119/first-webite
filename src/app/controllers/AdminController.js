const Users = require('../../resources/models/user.model') 
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

class AdminController {
    index(req,res,next){
        console.log("req.data =");
        console.log(req.data);
        res.render('role/admin')
    }
    index1(req,res,next){
        res.json({message:'page manager'})
    }
    index2(req,res,next){
        res.json({messdage:'page check uer'})
    }
}

module.exports = new AdminController