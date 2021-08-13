
class FilmController{
    index(req,res){
        res.render('films')
    }
}

module.exports = new FilmController