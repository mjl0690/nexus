var http = require('http');
var request = require("request");
var jsonBody = {};
var results;
request("http://www.google.com", function( response, body) {
console.log(body);
    /*jsonBody = JSON.parse(body);.forEach(function (entry) {

    })*/
});

http.createServer(function(request, res){

// Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end(JSON.stringify(results));

}).listen(4000);