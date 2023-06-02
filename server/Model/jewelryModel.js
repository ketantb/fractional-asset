const mongoose = require("mongoose")

const jewelrySchema = new mongoose.Schema({
    advertiseType: { type: String },
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
    totalShares: { type: Number },
    availableShares: { type: Number },
    perSharePrice: { type: Number },
    additionalInfo: { type: String },
    images: [{ type: String }],
    postingDate: { type: String },
    postingTime: { type: String },
    productType: { type: String, default: 'jewelry' },
    userId: mongoose.Schema.Types.ObjectId,
})

module.exports = mongoose.model("jewelry", jewelrySchema)