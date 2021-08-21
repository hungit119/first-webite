const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const router = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')


const app = express()
const port = 3005

db.connect()


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
//
// async function addData() {
//   const newFilm = {
//     name: "Titanic",
//     img: "https://image.phunuonline.com.vn/fckeditor/upload/2020/20200324/images/kia-titanic-dang-chim-va-ban-_1585085632.jpg",
//     rate: "10",
//     thoiLuong: "189 phút",
//     trailer: "3gK_2XdjOdY",
//     full: "",
//     moTa: "Titanic là một chiếc tàu biển chở khách của Công ty White Star Line được đóng tại xưởng đóng tàu Harland and Wolff ở Belfast và được thiết kế để cạnh tranh ...",
//     soTap: "",
//     quocGia: "Mỹ",
//     namSuatBan: "2008",
//     ngayCongChieu: "23-9-2008",
//     theLoai: "phim tình cảm",
//     daoDien: "James Cameron",
//     dienVien: "",
//     lichChieu: "",
//     trangweb: ""
//   }
//   const Films = require('./resources/models/Films/filmDeCuCollections');
//   const film = new Films(newFilm);
//   film.save()
//     .then(film => {
//       console.log("Saved !!!");
//     })
//     .catch(()=>{
//       console.log("ERROR !!!");
//     })
// }


router(app)



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
