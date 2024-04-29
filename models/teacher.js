var User = require('./user');

function teacher(ida,namea,agea){
	User.apply(this,[ida,namea,agea]); //js里的继承
	this.teach = function(){
		console.log(this.name+"讲课"+this.id+this.age);
	}
	this.doing = function(res){
		res.write(this.name +'doingdoingdoingdoingdoingdoing ')
	}
}

module.exports = teacher;