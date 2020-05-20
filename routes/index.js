const express = require('express');
const router = new express.Router();

router.use('/', (req, res) => {
  res.render('home');
});

module.exports = router;
