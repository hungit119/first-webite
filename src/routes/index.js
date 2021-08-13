const siteRoute = require('./site')
const userRoute = require('./user')
const filmRoute = require('./films')

function router(app) {
    app.use('/films',filmRoute)
    app.use('/user',userRoute)
    app.use('/',siteRoute)
}
module.exports = router