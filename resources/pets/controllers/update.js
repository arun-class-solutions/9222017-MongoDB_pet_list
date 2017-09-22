// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const petId = new ObjectId(req.params.id);

  // Update the pet from the "pets" collection via its ID above
  // You can use the data from the form here:

  const editedPet = {
    petName: req.body.petName,
    age: req.body.age,
    breed: req.body.breed,
    photo: req.body.photo
  }

  // Call the method below when the query is complete:

  // res.redirect("/");
}
