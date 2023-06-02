const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    propertyAdType: { type: String },
    manufacturer: { type: String },
    model: { type: String },
    year: { type: String },
    mileage: { type: String },
    exteriorColor: { type: String },
    interiorColor: { type: String },
    transmission: { type: String },
    engineType: { type: String },
    fuelType: { type: String },
    driveTrain: { type: String },
    vinNumber: { type: String },
    price: { type: Number },
    totalShares: { type: Number },
    availableShares: { type: Number },
    perSharePrice: { type: Number },
    additionalInfo: { type: String },
    images: [{ type: String }],
    postingDate: { type: String },
    postingTime: { type: String },
    productType: { type: String, default: 'car' },
    userId: mongoose.Schema.Types.ObjectId,
})

module.exports = mongoose.model("car", carSchema)