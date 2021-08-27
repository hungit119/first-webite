const express = require('express')
const route = express.Router()

const filmController = require('../app/controllers/FilmController')
const userController = require('../app/controllers/UserController');

var checkLog = async (req,res,next) => {
    try {
        const token = await req.cookies.token;
        var userId = await jwt.verify(token,'mk')
        await Users.findOne({
            _id:userId
        })
        .then(data => {
            if(data){
                req.data = data;
                next()
            }
            else{
                res.redirect('/user/login')
            }
        })
        .catch(next);
    } catch (error) {
        res.redirect('/user/login')
    }
}
var checkadmin = async (req,res,next) => {
    const role = await req.data.role;
    if( role === 'admin'){
        next()
    }
    else{
        res.json({message:'Not permission'})
    }
}
// [GET] /films/search
route.use('/search',filmController.search)
// [DELETE] /films/:id
route.delete('/:id',filmController.delete)
// [GET] /films/edit/:id
route.use('/edit/:id',filmController.edit)
// [PUT] /films/update/:id
route.put('/update/:id',filmController.dataEdit)
// [GET] /films/data
route.use('/data',filmController.data)
// [GET] /films/all
route.use('/all',filmController.all)
// [GET] /films/detail/:id
route.use('/detail/:id',filmController.detail)
// [GET] /films/add
route.use('/add',filmController.add)
// [GET] /films
route.use('/',filmController.index)

module.exports = route