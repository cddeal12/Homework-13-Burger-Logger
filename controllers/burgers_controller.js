// Imports
const express = require("express");
const burger = require("../models/burger.js")
//=====================================

// Create router
var router = express.Router();
//Routes
// =================================================

// Renders all burgers by default on the main page
router.get("/", function(req, res) {
    burger.selectAll(function(result) {
        console.log("Rendering " + result)
        res.render("index", result);
    });
});

// Adds a burger to the database
router.post("/api/burgers", function(req, res) {
    burger.addBurger(req.body.name, function(result) {
        console.log(result);
        res.json({id: result.id});
    });
});

// Changes a burger's state to devoured
router.put("/api/burgers/:burger_name", function(req, res) {
    burger.updateDevoured(req.params.burger_name, true, function(result) {
        console.log(result);
        res.status(200).end();
    });
});

module.exports = router;
