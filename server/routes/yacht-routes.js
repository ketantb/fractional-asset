const router = require("express").Router();
const multer = require("multer");

const Yacht = require("../Model/yachtModel");
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
router.post("/art-form", upload.array('images', 8), userMiddleware, async (req, resp) => {
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
    const newProperty = await Yacht.create({
      ...req.body,
      aminites: req.body.aminites,
      images: imageUrlList,
      user: req.body.userId
    })
    // image: req.files.map(file => file.filename)
    console.log(newProperty)
    resp.json({ success: true, message: 'Data created successfully', art: newProperty })
  }
  catch (err) {
    resp.json({ message: 'something is wrong in positng complete form data', err })
  }
}) */



router.post("/yacht-form", async (req, resp) => {
    console.log('token is from post form', req.body.userId)
    console.log(req.body)
    try {

        //images
        let imageUrlList = [];
        const newYacht = await Yacht.create({
            ...req.body,
            images: req.body.images,
            userId: req.body.userId
        })
        // image: req.files.map(file => file.filename)
        console.log(newYacht)
        resp.json({ success: true, message: 'Data created successfully', yacht: newYacht })
    }
    catch (err) {
        resp.json({ message: 'something is wrong in positng complete form data', err })
    }
})



// MY PROPERTIES login required
// router.get("/listing-my-product", userMiddleware, async (req, res) => {
//   console.log('thid is id', req.body.userId)
//   let myYachtList = await Yacht.find({ user: req.body.userId });

//   try {
//     if (myYachtList) {
//       res.json({ success: true, list: myYachtList });
//     }
//     else {
//       res.json({ success: false, msg: 'No Data Found' })
//     }
//   } catch (er) {
//     res.json({ success: false, message: er.message });
//   }
// });


// MY PROPERTIES login required
router.get("/listing-my-yachts", async (req, res) => {
    console.log('thid is id', req.body.userId)
    let myYachtList = await Yacht.find({ userId: req.body.userId });

    try {
        if (myYachtList) {
            res.json({ success: true, list: myYachtList });
        }
        else {
            res.json({ success: false, msg: 'No Data Found' })
        }
    } catch (er) {
        res.json({ success: false, message: er.message });
    }
});


//To fetch all listings no login required(for customer purpose)
router.get("/listing-all-yachts", async (req, resp) => {
    try {
        let allYachtListings = await Yacht.find()
        if (allYachtListings) {
            resp.json({ success: true, list: allYachtListings })
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
router.get('/buy-yacht', async (req, resp) => {
    try {
        let buyYachtList = await Yacht.find({ advertiseType: 'Sale' })
        console.log(buyYachtList)
        resp.json({ success: true, buyYachtList: buyYachtList })
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
})


//TO LIST PROPERTIES THAT ARE FOR SALE (RENT PROPERTIES)
router.get('/rent-yacht', async (req, resp) => {
    try {
        let rentYachtList = await Yacht.find({ advertiseType: 'Rent' })
        // console.log(rentYachtList)
        resp.json({ success: true, rentYachtList: rentYachtList })
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
})



//get specific art details
router.get('/yacht-details/:id', async (req, resp) => {
    const { id } = req.params
    console.log(id)
    try {
        const YachtDetails = await Yacht.findOne({ _id: id })

        if (YachtDetails) {
            console.log('specific art details', YachtDetails)
            resp.json({ success: true, YachtDetails: YachtDetails })
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
router.get('/city/yacht/:id', async (req, resp) => {
    const { id } = req.params
    console.log(id)
    try {
        const yachtList = await Yacht.find({ city: id })

        if (yachtList) {
            console.log('specific art details', yachtList)
            resp.json({ success: true, yachtList: yachtList })
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
router.delete('/delete/yacht/:id', userMiddleware, async (req, resp) => {
    const { id } = req.params
    try {
        const art = await Yacht.findOneAndDelete({ _id: id })
        if (art) {
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
