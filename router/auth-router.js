const express =require("express");
const authcontroller = require("../controllers/auth-controller");
const router =express.Router();


 router.route("/").get(authcontroller.home);
 router.route("/register").post(authcontroller.register);

module.exports = router;