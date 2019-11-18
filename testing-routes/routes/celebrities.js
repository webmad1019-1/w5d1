const express = require('express');
const router  = express.Router();

router.get('/celebrity1', (req, res, next) => {
  res.render('celebrity-actress', {name: "Jane Fonda"});
});

router.get('/celebrity2', (req, res, next) => {
  res.render('celebrity-actress', {name: "Jane Fonda"});
});

router.post('/celebrity2', (req, res, next) => {
  res.render('celebrity-actress', {name: "Jane Fonda"});
});


module.exports = router;
