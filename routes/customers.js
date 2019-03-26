const router = require('express').Router();
const connection = require('../connection');
const fs = require('fs');

router.get('/', function (req, res) {
    return getCustomers()
        .then(function (rows) {
            fs.writeFile('./files/readdata.json', JSON.stringify(rows), function (err) {
                if (err) throw err;
            });
            res.send(rows);
        }).catch((err) => {
            res.send(err);
        });
});

function getCustomers() {
    let query = "SELECT * FROM customers";
    return new Promise(function (resolve, reject) {
        connection.query(query, (err, rows) => {
            if (err) reject(new Error(err));
            resolve(rows);
        });
    });
}

module.exports = router;