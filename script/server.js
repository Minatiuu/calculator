const express = require('express');
const app = express();

const port = 80;

app.use(express.static('./'));
app.listen(port, function(){
    console.log('listening on port: ' + port);
});
