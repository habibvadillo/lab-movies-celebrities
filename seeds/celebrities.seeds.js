const mongoose = require("mongoose");
require("../db");
const CelebrityModel = require("../models/Celebrity.model");

// Iteration #1
let initials = [
  { name: "Brad Pitt", occupation: "Actor", catchPhrase: "Dad and proud!" },
  {
    name: "Matthew McConnaughey",
    occupation: "Actor",
    catchPhrase: "I date supermodels",
  },
  {
    name: "Julia Roberts",
    occupation: "Actor",
    catchPhrase: "Call me Pretty Woman",
  },
];

CelebrityModel.create(initials)
  .then((result) => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
    mongoose.connection.close();
  });
