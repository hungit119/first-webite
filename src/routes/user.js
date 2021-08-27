const express = require('express');
const userController = require('../app/controllers/UserController.js')
const {checkLog} = require('../app/controllers/authentication/authenticate')

const route = express.Router();
//[GET] /user/login
route.get('/login',userController.login)
//[GET] /user/signUp
route.get('/signUp',userController.signUp)
//[GET] /user/signUp
route.post('/login',userController.datalogin)
//[GET] /user
route.get('/',checkLog,userController.detailUser)

module.exports = route;