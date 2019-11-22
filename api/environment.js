//for database connection
var mysql = require('mysql');
var http = require('http');

var enviroment_local = {
    // Dbconnection: mysql.createConnection({
    //     database: '',
    //     user: '',
    //     password: '',
    //     host: '',
    //     acquireTimeout: 1000000
    // }),
    base_urls: __dirname + "/",
    timestamp: function() {
        var currnettimestamp = new Date();
        return currnettimestamp.getTime();
    },
    port: 3001
};


module.exports = enviroment_local;


