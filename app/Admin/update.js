let db = require('../../modules/database');
module.exports = (up,res) => {
    up = JSON.parse(up);
    db.find('products', {'id': up.id}, ( data, sql) => {
        res.render('admin/tools.ejs',{'data':data[0],'st':'update'});
    });
}