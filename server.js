const json1 = require('./data/geral.json');
const http = require('http');
const fs = require('fs');
const events = require('events');
const express = require('express');
const app = express();
const nodemon = require('nodemon');

app.get('./index.html',
function requestHandler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
    if (200) {
        console.log("Operação concluída com sucesso.")
    }
}).listen(8080);
app.use(express.static('./'));

