
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

app.set('port', (process.env.PORT || 5000));

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public/src')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);
app.get('/api', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/dist','index.html'))
});
app.listen(port, function(){
    console.log('Server started on port '+port);
});

module.exports = app;

/*
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var tasks = require('./routes/tasks');

app.use('/',express.static(__dirname+'/client/dist'));
// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.get('/api', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/dist','index.html'))
});

/!*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*!/



app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});

module.exports = app;
*/
/*var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var path = require('path');
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
var index = require('./routes/index');
var tasks = require('./routes/tasks');
app.use('/',express.static(__dirname+'/public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', index);
app.use('/api', tasks);
app.set('port', (process.env.PORT || 5000));


app.get('/api', function (req, res) {
   res.sendFile(path.join(__dirname+'/public/dist/','index.html'));

});





app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
module.exports = app;*/
/*
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use('/', index);
app.use('/api', tasks);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public/dist'));
app.set('views', __dirname + '/public/dist/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.get('/api', function(req, res){
    res.sendFile(path.join(__dirname+'/public/dist/','index.html'));

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;*/
