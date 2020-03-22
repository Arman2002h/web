let is = require('../modules/is')
module.exports = ( req, res) =>{
    req.session.is_user = false;
    res.render('login.ejs', {
        'user': req.session.is_user ? req.session.user : false,
        'input':(is.f(req.query, ['email','pass'])?
            {
                'email':req.query.email,
                'pass':req.query.pass
            }        
        : {}),
        'err':(is.f(req.query, ['err'])?
            req.query['err']
        : 0)
    });
}