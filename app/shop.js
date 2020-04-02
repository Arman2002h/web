let db  = require('../modules/database');
let is = require('../modules/is');

module.exports = (targetFile, max) => ((req, res) => {
    db.findProduct({'table':'products','find':{},'callback': data => {
        let max_data = max || 5; let room = req.query.room_id || 0;
        let ReturnProductsData = [];
        if(room * max_data >= data.length)
            res.render(targetFile,{
                'user': req.session.is_user  == true? req.session.user : false ,
                'product': false
            });
        else {
            for(let i = room * max_data; (i != data.length && i != (max_data * room + max_data)); i++){
                ReturnProductsData.push(data[i])
            }
            res.render(targetFile,{
                'user': req.session.is_user  == true? req.session.user : false ,
                'product': is.products(ReturnProductsData)? ReturnProductsData || false : false,
                'config': {'max_rooms':Math.ceil(data.length/max_data),'room_index':room}
            });
        }
    }});
});