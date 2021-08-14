const express = require('express')
const route = express.Router()

const filmController = require('../app/controllers/FilmController')

route.use('/detail/:id',filmController.detail)
route.use('/data',filmController.data)
route.use('/add',filmController.add)
route.use('/',filmController.index)

module.exports = route