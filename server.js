// Importing required modules
const express = require("express");

// Creating an instance of express
const app = express();
const port = 3000; // Port on which the server will run

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route handling
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route handling for another route
app.get("/about", (req, res) => {
  res.send("About page");
});

// Route handling for dynamic route with parameters
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Handling undefined routes
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

// Starting the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
