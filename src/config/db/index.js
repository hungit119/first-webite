const mongoose = require('mongoose')
const uri = 'mongodb+srv://hungtran:1192002@cluster0.ilmtf.mongodb.net/MYDATA?retryWrites=true&w=majority'
function connect() {
try {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    });
    console.log("Connect true");
} catch (error) {
    console.log("Connect fail !!!");
}    
}
module.exports = { connect }