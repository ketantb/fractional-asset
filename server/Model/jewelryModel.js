const mongoose = require("mongoose")

const jewelrySchema = new mongoose.Schema({
    jewelryType: { type: String },
    metalType: { type: String },
    gemstones: { type: String },
    weight: { type: String },
    weightUnit: { type: String },
    cut: { type: String },
    clarity: { type: String },
    color: { type: String },
    certification: { type: String },
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
    productType: { type: String, default: 'jewelry' },
    productId: { type: String },
    userId: mongoose.Schema.Types.ObjectId,
    buyStatus: {type: Boolean, default: false },
    rentalStatus: { type: Boolean, default: false }
})

module.exports = mongoose.model("jewelry", jewelrySchema)