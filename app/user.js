let is = require('../modules/is')
let User = require('../modules/class').user
var md5 = require('md5');
let db = require('../modules/database');
module.exports = ( req, res)=>{
	let user = req.body;
	if(req.params.f === 'register'){
		if(is.reg(user)){
			if(user.rpass === user.pass){
				let pass = md5(user.pass)
				user = new User('#', user.lname, user.fname, user.nickname, user.email, pass);
				finduser = new User('#', '#', '#', user.nickname, user.email, '#');
				db.find('users',finduser,data =>{
					if(data.length > 0) return res.redirect('/register');//err mail or nick
					db.insert('users',user, data =>{
						req.session.is_user = true;
						req.session.user = data[0];
						res.redirect('/')
					});
				});
				
			}else res.redirect('/register')//password error
		}else res.send('xD')// error page
	}else if(req.params.f === 'login'){
		if(is.login(user)){
			user = new User('#', '#', '#', '#', user.email, md5(user.pass));
			db.find('users',user,data =>{
				if(data.length > 0){
					data = data[0];
					req.session.is_user = true;
					req.session.user = data;
					res.redirect('/');
				}else res.redirect('/login?email='+user.email+'&pass=&err=1')
			});
		}else res.send('xD')
	}else res.send('404')
}