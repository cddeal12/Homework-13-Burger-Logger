const orm = require("../config/orm.js");

const burger = {
    // Returns all burger table data as result, and passes it into 'callback'
    selectAll: function(callback) {
        orm.selectAll(function(result) {
            callback(result);
        });
    },
    // Adds a burger with the specified name to the burgers table, always sets new burger's devoured
    //status to FALSE
    addBurger: function(burgerName, callback) {
        orm.insertOne(burgerName, function(result) {
            callback(result);
        });
    },
    // Updates the specified burger's devoured key, 'devouredUpdate' should be true or false
    updateDevoured: function(burgerName, devouredUpdate, callback) {
        orm.updateOne(burgerName, devouredUpdate, function(result) {
            callback(result);
        });
    }
}

module.exports = burger;