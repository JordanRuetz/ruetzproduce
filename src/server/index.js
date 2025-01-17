var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

const PORT = process.env.PORT || 3000;

app.use(
  "/public/icons",
  express.static(path.join(__dirname, "../../public/icons"))
);

app.use("/", express.static(path.join(__dirname, "../../dist")));

app.get("/getPhoto", function (req, res) {
  const fileLocation = path.join(
    __dirname,
    "../../src/client/resources/farmPics/beans.jpg"
  );
  res.sendFile(fileLocation);
});

app.get("*", function (req, res) {
  const fileLocation = path.join(__dirname, "../../dist/index.html");
  res.sendFile(fileLocation);
});

const server = http.createServer(app);
server.listen(PORT);
