const express = require('express');
const router = express.Router();
const { albums } = require('../data/data.json');
const jsonParser = require('../helpers/jsonParser');
const validateFeedback = require('../helpers/validateFeedback');
let feedback = require('../data/feedback.json');

router.use(express.json());
// router.use(express.urlencoded({extended:true}));

router.get('/feedback', (req, res) => {
  res.render('feedback', {
    albums,
    albumFeedback: feedback,
    pageId: 'feedback',
    pageTitle: "Feedback"
  });
});

router.get('/api', (req, res) => {
  res.json(feedback);
})

router.post('/api', (req, res) => {
  const { error } = validateFeedback(req.body);
  if (error) return res.status(400).send(error.message);
  feedback.unshift(req.body);
  jsonParser(JSON.stringify(feedback), './data/feedback.json');
  res.json(feedback);
});

module.exports = router;