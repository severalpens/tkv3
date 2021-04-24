var express = require('express');
var router = express.Router();
var message = 'Protected message successfully returned from API.'


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({message});
});

module.exports = router;
