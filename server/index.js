const express = require("express");
const connection = require("./dbConfig.js")
const bodyParser = require("body-parser");


const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    let sql = "SELECT * FROM champ";
    connection.query(sql,(err, rows) => {
        if (err) throw err;
        
        res.send(JSON.stringify(rows));
    });
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});