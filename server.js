/*
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client/src')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port '+port);
});


*/
/*
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname+'/public/dist'));
/!*app.use('/',express.static(__dirname+'/public/dist'));*!/
/!*app.use('/',express.static(__dirname+'/client/dist'));*!/
// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.get('/api', function (req, res) {
    /!*res.sendFile(path.join(__dirname+'/client/dist','index.html'))*!/
   /!* res.sendFile(path.join(__dirname+'/public/dist/','index.html'))*!/
    res.send('Hello');
});

/!*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*!/



/!*app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});*!/
app.listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));

});

module.exports = app;


/*

var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname+'/public/dist'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/dist/','index.html'));
});

app.listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));

});*/

var express = require('express');
var app = express();
var index = require('./routes/index');
var tasks = require('./routes/tasks');
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname+'/public/dist/'));
var bodyParser = require('body-parser');
// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);
app.get('/', function (req, res) {
    /* res.sendFile(path.join(__dirname+'/public/dist/index.html'));*/
     res.send('Hi!');

});
app.listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));

});
module.exports = app;