const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// Error handling middleware should come last
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});