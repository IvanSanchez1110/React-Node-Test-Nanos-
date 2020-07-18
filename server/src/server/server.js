var express = require("express");
const database = require("../database");
const config = require("../config");
const mongoose = require("mongoose");
const routes = require("../../routes");
const path = require("path");
let sever = null;

/**
 * Start server, database
 * Populate mongodb
 * @function
 */
const listen = () => {
  var app = express();
  database.init();
  sever = app.listen(config.PORT, () => {
    console.log("Server is listening on port 3001");
  });
  initServer(app);
  routes.init(app);
};

const initServer = app => {
  //Enable Access Control
  app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
    );
    next();
  });

  //Expose images to '/image'
  var appDir = path.dirname(require.main.filename);

  app.use(express.static("public"));
  app.use("/image", express.static(appDir + "/images"));
};

/**
 * Close server, database connection
 * @function
 */
const close = () => {
  server.close();
  mongoose.disconnect();
  show.debug("Server down");
};

module.exports = {
  listen,
  close
};
