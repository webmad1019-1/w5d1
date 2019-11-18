const passport = require("passport");
require("./serializers");
require("./slackStrategy");

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
};
