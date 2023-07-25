
const mongoose = require("mongoose");
require("dotenv").config();


exports.database = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("DB connected");
    } catch (err) {
      console.log("Database error", err);
    }
  };




// module.exports=database
