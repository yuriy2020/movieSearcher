const express = require('express');
const router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/search/:id')
module.exports = router; 