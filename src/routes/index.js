const siteRoute = require('./site')
const filmRoute = require('./films')
const userRoute = require('./user')
function router(app) {
    // [GET /films]
    app.use('/films',filmRoute)
    // [GET /user]
    app.use('/user',userRoute)
    // [GET /home]
    app.use('/',siteRoute)
}
module.exports = router