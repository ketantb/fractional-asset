const mongoose = require("mongoose");

const ReserveShares = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type:String,
        require: true
    },
    contact: {
        type: Number,
        require: true
    },
    noOfShares: {
        type: Number,
        require: true
    }
})


const ReserveSharesModel = mongoose.model('reserve-shares', ReserveShares)
module.exports = ReserveSharesModel