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
                res.redirect('/user/detail')
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
                Users.findById(ketqua._id)
                    .then(data => {
                        res.locals.data = data;
                        next()
                    })
                    .catch(next)
                // next();
            } 
        } catch (error) {
            return res.redirect('/user/login')
        }

    }
    detailUser(req,res,next){
        // const user = res.locals;
        // console.log(typeof user);
        // res.render('person',{user:user.data}) 
        const user = res.locals
        const data = user.data;
        const newData = data.toObject();
        console.log('newData :',newData);
        res.render('person',{newData});
    }
}

module.exports = new UserController