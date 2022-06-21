// import express
const express = require("express");
const app = express();
// set your preferred server port
const port = 3000;
// root endpoint response
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Your server ⚡ is running 🏃‍♂️ on http://localhost:${port}`);
});
