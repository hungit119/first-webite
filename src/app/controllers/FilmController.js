const { multipleMongooseToObject } = require('../../util/mongoose')
const Film = require('../../resources/models/filmCollections');
const FilmHD = require('../../resources/models/filmsHD.model');

class FilmController {
  async index(req, res, next) {
    let collections = [Film, FilmHD];
    let enCollections = [];
    for (let i = 0; i < collections.length; i++) {
      await collections[i].find({}, function (err, foundCollection) {
        if (err) {
          console.log(err);
        }
        else {
          enCollections[i] = foundCollection;
        }
      })
    }
    res.render('films', {
      films: multipleMongooseToObject(enCollections[0]),
      filmsHD: multipleMongooseToObject(enCollections[1])
    })
  }
  add(req, res) {
    res.render('addFilm');
  }
  addDC(req,res,next){
    res.render('addFilmDC');
  }
  data(req, res, next) {
    const film = new Film(req.body);
    film
      .save()
      .then(() => {
        console.log('Phim đã được lưu vào database');
        res.redirect('/films');
      })
      .catch(next);
  }
  dataDC(req,res,next){
    const filmDC = new FilmHD(req.body);
    filmDC
      .save()
      .then(() => {
        console.log('Phim Đề Cử đã được lưu vào database');
        res.redirect('/films');
      })
      .catch(next);
  }
  detail(req, res, next) {
    Film.findById(req.params.id)
      .then((Films) => {
        const films = Films.toObject();
        res.render('detail', { films });
      })
      .catch(next);
  }
  detailDC(req,res,next){
    FilmHD.findById(req.params.id)
      .then((Films) => {
        const filmsDC = Films.toObject();
        res.render('detailDC', { filmsDC });
      })
      .catch(next);
  }
  phimTC(req, res, next) {
    res.render('phimTC')
  }
  phimHD(req, res, next) {
    res.render('phimHD')
  }
  phimNMCC(req, res, next) {
    res.render('phimNMCC')
  }
  phimCR(req, res, next) {
    res.render('phimCR')
  }
}

module.exports = new FilmController();
