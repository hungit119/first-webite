const express = require('express');
const userController = require('../app/controllers/UserController.js')
const route = express.Router();
//[GET] /user/login
route.use('/login',userController.login)
//[GET] /user/signUp
route.use('/signUp',userController.signUp)
//[GET] /user
route.use('/',userController.index)

module.exports = route;