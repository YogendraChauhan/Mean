// importing module dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();
const route = require("./routes/routes");
const config = require("./config/config");

// Bluebird Promises Library
mongoose.Promise = require('bluebird');

// connecton to mongodb
mongoose.connect(config.DB.URI, {
    useMongoClient: true,
});

mongoose.connection.on("connected", () => {
    console.log("Connected to database mongodb.");
});

mongoose.connection.on("error", (err) => {
    if(err)
    console.error("Connection Error : ", err);
});

// adding (cors)
app.use(cors());

// adding (body-parser)
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// adding (static file path)
app.use(express.static(path.join(__dirname, "public"))); // where : __dirname points to current project directory.

// adding (routes) 
app.use("/api", route);

app.listen(config.DB.PORT, () => {
    console.log("Server Starting at Port "+config.DB.PORT);
});