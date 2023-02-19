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
var createError = require("http-errors"); //this is required by connect-timeout, so you should already have it

app.get("/long/query/", timeout("30s"), function (req, res, next) {
  if (req.timedout) return next(createError(503, "Response timeout"));
  //Something that takes a long time
  if (req.timedout) return next(createError(503, "Response timeout"));
  req.send("I processed that for you!");
});

app.use(timeout("30s"));

var errorFilter = function (err, req, res, next) {
  logger.warn(err.stack); //the stack is actually not going to be helpful in a timeout
  if (!res.headersSent) {
    //just because of your current problem, no need to exacerbate it.
    errcode = err.status || 500; //err has status not statusCode
    msg = err.message || "server error!";
    res.status(errcode).send(msg); //the future of send(status,msg) is hotly debated
  }
};

app.use(errorFilter);

process.on("uncaughtException", function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

new Airbrake.Notifier({
  projectId: 435256,
  projectKey: "2a04aaccc4e9266488bdd72df42d6cf7",
  environment: "production",
});

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
  console.log(`- Express is working on port ${port}`);
});
