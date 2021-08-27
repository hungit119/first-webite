const Users = require('../../resources/models/user.model') 
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

class AdminController {
    async index(req,res,next){
        console.log("req.data =");
        const users = await Users.find({}) 
        const totaluser = await Users.find({})
            .count(); 

        const user = users.map(data => {
            return data.toObject();
        })
        res.render('role/admin',{
            users:user,
            count:totaluser
        })
    }
    deleteUser(req,res,next) {
        const userId = req.params.id;
        Users.deleteOne({_id:userId})
            .then(data => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = new AdminController