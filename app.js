const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { http, https } = require("follow-redirects");
const cors = require("cors");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");
const axios = require("axios");
const RoutesAPIUser = require("./server/routes/RoutesAPIUser.js");

var timeout = require("connect-timeout"); //express v4
const Airbrake = require("@airbrake/node");

process.on("uncaughtException", function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

new Airbrake.Notifier({
  projectId: 435256,
  projectKey: "2a04aaccc4e9266488bdd72df42d6cf7",
  environment: "production",
});

app.use(timeout("25s"));

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
app.use(express.json());

mongoose
  .connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("- Connected to Spire Database...");
  })
  .catch((err) => console.log(err));

mongoose.connection.on("error", function (err) {
  console.log(err);
});

app.use(cors());

app.use("/api/user", RoutesAPIUser);

const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use("*", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const server = app.listen(process.env.PORT || 4000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
