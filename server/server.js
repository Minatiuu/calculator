import sassTranspiler from '../modules/js/sassTranspiler.js';
import { exec } from 'child_process';
import express from 'express';
import fs from 'fs';
const sass = sassTranspiler();
const app = express();

const PORT = 8080;


app.use(express.static('./'));
app.listen(PORT, function(){
    console.log('listening on port: ' + PORT);
});

const
red = '\u001b[31m',
redBack = '\u001b[41m',
blue = '\u001b[34m',
reset = '\u001b[0m';

exec(`ls ${testFolder2}`, function(err, stdout, stderr){
    console.log(stdout);
});

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
});