const filmsType = require('../../resources/models/Phim/films.type');
const filmsRegion = require('../../resources/models/Phim/films.region');
const filmsYear = require('../../resources/models/Phim/films.year');
const filmsCategory = require('../../resources/models/Phim/films.category');
const films = require('../../resources/models/Phim/films');
class FilmController {
  index(req, res, next) {
    films.find({}).populate('theLoai')
      .then(docs1s => {
        films.find({
            category: '61220f53e917943b903767f9'
          }).populate('category')
          .then(docs2s => {
            const data1s = docs1s.map(docs1 => {
              return docs1.toObject();
            });
            const data2s = docs2s.map(function (docs2) {
              return docs2.toObject();
            });
            res.render('films', {
              data1: data1s,
              data2: data2s
            });
            console.log("Render Success !!!");
          })
          .catch(next);
      })
      .catch(next);
  }
  add(req, res) {
    res.render('addFilm');
  }
  async data(req, res, next) {
    const createType = await filmsType.findOne({
      Tenloai: req.body.theLoai
    })
    const createRegion = await filmsRegion.findOne({
      region: req.body.quocGia
    })
    const createYear = await filmsYear.findOne({
      year: req.body.namSuatBan
    })
    const createCategory = await filmsCategory.findOne({
      category: req.body.category
    })

    const createFilm = await films.create({
      theLoai: createType._id,
      quocGia: createRegion._id,
      namSuatBan: createYear._id,
      category: createCategory._id,
      name: req.body.name,
      img: req.body.img,
      rate: req.body.rate,
      thoiLuong: req.body.thoiLuong,
      trailer: req.body.trailer,
      full: req.body.full,
      moTa: req.body.moTa,
      daoDien: req.body.daoDien
    })
    res.redirect('films')
  }
  async dataEdit(req, res, next) {
    const createType = await filmsType.findOne({
      Tenloai: req.body.theLoai
    })
    const createRegion = await filmsRegion.findOne({
      region: req.body.quocGia
    })
    const createYear = await filmsYear.findOne({
      year: req.body.namSuatBan
    })
    const createCategory = await filmsCategory.findOne({
      category: req.body.category
    })
    films.updateOne({
        _id: req.params.id
      }, {
        theLoai: createType._id,
        quocGia: createRegion._id,
        namSuatBan: createYear._id,
        category: createCategory._id,
        name: req.body.name,
        img: req.body.img,
        rate: req.body.rate,
        thoiLuong: req.body.thoiLuong,
        trailer: req.body.trailer,
        full: req.body.full,
        moTa: req.body.moTa,
        daoDien: req.body.daoDien
      })
      .then(() => res.redirect('/films'))
      .catch(next);
  }
  detail(req, res, next) {
    films.findById(req.params.id)
      .populate('theLoai')
      .populate('quocGia')
      .populate('region')
      .then((Films) => {
        const films = Films.toObject();
        res.render('detail', {
          films
        });
      })
      .catch(next);
  }
  delete(req, res, next) {
    films.deleteOne({
        _id: req.params.id
      })
      .then(() => {
        res.redirect('back');
      })
      .catch(next);
  }
  edit(req, res, next) {
    films.findById(req.params.id)
      .populate('theLoai')
      .populate('quocGia')
      .populate('namSuatBan')
      .populate('category')
      .then(films => {
        const Film = films.toObject();
        res.render('edit', {
          Film
        });
      })
      .catch(next);
  }
  // [GET] films/all
  all(req, res, next) {
    films.find({})
      .populate('theLoai')
      .populate('quocGia')
      .populate('namSuatBan')
      .populate('category')
      .then((foundFilms) => {
        const data1s = foundFilms.map((data1) => {
          return data1.toObject();
        })
        res.render('category/all', {
          data1: data1s
        })
      })
      .catch(next);
  }
}

module.exports = new FilmController();