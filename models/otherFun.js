// function hello2(res) {
//     console.log('otherFun!');
//     	res.write('hello,fun2 /n')
// }

// module.exports = hello2;
//调用方式 
//var otherFun = require("./otherFun");
//otherFun(response);

var Funs = {
 	hello2:function(res) {
    	console.log('otherFun!');
    	res.write('hello,fun2 /n');
	},
	hello3:function(res) {
    	// console.log('otherFun!');
    	res.write('hello,fun33333333 /n')
	}
}
module.exports = Funs;
// module.exports = {
//  	hello2:function(res) {
//     	console.log('otherFun!');
//     	res.write('hello,fun2 /n')
// 	}
// };
//调用方式 
//var otherFun = require("./otherFun");
//otherFun.hello2(response);


//第三种路由跳转里会用到
//var otherFun = require("./otherFun");
//otherFun['hello3'](response);
//otherFun['hello2'](response);