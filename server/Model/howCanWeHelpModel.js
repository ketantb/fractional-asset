const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  ownershipType: {
    type: String,
    enum:['fractional-ownership','full-ownership'],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  location:{
    type:String,
    enum:['Alibaug', 'Goa', 'Nilgiris']
  }
});

module.exports = mongoose.model("customer", customerSchema);
