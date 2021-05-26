const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    pageId: 'home',
    pageTitle: "Home"
  });
});

module.exports = router;