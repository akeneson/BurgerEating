// dependencies
var mysql = require('mysql');

//  MySQL connection object
var connection;

// JAWSDB_URL is to use databases from heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	})
};

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id "+ connection.threadId);
});

// Export connection for ORM use
module.exports = connection;
