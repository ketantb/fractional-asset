const mongoose = require("mongoose")

const landSchema = new mongoose.Schema({
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
    priceCurrency: { type: String },
    totalShares: { type: Number },
    availableShares: { type: Number },
    perSharePrice: { type: Number },
    perSharePriceCurrency: { type: String },
    description: { type: String },
    images: [{ type: String }],
    postingDate: { type: String },
    postingTime: { type: String },
    productType: { type: String, default: 'land' },
    productId: { type: String },
    userId: mongoose.Schema.Types.ObjectId,
    buyStatus: {type: Boolean, default: false },
    rentalStatus: { type: Boolean, default: false }
})

module.exports = mongoose.model("land", landSchema)