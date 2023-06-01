const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

//importing DB Connection:
require("./connectionDb")

//importing all the routes
const userRoute = require("./routes/register-signin");
const reserveShares=require("./routes/reserve-shares")

app.use("/", userRoute);
app.use(require("./routes/property-routes"))
app.use(require("./routes/art-routes"))
app.use(require("./routes/yacht-routes"))
app.use(require("./routes/car-routes"))
app.use(require("./routes/jewelry-routes"))
app.use(require("./routes/land-routes"))
app.use(require("./routes/buy-routes"))
app.use("/", reserveShares)

app.get("/", (req, resp) => {
  resp.send("This Is Fractional Properties");
});

app.listen(port, () => console.log("Server is running on port:", port));
