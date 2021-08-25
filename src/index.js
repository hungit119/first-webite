const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const router = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')
const mongoose = require('./util/mongoose')
const session = require('express-session');
const passport = require('passport')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')

db.connect();

const app = express()
const port = 3005
app.use(cookieParser())
app.use(session({
  secret:'adsa897adsa98bs',
  resave:false,
  saveUninitialized:false,
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'))
const hbs = handlebars.create({});

hbs.handlebars.registerHelper('sum',function(a){
  return a+1;
})

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

// const User = require('./resources/models/user.model')
// async function createUser (){
//   const creatU = await User.create({
//     email:'tranduyhungdz119@gmail.com',
//     password:'1192002',
//     role:'manager',
//     personalInformations:{
//       name:'Trần Duy Hùng',
//       age:'19',
//       favorite:'phim hành động',
//       img:'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/197514889_208610917791599_3262384838406724480_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=1mFlCTo7YoUAX_KIvuN&_nc_ht=scontent-hkt1-1.xx&oh=863292be3185625512438caaa6ad7fc6&oe=614CB18C'
//     }
//   })
// }
// createUser();
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})