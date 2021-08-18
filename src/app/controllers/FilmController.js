const { multipleMongooseToObject } = require('../../util/mongoose')
const Film = require('../../resources/models/Films/filmCollections');
const FilmDeCu = require('../../resources/models/Films/filmDeCuCollections');
class FilmController {
  index(req,res,next){
    Film.find({})
      .then(docs1s => {
        FilmDeCu.find({})
          .then(docs2s => {
            const data1s = docs1s.map(docs1 => {
              return docs1.toObject();
            });
            const data2s = docs2s.map(function (docs2) {
              return docs2.toObject();
            });
            res.render('films',{data1:data1s,data2:data2s});
            console.log("Render Success !!!");
          })
          .catch(next);
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
