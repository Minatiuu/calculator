import sassTranspiler from '../modules/sassTranspiler.js';
const sass = sassTranspiler();

import { exec } from 'child_process';
import express from 'express';
const app = express();

const port = 8080;
const defaults = {
    shell: '/bin/sh'
}

app.use(express.static('./'));
app.listen(port, function(){
    console.log('listening on port: ' + port);
});

sass.transpile();