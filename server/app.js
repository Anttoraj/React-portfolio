const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  res.send("Antto the app is working");
});

app.listen(5000, () => {
  console.log("sevrer is running on 5000");
});
