const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const router = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')
const mongoose = require('./util/mongoose')
db.connect();

const app = express()
const port = 3000

app.use(methodOverride('_method'))

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

router(app)
//
  const filmsType = require('./resources/models/Phim/films.type') 
  const filmsRegion = require('./resources/models/Phim/films.region') 
  const filmsYear = require('./resources/models/Phim/films.year') 
  const films = require('./resources/models/Phim/films')
const filmsCategory = require('./resources/models/Phim/films.category')

  async function addFilm() {
    // const createType = await filmsType.create({Tenloai:'phim chiếu rạp'})
        // const createCategory = await filmsCategory.create({category:'phim mới'})
    const createRegion = await filmsRegion.create({region:'Đài Loan'})
    // const createYear = await filmsYear.create({year:'2021'})
    // const createFilm = await films.create({
    //   theLoai:createType._id,
    //   quocGia:createRegion._id,
    //   namSuatBan:createYear._id,
    //   name:'Anh sẽ đợi em nơi tận cùng của thời gian',
    //   img:'https://phimle.vn/wp-content/uploads/2020/10/Anh-Se-Doi-Em-Noi-Tan-Cung-Thoi-Gian-300x450.jpeg',
    //   rate:'9.0',
    //   thoiLuong:'115 phút',
    //   trailer:'oZ4eyjwzMAQ',
    //   full:'',
    //   moTa:'Anh sẽ đợi em nơi tận cùng thời gian - là bộ phim do Diêu Đình Đình chịu trách nhiệm chỉ đạo, với Giang Chí Cường làm giám chế, diễn viên chính trong bộ phim là Lý Nhất Đồng và Lý Hồng Kỳ. Nam chính Lý Hồng Kỳ từng 3 lần được đề cử giải Kim Mã, nữ chính Lý Nhất Đồng cũng được công nhận là tiểu hoa đán rất có thực lực về mặt diễn xuất.Đạo diễn Diêu Đình Đình từng tiết lộ, lúc đầu khi mới đọc tiểu thuyết nguyên tác, bối cảnh tình yêu kỳ ảo và tình yêu, cùng sự ấm áp làm cảm động người khác đã đánh động anh và khiến anh hạ quyết tâm đem tiểu thuyết này làm thành phim điện ảnh tình yêu vừa hài hước vừa bi thương.',
    //   daoDien:'Diêu Đình Đình'
    // })

    // console.log(createType)
    // console.log(createRegion)
    // console.log(createYear)
    // console.log(createCategory)
  } 

  // addFilm()
  // async function getFilms(){
  //   let loai = '6121b9f59770f4048c20f188'
  //   const film = await films.find({theLoai:'6121b9f59770f4048c20f188'})
  //   console.log("Phim the loai 188")
  //   console.log(film)
  // }
  // getFilms()
// create();
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})