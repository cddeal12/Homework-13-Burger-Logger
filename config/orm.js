const connection = require("../config/connection.js");

// Collection of sql queries the site can make in the form of javascript functions
// Each returns a result in a callback funtion passed in through Controllers
const orm = {
    // GETs all burgers in the database
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // Adds a burger to the database, always starts as NOT devoured
    insertOne: function(burgerName, callback) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);"
        connection.query(queryString, [burgerName], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // Updates the 'devoured' status of a burger in the database, devouredUpdate should be either true or false
    updateOne: function(id, devouredUpdate, callback) {
        var queryString = "UPDATE burgers SET devoured=" + devouredUpdate + " WHERE id=" + id + ";"
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = orm;
