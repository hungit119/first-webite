const express = require('express')
const route = express.Router()

const filmController = require('../app/controllers/FilmController')
const filmHDController = require('../app/controllers/filmHDController')

route.use('/phimTC',filmController.phimTC)
route.use('/phimHD',filmController.phimHD)
route.use('/phimNMCC',filmController.phimNMCC)
route.use('/phimCR',filmController.phimCR)
route.use('/creat',filmHDController.creat)
route.use('/detailDC/:id',filmController.detailDC)
route.use('/detail/:id',filmController.detail)
route.use('/data',filmController.data)
route.use('/dataDC',filmController.data)
route.use('/add',filmController.add)
route.use('/addDC',filmController.addDC)
route.use('/',filmController.index)

module.exports = route