// importing module dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();
const route = require("./routes/routes");

// connecton to mongodb

mongoose.connect("mongodb://localhost:27017/users", {
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