const { multipleMongooseToObject } = require('../../util/mongoose')

const Film = require('../../resources/models/Films/filmCollections');
const FilmDeCu = require('../../resources/models/Films/filmDeCuCollections')
class SiteController {
    index(req, res, next) {
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
            res.render('home',{data1:data1s,data2:data2s});
            console.log("Render Success !!!");
          })
          .catch(next);
      })
      .catch(next);
    }
}

module.exports = new SiteController