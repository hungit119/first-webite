const siteRoute = require('./site')
const filmRoute = require('./films')
const userRoute = require('./user')
const managerRoute = require('./manager')
function router(app) {
    // [GET /films]
    app.use('/films',filmRoute)
    // [GET /user]
    app.use('/user',userRoute)
    // [GET /admin]
    app.use('/admin',managerRoute)
    // [GET /home]
    app.use('/',siteRoute)
}
module.exports = router