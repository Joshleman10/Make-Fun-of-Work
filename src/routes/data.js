const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const selectAll = 'SELECT * FROM moves';

const con = mysql.createConnection({
    host: "localhost",
    // port
    port: 3306,
    // username
    user: "root",
    // password
    password: "root",
    database: "productivity"
});

con.connect(err => {
    if (err) {
        return err;
    }
})

app.use(cors());

app.get('/', (req, res) => {
    res.send("go to /moves to see moves")
})

app.get('/products', (req, res) => {
    con.query(selectAll, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
})

app.listen(4000, () => {
    console.log('Moves server listening on 3306')
});

