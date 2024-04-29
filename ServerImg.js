/**
 * Created by ben on 2019/1/30.
 */
var http = require('http');
var optFile = require("./models/optFile");

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
    console.log('访问');
    optFile.readImg('./img/pig.jpg',response);
    console.log('继续执行');

}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');