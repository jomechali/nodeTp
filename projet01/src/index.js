/**
 * ES5
 * require('api') -> cherche dans node module local puis global
 * require('./module01') cherche dans nos dossiers sources
 */
let module01 = require('./module01');
let http = require('http');

module01.menu();
module01.saisie();

console.log("index.js");

http.createServer(

    function (req, res) {

        res.writeHead(200,

            { 'Content-Type': 'text/plain' });

        res.end('BIENVENUE M04');

    }).listen(9090);