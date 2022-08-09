var mysql = require('mysql');
var connection = mysql.createConnection({
host : 'localhost',
database : 'tftbuilder',
user : 'root',
password : 'root',
});

connection.connect(function(err) {
if (err) {
    console.error('Error de conexion: ' + err.stack);
    return;
}
console.log('Conectado con el identificador ' + connection.threadId);

});



module.exports = connection;