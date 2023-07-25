const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookname:{
        type: String,
    },
    authorname:{
        type: String,
    },
    description:{
        type: String,
    },
    price:{
        required: true,
        type: String,
    },
});

module.exports = mongoose.model("book",bookSchema);