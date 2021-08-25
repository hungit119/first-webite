const express = require('express');
const userController = require('../app/controllers/UserController.js')
const route = express.Router();
//[GET] /user/login
route.get('/login',userController.login)
//[GET] /user/signUp
route.get('/signUp',userController.signUp)
//[GET] /user/signUp
route.post('/login',userController.datalogin)
//[GET] /user/detail
route.get('/detail',userController.check,userController.detailUser)
//[GET] /user
route.use('/',userController.index)

module.exports = route;