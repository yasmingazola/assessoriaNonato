const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/alunos', (req, res) => {
  res.render('alunos/index');
});

module.exports = router;
