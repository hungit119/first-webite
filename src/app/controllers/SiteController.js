const { multipleMongooseToObject } = require('../../util/mongoose')

const Film = require('../../resources/models/filmCollections');
class SiteController {
    index(req, res, next) {
        Film.find({})
            .then(films => {
                res.render('home', { films: multipleMongooseToObject(films) });
            })
            .catch(next);
    }
}

module.exports = new SiteController