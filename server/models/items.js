const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Itemschema = new Schema({
  name  :  String,
  img   : String,
  description   :   String,
  category: String,
  priceTag: String,
  price: Number,
  quantity: Number,
}, {
    timestamps : true
});

const Item = mongoose.model('Item', Itemschema);

module.exports = Item

