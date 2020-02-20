const express = require('express');
const router = express.Router();
const fs = require('fs');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/search',function(req,res){
  console.log("Получаю search",req.body.search)
  let movieSearch = "http://www.omdbapi.com/?s"+req.body.search+"&apikey=302738ca"
  res.redirect(`http://www.omdbapi.com/?s${req.body.search}&apikey=302738ca`)
})
module.exports = router; 

// http://www.omdbapi.com/?s=Harry%20potter&apikey=302738ca