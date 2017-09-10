var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

router.get("/message", function(req, res, next) {
  res.json("Welcome To React");
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  req.session.save(err => {
    if (err) {
      return next(err);
    }
    res.json(req.session);
  });
});

router.post("/register", (req, res, next) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, acct) => {
      if (err) {
        res.json({ error: err });
      }
      res.json({account: acct})
    }
  );
});

module.exports = router;
