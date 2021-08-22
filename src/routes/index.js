const siteRoute = require('./site')
const filmRoute = require('./films')

function router(app) {
    app.use('/films',filmRoute)
    app.use('/',siteRoute)
}
module.exports = router