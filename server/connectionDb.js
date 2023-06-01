const dotenv = require("dotenv");
const mongoose = require("mongoose");

//configuring .env
dotenv.config();

//connect to DB
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Mongo connection failed", err);
  });

