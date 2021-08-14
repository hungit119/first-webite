const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const router = require('./routes')
const db = require('./config/db')
const app = express()
const port = 3000

//option
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//morgan
app.use(morgan('combined'))
//handlebars
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

router(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

db.connect()