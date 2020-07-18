const express = require("express");
const campaign = require("../src/campaign");

const router = express.Router();
router.get("/all", campaign.getAllCampaigns);

module.exports = router;
