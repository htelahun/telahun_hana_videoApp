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
       { title: 'Rendel',
       desc: "Rendel is a 2017 Finnish superhero film written, produced and directed by Jesse Haaja. The film is based on Haaja's self-created superhero, Rendel. Lead roles are played by Kris Gummerus, Matti Onnismaa, Rami Rusinen and Renne Korppila. The rest of the cast includes Alina Tomnikov, Tero Salenius, Aake Kalliala, Anu Palevaara and Kristina Karjalainen.",
         mainpage: true,
         index : true,
          kids: false,
        thumb : result
      });
     }
   });
 });


module.exports = router;
