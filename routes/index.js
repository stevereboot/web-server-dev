// routes/index.js

var express = require('express');
var router = express.Router();

/* Catch all to send all requests to index.html for AngularJS to process */
/* Use '/*' for non-HTML5, hashbang '/#/' urls */
router.get('/*', function(req, res) {
  res.sendFile('index.html', {root: __dirname + '/../stevereboot.github.io/'});
});

module.exports = router;
