/**
 * Created by ben on 2019/1/30.
 */
var router = require("./router");
var http = require('http');
var url = require('url');
var optFile = require("./models/optFile");
http.createServer(function (request, response) {

    if(request.url !== "/favicon.icon"){
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'');
        console.log('---------',pathname);
        //同步异常捕获
        try{

            router[pathname](request,response);
            //console.log('Router:',Router);
        }catch(err){
            console.log('error:',err);
            response.writeHead(200, { 'Content-Type': 'text-plain' });
            response.write(err.toString());
            response.end('');
        }
    }





}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');