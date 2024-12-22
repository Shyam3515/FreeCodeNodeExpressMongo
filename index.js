const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./routes/productRoute.js");

/**The line app.use(express.json()) is used in an Express.js application to parse incoming requests with JSON payloads. It acts as  middleware to process the body of HTTP requests and make the data accessible through req.body.
 * 
 * How It Works:
When a client sends a request with a JSON payload in the body (e.g., via a POST or PUT request), the express.json() middleware reads the body, parses the JSON, and attaches it to the req.body object.
=> here we are configuring our middleware to run these JSON and Form URL
 */
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

/**If you want to create a route in express first of all you are going to be referencing the instace, and inside this instance we are going to have lot of methods. The user will provide the request and we have to provide the response */
app.get("/", (req, res) => {
  res.send("Hello World");
});

//connecting to mongodb
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Connected to mongodb...");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
      // console.log(path.join(process.cwd()));
    });
  })
  .catch((err) => {
    console.log(Error, err.message);
  });
