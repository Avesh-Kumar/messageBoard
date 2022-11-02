var express = require('express');
var router = express.Router();
const messages = [ 
  { 
    text: "Hey guys!", 
    user: "Avesh", 
    added: new Date() 
  }, 
  { 
    text: "Hello", 
    user: "Amit", 
    added: new Date() 
  } 
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',messages:messages });
});
router.get('/new', function(req, res, next) {
  res.render('form');
});
router.post('/new', function(req, res, next) {
 let data= req.body;
 Object.assign(data,{added: new Date()});
 messages.push(data);
  res.redirect("/");
});

module.exports = router;
