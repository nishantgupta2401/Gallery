var express = require('express');
var http = require('http');
var env = require('./environment');
const path = require('path');
const fs = require('fs');
var base_urls = env.base_urls;
//joining path of directory 
const directoryPath = path.join(base_urls, 'uploads');


exports.login = (request, response) => {

    let { emailId, password } = request.body;
    
    if(emailId == 'test@gmail.com' && password == 'test123'){
        response.status(200).json({ "status": "success", "data": request.body });
    }else{
        response.status(200).json({ "status": "failed", "message": "Incorrect Email or Password." });
    }
};

exports.uploadSticker = function(req, resp) {

        resp.status(200).json({ "status": "success"});

};

exports.getStickers = function(req, resp) {
    
    let categories = [];
   
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            let str = path.basename(file, path.extname(file));
            str = str.slice(0,str.indexOf('-')); 
            if(!categories.includes(str)) {
                categories.push(str);
            }
        });
        resp.status(200).json({ "status": "success", "categories":categories, "files":files});
    });
};