var express = require('express');
var http = require('http');
var env = require('./environment');
var connection = env.Dbconnection;
var md5 = require('md5');
var async = require('async');
var moment = require('moment');
var today = moment();

/**
 * @api {post} /adminLogin Request Admin information
 * @apiName adminLogin
 * @apiGroup Admin
 *
 * @apiParam {String} email Admin email.
 * @apiParam {String} password Admin email.
 *
 * @apiSuccess {String} status Status of the Admin.
 * @apiSuccess {String} data Details of the Admin.
 *
 */
exports.login = function(request, response) {

    let { emailId, password } = request.body;
    console.log(emailId, password)
    if(emailId == 'test@gmail.com' && password == 'test123'){
        response.status(200).json({ "status": "success", "data": request.body });
    }else{
        response.status(200).json({ "status": "failed", "message": "Incorrect Email or Password." });
    }
    // connection.query("select * from Users where emailId = '" + req.body.emailId + "' and password = '" + md5(req.body.password) + "' and userTypeId = " + req.body.userTypeId + "", function(err, rows) {
    //     if (err) {
    //         console.log(err);
    //         resp.status(200).json({ "status": "failed" });
    //     } else {
    //         if (rows.length > 0) {
    //             if (rows[0].status == 0 && rows[0].userTypeId == 2) {
    //                 resp.status(200).json({ "status": "failed", "message": "Your Account is deactivated, Please contact to Admin." });
    //             } else {
    //                 rows[0].password = req.body.password;
    //                 resp.status(200).json({ "status": "success", "data": rows });
    //             }
    //         } else {
    //             resp.status(200).json({ "status": "failed", "message": "Incorrect Email or Password." });
    //         }
    //     }
    // })
}