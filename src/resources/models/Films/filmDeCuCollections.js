const mongoose = require('mongoose');
const Schema  = mongoose.Schema

const FilmDeCu = new Schema({
    nameDC:{
        type:String,
        default:"N/A"
    },
    imgDC:{
        type:String,
        default:"N/A"
    },
    rateDC:{
        type:String,
        default:"N/A"
    },
    thoiLuongDC:{
        type:String,
        default:"N/A"
    },
    trailerDC:{
        type:String,
        default:"N/A"
    },
    fullDC:{
        type:String,
        default:"N/A"
    },
    moTaDC:{
        type:String,
        default:"N/A"
    },
    soTapDC:{
        type:String,
        default:"N/A"
    },
    quocGiaDC:{
        type:String,
        default:"N/A"
    },
    namSuatBanDC:{
        type:String,
        default:"N/A"
    },
    ngayCongChieuDC:{
        type:String,
        default:"N/A"
    },
    theLoaiDC:{
        type:String,
        default:"N/A"
    },
    daoDienDC:{
        type:String,
        default:"N/A"
    },
    dienVienDC:{
        type:String,
        default:"N/A"
    },
    lichChieuDC:{
        type:String,
        default:"N/A"
    },
    trangwebDC:{
        type:String,
        default:"yeuphim.com"
    },
},
{ timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('FilmDeCu',FilmDeCu,'filmsDeCu');