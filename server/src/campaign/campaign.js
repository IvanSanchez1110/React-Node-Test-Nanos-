const mongoose = require("mongoose");

const getAllCampaigns = (req, res) => {
  const db = mongoose.connection;
  if (db.connection === "undefined") {
    res.json({ error: "database connection error" });
    return;
  }
  db.collection("campaign")
    .find()
    .toArray((err, campaign) => {
      if (err) {
        res.error(error);
      } else {
        res.json(campaign);
      }
    });
};

module.exports = {
  getAllCampaigns
};
