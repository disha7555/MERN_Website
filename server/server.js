require("dotenv").config(); 

const express = require("express");
//const bodyparser=require("body-parser");
const app = express();
const authRoute = require("./routes/auth-route");
const contactRoute = require("./routes/contact-route");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");



app.use(express.json());
//console.log("Middleware setup complete.");
//app.use(bodyparser.json());
//app.use(bodyparser.urlencoded({extended:true}));
// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);


app.use(errorMiddleware);

//console.log("Router setup complete.");
const PORT = 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`);
    });
  });