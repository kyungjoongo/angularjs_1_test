var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '고경준은 천재님이시비낟sdlkfdlkf', 'kyungjoon': 'gigigigiglglglgl' });
});

module.exports = router;
