const Film = require('../../resources/models/filmCollections')

class SiteController{
    index(req,res,next){
        Film.find({})
            .then(Films => {
                const films = Films.map(film =>{
                    return film.toObject()
                })
                res.render('home',{films})
            })
            .catch(next)
        // res.render('home')
    }
}

module.exports = new SiteController