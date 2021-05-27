const express = require('express');
const router = express.Router();
const { albums } = require('../data/data.json');
const jsonParser = require('../helpers/jsonParser');
let feedback = require('../data/feedback.json');

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
  feedback.push(req.body);
  jsonParser(JSON.stringify(feedback), './data/feedback.json');
  res.render('feedback', {
    albums,
    pageId: 'feedback',
    pageTitle: "Feedback"
  });
});

module.exports = router;