// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const ownerId = new ObjectId(req.body.ownerId);

  // Add a pet to the "pets" collection
  // Use the data below which comes from the form:

  const newPet = {
    petName: req.body.petName,
    age: req.body.age,
    breed: req.body.breed,
    photo: req.body.photo,
    ownerId: ownerId
  }

  // Call the method below after the query is complete:

  // res.redirect("/");
}
