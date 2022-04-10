const fs = require('fs');
const express = require('express');
const app = express();
const nodemon = require('nodemon');

app.get('../index.html',
function requestHandler(req, res) {
    re.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
}).listen(8081);
app.use(express.static('./'));