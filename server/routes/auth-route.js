
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to thapa technical Mern Series Updated");
// });

router.route("/").get(authControllers.home);

// app.get("/register", (req, res) => {
//   res.status(200).json({ msg: "registration successful" });
// });
router.route("/register").post(authControllers.register);

module.exports = router;
