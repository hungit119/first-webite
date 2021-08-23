const siteRoute = require('./site')
const filmRoute = require('./films')

function router(app) {
    // [GET /films]
    app.use('/films',filmRoute)
    // [GET /]
    app.use('/',siteRoute)
}
module.exports = router