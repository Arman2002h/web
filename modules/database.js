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
let findProduct;
module.exports.findProduct = findProduct = (obj) => {
    let sql = '';
    if(!obj || !obj.table)return [];
    sql += 'SELECT * FROM `'+ obj.table+'`  WHERE 1'

    if(obj.find && obj.find != '#'){
        sql += ' AND '
        for(let i in obj.find)if(obj.find[i]!='#')
            sql += `\`${i}\` = '${obj.find[i]}' AND `
        sql +='1'
    }

    if(obj.priceRange && obj.priceRange != '#')
        sql += ' AND price > ' + obj.priceRange.min + ' AND price < ' + obj.priceRange.max+' '
   
    let searchSQL = '';
    if(obj.search && obj.search != '#') searchSQL += "SELECT * FROM `" + obj.table + "` WHERE header LIKE '"+ obj.search +"%'"
    let data = [];
    db.query(sql,( err, res)=>{
        if(searchSQL == '')return (obj.callback || (res => {}))(res || [], sql);
        db.query(searchSQL, (err, res1) => {
            for(let i in res)
                for(let j in res1)
                    if(res[i].id == res1[j].id)
                        data.push(res[i]);
            (obj.callback || (res => {}))(data || [],sql, searchSQL);
        });
    });
}
// findProduct({
//     'table' :'products',
//     'find':{'categorie': 'catg1','brend':'AVON'},
//     'search':'header',
//     'priceRange':{'min':1000,'max':2100},
//     'callback':(data) => console.log(data)
// });
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