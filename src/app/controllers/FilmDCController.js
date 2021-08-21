const FilmsDeCu = require('../../resources/models/Films/filmDeCuCollections')
class FilmDCController {
    detail(req,res,next){
        FilmDC.findById(req.params.id)
      .then((FilmsDC) => {
        const filmsDC = FilmsDC.toObject();
        res.render('FilmDC/detailDC', { filmsDC });
      })
      .catch(next);
    }
    addDC(req,res,next){
      res.render('FilmDC/addDC');
    }
    dataPhimDC(req,res,next){
      const filmsDeCu = req.body;
      const newFilmsDeCu = new FilmsDeCu(filmsDeCu);
      newFilmsDeCu.save()
        .then((newFilm) => {
          console.log(newFilm);
          res.redirect('/films');
        })
        .catch(next);
    }
    editDC(req,res,next){
      FilmsDeCu.findById(req.params.id)
      .then(films => {
        const Film = films.toObject();
        res.render('FilmDC/editDC', {
          Film
        });
      })
      .catch(next);
    }
    dataEditDC(req,res,next){
      FilmsDeCu.updateOne({
        _id: req.params.id
      },req.body)
      .then((newFilmDeCu) => {
        console.log('films De cu :' + newFilmDeCu);
        res.redirect('/films')
      })
      .catch(next);
    }
    delete(req,res,next){
      FilmsDeCu.deleteOne({
        _id: req.params.id
      })
      .then(() => {
        console.log("Delete done !!!");
        res.redirect('back')
      })
      .catch(next);
    }
}
module.exports = new FilmDCController