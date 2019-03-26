// const app = require('express')();
const express = require('express');
const app = express();
const path = require('path');
const customers = require('./routes/customers');
const streamdata = require('./routes/streamdata');
const config= require('config');

app.use(express.static('public'));
app.use('/get-customers', customers);
app.use('/data', streamdata);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

const port = config.get('port') || 3000;
module.exports =  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
