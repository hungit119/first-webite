const express = require('express')
const route = express.Router()

const filmController = require('../app/controllers/FilmController')


route.use('/edit/:id',filmController.edit)
route.use('/data',filmController.data)
route.use('/detail/:id',filmController.detail)
route.use('/delete',filmController.delete)
route.use('/add',filmController.add)
route.use('/',filmController.index)

module.exports = route