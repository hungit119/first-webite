const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const router = require('./routes')
const db = require('./config/db')

const app = express()
const port = 3005

db.connect()


app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//morgan
app.use(morgan('combined'))
//handlebars
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//
async function addData() {
  const newFilm = {
    name: "Anh đợi em nơi tận cùng của thời gian",
    img: "https://phimle.vn/wp-content/uploads/2020/10/Anh-Se-Doi-Em-Noi-Tan-Cung-Thoi-Gian-300x450.jpeg",
    rate: "9.7",
    thoiLuong: "115 phút",
    trailer: "iYOxPxtLFN8",
    full: "",
    moTa: "Anh sẽ đợi em nơi tận cùng thời gian - là bộ phim do Diêu Đình Đình chịu trách nhiệm chỉ đạo, với Giang Chí Cường làm giám chế, diễn viên chính trong bộ phim là Lý Nhất Đồng và Lý Hồng Kỳ. Nam chính Lý Hồng Kỳ từng 3 lần được đề cử giải Kim Mã, nữ chính Lý Nhất Đồng cũng được công nhận là tiểu hoa đán rất có thực lực về mặt diễn xuất.Đạo diễn Diêu Đình Đình từng tiết lộ, lúc đầu khi mới đọc tiểu thuyết nguyên tác, bối cảnh tình yêu kỳ ảo và tình yêu, cùng sự ấm áp làm cảm động người khác đã đánh động anh và khiến anh hạ quyết tâm đem tiểu thuyết này làm thành phim điện ảnh tình yêu vừa hài hước vừa bi thương.Bộ phim được công chiếu vào ngày lễ Thất Tịch đã làm điên đảo phòng vé nội địa, khi doanh thu đã đạt hơn 200 triệu NDT trong vòng 6 giờ kể từ khi công chiếu, lọt vào top 10 bộ phim có doanh thu phòng vé cao nhất trong ngày đầu công chiếu của lịch sử phim nội địa Trung Quốc.",
    soTap: "",
    quocGia: "Trung Quốc",
    namSuatBan: "2020",
    ngayCongChieu: "22-7-2020",
    theLoai: "phim tình cảm",
    daoDien: "Diêu Đình Đình",
    dienVien: "",
    lichChieu: "",
    trangweb: ""
  }
  const Films = require('./resources/models/filmCollections')
  const film = new Films(newFilm);
  film.save()
    .then(film => {
      console.log("Saved !!!");
    })
    .catch(()=>{
      console.log("ERROR !!!");
    })
}



router(app)



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
