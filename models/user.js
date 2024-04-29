/*
 * @Author: kalen peichenkai11@gmail.com
 * @Date: 2024-04-29 15:04:53
 * @LastEditors: kalen peichenkai11@gmail.com
 * @LastEditTime: 2024-04-29 16:15:49
 * @FilePath: /node_request/models/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function User(id,name,age){
	this.id=id;
	this.name=name;
	this.age=age;

	this.enter = function(){
		console.log(this.name+"进入图书馆");
	}
	this.doing = function(res){
		res.write(this.name +'doingdoingdoingdoingdoingdoing ')
	}

}

module.exports = User;


