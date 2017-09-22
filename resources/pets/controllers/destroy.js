// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const petId = new ObjectId(req.params.id);

  // Remove a pet from the "pets" collection via its ID above
  // Call the method below after the query is complete:

  // res.sendStatus(200);
}
