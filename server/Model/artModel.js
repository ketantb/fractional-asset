const mongoose = require("mongoose")

const artSchema = new mongoose.Schema({
    artistName: { type: String },
    artworkTitle: { type: String },
    medium: { type: String },
    year: { type: String },
    dimensions: { type: String },
    dimensionUnit: { type: String },
    framed: { type: String },
    condition: { type: String },
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
    productType: { type: String, default: 'art' },
    productId: { type: String },
    userId: mongoose.Schema.Types.ObjectId,
    buyStatus: {type: Boolean, default: false },
    rentalStatus: { type: Boolean, default: false }
})

module.exports = mongoose.model("art", artSchema);
