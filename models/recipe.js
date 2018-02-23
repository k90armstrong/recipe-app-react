var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  title: String,
  dateCreated: Date,
  imageUrl: String,
  notes: String,
  directions: String,
  ingredients: []
});

module.exports = recipeSchema;