const mongoose = require("mongoose");

const Schema = mongoose.Schema

const AddPropertySchema = new mongoose.Schema({
  //locality details
  advertiseType: { type: String },
  street: { type: String },
  landmark: { type: String },
  city: { type: String },
  pin: { type: String },
  state: { type: String },
  nearbyPlaces: { type: String },
  advertiseType: { type: String },
  propertyAge: { type: String },
  area: { type: String },
  noOfBedrooms: { type: Number },
  noOfBathrooms: { type: Number },
  furnishing: { type: String },
  totalShares: { type: Number },
  availableShares: { type: Number },
  perSharePrice: { type: Number },
  perSharePriceCurrency: { type: String },
  additionalInfo: { type: String },
  images: [{ type: String }],
  price: { type: Number },
  priceCurrency: { type: String },
  aminities: [{ type: String }],
  postingDate: { type: String },
  postingTime: { type: String },
  productType: {type: String, default: 'property'},
  productId: { type: String },
  userId: Schema.Types.ObjectId
});

module.exports = mongoose.model("property", AddPropertySchema);
