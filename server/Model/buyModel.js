const mongoose = require("mongoose");

const buySchema = new mongoose.Schema({
    productType: { type: String },
    buyingDate: { type: String },
    buyingTime: { type: String },
    productId: { type: String },
    userMongoId: mongoose.Schema.Types.ObjectId,
    productMongoId: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("buy-list", buySchema)