const Users = require('../../resources/models/user.model') 
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

class UserController {
    // [GET] /user
    index(req, res, next) {
        res.render('authentication/index')
    }
    //[GET] /user/login
    login(req,res,next){
        res.render('authentication/userlogin')
    }
    signUp(req,res,next){
        res.render('authentication/userSignUp')
    }
    //[POST] /user/login
    datalogin(req,res,next){
        const email = req.body.email;
        const password = req.body.password;
        Users.findOne({
            email:email,
            password:password,
        })
        .then(data =>{
            if(data){
                const token = jwt.sign({_id:data._id},'mk');
                res.cookie('token', token)
                res.redirect('/user')
            }
            else{
                res.json({messageErr:'Tài khoản không tồn tại'})
            }
        })
        .catch(next)
    }
    detailUser(req,res,next){
        const data = res.data
        console.log(data._id);
        res.render('person',{newData:data.toObject()})
    }
}

module.exports = new UserController