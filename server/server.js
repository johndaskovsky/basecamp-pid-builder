/*var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic('client', {'index': ['index.html', 'index.htm']}));
app.listen(3000);*/


var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000 );
app.use(express.static(__dirname + '/client'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});