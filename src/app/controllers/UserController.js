const Users = require('../../resources/models/user.model')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const path = require('path')
const resize = require('../../middleware/resize.middleware')

class UserController {
    // [GET] /user
    index(req, res, next) {
        res.render('authentication/index')
    }
    //[GET] /user/login
    login(req, res, next) {
        res.render('authentication/userlogin')
    }
    signUp(req, res, next) {
        res.render('authentication/userSignUp')
    }
    async dataSignUp(req, res, next) {
        const data = req.body;
        const user = await Users.findOne({ username: data.username });
        if (user) {
            res.json('Tên người dùng đã tồn tại')
        }
        else {
            const newuser = await Users.create({
                username: data.username,
                password: data.password,
                role: 1
            })
            res.render('addInfor', { newuser: newuser.toObject() })
        }
    }
    addInfor(req, res, next) {
        res.render('addInfor', { data })
    }
    //[POST] /user/login
    datalogin(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        Users.findOne({
            username: username,
            password: password,
        })
            .then(data => {
                if (data) {
                    const token = jwt.sign({ _id: data._id }, 'mk');
                    res.cookie('token', token)
                    res.redirect('/user')
                }
                else {
                    res.render('errorlog')
                }
            })
            .catch(next)
    }
    detailUser(req, res, next) {
        const data = res.data
        res.render('person', { newData: data.toObject() })
    }
    async addInforData(req, res, next) {
        const id = req.params.id;
        const data = req.body;
        await Users.updateOne({
            _id: id
        }, {
            username: data.username,
            personalInformations: {
                name: data.name,
                age: data.age,
                favorite: data.favorite,
                img: data.img,
                email: data.email,
                gender: data.gender,
            }
        })
            .then(data => {
                console.log("Update success!!")
                res.redirect('/user/login')
            })
            .catch(next);
    }
    editInforData(req, res, next) {
        const id = req.params.id;
        Users.findOne({ _id: id })
            .then(data => {
                res.render('editInfor', { newuser: data.toObject() })
            })
            .catch(next)
    }
    async editInforDataUpdate(req, res, next) {
        const data = await req.body;
        const id = await req.params.id;
        await Users.updateOne({ _id: id }, {
            username: data.username,
            personalInformations: {
                name: data.name,
                age: data.age,
                favorite: data.favorite,
                email: data.email,
                gender: data.gender,
            }
        })
            .then(() => {
                console.log('update thanh cong')
                res.redirect('/person')
            })
            .catch(next)
    }
    async upload(req, res, next) {
        const id = req.params.id;
        const img = req.file;
        const pathImg = path.join(__dirname, '../../public/uploads')
        const fileUpload = await new resize(pathImg)
        if (!img) {
            res.status(404).json({ error: 'Please provide an image' })
        }
        else {
            const filename = await fileUpload.save(img.buffer);
            const userCurrent = await Users.findOne({ _id: id })
            const newUser = await Users.updateOne({ _id: id }, {
                personalInformations: {
                    name: userCurrent.personalInformations.name,
                    age: userCurrent.personalInformations.age,
                    favorite: userCurrent.personalInformations.favorite,
                    img: `../../../uploads/${filename}`,
                    email: userCurrent.personalInformations.email,
                    gender: userCurrent.personalInformations.gender,
                }
            })
            Users.findOne({ _id: id })
                .then(data => {
                    const user = data;
                    const newuser = user.toObject(); 
                    res.render('person', {
                        newData:newuser
                    })
                })
                .catch(next)
        }
    }
    formUpload(req, res, next) {
        const id = req.params.id;
        res.render('upload', { id })
    }
    logout(req,res,next){
        res.clearCookie('token');
        res.redirect('/')
    }
}

module.exports = new UserController