const express = require('express');
const route = express.Router();

const siteController = require('../app/controllers/SiteController');
const filmTCController = require('../app/controllers/CategoryController/FilmTCController');
const filmHDController = require('../app/controllers/CategoryController/FilmHDController');
const filmNMController = require('../app/controllers/CategoryController/FilmNMController');
const filmCRController = require('../app/controllers/CategoryController/FilmCRController');
const filmTXController = require('../app/controllers/CategoryController/FilmTXController');


// [GET] /filmsTC
route.use('/filmsTC',filmTCController.index)
// [GET] /filmsHD
route.use('/filmsHD',filmHDController.index)
// [GET] /filmsNM
route.use('/filmsNM',filmNMController.index)
// [GET] /filmsCR
route.use('/filmsCR',filmCRController.index)
// [GET] /filmsTX
route.use('/filmsTX',filmTXController.index)
// [GET] /films
route.use('/',siteController.index)

module.exports = route