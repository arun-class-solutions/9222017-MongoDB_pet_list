// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const ownerId = new ObjectId(req.params.id);

  // Update the owner in the "owners" collection via its ID located above
  // You can use the object below that comes from the form:

  const editedOwner = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  }

  // Call the method below after the query is complete:

  // res.redirect("/");
}
