const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  userId : String,
  topic  : String,
  options : { type : Array , "default" : [] }
});

const Poll = mongoose.model('poll',pollSchema);
module.exports = Poll;
