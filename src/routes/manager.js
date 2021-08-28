const express = require('express');
const route = express.Router();
const adminController = require('../app/controllers/AdminController')
const {checkAdmin} = require('../app/controllers/authentication/permission')
const {checkLog} = require('../app/controllers/authentication/authenticate')


//[GET] admin/
route.delete('/:id',adminController.deleteUser)
//[GET] admin/
route.get('/',checkLog,checkAdmin,adminController.index)

module.exports = route;