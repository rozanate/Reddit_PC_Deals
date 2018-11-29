const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

// Initialize Express
const app = express();

// Middleware

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Load Routes
const index = require("./routes/index");

// Routes
app.use("/", index);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});