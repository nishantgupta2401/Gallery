var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var jsonParser = bodyParser.json();
var server = require('http').Server(app)
var env = require('./api/environment');
var base_urls = env.base_urls;
var userlogin = require('./api/userlogin');

app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.set('port', (process.env.PORT || env.port));

var storage = multer.diskStorage({ // storage code for storing setting
    destination: function(req, file, cb) {
        cb(null, base_urls + 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, req.body.category_name+"-" + Date.now() + '.' + file.originalname.split('.').pop());
    }
});

var upload = multer({ storage: storage });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(logger('dev'));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/", express.static(path.join(__dirname, 'web_admin')));
app.use("/api", express.static(path.join(__dirname, 'api')));

/* Use this to refresh page in html5mode(true)  */
app.get('*', function(req, res, next) {
    res.sendfile('./web_admin/index.html');
});
/* .......End........ */


app.post('/login', userlogin.login);
app.post('/uploadSticker', upload.any() ,userlogin.uploadSticker);
app.post('/getStickers', userlogin.getStickers);


server.listen(app.get('port'), function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)
});