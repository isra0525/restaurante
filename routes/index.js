var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/mysql', function(req, res, next) {
  let query = "Select * from categorias ORDER BY id ASC";

  db.query(query,(err, result) => {
    if(err) throw err
    res.json({
      message: null,
      data: result
    })
  })
});

module.exports = router;
