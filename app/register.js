let is = require('../modules/is')
module.exports = ( req, res) =>{
    req.session.is_user = false;
    res.render('register.ejs',{'user': req.session.is_user ? req.session.user : false});
}