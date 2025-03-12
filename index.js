const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(express.json());
const todoRoutes = require("./routes/todos");

// mount the todo api references
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log("listening on port");
});
const dbconnect = require("./config/database");
dbconnect();
app.get("/", (req, res) => {
  res.send(`<h1>this is homepage</h1>`);
});
