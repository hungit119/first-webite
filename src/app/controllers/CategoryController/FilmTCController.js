const films = require('../../../resources/models/Phim/films');

class FilmTCController{
    index(req,res,next){
        films.find({theLoai:'6121f64d83d7900b801af8e3'})
            .populate('namSuatBan')
            .populate('theLoai')
            .then((Films) =>{
                const data1s = Films.map(function (data1) {
                    return data1.toObject();
                })
                res.render('category/phimtinhcam',{data1:data1s})
            })
            .catch(next);
    }
}
module.exports = new FilmTCController;