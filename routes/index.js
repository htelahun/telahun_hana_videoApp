var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Video',
    stars : 'stars',
    desc : 'Lorem ipsum dolor sit amet',
    index : true

 });
});

module.exports = router;
