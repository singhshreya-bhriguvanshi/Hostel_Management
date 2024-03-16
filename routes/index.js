var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/student', function(req, res) {
  res.render('student');
});
router.get('/parent', function(req, res) {
  res.render('parent');
});
router.get('/warden', function(req, res) {
  res.render('warden');
});
module.exports = router;
