const mongoose = require("mongoose")

const yachtSchema = new mongoose.Schema({
    propertyAdType: { type: String },
    manufacturer: { type: String },
    model: { type: String },
    manufacturedYear: { type: String },
    length: { type: String },
    lengthUnit: { type: String },
    beam: { type: String },
    draft: { type: String },
    draftUnit: { type: String },
    hullMaterial: { type: String },
    engineType: { type: String },
    engineHours: { type: Number },
    fuelType: { type: String },
    fuelCapacity: { type: Number },
    fuelCapacityUnit: { type: String },
    waterCapacity: { type: Number },
    waterCapacityUnit: { type: String },
    accommodationsQty: { type: Number },
    numberOfCabins: { type: Number },
    numberOfHeads: { type: Number },
    generator: { type: Boolean },
    airConditioning: { type: Boolean },
    electronics: [{ type: String }],
    aminities: [],
    price: { type: Number },
    totalShares: { type: Number },
    availableShares: { type: Number },
    perSharePrice: { type: Number },description: { type: String },
    images: [{ type: String }],
    postingDate: { type: String },
    postingTime: { type: String },
    productType: { type: String, default: 'yacht' },
    userId: mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model("yacht", yachtSchema)
