const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id  : String,
  name: String,
  url : String,  
});

const Voter = mongoose.model('user',userSchema);

module.exports = Voter;
