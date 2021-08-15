const filmHD = require('../../resources/models/filmsHD.model');
class filmHDController{
    index(req,res,next){
        filmHD.find({})
            .then(FilmsHD => {
                const filmsHD = FilmsHD.map(filmHD =>{
                    return filmHD.toObject()
                })
                res.render('home',{filmsHD})
            })
            .catch(next)
        // res.render('home')
    }
    creat(req,res,next){
        async function createFilmHD() {
            const filmhd = await filmHD.create({
                name:'Mưu cầu hạnh phúc',
                img:'https://jobsgo.vn/blog/wp-content/uploads/2019/09/m%C6%B0u-c%E1%BA%A7u-h%E1%BA%A1nh-ph%C3%BAc-3-b%E1%BB%99-phim-thay-%C4%91%E1%BB%95i-cu%E1%BB%99c-%C4%91%E1%BB%9Di-b%E1%BA%A1n.jpg',
                rate:'9.8',
                thoiLuong:'117 phút',
                trailer:'x-R0TdDageg',
                full:'',
                moTa:'Phim Mưu Cầu Hạnh Phúc - The Pursuit of Happiness là câu chuyện có thật đã được đưa lên màn bạc. The Pursuit of Happiness xoay quanh nhân vật Chris Gardner một người bán hàng không gặp may thất bại trong kinh doanh, nợ nần chồng chất, vợ bỏ, bị đuổi khỏi nhà do không trả được tiền thuê tất cả mọi cánh cửa dường như đã đóng sập với Chris nhưng với lòng quyết tâm, ý chí sắt đá và đặc biệt là cậu con trai Christopher đã trở thành động lực thôi thúc Chris vươn lên. The Pursuit of Happiness giống như chính cái tên của nó, phim khiến người xem phải tự hỏi Như thế nào là hạnh phúc? Hạnh phúc tới từ đâu? Câu trả lời thật đơn giản hạnh phúc ở xung quanh ta và hạnh phúc là những gì mà ta đang có. The pursuit of Happiness còn ca ngợi tinh thần vượt khó vươn lên, niềm tin vào tương lai của nhân vật Chris. Sẽ là rất thiếu sót nếu không kể tới khả năng diễn xuất ăn ý của 2 cha con Smith, họ đã lấy đi không ít nước mắt của khán giả. Chúc các bạn có khoảng thời gian xem phim ý nghĩa !',
                soTap:'',
                quocGia:'Mỹ',
                namSuatBan:'2006',
                ngayCongChieu:'17-8-2006',
                theLoai:'NMCC',
                daoDien:'Gabriele Muccino',
                dienVien:'',
                lichChieu:'',
                trangweb:''
            })
            console.log(filmhd);
        }
        createFilmHD();
    }
}

module.exports = new filmHDController