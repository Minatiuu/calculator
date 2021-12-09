const json1 = require('./data/geral.json');
const http = require('http');
const fs = require('fs');
const events = require('events');
const express = require('express');
const app = express();
const nodemon = require('nodemon');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);

app.get('./index.html'.jquery,
function requestHandler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
    if (200) {
        console.log("Operação concluída com sucesso.")
    }
    $('#calculator_historic > div').innerHTML = "";
}).listen(8080);
app.use(express.static('./'));