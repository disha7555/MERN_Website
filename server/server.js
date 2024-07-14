require("dotenv").config(); 

const express = require("express");
//const bodyparser=require("body-parser");
const app = express();
const router = require("./routes/auth-route");
const connectDb = require("./utils/db");
app.use(express.json());
//console.log("Middleware setup complete.");
//app.use(bodyparser.json());
//app.use(bodyparser.urlencoded({extended:true}));
// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);
//console.log("Router setup complete.");
const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`);
    });
  });