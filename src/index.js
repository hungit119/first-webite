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
const port = 3005

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

function create() {
  const FilmDC = require('./resources/models/Films/filmDeCuCollections')
  const newFilm = new FilmDC({
    name:'Trần Duy Hùng',
    age:19,
    address:'Hà Nội'
  });
  FilmDC.create(newFilm);
}
// create();

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})