const mysql = require('mysql')

async function connect() {
    var con = mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"1192002",
        database:"mydb"
    });
    con.connect(function (err) {
        if(err){
            console.log("Connect fail !!!");
        }
        else{
            console.log("Connect Successfully !!!");
        }
    });
    con.end(function(err){
        if(err) throw err
        console.log("Closed !!");
    })
}
module.exports = { connect}