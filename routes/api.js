var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //mot using yet
});


router.get('/:id', function(req, res, next) {
  connect.query(`SELECT * FROM tbl_movies WHERE movie_id = "${req.params.id}"`, (err, result) =>{

    if (err) {
      throw err;

    }else{
      console.log(result);
      //res.json(result);
      res.render('movies',
      { vidpage: true,
        mainpage:true,
        index : false,
         kids: false,
       movie : result
     });
    }
  });
});

module.exports = router;
