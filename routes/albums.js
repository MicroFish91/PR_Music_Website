const express = require('express');
const router = express.Router();
const { albums } = require('../data/data.json');
const feedback = require('../data/feedback.json');

router.get('/albums', (req, res) => {
  res.render('albums', {
    album: null,
    albums: albums,
    pageId: 'albums',
    pageTitle: "Discography"
  });
})

router.get('/albums/:shortname', (req, res) => {
  const id = albums.findIndex(album => album.shortname === req.params.shortname);
  const albumFeedback = feedback.filter(review => review.album.trim() === req.params.shortname.trim());
  res.render('albums', {
    album: albums[id],
    albums: null,
    albumFeedback,
    pageId: 'albums',
    pageTitle: albums[id].shortname
  });
})

module.exports = router;