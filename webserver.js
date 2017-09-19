var connect = require('connect');
var serveStatic = require('serve-static');
var path = require("path");

var app = connect();
var sDir = ".";
app.use(serveStatic(sDir));
var ePort = 5100;
app.listen(ePort, function(){

    console.log("it works!");
    console.log("document root" + __dirname + path.sep + sDir);

});

