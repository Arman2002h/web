let is;
module.exports.f = is =( obj, namelist)=> {
	let params = namelist;
	let fl = true;
	for(let i in params)
		if(obj[params[i]] == undefined){
			fl = false;
			break;
		}
	return fl;
}
module.exports.reg = user => {
	return is(user,['lname','fname','email','nickname','pass','rpass']);
}
module.exports.login = user => {
	return is(user,['email','pass'])
}
module.exports.products = items => {
	for(let i in items)
		if(is(items[i],['header','content','header_img','price']) == false)
			return false;

	return true;
}