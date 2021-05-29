const express = require('express');
const router = express.Router();

router.get('/chatroom', (req, res) => {
  res.render('chatroom', {
    pageId: 'chatroom',
    pageTitle: 'Chatroom'
  });
})

module.exports = router;