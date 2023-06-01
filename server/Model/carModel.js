const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    manufacturer: { type: String },
    model: { type: String },
    year: { type: String },
    mileage: { type: String },
    mileageUnit: { type: String },
    exteriorColor: { type: String },
    interiorColor: { type: String },
    transmission: { type: String },
    engineType: { type: String },
    fuelType: { type: String },
    driveTrain: { type: String },
    vinNumber: { type: String },
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
    productType: { type: String, default: 'car' },
    productId: { type: String },
    userId: mongoose.Schema.Types.ObjectId,
    buyStatus: {type: Boolean, default: false },
    rentalStatus: { type: Boolean, default: false }
})

module.exports = mongoose.model("car", carSchema)