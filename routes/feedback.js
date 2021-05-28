const express = require('express');
const router = express.Router();
const { albums } = require('../data/data.json');
const jsonParser = require('../helpers/jsonParser');
const validateFeedback = require('../helpers/validateFeedback');
let feedback = require('../data/feedback.json');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.delete('/api/:id', (req, res) => {
  const id = (feedback.length - 1) - req.params.id;
  console.log(feedback.splice(id, 1));
  jsonParser(JSON.stringify(feedback), './data/feedback.json');
  res.json({});
})

router.get('/feedback', (req, res) => {
  const feedbackLength = (feedback.length > 4 && 4) || feedback.length;
  res.render('feedback', {
    albums,
    albumFeedback: [...feedback].splice(0, feedbackLength),
    pageId: 'feedback',
    pageTitle: "Feedback"
  });
});

router.get('/api', (req, res) => {
  const feedbackLength = (feedback.length > 4 && 4) || feedback.length;
  res.json({ albumFeedback: [...feedback].splice(0, feedbackLength) });
});

router.post('/api', (req, res) => {
  const { error } = validateFeedback(req.body);
  if (error) return res.status(400).send(error.message);
  feedback.unshift({...req.body, id: feedback.length});
  jsonParser(JSON.stringify(feedback), './data/feedback.json');
  res.json(feedback);
});

module.exports = router;