const mongoose = require('mongoose')
function connect() {
try {
    mongoose.connect('mongodb://localhost:27017/MYDB', {
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