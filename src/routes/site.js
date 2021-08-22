const express = require('express')
const route = express.Router()

const siteController = require('../app/controllers/SiteController')
const filmTCController = require('../app/controllers/CategoryController/FilmTCController')

route.use('/filmsTC',filmTCController.index)
route.use('/',siteController.index)

module.exports = route