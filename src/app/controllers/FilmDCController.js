const FilmDC = require('../../resources/models/Films/filmDeCuCollections');
class FilmDCController {
    detail(req,res,next){
        FilmDC.findById(req.params.id)
      .then((FilmsDC) => {
        const filmsDC = FilmsDC.toObject();
        res.render('FilmDC/detailDC', { filmsDC });
      })
      .catch(next);
    }
}
module.exports = new FilmDCController