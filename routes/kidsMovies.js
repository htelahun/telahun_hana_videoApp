var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  connect.query(`SELECT * FROM tbl_kids`, (err, result) =>{

    if (err) {
      throw err;

    }else{
      console.log(result);
      //res.json(result);
      res.render('kids',
      {  mainpage: true,
       index : true,
       kids: true,
       kidspage: true,
       mainpage:false,
       vidpage: false,
       thumb : result,
       title: "The Boss Baby",
       desc : "A man named Tim Templeton tells a story about his 7-year-old self who lives with his parents, Ted and Janice. Ted and Janice work in a puppy factory called Puppy Co. founded by a man named Francis E. Francis. "
     });
    }
  });
});

router.get('/:id', function(req, res, next) {
  connect.query(`SELECT * FROM tbl_kids WHERE kids_id = "${req.params.id}"`, (err, result) =>{

    if (err) {
      throw err;

    }else{
      console.log(result);
      //res.json(result);
      res.render('kidsPlayer',
      {  mainpage: true,
       index : false,
       kids: true,
       vidpage: false,
       vidpage2: true,
       movie : result
     });
    }
  });
});

// router.get('/', function(req, res, next) {
//   connect.query("SELECT * FROM tbl_kids", (err, result)=> {
//      if (err){
//        throw err;
//      }else {
//        console.log(result);
//        res.render('kids',
//        { title: 'The Boss Baby',
//        desc: "A man named Tim Templeton tells a story about his 7-year-old self who lives with his parents, Ted and Janice. Ted and Janice work in a puppy factory called Puppy Co. founded by a man named Francis E. Francis.",
//          mainpage: true,
//          index : true,
//          kids: true,
//         thumb : result
//       });
//      }
//    });
//  });


module.exports = router;
