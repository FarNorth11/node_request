/*
 * @Author: kalen peichenkai11@gmail.com
 * @Date: 2024-04-29 15:04:53
 * @LastEditors: kalen peichenkai11@gmail.com
 * @LastEditTime: 2024-04-30 11:24:38
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
    // console.log("访问");
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

    response.writeHead(200, { "Content-Type": "text/html; charset = utf-8" });
    if (typeof User === 'function') {
        user = new User();
        user.id = 1;
        user.name = "张三";
        user.enter();
        user.doing(response);
    } else {
        user = null;
        console.error('User is not a constructor '+typeof User );
    }
    if (typeof Teacher === 'function') {
      teacher = new Teacher(7, "李思", 12);
      teacher.enter();
      teacher.teach();
      teacher.doing(response);
    } else {
        teacher = null;
        console.error('Teacher is not a constructor '+typeof User );
    }

    response.end();
    */

    /*
    3.文件读取(同步/异步)
   
    readFile.readFileSync("./models/view/login.html");
    response.end("");

    //异步闭包.A
    function recall(data){
       response.write(data);
       response.end('');
    }
    readFile.readFileAsync('./models/view/login.html',recall);
    response.end("");
     */

    /*
    4. 路由跳转
    // http://127.0.0.1:8000/regist
    
    */
    var pathname = url.parse(request.url).pathname;
    pathname = pathname.replace(/\//, "");
    // 如果请求的是 favicon.ico，则直接返回空响应
    if (pathname === "favicon.ico") {
      response.writeHead(200, { "Content-Type": "image/x-icon" });
      response.end();
      return;
    }

    // console.log("result:", pathname, Router);
    Router[pathname](request, response);
  })
  .listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
