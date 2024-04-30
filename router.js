/*
 * @Author: kalen peichenkai11@gmail.com
 * @Date: 2024-04-29 15:04:53
 * @LastEditors: kalen peichenkai11@gmail.com
 * @LastEditTime: 2024-04-30 11:33:40
 * @FilePath: /node_request/router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var optFile = require("./models/optFile");
var http = require('http');
var url = require('url');
var querystring = require('querystring');
function  getRecall(request,response){
	// response.writeHead(200, { 'Content-Type': 'text/html; charset = utf-8' });
	response.writeHead(200, { 'Content-Type': 'text/html' });
	function recall(data){
		response.write(data);
		response.end('');
	}
	return recall;
}
module.exports={
	login:function(request,response){
		//response.write("我是login方法");
		//闭包.A 异步读取文件,需要保留reqeust对象
		//function recall(data){
		//    response.write(data); 
		//    response.end('');
		//}

		recall = getRecall(request,response);
		optFile.readFileAsync('./models/view/login.html',recall);

	},
	regist:function(request,response){
		//异步读取文件
		// response.write('my regist method!');
		recall = getRecall(request,response);
		optFile.readFileAsync('./models/view/regist.html',recall);
	},
	writeFile:function(request,response){
		//异步写入文件
		response.write('my writeFile method!');
		recall = getRecall(request,response);
		optFile.writeFileAsync('./models/view/one.text','我的写入名称',recall);
	},
	imgAndHtml:function(request,response){
		//异步读取文件,图文混排
		console.log('my loginHtml method!');
		recall = getRecall(request,response);
		optFile.readFileAsync('./models/view/login.html',recall);
	},

	showImg: function (request,response) {
		//异步读取图片,以二进制编码的形式,发送到网页上
		response.writeHead(200, { 'Content-Type': 'image/jpeg' });
		optFile.readImg('./img/view.jpg',response);
	},
	getForm: function (request,response) {

		//------------------get接受参数----------------
		/*
		var rdata = url.parse(request.url,true).query;
		if(rdata['email']!=undefined){
			console.log(rdata['email']);
			console.log(rdata['pwd']);

		}
		 recall = getRecall(request,response);
		 optFile.readFileAsync('./models/view/getForm.html',recall);

		 */

		var post ='';
		request.on('data',function(chunk){
			post+=chunk;
		});
		//异步
		request.on('end',function(chunk){
		 	post = querystring.parse(post);
			//response.write('收到参数:'+post['email']+'\n');
			//console.log('email:'+post['email']+'\n');
			//console.log('email:'+post['pwd']+'\n');
			//recall = getRecall(request,response);

			arr = ['email','pwd'];

			function recall(data){
				dataStr = data.toString();
				for(var i=0;i<arr.length;i++){
					re = new RegExp('{'+arr[i]+'}','g');//  /\{name\}/g
					dataStr = dataStr.replace(response,post[arr[i]]);
				}
				response.write(data);
				response.end('');
			}

			optFile.readFileAsync('./models/view/getForm.html',recall);

		 });
	}

}
