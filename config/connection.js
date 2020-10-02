// start up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3000",
    user: "root",
    password: "",
    database: "burgers_db"
});

// make connection
connection.connect(function(err){
    if(err){
        console.log("err connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// export connection for our ORM to use
module.exports = connection;