const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let dbconfig =require("./modules/class").dbconfig

let mysql = require("mysql2");
let db = mysql.createConnection(new dbconfig("localhost","root","root","testdb"));

readline.question('input SQL >>', sql => {
   db.query(sql,(err, res) => console.log(err|| '' , res)) 
});