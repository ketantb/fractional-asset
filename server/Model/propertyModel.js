const mongoose = require("mongoose");

const Schema = mongoose.Schema

const AddPropertySchema = new mongoose.Schema({
  //locality details
  propertyType: { type: String },
  propertyAdType: { type: String },
  street: { type: String },
  landmark: { type: String },
  city: { type: String },
  pin: { type: String },
  state: { type: String },
  nearbyPlaces: { type: String },
  propertyAge: { type: String },
  area: { type: String },
  noOfBedrooms: { type: Number },
  noOfBathrooms: { type: Number },
  furnishing: { type: String },
  totalShares: { type: Number },
  availableShares: { type: Number },
  perSharePrice: { type: Number },
  additionalInfo: { type: String },
  imgArr: [{ type: String }],
  price: { type: Number },
  aminities: [{ type: String }],
  userId: Schema.Types.ObjectId
});

module.exports = mongoose.model("property", AddPropertySchema);
