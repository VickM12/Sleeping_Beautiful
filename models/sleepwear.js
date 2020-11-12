const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sleepwearSchema = new Schema({
  name: {type: String, required: true},
  brand: {type: String, required: true},
  color: {type: String, required: false},
  price: {type: Number, required: true},
},
{timestamps: true});

const Sleepwear = mongoose.model('Sleepwear', sleepwearSchema);

module.exports = Sleepwear;