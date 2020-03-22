let db  = require('../../modules/database');
let is = require('../../modules/is');

module.exports =  ( req, res) => {
    if(req.session.is_user == true){
        if(req.session.user.status == 'user')return res.redirect('/');
        db.find('users', {},  data1 => {    
            db.find('products', {},  data => {
                res.render('ADMIN/'+ req.session.user.status + 'Tools.ejs',{
                    'user'   : req.session.is_user  == true? req.session.user : false ,
                    'product': is.products(data) ? data||false : false ,
                    'users'  : data1||false
                });
            });
        });
    }else res.redirect('/')
}//adminTools