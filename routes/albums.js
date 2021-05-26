const express = require('express');
const router = express.Router();
const albums = require('../data/data.json').albums;

router.get('/albums', (req, res) => {
  res.render('albums', {
    album: null,
    albums: albums,
    pageId: 'albums',
    pageTitle: "Discography"
  });
})

router.get('/albums/:id', (req, res) => {
  const { id } = req.params;
  res.render('albums', {
    album: albums[id],
    albums: null,
    pageId: 'albums',
    pageTitle: albums[id].shortname
  });
})

module.exports = router;