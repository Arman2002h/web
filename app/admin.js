let URLStructur = {
    'desktop':  require('./Admin/desktop.js')
}
module.exports = (req, res) => {
    for(let url in URLStructur){
        if(req.params.f == url) URLStructur[url]( req, res)
    }
}