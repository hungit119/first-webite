const filmsType = require('../../resources/models/Phim/films.type');
const filmsRegion = require('../../resources/models/Phim/films.region');
const filmsYear = require('../../resources/models/Phim/films.year');
const filmsCategory = require('../../resources/models/Phim/films.category');
const films = require('../../resources/models/Phim/films');
class FilmController {
  // [GET] /films
  async index(req, res, next) {
    const foundFilms = await films.find({})
      .populate('theLoai')
      .populate('category')
    const totalFilm = await films.find({})
      .count()

    const newFilms = foundFilms.map(film => {
      return film.toObject();
    })
    const count = totalFilm;
    console.log(count);
    res.render('films', {
      data1: newFilms,
      countFilms: count
    })
  }
  // [GET] /films/add
  add(req, res) {
    res.render('addFilm');
  }
  // [GET] /films/data
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
  // [PUT] /films/update/:id
  async dataEdit(req, res, next) {
    console.log(req.body)
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
  // [GET] /films/detail/:id
  async detail(req, res, next) {
    const detail = await films.findById(req.params.id)
      .populate('theLoai')
      .populate('quocGia')
      .populate('region')
    const phimdecu = await films.find({
      category: '61220f53e917943b903767f9'
    }, function () {
    })
      .populate('theLoai')
      .populate('namSuatBan')
    
      const filmsdetail = detail.toObject();
      const filmshot = phimdecu.map(data=>{
        return data.toObject();
      })

      res.render('detail',{
        films:filmsdetail,
        filmsDC:filmshot,
      })
  }
  // [DELETE] /films/:id
  delete(req, res, next) {
    films.deleteOne({
      _id: req.params.id
    })
      .then(() => {
        res.redirect('back');
      })
      .catch(next);
  }
  // [GET] /films/edit/:id
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
  // [GET] /films/all
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
  //[GET] films/search
  search(req, res, next) {
    const find = req.query.name
    films.find({ name: find })
      .populate('theLoai')
      .populate('namSuatBan')
      .then(filmFounds => {
        const filmsFound = filmFounds.map(film => {
          return film.toObject();
        })
        res.render('search', { filmsFound })
      })
      .catch(next)
  }
  async full(req,res,next){
    const detail = await films.findById(req.params.id)
      .populate('theLoai')
      .populate('quocGia')
      .populate('region')
    const phimdecu = await films.find({
      category: '61220f53e917943b903767f9'
    }, function () {
    })
      .populate('theLoai')
      .populate('namSuatBan')
    
      const filmsdetail = detail.toObject();
      const filmshot = phimdecu.map(data=>{
        return data.toObject();
      })

      res.render('full',{
        films:filmsdetail,
        filmsDC:filmshot,
      })
  }
}

module.exports = new FilmController();