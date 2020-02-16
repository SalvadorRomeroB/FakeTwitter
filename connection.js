const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password1",
  database: "Lab1DB2",
  multipleStatements: true
});

mysqlConnection.connect(err => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Failed to connect to MYSQL database", err);
  }
});

module.exports = mysqlConnection;
