const express = require("express");
const router = express.Router();
const controller = require("../controller/bookcontroller");



router.post("/book",controller.postbook);
router.get("/getallbook", controller.getbook);
router.get("/getbook/:id",controller.getbybookname);
router.get("/getauthorname/:id",controller.getbyauthorname);
router.put("/updatebook/:id",controller.updatebook);
router.delete("/deletebook/:id",controller.deletebook);




module.exports = router;
