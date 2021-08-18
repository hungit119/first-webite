const { multipleMongooseToObject } = require('../../util/mongoose')
const Film = require('../../resources/models/filmCollections');
class FilmController {
  index(req,res,next){
    Film.find({})
      .then(films => {
        res.render('films',{films:multipleMongooseToObject(films)});
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
    Film.findById(req.params.id)
      .then((Films) => {
        const films = Films.toObject();
        res.render('detail', { films });
      })
      .catch(next);
  }
  delete(req,res,next){
    res.send("DELETE");
  }
  edit(req,res,next){
    Film.findById(req.params.id)
      .then(films => {
        const Film = films.toObject();
        res.render('edit',{Film});
      })
      .catch(next);
  }
}

module.exports = new FilmController();
