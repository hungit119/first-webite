const Film = require('../../resources/models/filmCollections');
class FilmController {
  index(req, res, next) {
    Film.find({})
      .then((Films) => {
        const films = Films.map((film) => {
          return film.toObject();
        });
        res.render('films', {films});
      })
      .catch(next);
  }
  add(req, res) {
    res.render('addFilm');
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
  detail(req, res, next) {
    Film.films.findById(req.params.id)
      .then((Films) => {
        const films = Films.toObject();
        res.render('detail', {films});
      })
      .catch(next);
  }
  phimTC(req,res,next){
    res.render('phimTC')
  }
  phimHD(req,res,next){
    res.render('phimHD')
  }
  phimNMCC(req,res,next){
    res.render('phimNMCC')
  }
  phimCR(req,res,next){
    res.render('phimCR')
  }
}

module.exports = new FilmController();
