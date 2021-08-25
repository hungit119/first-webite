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
                res.json({
                    message:'Bạn đã đăng nhập thành công',
                    token:token
                });
            }
            else{
                res.json({messageErr:'Tài khoản không tồn tại'})
            }
        })
        .catch(next)
    }
    check(req,res,next){
        try {
            var token = req.cookies.token;
            var ketqua = jwt.verify(token,'mk')   
            if(ketqua){
                next();
            } 
        } catch (error) {
            return res.redirect('/user/login')
        }

    }
    detailUser(req,res,next){
        res.json({message:'Trang detail chỉ cho người đã đăng nhập vào !!!!'})
    }
}

module.exports = new UserController