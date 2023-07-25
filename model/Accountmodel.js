const mongoose = require("mongoose")

const AccoutDataSchema = new mongoose.Schema({
    Serialnumber:{
        type:String,
    },
    Holdername:{
        type:String,
    },
    Description:{
        type:String,
    },
    Total:{
        type:String,
    }
});

module.exports= mongoose.model("account",AccoutDataSchema);