var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  connect.query("SELECT movie_thumb, genre_name FROM tbl_movies , tbl_genre, tbl_mov_gen WHERE tbl_movies.movie_id = tbl_mov_gen.movie_id AND tbl_genre.genre_id = tbl_mov_gen.genre_id  ORDER BY tbl_genre.genre_name", (err, result)=> {
     if (err){
       throw err;
     }else {
       console.log(result);
       res.render('home',
       { title: '12 Strong',
       desc: "12 Strong tells the story of the first Special Forces team deployed to Afghanistan after 9/11; under the leadership of a new captain, the team must work with an Afghan warlord to take down for the Taliban.",
         mainpage: true,
         index : true,
        thumb : result
      });
     }
   });
 });


module.exports = router;
