const express = require("express")
const router = express.Router();
const {postAccount,getAccount} = require("../controller/Accountcontroller");

router.post("/account",postAccount);
router.get("/getallaccount",getAccount);



module.exports = router