const express = require('express')
const route = express.Router()

const filmController = require('../app/controllers/FilmController')

route.use('/',filmController.index)

module.exports = route