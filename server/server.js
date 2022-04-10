import sassTranspiler from '../modules/sassTranspiler.js';
const sass = sassTranspiler();

import { exec } from 'child_process';
import express from 'express';
const app = express();

const PORT = 8080;

app.use(express.static('./'));
app.listen(PORT, function(){
    console.log('listening on port: ' + PORT);
});

sass.transpile();