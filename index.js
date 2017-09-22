// Express JS configuration
const express = require("express");
const app = express();

// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

// EJS configuration
app.set("view engine", "ejs");

// Static asset configuration
app.use(express.static("./assets"));

// Body parser configuration
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// Configure method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.redirect(302, "/owners");
});

app.use(require("./resources"));

app.listen(3000);
