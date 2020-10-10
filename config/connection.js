// Set up MySQL connection.
const mysql = require("mysql");

// Sets up postgres
const {Client} = require("pg");
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
client.connect();
client.query(`CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    burger_name VARCHAR(255),
    devoured BOOLEAN
);`, (err, res) => {
  if (err) throw err;
  client.end;
});


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Hardbut99?",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
