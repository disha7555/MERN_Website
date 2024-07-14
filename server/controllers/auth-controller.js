// *-------------------
// Home Logic
// *-------------------
const home = async (req, res) => {
    try {
        console.log("Received request at /api/auth");
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
     const data = req.body;
     console.log("Received POST request at /api/auth/register with data:", data);
     console.log(req.body);
      res.status(200).send({ message: req.body });
    } catch (error) {
        console.error("Error handling /register:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports = { home, register };
  