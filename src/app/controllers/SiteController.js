const { multipleMongooseToObject } = require('../../util/mongoose')

const Film = require('../../resources/models/filmCollections');
const FilmHD = require('../../resources/models/filmsHD.model');
class SiteController {
    async index(req, res, next) {
        let collections = [Film, FilmHD];
        let enCollections = [];
        for (let i = 0; i < collections.length; i++) {
            await collections[i].find({}, function (err, foundCollection) {
                if (err) {
                    console.log(err);
                }
                else {
                    enCollections[i] = foundCollection;
                }
            })
        }
        res.render('home', { 
            films: multipleMongooseToObject(enCollections[0]),
            filmsHD:multipleMongooseToObject(enCollections[1]) 
        })
        // res.render('home')
    }
}

module.exports = new SiteController