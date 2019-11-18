const express = require("express");
const passport = require("passport");

const router = express.Router();

// OAuth callback url
router.get("/slack/callback", passport.authenticate("slack", { failureRedirect: "/login" }), (req, res) => {
  res.redirect("/");
});

// path to start the OAuth flow
router.get("/slack", passport.authenticate("slack"), (req, res, next) => {
  next();
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
