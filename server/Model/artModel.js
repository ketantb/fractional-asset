const mongoose = require("mongoose")

const artSchema = new mongoose.Schema({
    propertyAdType: { type: String },
    artistName: { type: String },
    artworkTitle: { type: String },
    medium: { type: String },
    year: { type: String },
    dimensions: { type: String },
    dimensionUnit: { type: String },
    framed: { type: String },
    condition: { type: String },
    price: { type: Number },
    totalShares: { type: Number },
    availableShares: { type: Number },
    perSharePrice: { type: Number },
    additionalDetails: { type: String },
    imgArr: [{ type: String }],
    postingDate: { type: String },
    postingTime: { type: String },
    productType: { type: String, default: 'art' },
    userId: mongoose.Schema.Types.ObjectId,
})

module.exports = mongoose.model("art", artSchema);
