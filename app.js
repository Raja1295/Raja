const express = require("express");
const router = require("./router/bookrouter");
const Accountrouter = require("./router/Accountrouter");
const Userrouter = require("./router/Userrouter");

const {database} = require("./db");




database()
const app = express();
app.use(express.json());
app.use("/",router);
app.use("/",Accountrouter);
app.use("/",Userrouter);




app.listen(4000, () => {
    console.log("localhost:4000")
})

