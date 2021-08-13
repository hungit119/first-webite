
class UserController{
    index(req,res){
        res.render('user')
    }
    detail(req,res){
        res.render('detail')
    }
}

module.exports = new UserController