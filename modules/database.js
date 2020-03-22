// module.exports.find_db = ( con, table, obj, callback)=>{
//     let sql = 'SELECT * FROM `'+table+'` WHERE';
//     for(let i in obj)if(obj[i]!='#')
//         sql += `${i} = ${obj[i]}`
//     con.query(sql,function(err , res){
//         if(!err)callback(res);
//     });
// }
let myclass =require("./class.js")

let dbconfig = myclass.dbconfig
// let User = myclass.user;

let mysql = require("mysql2");
let db = mysql.createConnection(new dbconfig("localhost","root","root","testdb"));
let find;
module.exports.find = find = (table,obj,callback,errCallback) => {
    let sql = 'SELECT * FROM `'+table+'` WHERE ';obj = obj || {};
    for(let i in obj)if(obj[i]!='#')
        sql += `\`${i}\` = '${obj[i]}' AND `
    sql +='1'
    errCallback = errCallback || console.log
    db.query(sql,(err,res) => {
        if(err)return errCallback('SQL ERROR: '+ err);
        callback(res,sql)
    });
}

module.exports.insert = (table,obj,callback,errCallback)=>{
    callback = callback||(()=>{})
    let sql = `INSERT INTO \`${table}\` SET `
    for(let i in obj)if(obj[i]!='#')
        sql += `${i}='${obj[i]}',`
    sql = sql.substring(0, sql.length - 1);
    db.query(sql, function(err,data) {
        if(err)return (errCallback||console.log)('SQL ERROR: '+ err)
        find(table,obj,callback,errCallback)
    });
}