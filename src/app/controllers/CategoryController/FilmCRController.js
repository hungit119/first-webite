const films = require('../../../resources/models/Phim/films');

class FilmCRController{
    // [GET] /filmsCR
    index(req,res,next){
        films.find({theLoai:'6121f68794fe3633bcb45559'})
            .populate('namSuatBan')
            .populate('theLoai')
            .then((Films) =>{
                const data1s = Films.map(function (data1) {
                    return data1.toObject();
                })
                res.render('category/phimchieurap',{data1:data1s})
            })
            .catch(next);
    }
}
module.exports = new FilmCRController;