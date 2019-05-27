var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todo', function(req, res, next) {
  const todoList = [
    {name: 'Learn Python', isDone: true},
    {name: 'Learn AI math', isDone: false},
    {name: 'Make a basic API project', isDone: true},
    {name: 'Learn Django', isDone: true},
    {name: 'Learn Flask', isDone: true},
    {name: 'Be a pro Python dev', isDone: false},
    {name: 'Be rich', isDone: false}
  ]

  res.send(todoList)
})

module.exports = router;
