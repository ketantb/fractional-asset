const router = require("express").Router();
const multer = require("multer");

const Art = require("../Model/artModel");
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
    const newProperty = await Art.create({
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



router.post("/art-form", async (req, resp) => {
    console.log('token is from post form', req.body.userId)
    console.log(req.body)
    try {

        //images
        let imageUrlList = [];
        const newArt = await Art.create({
            ...req.body,
            images: req.body.images,
            userId: req.body.userId
        })
        // image: req.files.map(file => file.filename)
        console.log(newArt)
        resp.json({ success: true, message: 'Data created successfully', art: newArt })
    }
    catch (err) {
        resp.json({ message: 'something is wrong in positng complete form data', err })
    }
})



// MY PROPERTIES login required
// router.get("/listing-my-product", userMiddleware, async (req, res) => {
//   console.log('thid is id', req.body.userId)
//   let myList = await Art.find({ user: req.body.userId });

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
router.get("/listing-my-arts", async (req, res) => {
    console.log('thid is id', req.body.userId)
    let myArtList = await Art.find({ userId: req.body.userId });

    try {
        if (myArtList) {
            res.json({ success: true, list: myArtList });
        }
        else {
            res.json({ success: false, msg: 'No Data Found' })
        }
    } catch (er) {
        res.json({ success: false, message: er.message });
    }
});


//To fetch all listings no login required(for customer purpose)
router.get("/listing-all-arts", async (req, resp) => {
    try {
        let allArtListings = await Art.find()
        if (allArtListings) {
            resp.json({ success: true, list: allArtListings })
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
router.get('/buy-art', async (req, resp) => {
    try {
        let buyArtList = await Art.find({ advertiseType: 'Sale' })
        console.log(buyArtList)
        resp.json({ success: true, buyArtList: buyArtList })
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
})


//TO LIST PROPERTIES THAT ARE FOR SALE (RENT PROPERTIES)
router.get('/rent-art', async (req, resp) => {
    try {
        let rentArtList = await Art.find({ advertiseType: 'Rent' })
        // console.log(rentArtList)
        resp.json({ success: true, rentArtList: rentArtList })
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
})



//get specific art details
router.get('/art-details/:id', async (req, resp) => {
    const { id } = req.params
    console.log(id)
    try {
        const artDetails = await Art.findOne({ _id: id })

        if (artDetails) {
            console.log('specific art details', artDetails)
            resp.json({ success: true, artDetails: artDetails })
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
router.get('/city/art/:id', async (req, resp) => {
    const { id } = req.params
    console.log(id)
    try {
        const artList = await Art.find({ city: id })

        if (artList) {
            console.log('specific art details', artList)
            resp.json({ success: true, artList: artList })
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
router.delete('/delete/art/:id', userMiddleware, async (req, resp) => {
    const { id } = req.params
    try {
        const art = await Art.findOneAndDelete({ _id: id })
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
