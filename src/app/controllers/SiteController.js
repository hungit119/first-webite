const films = require('../../resources/models/Phim/films');
class SiteController {
  // [GET] /
  async index(req, res, next) {
    // Tìm phim trong collection:
    //phim mới
    const phimmoi = await films.find({
        category: '61221735b39d0a3098a69f47'
      }, function () {
      })
      .populate('theLoai')
      .populate('namSuatBan')
    //phim đề cử
    const phimdecu = await films.find({
        category: '61220f53e917943b903767f9'
      }, function () {
      })
      .populate('theLoai')
      .populate('namSuatBan')
    //phim tình cảm
    const phimtinhcam = await films.find({
        theLoai: '6121f64d83d7900b801af8e3'
      }, function () {
      })
      .populate('theLoai')
      .populate('namSuatBan')
    //phim hành động
    const phimhanhdong = await films.find({
        theLoai: '6121f6602e18d81fac40ebea'
      }, function () {
      })
      .populate('theLoai')
      .populate('namSuatBan')
    // phim nước mắt 
    const phimnuocmat = await films.find({
        theLoai: '6121f6765a14152fe45773a4'
      }, function () {
      })
      .populate('theLoai')
      .populate('namSuatBan')
    // phim hoạt hình 
    const phimhoathinh = await films.find({
        theLoai: '61231349f5b1672f983aede8'
      }, function () {
      })
      .populate('theLoai')
      .populate('namSuatBan')
    //phim chiếu rạp 
    const phimchieurap = await films.find({
        theLoai: '6121f68794fe3633bcb45559'
      }, function () {
      })
      .populate('theLoai')
      .populate('namSuatBan')
    // Map phim thành obj:
    const phimmois = phimmoi.map(data => {
      return data.toObject();
    })
    const phimdecus = phimdecu.map(data => {
      return data.toObject();
    })
    const phimtinhcams = phimtinhcam.map(data => {
      return data.toObject();
    })
    const phimhanhdongs = phimhanhdong.map(data => {
      return data.toObject();
    })
    const phimnuocmats = phimnuocmat.map(data => {
      return data.toObject();
    })
    const phimhoathinhs = phimhoathinh.map(data => {
      return data.toObject();
    })
    const phimchieuraps = phimchieurap.map(data => {
      return data.toObject();
    })
    //render ra view home
    res.render('home', {
      data1: phimmois,
      data2: phimdecus,
      data3: phimtinhcams,
      data4: phimhanhdongs,
      data5: phimnuocmats,
      data6: phimhoathinhs,
      data7: phimchieuraps,
    })
  }
}

module.exports = new SiteController