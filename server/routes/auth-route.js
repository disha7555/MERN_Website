
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");
// router.get("/", (req, res) => {
//   res.status(200).send("Welcome to thapa technical Mern Series Updated");
// });

router.route("/").get(authControllers.home);

// app.get("/register", (req, res) => {
//   res.status(200).json({ msg: "registration successful" });
// });
// router.route("/register").post(authControllers.register);
router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);
router.route("/login").post(authControllers.login);
module.exports = router;
