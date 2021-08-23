const {
  multipleMongooseToObject
} = require('../../util/mongoose')

const films = require('../../resources/models/Phim/films');
class SiteController {
  // [GET] /films
  index(req, res, next) {
    films.find({
        category: '61221735b39d0a3098a69f47' //phim mới
      })
      .populate('namSuatBan')
      .populate('theLoai')
      .then(docs1s => {
        films.find({
            category: '61220f53e917943b903767f9' //phim đề cử
          })
          .then(docs2s => {
            films.find({
                theLoai: '6121f64d83d7900b801af8e3' //phim tình cảm
              })
              .populate('namSuatBan')
              .populate('theLoai')
              .then(docs3s => {
                films.find({
                    theLoai: '6121f6602e18d81fac40ebea' //phim hành động
                  })
                  .populate('namSuatBan')
                  .populate('theLoai')
                  .then(docs4s => {
                    films.find({
                        theLoai: '6121f6765a14152fe45773a4' //phim nước mắt 
                      })
                      .populate('namSuatBan')
                      .populate('theLoai')
                      .then(docs5s => {
                        films.find({
                            theLoai: '61231349f5b1672f983aede8' //phim hoạt hình
                          })
                          .populate('namSuatBan')
                          .populate('theLoai')
                          .then(docs6s => {
                            const data1s = docs1s.map(docs1 => {
                              return docs1.toObject();
                            });
                            const data2s = docs2s.map(function (docs2) {
                              return docs2.toObject();
                            });
                            const data3s = docs3s.map(function (docs3) {
                              return docs3.toObject();
                            });
                            const data4s = docs4s.map(function (docs4) {
                              return docs4.toObject();
                            });
                            const data5s = docs5s.map(function (docs5) {
                              return docs5.toObject();
                            });
                            const data6s = docs6s.map(function (docs6) {
                              return docs6.toObject();
                            });
                            res.render('home', {
                              data1: data1s,
                              data2: data2s,
                              data3: data3s,
                              data4: data4s,
                              data5: data5s,
                              data6: data6s,
                            });
                            console.log("Render Success !!!");
                          })
                      })
                  })
              })
          })
          .catch(next);
      })
      .catch(next);
  }
}

module.exports = new SiteController