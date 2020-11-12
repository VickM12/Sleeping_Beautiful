const { stubString } = require('lodash');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skincareSchema = new Schema({
  name: {type: String, required: true},
  weight: {type: Number, required: true},
  unit: {type: String, required: true},
  brand: {type: String, required: true},
  color: {type: String, required: false},
  price: {type: Number, required: true},
},
{timestamps: true});

const SkincareProduct = mongoose.model('SkincareProduct', skincareSchema);

module.exports = SkincareProduct;