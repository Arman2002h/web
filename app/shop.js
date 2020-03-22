let db  = require('../modules/database');
let is = require('../modules/is');

module.exports = targetFile => ((req, res) => {
    db.find('products', {}, ( data, sql) => {
        res.render(targetFile,{
            'user': req.session.is_user  == true? req.session.user : false ,
            'product': is.products(data) ? data||false : false
        });
    });
});