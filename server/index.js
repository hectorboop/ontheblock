const express = require("express");
const app = express();
const mysql = require("mysql");

const port = process.env.port || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = mysql.createPool ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'realestatedb'
});

app.get("/", (req, res) => {
    const sqlQ = "INSERT INTO test (ID, Name) VALUES ('2', 'Rae');";
    db.query(sqlQ, (err, result) => {
        res.send("Data Inserted!");
    });
    //res.send("Server running . . .");
});

/*app.get('/1', (req, res) => {
    db.getConnection((err, connection) => {
        if(err) throw err
        console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * from test', (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }

            // if(err) throw err
            console.log('The data from beer table are: \n', rows)
        })
    })
});*/

app.listen(port, () => {
    console.log("Running on port ${port}")
});