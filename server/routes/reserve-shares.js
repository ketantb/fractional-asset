const router = require('express').Router()
const { body, validationResult } = require('express-validator')

const ReserveShares = require('../Model/reserve-sharesModel')

router.post('/reserve-shares', [
    body('firstname').notEmpty().withMessage('First name is required'),
    body('lastname').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('contact').isLength({ min: 10, max: 10 })
        .withMessage('Phone number must be exactly 10 digits'),
    body('noOfShares').isLength({ min: 1 })
        .withMessage('Select minimum 1 share')
],
    async (req, resp) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return resp.json({ sucess: false, errors: errors.array() });
        }

        const newData = await ReserveShares.create(req.body)
        resp.json({ success: true, newReservedShare: newData })
    })

router.get("/reserve-share-data", async (req, resp) => {
    try {
        const reseverShareData = await ReserveShares.find()
        if (reseverShareData) {
            resp.json({ success: true, reseverShareData: reseverShareData })
        }
        else{
            resp.json({success:false, message:'NO DATA FOUND'})
        }
    }
    catch (err) {
        resp.json({ success: false, message: err })
    }
    resp.json({ success: true })
})




module.exports = router