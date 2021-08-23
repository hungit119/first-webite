const films = require('../../../resources/models/Phim/films');

class FilmNMController{
    // [GET] /filmsNM
    index(req,res,next){
        films.find({theLoai:'6121f6765a14152fe45773a4'})
            .populate('namSuatBan')
            .populate('theLoai')
            .then((Films) =>{
                const data1s = Films.map(function (data1) {
                    return data1.toObject();
                })
                res.render('category/phimnuocmat',{data1:data1s})
            })
            .catch(next);
    }
}
module.exports = new FilmNMController;