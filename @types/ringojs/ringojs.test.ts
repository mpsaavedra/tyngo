/// <reference path="./ringojs.d.ts"/>

// addToClasspath("../../lib/ivy/log4j-1.2.14.jar");
// console.dir(arguments);
// console.dir(environment);
//
// import * as http from "ringo/http";
// import * as https from "ringo/https";
// import {HttpsServer} from "ringo/https";
//
// var d = new http.Interfaced();
// var s = new https.HttpsServer();
//

// include('io');
// import * as assert from "assert";
// assert.equal("a", "a");

// import * as assert from "assert";
// import {Binary, ByteString, ByteArray} from "binary";

import * as fs from "fs";
import {version} from "ringo/engine";
import {request} from "ringo/httpclient";


// exports.testDeveloping = function () {
//     // console.dir(version[0]);
//     // console.dir(new fs.Path().from("asdasd"));
//     // console.dir(fs.join('dir', 'that'));
//     let repo = getRepository('..\\..\\')
//     // console.dir(repo);
//
//     // let exchange = request({
//     //     url: 'http://localhost'
//     // });
//
//     let log = require('ringo/logging').getLogger(module.id);
//     log.debug('Connected to ', 'ulererereer', '[GET]');
// };
//
// if (require.main === module) {
//     require('system').exit(require('test').run(module.id));
// }


fs
  .list(".")
  .filter(function(path){
    return fs.isDirectory(fs.join("."))
  })
  .map(function(file){
    return {
      name: file,
      content: fs.read(file)
    }
  })
  .forEach(function(obj){
    console.log(obj.name);
    console.log(obj.content);
  })
