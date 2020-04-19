
let Filter = require('../modules/class.js').Filter
module.exports = (req,res)=>{
    req.session.filter = new Filter(req.body);
    res.redirect('/shop')
}