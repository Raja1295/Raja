const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    DoB:String,
    password: String,
});



module.exports = mongoose.model("SignUp",UserSchema);