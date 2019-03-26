const router = require('express').Router();
const fs = require('fs');
const JSONStream = require('JSONStream');
const config= require('config');

router.get('/', function (req, res) {
    let readStream = fs.createReadStream('files/'+config.get('readfile-name'), 'utf-8').pipe(JSONStream.parse("*"));
    let writeStream = fs.createWriteStream('files/'+config.get('writefile-name'), {
      flags: 'w'
    });
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Access-Control-Allow-Origin': '*' });
    const chunks = [];
    readStream.on('data', (data) => {
      chunks.push(JSON.stringify(data));
      writeStream.write(JSON.stringify(data) + ' \n', 'utf-8', () => {
        res.write('data: ' + JSON.stringify(data)+'\n\n');
      });
    });
});

module.exports = router;