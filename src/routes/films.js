const express = require('express')
const route = express.Router()

const filmController = require('../app/controllers/FilmController')
route.delete('/:id',filmController.delete)
route.use('/edit/:id',filmController.edit)
route.put('/update/:id',filmController.dataEdit)
route.use('/data',filmController.data)
route.use('/detail/:id',filmController.detail)
route.use('/add',filmController.add)
route.use('/',filmController.index)

module.exports = route