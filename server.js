var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// serve static content for the app from the public director in the application directory
app.use(express.static("public"));

// parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller");

app.use(routes);

// start server that it can begin listening to client requests
app.listen(PORT, function(){
    console.log("App now listening at localhost: "+ PORT)
    console.log("http://localhost: " + PORT);
})

