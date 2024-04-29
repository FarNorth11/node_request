/**
 * Created by ben on 2019/1/30.
 */


var router = require("./router");
var http = require('http');
var url = require('url');
var readFile = require("./models/optFile");
var optFile = require("./models/optFile");
http.createServer(function (request, response) {
    // response.writeHead(200, { 'Content-Type': 'text-plain' });
    //response.writeHead(200, { 'Content-Type': 'text/html; charset = utf-8' });

    //if(request.url !== "/favicon.icon"){
    //    var pathname = url.parse(request.url).pathname;
    //    pathname = pathname.replace(/\//,'');
    //    console.log('---------',pathname);
    //    //同步异常捕获
    //    try{
    //
    //        router[pathname](request,response);
    //        //console.log('Router:',Router);
    //    }catch(err){
    //        console.log('error:',err);
    //        response.writeHead(200, { 'Content-Type': 'text-plain' });
    //        response.write(err.toString());
    //        response.end('');
    //    }
    //}

    //主动抛出异常
    try{
        response.writeHead(200, { 'Content-Type': 'text-plain' });
        response.write(optFile.expfun(0));
        response.end('');
    }catch(err){
        console.log('error:',err);
        response.writeHead(200, { 'Content-Type': 'text-plain' });
        response.write(err.toString());
        response.end('');
    }




}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');