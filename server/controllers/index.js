const express = require('express');
const { join } = require('path');
const { getSearchData, postData } = require('../database/queries');

const router = express.Router();

router.get('/search/:input', (req, res) => {
  const { input } = req.params;
  getSearchData(input)
    .then((result) => res.json(result.rows))
    .catch((err) => res.status(500).sendFile(join(__dirname, '..', 'public', 'html', '500.html')));
});
router.post('/post-data', (req, res) => {
  const {
    name, first, surname, url,
  } = req.body;
  postData({
    name, first, surname, url,
  })
    .then((result) => res.redirect('/'))
    .catch((err) => res.status(500).sendFile(join(__dirname, '..', 'public', 'html', '500.html')));
});
module.exports = router;
