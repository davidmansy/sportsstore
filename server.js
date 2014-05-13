var connect = require('connect');

var app = connect().use(connect.static(__dirname + '/angularjs'));
app.listen(5000);