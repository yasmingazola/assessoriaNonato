const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/alunos', (req, res) => {
  res.render('alunos/index');
});

router.get('/mensalidade', (req, res) => {
  res.render('mensalidade');
});

module.exports = router;
