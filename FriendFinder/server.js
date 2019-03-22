var express = require("express");
var path = require ("path");

var app = express();

// Sets an initial port
var PORT = process.env.PORT || 3000;

// Parses data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});