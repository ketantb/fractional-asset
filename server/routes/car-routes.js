const router = require("express").Router();

const Car = require("../Model/carModel");
const userMiddleware = require('../midleware/userMiddlware')




//ADD NEW PRODUCT
router.post("/car-form",userMiddleware, async (req, resp) => {
    console.log('token is from post form', req.body.userId)
    // console.log(req.body)
    try {

        const newCar= await Car.create({
            ...req.body,
            user: req.body.userId
        })
        // image: req.files.map(file => file.filename)
        console.log(newCar)
        resp.json({ success: true, message: 'Data created successfully', car: newCar})
    }
    catch (err) {
        resp.json({ message: 'something is wrong in positng complete form data', err })
    }
})





// MY PROPERTIES login required
router.get("/listing-my-cars", async (req, res) => {
    console.log('thid is id', req.body.userId)
    let myCarList = await Car.find({ userId: req.body.userId });

    try {
        if (myCarList) {
            res.json({ success: true, list: myCarList });
        }
        else {
            res.json({ success: false, msg: 'No Data Found' })
        }
    } catch (er) {
        res.json({ success: false, message: er.message });
    }
});


//To fetch all listings no login required(for customer purpose)
router.get("/listing-all-cars", async (req, resp) => {
    try {
        let allCarListings = await Car.find()
        if (allCarListings) {
            resp.json({ success: true, list: allCarListings })
        }
        else {
            resp.json({ success: false, message: 'no data found' })
        }
    }
    catch (err) {
        console.log('err in listing-all-product server', err)
    }

});


//TO LIST PROPERTIES THAT ARE FOR SALE (BUY PROPERTIES)
router.get('/buy-car', async (req, resp) => {
    try {
        let buyCarList = await Car.find({ advertiseType: 'Sale' })
        console.log(buyCarList)
        resp.json({ success: true, buyCarList: buyCarList })
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
})


//TO LIST PROPERTIES THAT ARE FOR SALE (RENT PROPERTIES)
router.get('/rent-car', async (req, resp) => {
    try {
        let rentCarList = await Car.find({ advertiseType: 'Rent' })
        // console.log(rentCarList)
        resp.json({ success: true, rentCarList: rentCarList })
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
})



//get specific car details
router.get('/car-details/:id', async (req, resp) => {
    const { id } = req.params
    console.log(id)
    try {
        const CarDetails = await Car.findOne({ _id: id })

        if (CarDetails) {
            console.log('specific car details', CarDetails)
            resp.json({ success: true, CarDetails: CarDetails })
        }
        else {
            resp.json({ success: false, message: 'NO DATA FOUND' })
        }
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
})



//GET CarLIST BY CITY
router.get('/city/car/:id', async (req, resp) => {
    const { id } = req.params
    console.log(id)
    try {
        const carList = await Car.find({ city: id })

        if (carList) {
            console.log('specific car details', carList)
            resp.json({ success: true, carList: carList })
        }
        else {
            resp.json({ success: false, message: 'NO DATA FOUND' })
        }
    }
    catch (err) {
        console.log(err)
        resp.json({ success: false, message: err })
    }
})



//DELETE PORPERTY ONLY ACCESSIBLE IN PRIVATE MY CarSECTION
router.delete('/delete/car/:id', userMiddleware, async (req, resp) => {
    const { id } = req.params
    try {
        const car = await Car.findOneAndDelete({ _id: id })
        if (car) {
            resp.json({ success: true, message: 'Data deleted successfully' })
        }
        else {
            resp.json({ success: false, message: 'somehting is wrong' })
        }
    }
    catch (err) {
        resp.json({ success: true, message: err })
    }
})

module.exports = router;
