const mysql = require('mysql2');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Hansaja@1234",
    database:"library"
})

con.connect((err)=>{
    if(err) throw err;

    console.log("Connected");
})

module.exports = con

