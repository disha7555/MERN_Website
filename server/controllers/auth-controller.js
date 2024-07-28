const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// *-------------------
// Home Logic
// *-------------------
const home = async (req, res) => {
    try {
       // console.log("Received request at /api/auth");
      res.status(200).json({ msg: "Welcome to our home page" });
    } catch (error) {
      console.log(error);
    }
  };
  

// *-------------------
// Registration Logic
// *-------------------
const register = async (req, res) => {
    try {
      const { username, email, phone, password }=req.body;
    //  const data = req.body;

    const userExist = await User.findOne({email:email});
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    // const userCreated= await User.create({ username, email,phone, password: hash_password });
     const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
});
     //console.log("Received POST request at /api/auth/register with data:", data);
     //console.log(req.body);
      //res.status(200).send({ message: req.body });
    } catch (error) {
        console.error("Error handling /register:", error);
      res.status(500).json({ message: "Internal server error" });
     
    }
  };
  



// *-------------------------------
//* User Login Logic 📝
// *-------------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const isPasswordValid = await userExist.comparePassword(password);

    if (isPasswordValid) {
      res.status(200).json({
        message: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or passord " });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { home, register, login };
  