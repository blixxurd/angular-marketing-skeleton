var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/tpl', express.static(__dirname + '/tpl'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

app.listen(8081); //the port you want to use

console.log("Test Server Started on Port 8081.")
console.log("*THIS TEST SERVLET IS NOT INTENDED FOR PRODUCTION ENVIRONMENTS.");