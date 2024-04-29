/*
 * @Author: kalen peichenkai11@gmail.com
 * @Date: 2024-04-29 15:04:53
 * @LastEditors: kalen peichenkai11@gmail.com
 * @LastEditTime: 2024-04-29 16:21:48
 * @FilePath: /node_request/ServerRouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function hello() {
  console.log("Hello World!");
}

function fun1(res) {
  console.log("fun1");
  res.write("hello,fun1 /n");
}

var otherFun = require("./models/otherFun");
var User = require("./models/user");
var Teacher = require("./models/teacher");
var Router = require("./router");
var http = require("http");
var url = require("url");
var readFile = require("./models/optFile");
http
  .createServer(function (request, response) {
    console.log("访问");
    /*
    1.request get访问 http://127.0.0.1:8000/

    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.write('hello.world');
    response.end('');
    */

    /*
    2.调用其他类

    response.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });
    hello();
    fun1(response);
    otherFun.hello2(response);
    otherFun["hello3"](response);
    response.write("hello.world");
    response.end("");
    */

    /*
    3.创建类,继承  
    */
    response.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });

    if (typeof User === 'function') {
        User = new User();
        User.id = 1;
        User.name = "张三";
        User.enter();
        User.doing(response);
    } else {
        console.error('User is not a constructor.');
    }
    // if (User == null) {

    // }

    // if (Teacher == null) {
    //   Teacher = new Teacher(7, "李思", 12);
    //   Teacher.enter();
    //   Teacher.teach();
    //   Teacher.doing(response);
    // }
    // Teacher = null;

    response.end();

    /*
    3.文件读取(同步/异步)
    */
    // readFile.readFileSync("./models/view/login.html");
    // response.end("");

    //异步闭包.A
    //function recall(data){
    //    response.write(data);
    //    response.end('');
    //}
    //readFile.readFileAsync('./models/login.html',recall);

    //路由跳转
    // var pathname = url.parse(request.url).pathname;
    // pathname = pathname.replace(/\//,'');
    // console.log('---------',pathname);
    // //response.end('');
    // Router[pathname](request,response);
  })
  .listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
