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
