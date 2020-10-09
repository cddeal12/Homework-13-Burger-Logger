// Imports
// =================================================================
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

// Express setup
// =================================================================

// Serve static content 
app.use(express.static("public"));

// Parse app as json
app.use(express.urlencoded({ extended: true}));
app.use(express.json);

//Set Handlebars
const expressHandlebars = require("express-handlebars");
app.engine("handlebars", expressHandlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import Routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start Listening
app.listen(PORT, function() {
    console.log("Server Listening on: http:localhost" + PORT);
});
