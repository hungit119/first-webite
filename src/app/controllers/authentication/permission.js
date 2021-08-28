const Users = require('../../../resources/models/user.model')
exports.checkAdmin = async (req,res,next) => {
    const data = res.data;
    const user = await Users.findOne({_id:data._id})
    if(user){
        const role = user.role;
        if(role >= 2){
            next();
        }
        else{
            res.render('error')
        }
    }
}