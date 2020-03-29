let update = require('./update.js')
module.exports = ( req, res) => {
    if(req.session.user.status == 'admin'){
        if(req.query){
            if(req.query.update)
                update(req.query.update,res);
            if(req.query.delete)
                (()=> console.log('del'))();
        }
    }
    else res.redirect('/');
}