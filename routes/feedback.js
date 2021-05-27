const express = require('express');
const router = express.Router();
const { albums } = require('../data/data.json');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/feedback', (req, res) => {
  res.render('feedback', {
    albums,
    pageId: 'feedback',
    pageTitle: "Feedback"
  });
});

router.post('/feedback', (req, res) => {
  console.log(req.body);
});

module.exports = router;