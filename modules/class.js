module.exports.user = class user{
	constructor(id,lname,fname,nick,email,pass){
		this.id = id
		this.lname = lname;
		this.fname = fname;
		this.email = email;
		this.nickname = nick;
		this.pass = pass;
	}
}
module.exports.dbconfig = class dbconfig{
	constructor(host,user,password,database){
		this.host=host;
		this.user=user;
		this.password=password;
		this.database=database;
	}
}
let Range;
module.exports.Range = Range = class Range {
	constructor(min,max){
		this.min = min;
		this.max = max;
	}
}
let Filter;
module.exports.Filter = Filter = class Filter {
	constructor(body){
		this.id = body.id || '#'
		this.search = body.Search || '#';
		this.priceRange =  (body.P_max != '' && body.P_mine != '')? 
		{
			'min':body.P_mine,
			'max':body.P_max
		}:'#'
		this.brend = (body.brend != 'false' && body.brend != null)?body.brend:'#'
		this.categorie = (body.categorie != 'false' && body.categorie != null)?body.categorie:'#'
	}
}