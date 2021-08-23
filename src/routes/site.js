const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController');
const filmTCController = require('../app/controllers/CategoryController/FilmTCController');
const filmHDController = require('../app/controllers/CategoryController/FilmHDController');
const filmNMController = require('../app/controllers/CategoryController/FilmNMController');
const filmCRController = require('../app/controllers/CategoryController/FilmCRController');

route.use('/filmsTC',filmTCController.index)
route.use('/filmsHD',filmHDController.index)
route.use('/filmsNM',filmNMController.index)
route.use('/filmsCR',filmCRController.index)
route.use('/',siteController.index)

module.exports = route