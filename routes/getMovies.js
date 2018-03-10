var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();
//

// router.get('/', function(req, res, next) {
//   connect.query("SELECT movie_id FROM tbl_movies ", (err, result)=> {
//      if (err){
//        throw err;
//      }else {
//        console.log(result);
//        res.render('home',
//        { title: 'Video',
//          mainpage: true,
//          index : true,
//         id : result
//       });
//      }
//    });
//  });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   connect.query(`SELECT * FROM tbl_movies WHERE movie_id = "${req.params.id}"`, (err, result)=> {
//      if (err){
//        throw err;
//      }else {
//        console.log(result);
//        res.render('movies',
//        { title: 'Video',
//          stars : 'stars',
//          desc : 'Lorem ipsum dolor sit amet',
//         movie : result
//       });
//      }
//    });
//  });
//
//
module.exports = router;
