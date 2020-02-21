const express = require('express');
const router = express.Router();
const fs = require('fs');
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/search/:id', async function (req, res) {
  const id = req.params.id
  // console.log('search>>>', req.params.id)

  let result = await (await fetch(`http://www.omdbapi.com/?s=${id}&apikey=302738ca`)).json();
    // .then(res => res.json())
    // .then(json => {
    //   const data =json.Search
    //   console.log('>>>>>>>', data)
    //   res.render('index', { result: data })
    // })
    console.log(result.Search);
    res.render('index', { result: result.Search })
})
module.exports = router;
