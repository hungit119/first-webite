const express = require('express')
const route = express.Router()

const filmController = require('../app/controllers/FilmController')
const userController = require('../app/controllers/UserController');

const {checkAdmin} = require('../app/controllers/authentication/permission')
const {checkLog} = require('../app/controllers/authentication/authenticate')
const {checkmanager} = require('../app/controllers/authentication/permission')

// [GET] /films/search
route.use('/search',filmController.search)
// [DELETE] /films/:id
route.delete('/:id',checkLog,checkmanager,filmController.delete)
// [GET] /films/edit/:id
route.use('/edit/:id',checkLog,checkmanager,filmController.edit)
// [PUT] /films/update/:id
route.put('/update/:id',filmController.dataEdit)
// [GET] /films/data
route.use('/data',checkLog,checkmanager,filmController.data)
// [GET] /films/all
route.use('/all',filmController.all)
// [GET] /films/full/:id
route.use('/full/:id',filmController.full)
// [GET] /films/detail/:id
route.use('/detail/:id',filmController.detail)
// [GET] /films/add
route.use('/add',checkLog,checkmanager,filmController.add)
// [GET] /films
route.use('/',checkLog,checkmanager,filmController.index)

module.exports = route
