const app = require('express')();
const customers = require('./routes/customers');
const streamdata = require('./routes/streamdata');
const config= require('config');

app.use('/get-customers', customers);
app.use('/data', streamdata);

const port = config.get('port') || 3000;
module.exports =  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
