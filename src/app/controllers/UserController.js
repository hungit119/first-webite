const Users = require('../../resources/models/users.model')

class UserController{
    index(req,res){
        async function testShowUser(){
            const total = await Users.find().count() // Dem so ban ghi
            const users = await Users.find() // show tat ca
            const userById = await Users.findById('61189feff48aff2ab4b7857b')
            const userByUserName = await Users.find({username: 'ducsine'})
          
            console.log('total');
            console.log(total);
            console.log('users');
            console.log(users);
            console.log('userById');
            console.log(userById);
            console.log('userByUserName');
            console.log(userByUserName);
          }
          testShowUser()
    }
    detail(req,res){
        res.render('detail')
    }


}

module.exports = new UserController
