const express = require('express');
const router = express.Router();
const fs = require('fs');

// FETCH Server side
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/search/:id', async function (req, res) {
  const id = req.params.id
  let result = await (await fetch(`http://www.omdbapi.com/?s=${id}&apikey=302738ca`)).json();

  // разобраться!!
    // .then(res => res.json())
    // .then(json => {
    //   const data =json.Search
    //   console.log('>>>>>>>', data)
    //   res.render('index', { result: data })
    // })
    
    res.render('index', { result: result.Search })
})

router.get('/movie/:url', async function (req, res) {
  const url = req.params.url

  let result = await (await fetch(`http://www.omdbapi.com/?i=${url}&apikey=302738ca`)).json();
    res.render('movie', { result: result})
})

module.exports = router;