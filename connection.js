const mysql = require('mysql');
const config= require('config');

const connection = mysql.createConnection({
    host: config.get('database.hostname'),
    user: config.get('database.username'),
    password: config.get('database.password'),
    database: config.get('database.db-name')
});

connection.connect((err)=>{
    if(err){
        console.log('connection failed  Error:\n'+JSON.stringify(err, undefined,2));
    }
});
module.exports = connection;