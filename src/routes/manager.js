const express = require('express');
const route = express.Router();
const adminController = require('../app/controllers/AdminController')
const jwt = require('jsonwebtoken')
const Users = require('../resources/models/user.model')

var checkLog = (req,res,next) => {
    try {
        const token = req.cookies.token;
        var userId = jwt.verify(token,'mk')
        Users.findOne({
            _id:userId
        })
        .then(data => {
            if(data){
                req.data = data;
                next()
            }
            else{
                res.json({message:'Khong ton tai tai khoan trong database'})
            }
        })
        .catch(next);
    } catch (error) {
        res.json({message:'Loi token hoac khong co token'})
    }
}
var checkUser = (req,res,next) => {
    const role = req.data.role;
    if( role === 'user' || role === 'admin' || role === 'manager'){
        next()
    }
    else{
        res.json({message:'Not permission'})
    }
}
var checkmanager = (req,res,next) => {
    const role = req.data.role;
    if( role === 'admin' || role === 'manager'){
        next()
    }
    else{
        res.json({message:'Not permission'})
    }
}

var checkadmin = (req,res,next) => {
    const role = req.data.role;
    if( role === 'admin'){
        next()
    }
    else{
        res.json({message:'Not permission'})
    }
}

//[GET] admin/user
route.get('/manager',checkLog,checkUser,adminController.index1)
//[GET] admin/checkuser
route.get('/checkuser',checkLog,checkmanager,adminController.index2)
//[GET] admin/
route.get('/',checkLog,checkadmin,adminController.index)

module.exports = route;