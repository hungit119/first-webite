const films = require('../../../resources/models/Phim/films');

class FilmNMController {
  // [GET] /filmsNM
  index(req, res, next) {
    films
      .find({theLoai: '62b8215b00633a1c811bbc94'})
      .populate('namSuatBan')
      .populate('theLoai')
      .then((Films) => {
        const data1s = Films.map(function (data1) {
          return data1.toObject();
        });
        res.render('category/phimnuocmat', {data1: data1s});
      })
      .catch(next);
  }
}
module.exports = new FilmNMController();
