const express = require("express");
const connection = require("./dbConfig.js");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
const PORT = 4000;
app.use( cors({ origin: true, credentials: true  }) );
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    let sql = "SELECT * FROM champ";
    connection.query(sql,(err, result) => {
        if (err) throw err;
        
        res.send(JSON.stringify(result));
    });
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});