const json1 = require('./data/geral.json');
const fs = require('fs');
const express = require('express');
const app = express();
const nodemon = require('nodemon');
const gs = require('./index.js');

app.get('./index.html',
function requestHandler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();

}).listen(1);
app.use(express.static('./'));
