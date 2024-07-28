const express = require("express");
const router = express.Router();

const contactForm = require("../controllers/contact-controller");
const validate = require("../middlewares/validate-middleware");
const { contactSchema } = require("../validators/auth-validator");

router.route("/contact").post(validate(contactSchema),contactForm);

module.exports = router;
