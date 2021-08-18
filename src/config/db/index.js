const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/MyDB';

async function connect() {
    try {
        mongoose.connect(uri, {
            useUnifiedTopology:true,
            useNewUrlParser: true
        });  
        console.log("Connect Successfull !!");  
    } catch (error) {
        console.log("Connect Fail !");
    }
}

module.exports = { connect }