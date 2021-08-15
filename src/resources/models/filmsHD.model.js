const mongoose = require('mongoose')

const filmHD = new mongoose.Schema({
    name:{
        type:String,
        default:"N/A"
    },
    img:{
        type:String,
        default:"N/A"
    },
    rate:{
        type:String,
        default:"N/A"
    },
    thoiLuong:{
        type:String,
        default:"N/A"
    },
    trailer:{
        type:String,
        default:"N/A"
    },
    full:{
        type:String,
        default:"N/A"
    },
    moTa:{
        type:String,
        default:"N/A"
    },
    soTap:{
        type:String,
        default:"N/A"
    },
    quocGia:{
        type:String,
        default:"N/A"
    },
    namSuatBan:{
        type:String,
        default:"N/A"
    },
    ngayCongChieu:{
        type:String,
        default:"N/A"
    },
    theLoai:{
        type:String,
        default:"N/A"
    },
    daoDien:{
        type:String,
        default:"N/A"
    },
    dienVien:{
        type:String,
        default:"N/A"
    },
    lichChieu:{
        type:String,
        default:"N/A"
    },
    trangweb:{
        type:String,
        default:"yeuphim.com"
    },
})
module.exports = mongoose.model('filmHD',filmHD,'filmhd');