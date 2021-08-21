const express = require('express')
const route = express.Router()

const filmController = require('../app/controllers/FilmController')
const filmDCController = require('../app/controllers/FilmDCController')
//phim đề cử
route.delete('/DC/:id',filmDCController.delete)
route.put('/updateDC/:id',filmDCController.dataEditDC)
route.use('/detailDC/:id',filmDCController.detail)
route.use('/dataDC',filmDCController.dataPhimDC)
route.use('/editDC/:id',filmDCController.editDC)
route.use('/addDC',filmDCController.addDC)

route.delete('/:id',filmController.delete)
route.use('/edit/:id',filmController.edit)
route.put('/update/:id',filmController.dataEdit)
route.use('/data',filmController.data)
route.use('/detail/:id',filmController.detail)
route.use('/add',filmController.add)
route.use('/',filmController.index)

module.exports = route