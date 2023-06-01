const router = require("express").Router();
const multer = require("multer");

const Jewelry = require("../Model/jewelryModel");
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
router.post("/jewelry-form", upload.array('images', 8), userMiddleware, async (req, resp) => {
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
    const newProperty = await Jewelry.create({
      ...req.body,
      aminites: req.body.aminites,
      images: imageUrlList,
      user: req.body.userId
    })
    // image: req.files.map(file => file.filename)
    console.log(newProperty)
    resp.json({ success: true, message: 'Data created successfully', jewelry: newProperty })
  }
  catch (err) {
    resp.json({ message: 'something is wrong in positng complete form data', err })
  }
}) */



router.post("/jewelry-form", async (req, resp) => {
    console.log('token is from post form', req.body.userId)
    console.log(req.body)
    try {

        //images
        let imageUrlList = [];
        const newJewelry = await Jewelry.create({
            ...req.body,
            images: req.body.images,
            userId: req.body.userId
        })
        // image: req.files.map(file => file.filename)
        console.log(newJewelry)
        resp.json({ success: true, message: 'Data created successfully', jewelry: newJewelry })
    }
    catch (err) {
        resp.json({ message: 'something is wrong in positng complete form data', err })
    }
})



// MY PROPERTIES login required
// router.get("/listing-my-product", userMiddleware, async (req, res) => {
//   console.log('thid is id', req.body.userId)
//   let myList = await Jewelry.find({ user: req.body.userId });

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
router.get("/listing-my-jewelry", async (req, res) => {
    console.log('thid is id', req.body.userId)
    let myJewelryList = await Jewelry.find({ userId: req.body.userId });

    try {
        if (myJewelryList) {
            res.json({ success: true, list: myJewelryList });
        }
        else {
            res.json({ success: false, msg: 'No Data Found' })
        }
    } catch (er) {
        res.json({ success: false, message: er.message });
    }
});


//To fetch all listings no login required(for customer purpose)
router.get("/listing-all-jewelry", async (req, resp) => {
    try {
        let allJewelryListings = await Jewelry.find()
        if (allJewelryListings) {
            resp.json({ success: true, list: allJewelryListings })
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
router.get('/buy-jewelry', async (req, resp) => {
    try {
        let buyJewelryList = await Jewelry.find({ advertiseType: 'Sale' })
        console.log(buyJewelryList)
        resp.json({ success: true, buyJewelryList: buyJewelryList })
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
})


//TO LIST PROPERTIES THAT ARE FOR SALE (RENT PROPERTIES)
router.get('/rent-jewelry', async (req, resp) => {
    try {
        let rentJewelryList = await Jewelry.find({ advertiseType: 'Rent' })
        // console.log(rentJewelryList)
        resp.json({ success: true, rentJewelryList: rentJewelryList })
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
})



//get specific jewelry details
router.get('/jewelry-details/:id', async (req, resp) => {
    const { id } = req.params
    console.log(id)
    try {
        const jewelryDetails = await Jewelry.findOne({ _id: id })

        if (jewelryDetails) {
            console.log('specific jewelry details', jewelryDetails)
            resp.json({ success: true, jewelryDetails: jewelryDetails })
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
router.get('/city/jewelry/:id', async (req, resp) => {
    const { id } = req.params
    console.log(id)
    try {
        const jewelryList = await Jewelry.find({ city: id })

        if (jewelryList) {
            console.log('specific jewelry details', jewelryList)
            resp.json({ success: true, jewelryList: jewelryList })
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
router.delete('/delete/jewelry/:id', userMiddleware, async (req, resp) => {
    const { id } = req.params
    try {
        const jewelryDeleted = await Jewelry.findOneAndDelete({ _id: id })
        if (jewelryDeleted) {
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
