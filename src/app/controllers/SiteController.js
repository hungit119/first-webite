const {
  multipleMongooseToObject
} = require('../../util/mongoose')

const films = require('../../resources/models/Phim/films');
class SiteController {
  index(req, res, next) {
    films.find({
        category: '61221735b39d0a3098a69f47'
      })
      .populate('namSuatBan')
      .populate('theLoai')
      .then(docs1s => {
        films.find({
            category: '61220f53e917943b903767f9'
          })
          .then(docs2s => {
            films.find({
                theLoai: '6121f64d83d7900b801af8e3'
              })
              .populate('namSuatBan')
              .populate('theLoai')
              .then(docs3s => {
                const data1s = docs1s.map(docs1 => {
                  return docs1.toObject();
                });
                const data2s = docs2s.map(function (docs2) {
                  return docs2.toObject();
                });
                const data3s = docs3s.map(function (docs3) {
                  return docs3.toObject();
                });
                res.render('home', {
                  data1: data1s,
                  data2: data2s,
                  data3: data3s
                });
                console.log("Render Success !!!");
              })
          })
          .catch(next);
      })
      .catch(next);
  }
}

module.exports = new SiteController