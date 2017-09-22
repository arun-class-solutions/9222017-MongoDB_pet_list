// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  // Insert a record into the "owners" collection using the data from the form
  // You can use the data from the form below:

  const newOwner = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  }

  // Call this method when the query is complete: res.redirect("/");
}
