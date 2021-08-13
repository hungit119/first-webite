const mongoose = require('mongoose')
const uri = 'mongodb+srv://hungtran:1192002@cluster0.ilmtf.mongodb.net/webp?retryWrites=true&w=majority';

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