// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const ownerId = new ObjectId(req.query.owner_id);

  // Find the owner via its ID above
  // Call the method below passing in the owner object when the query is complete:

  // res.render("add_pet", {
  //   owner: ownerObject
  // });
}
