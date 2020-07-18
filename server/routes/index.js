const campaignRoute = require("./campaign");

const init = app => {
  app.use("/campaign", campaignRoute);
};

module.exports = {
  init
};
