const router = require("express").Router();

const Property = require("../Model/propertyModel");
const userMiddleware = require('../midleware/userMiddlware')



//ADD NEW PRODUCT
router.post("/property-form", userMiddleware, async (req, resp) => {
  console.log('token is from post form', req.body.userId)
  console.log(req.body)
  try {

    //images
    const newProperty = await Property.create({
      ...req.body,
      user: req.body.userId
    })
    // image: req.files.map(file => file.filename)
    console.log(newProperty)
    resp.json({ success: true, message: 'Data created successfully', property: newProperty })
  }
  catch (err) {
    resp.json({ message: 'something is wrong in positng complete form data', err })
  }
})







// MY PROPERTIES login required
// router.get("/listing-my-product", userMiddleware, async (req, res) => {
//   console.log('thid is id', req.body.userId)
//   let myList = await Property.find({ user: req.body.userId });

//   try {
//     if (myList) {
//       res.json({ success: true, list: myList });
//     }
//     else {
//       res.json({ success: false, msg: 'No Data Found' })
//     }
//   } catch (er) {
//     res.json({ success: false, message: er.message });
//   }
// });




//TO LIST PROPERTIES THAT ARE FOR SALE (BUY PROPERTIES)
router.get('/buy-property', async (req, resp) => {
  try {
    let buyproperyList = await Property.find({ propertyAdType: 'Sale' })
    console.log(buyproperyList)
    resp.json({ success: true, buyproperyList: buyproperyList })
  }
  catch (err) {
    resp.json({ success: false, message: err })
  }
})


//TO LIST PROPERTIES THAT ARE FOR SALE (RENT PROPERTIES)
router.get('/rent-property', async (req, resp) => {
  try {
    let rentproperyList = await Property.find({ propertyAdType: 'Rent' })
    // console.log(rentproperyList)
    resp.json({ success: true, rentproperyList: rentproperyList })
  }
  catch (err) {
    resp.json({ success: false, message: err })
  }
})



//get specific property details
router.get('/property-details/:id', async (req, resp) => {
  const { id } = req.params
  console.log(id)
  try {
    const propertyDetails = await Property.findOne({ _id: id })

    if (propertyDetails) {
      console.log('specific property details', propertyDetails)
      resp.json({ success: true, propertyDetails: propertyDetails })
    }
    else {
      resp.json({ success: false, message: 'NO DATA FOUND' })
    }
  }
  catch (err) {
    resp.json({ success: false, message: err })
  }
})



//GET PROPERTY LIST BY CITY
router.get('/city/property/:id', async (req, resp) => {
  const { id } = req.params
  console.log(id)
  try {
    const propertyList = await Property.find({ city: id })

    if (propertyList) {
      console.log('specific property details', propertyList)
      resp.json({ success: true, propertyList: propertyList })
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






module.exports = router;
