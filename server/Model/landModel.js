const mongoose = require("mongoose")

const landSchema = new mongoose.Schema({
    propertyAdType: { type: String },
    landType: { type: String },
    location: { type: String },
    dimensions: { type: String },
    dimensionsUnit: { type: String },
    lotSize: { type: String },
    lotSizeUnit: { type: String },
    zoning: { type: String },
    utilities: [{ type: String }],
    roadAccess: { type: String },
    price: { type: Number },
    totalShares: { type: Number },
    availableShares: { type: Number },
    perSharePrice: { type: Number },
    additionalInfo: { type: String },
    images: [{ type: String }],
    postingDate: { type: String },
    postingTime: { type: String },
    productType: { type: String, default: 'land' },
    userId: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("land", landSchema)