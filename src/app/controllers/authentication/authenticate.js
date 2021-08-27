const Users = require('../../../resources/models/user.model')
const jwt = require('jsonwebtoken')
exports.checkLog = async (req,res,next) => {
    try {
        const token = req.cookies.token;
        const result = jwt.verify(token,'mk');
        Users.findOne({_id:result._id})
            .then(data => {
                if(data){
                    res.data = data
                    next();
                }
                else{
                    res.json({message:'data không hợp lệ'})
                }
            })
            .catch(next);
    } catch (error) {
        res.redirect('/user/login')
    }
}