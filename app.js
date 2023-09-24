const express = require("express");
const app = require("express")();
let retry = 0;
const mongoose = require("mongoose");
const postRoutes = require("./postRoutes");
const retryConnect = () => {
  mongoose
    .connect("mongodb://owais:owais@mongodb:27017/?authSource=admin")
    .then(() => console.log("Successfully connected to db"))
    .catch(() => {
      console.log("failed to connect");
      retry++;
      if (retry < 5) {
        retryConnect();
      } else {
        console.log("Please check manually");
      }
    });
};
retryConnect();
app.use(express.json());
app.use("/",postRoutes)
app.get("/", (req, res) => {
  res.send("<h2>hello Worlds how are you?</h2>");
});
// app.use("/")
app.listen(process.env.PORT, () => {
  console.log("app is running");
});
