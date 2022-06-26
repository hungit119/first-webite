const films = require('../../resources/models/Phim/films');
class SiteController {
  // [GET] /
  async index(req, res, next) {
    // Tìm phim trong collection:
    //phim mới
    const phimmoi = await films
      .find(
        {
          category: '62b8210500633a1c811bbc91',
        },
        function () {},
      )
      .populate('theLoai')
      .populate('namSuatBan');
    //phim đề cử
    const phimdecu = await films
      .find(
        {
          category: '62b81b4e00633a1c811bbc6f',
        },
        function () {},
      )
      .populate('theLoai')
      .populate('namSuatBan');
    //phim tình cảm
    const phimtinhcam = await films
      .find(
        {
          theLoai: '62b8211d00633a1c811bbc92',
        },
        function () {},
      )
      .populate('theLoai')
      .populate('namSuatBan');
    //phim hành động
    const phimhanhdong = await films
      .find(
        {
          theLoai: '62b8213500633a1c811bbc93',
        },
        function () {},
      )
      .populate('theLoai')
      .populate('namSuatBan');
    // phim nước mắt
    const phimnuocmat = await films
      .find(
        {
          theLoai: '62b8215b00633a1c811bbc94',
        },
        function () {},
      )
      .populate('theLoai')
      .populate('namSuatBan');
    // phim hoạt hình
    const phimhoathinh = await films
      .find(
        {
          theLoai: '62b8217100633a1c811bbc95',
        },
        function () {},
      )
      .populate('theLoai')
      .populate('namSuatBan');
    //phim chiếu rạp
    const phimchieurap = await films
      .find(
        {
          theLoai: '62b8219600633a1c811bbc96',
        },
        function () {},
      )
      .populate('theLoai')
      .populate('namSuatBan');
    const phimthanhxuan = await films
      .find(
        {
          theLoai: '62b821b000633a1c811bbc97',
        },
        function () {},
      )
      .populate('theLoai')
      .populate('namSuatBan');
    // Map phim thành obj:
    const phimmois = phimmoi.map((data) => {
      return data.toObject();
    });
    const phimdecus = phimdecu.map((data) => {
      return data.toObject();
    });
    const phimtinhcams = phimtinhcam.map((data) => {
      return data.toObject();
    });
    const phimhanhdongs = phimhanhdong.map((data) => {
      return data.toObject();
    });
    const phimnuocmats = phimnuocmat.map((data) => {
      return data.toObject();
    });
    const phimhoathinhs = phimhoathinh.map((data) => {
      return data.toObject();
    });
    const phimchieuraps = phimchieurap.map((data) => {
      return data.toObject();
    });
    const phimthanhxuans = phimthanhxuan.map((data) => {
      return data.toObject();
    });
    //render ra view home
    res.render('home', {
      data1: phimmois,
      data2: phimdecus,
      data3: phimtinhcams,
      data4: phimhanhdongs,
      data5: phimnuocmats,
      data6: phimhoathinhs,
      data7: phimchieuraps,
      data8: phimthanhxuans,
    });
  }
}

module.exports = new SiteController();
