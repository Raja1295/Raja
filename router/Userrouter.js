const express = require("express")
const router = express.Router();
const {get,signup, login, logout, getallUser, getUser, Userupdate, Userdelete}= require("../controller/Usercontroller")

router.get("/",get);
router.post("/user/signup",signup);
router.post("/user/login",login);
router.post("/user/logout",logout);
router.get("/user/getalluser",getallUser);
router.get("/user/:id",getUser);
router.put("/user/userupdate/:id",Userupdate);
router.delete("/user/userdelete/:id",Userdelete);


module.exports = router;