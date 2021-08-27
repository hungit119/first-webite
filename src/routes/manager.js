const express = require('express');
const route = express.Router();
const adminController = require('../app/controllers/AdminController')
const jwt = require('jsonwebtoken')
const Users = require('../resources/models/user.model')

//[GET] admin/
route.delete('/:id',adminController.deleteUser)
//[GET] admin/
route.get('/',adminController.index)

module.exports = route;