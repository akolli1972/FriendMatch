// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require("fs");
var randomstring = require("randomstring");

// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //TODO: allows static service

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// // Starts the server to begin listening
// // =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
