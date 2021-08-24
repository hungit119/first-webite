const films = require('../../resources/models/Phim/films');
class UserController {
    // [GET] /user
    index(req, res, next) {
        res.render('authentication/index')
    }
    login(req,res,next){
        res.render('authentication/userlogin')
    }
    signUp(req,res,next){
        res.render('authentication/userSignUp')
    }
}

module.exports = new UserController