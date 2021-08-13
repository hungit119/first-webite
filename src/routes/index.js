const siteRoute = require('./site')
const userRoute = require('./user')

function router(app) {
    app.use('/user',userRoute)
    app.use('/',siteRoute)
}
module.exports = router