const films = require('../../../resources/models/Phim/films');

class FilmTCController {
  // [GET] /filmsHD
  index(req, res, next) {
    films
      .find({theLoai: '62b8213500633a1c811bbc93'})
      .populate('namSuatBan')
      .populate('theLoai')
      .then((Films) => {
        const data1s = Films.map(function (data1) {
          return data1.toObject();
        });
        res.render('category/phimhanhdong', {data1: data1s});
      })
      .catch(next);
  }
}
module.exports = new FilmTCController();
