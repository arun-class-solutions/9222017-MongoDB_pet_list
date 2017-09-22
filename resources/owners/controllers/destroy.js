// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const ownerId = new ObjectId(req.params.id);

  // Remove the owner from the "owners" collection given the ID above

  // Call this method when the query is complete: res.sendStatus(200);
}
