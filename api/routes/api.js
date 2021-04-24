var express = require('express');
var router = express.Router();

var publicMessageRouter = require("./api/messages/public-message");
var protectedMessageRouter = require("./api/messages/protected-message");

router.use('/messages/public-message',publicMessageRouter);
router.use('/messages/protected-message',protectedMessageRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('api');
});

module.exports = router;
