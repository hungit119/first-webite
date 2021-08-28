const express = require('express');
const userController = require('../app/controllers/UserController.js')
const { checkLog } = require('../app/controllers/authentication/authenticate')
const route = express.Router();
const upload = require('../middleware/upload.middleware')

//[GET] /user/login
route.get('/login', userController.login)
//[GET] /user/signUp
route.get('/signUp', userController.signUp)
//[POST] /user/signUp
route.post('/signUp', userController.dataSignUp)
//[POST] /user/login
route.post('/login', userController.datalogin)
//[GET] /user/addInfor
route.get('/addInfor/:id', userController.editInforData)
//[POST] /user/editInfor
route.put('/editInfor/:id', userController.editInforDataUpdate)
//[POST] /user/upload
route.post('/upload/:id',upload.single('img'),userController.upload)
//[GET] /formUpload
route.get('/formUpload/:id', userController.formUpload)
//[POST] /user/logout
route.get('/logout', userController.logout)
//[POST] /user/addInfor
route.put('/addInfor/:id', userController.addInforData)
//[GET] /user
route.get('/', checkLog, userController.detailUser)

module.exports = route;