
const mongoose = require('mongoose');
const UsersModel = require('./Users')
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  admin :{
    type:mongoose.Schema.Types.ObjectId ,
    ref : UsersModel,
  }
});

module.exports = mongoose.model('Product', productSchema);


