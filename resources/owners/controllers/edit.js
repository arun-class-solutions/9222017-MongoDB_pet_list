// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const ownerId = new ObjectId(req.params.id);

  // Find the owner by its ID given above
  // Call the method below after the query is complete, passing in the owner object:

  // res.render("edit_owner", {
  //   owner: ownerObject
  // });
}
