const router = require("express").Router();

const Land = require("../Model/landModel");
const userMiddleware = require('../midleware/userMiddlware')




//ADD NEW PRODUCT

router.post("/land-form", userMiddleware, async (req, resp) => {
  console.log('token is from post form', req.body.userId)
  console.log(req.body)
  try {

  
    const newLand = await Land.create({
      ...req.body,
      user: req.body.userId
    })
    // image: req.files.map(file => file.filename)
    console.log(newLand)
    resp.json({ success: true, message: 'Data created successfully', land: newLand })
  }
  catch (err) {
    resp.json({ message: 'something is wrong in positng complete form data', err })
  }
}) 





// MY PROPERTIES login required
router.get("/listing-my-product", userMiddleware, async (req, res) => {
  console.log('thid is id', req.body.userId)
  let myLandList = await Land.find({ user: req.body.userId });

  try {
    if (myLandList) {
      res.json({ success: true, list: myLandList });
    }
    else {
      res.json({ success: false, msg: 'No Data Found' })
    }
  } catch (er) {
    res.json({ success: false, message: er.message });
  }
});


// MY PROPERTIES login required
router.get("/listing-my-lands", async (req, res) => {
  console.log('thid is id', req.body.userId)
  let myLandList = await Land.find({ userId: req.body.userId });

  try {
    if (myLandList) {
      res.json({ success: true, list: myLandList });
    }
    else {
      res.json({ success: false, msg: 'No Data Found' })
    }
  } catch (er) {
    res.json({ success: false, message: er.message });
  }
});


//To fetch all listings no login required(for customer purpose)
router.get("/listing-all-lands", async (req, resp) => {
  try {
    let allLandsList = await Land.find()
    if (allLandsList) {
      resp.json({ success: true, list: allLandsList })
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
router.get('/buy-land', async (req, resp) => {
  try {
    let buyLandList = await Land.find({ propertyAdType: 'Sale' })
    console.log(buyLandList)
    resp.json({ success: true, buyLandList: buyLandList })
  }
  catch (err) {
    resp.json({ success: false, message: err })
  }
})


//TO LIST PROPERTIES THAT ARE FOR SALE (RENT PROPERTIES)
router.get('/rent-land', async (req, resp) => {
  try {
    let rentLandList = await Land.find({ propertyAdType: 'Rent' })
    // console.log(rentLandList)
    resp.json({ success: true, rentLandList: rentLandList })
  }
  catch (err) {
    resp.json({ success: false, message: err })
  }
})



//get specific land details
router.get('/land-details/:id', async (req, resp) => {
  const { id } = req.params
  console.log(id)
  try {
    const landDetails = await Land.findOne({ _id: id })

    if (landDetails) {
      console.log('specific land details', landDetails)
      resp.json({ success: true, landDetails: landDetails })
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
router.get('/city/land/:id', async (req, resp) => {
  const { id } = req.params
  console.log(id)
  try {
    const landList = await Land.find({ city: id })

    if (landList) {
      console.log('specific land details', landList)
      resp.json({ success: true, landList: landList })
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
router.delete('/delete/land/:id', userMiddleware, async (req, resp) => {
  const { id } = req.params
  try {
    const land = await Land.findOneAndDelete({ _id: id })
    if (land) {
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
