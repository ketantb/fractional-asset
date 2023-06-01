const router = require("express").Router();
const multer = require("multer");

const Property = require("../Model/propertyModel");
const userMiddleware = require('../midleware/userMiddlware')
const { upload, resizeImage } = require('../midleware/uploadImages');


// Define Multer storage options
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

//ADD NEW PRODUCT
/*/
router.post("/property-form", upload.array('images', 8), userMiddleware, async (req, resp) => {
  console.log('token is from post form', req.body.userId)
  console.log(req.body)
  try {

    //images
    let imageUrlList = [];
    for (let i = 0; i < req.files.length; i++) {
      let locaFilePath = req.files[i].path;
      // Upload the local image to Cloudinary
      // and get image url as response
      const result = await resizeImage(locaFilePath)
      imageUrlList.push(result.url);
    }
    const newProperty = await Property.create({
      ...req.body,
      aminites: req.body.aminites,
      images: imageUrlList,
      user: req.body.userId
    })
    // image: req.files.map(file => file.filename)
    console.log(newProperty)
    resp.json({ success: true, message: 'Data created successfully', property: newProperty })
  }
  catch (err) {
    resp.json({ message: 'something is wrong in positng complete form data', err })
  }
}) */



router.post("/property-form", async (req, resp) => {
  console.log('token is from post form', req.body.userId)
  console.log(req.body)
  try {

    //images
    let imageUrlList = [];
    const newProperty = await Property.create({
      ...req.body,
      aminites: req.body.aminites,
      images: req.body.images,
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


// MY PROPERTIES login required
router.get("/listing-my-properties", async (req, res) => {
  console.log('thid is id', req.body.userId)
  let myList = await Property.find({ userId: req.body.userId });

  try {
    if (myList) {
      res.json({ success: true, list: myList });
    }
    else {
      res.json({ success: false, msg: 'No Data Found' })
    }
  } catch (er) {
    res.json({ success: false, message: er.message });
  }
});


//To fetch all listings no login required(for customer purpose)
router.get("/listing-all-properties", async (req, resp) => {
  try {
    let allPrpertyListings = await Property.find()
    if (allPrpertyListings) {
      resp.json({ success: true, list: allPrpertyListings })
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



//DELETE PORPERTY ONLY ACCESSIBLE IN PRIVATE MY PROPERTY SECTION
router.delete('/delete/property/:id', userMiddleware, async (req, resp) => {
  const { id } = req.params
  try {
    const property = await Property.findOneAndDelete({ _id: id })
    if (property) {
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
