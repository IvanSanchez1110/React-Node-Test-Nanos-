const mongoose = require("mongoose");
const config = require("../config/config");
const campaign = require("./data.json");

/**
 * Connecting to database
 */
const init = () => {
  mongoose.connect(config.DATABASE_CONNECTION);
  const db = mongoose.connection;
  error(db);
  open(db);
};

/**
 * Database error
 * @callback
 * @param {object} error
 */
const error = db => {
  db.on("error", error => {
    console.log("Database connection error", error);
  });
};

/**
 * Database connected
 * @callback
 */
const open = db => {
  db.once("open", () => {
    console.log("Database connected");
    populteDatabase(db);
  });
};

/**
 * Populate database from the specific json file
 * @function
 */
const populteDatabase = db => {
  db.collection("campaign").insert(campaign, (err, result) => {
    if (err) console.log("Error");
    else console.log("Success");
  });
};

module.exports = {
  init
};
