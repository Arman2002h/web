
let Filter = require('../modules/class.js').Filter
module.exports = (req,res)=>{
    req.session.filter = new Filter(req.body);
    console.log( new Filter(req.body))
    console.log(req.body)
    res.redirect('/shop')
}