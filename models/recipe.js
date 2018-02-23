var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recipeSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  dateCreated: Date,
  imageUrl: String,
  notes: String,
  directions: String,
  ingredients: [{
    name: String,
    quantity: String,
    type: String
  }],
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = recipeSchema;