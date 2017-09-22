// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const petId = new ObjectId(req.params.id);

  // Find the pet record from the "pets" collection via its ID above

  // Call the method below, passing in the pet object after the query is complete:

  // res.render("edit_pet", {
  //   pet: petObject
  // });
}
