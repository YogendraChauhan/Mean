// importing module dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();
const route = require("./routes/routes");

//cloud 
const uri = "mongodb://optimusprime:optimusprime@cluster0-shard-00-00-u961r.mongodb.net:27017,cluster0-shard-00-01-u961r.mongodb.net:27017,cluster0-shard-00-02-u961r.mongodb.net:27017/db-WyFyspot?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
//local
//const uri = "mongodb://localhost:27017/wyfyspot";

// Native ES6 Promises
//mongoose.Promise = global.Promise;

// Bluebird Promises Library
mongoose.Promise = require('bluebird');

// connecton to mongodb
mongoose.connect(uri, {
    useMongoClient: true,
});

mongoose.connection.on("connected", () => {
    console.log("Connected to database mongodb.");
});

mongoose.connection.on("error", (err) => {
    if(err)
    console.error("Connection Error : ", err);
});

// declare port number

const port = 3000;

// adding (cors)
app.use(cors());

// adding (body-parser)

app.use(bodyparser.json());

// adding (static file path)
app.use(express.static(path.join(__dirname, "public"))); // where : __dirname points to current project directory.

// adding (routes) 
app.use("/api", route);

app.listen(port, () => {
    console.log("Server Starting at Port "+port);
});