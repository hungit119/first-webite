const films = require('../../../resources/models/Phim/films');

class FilmTXController {
  // [GET] /filmsTX
  index(req, res, next) {
    films
      .find({theLoai: '62b8217100633a1c811bbc95'})
      .populate('namSuatBan')
      .populate('theLoai')
      .then((Films) => {
        const data1s = Films.map(function (data1) {
          return data1.toObject();
        });
        res.render('category/phimthanhxuan', {data1: data1s});
      })
      .catch(next);
  }
}
module.exports = new FilmTXController();
