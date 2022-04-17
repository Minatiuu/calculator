import sassTranspiler from '../modules/non-jsx/sassTranspiler.js';
import { exec } from 'child_process';
import express from 'express';
import fs from 'fs';
const sass = sassTranspiler();
const app = express();


const PORT = 8080;

// Cores do Terminal
const // Tags
    uInit = '',
    uCol = '\u001b[38;2;',
    uBg = '\u0001b[48;2;',
    uEnd = '\u001b[m'
;
const // Cores Predefinidas
    ccSocket = '230;230;230m',
    ccRed = '255;0;0m',
    reset = '\u001b[0m'
;

app.use(express.static('./'));
app.listen(PORT, function(){
    var uInit = uCol + ccSocket;
    console.log(`> ${uInit} Listening on port: ${PORT}${uEnd}`);
});


var testFolder = "./"
exec(`ls ${testFolder}`, function(err, stdout, stderr){
    console.log(stdout);
});