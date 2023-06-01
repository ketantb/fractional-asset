const router = require("express").Router()

const Buy = require("../Model/buyModel")
const Jewelry = require("../Model/jewelryModel")
const Car = require("../Model/carModel")
const Property = require("../Model/propertyModel")
const Land = require("../Model/landModel")
const Yacht = require("../Model/yachtModel")
const Art = require("../Model/artModel")

router.post("/buy-product", async (req, res) => {
    console.log(req.body.productType)
    try {
        let buyedProduct;
        if (req.body.productType == "jewelry") {
            buyedProduct = await Jewelry.find({ _id: req.body.productMongoId })
        }
        else if (req.body.productType == "car") {
            buyedProduct = await Car.find({ _id: req.body.productMongoId })
        }
        else if (req.body.productType == "property") {
            buyedProduct = await Property.find({ _id: req.body.productMongoId })
        }
        else if (req.body.productType == "land") {
            buyedProduct = await Land.find({ _id: req.body.productMongoId })
        }
        else if (req.body.productType == "yacht") {
            buyedProduct = await Yacht.find({ _id: req.body.productMongoId })
        }
        else if (req.body.productType == "art") {
            buyedProduct = await Art.find({ _id: req.body.productMongoId })
        }

        const buyed  = await Buy.create( req.body )
        console.log(buyed)

        res.json({ "buyed": "successful", buyedProduct: buyedProduct })
    }
    catch (err) {
        res.json({ "buyed": "failed", "message": err.message })
    }
})

module.exports = router;