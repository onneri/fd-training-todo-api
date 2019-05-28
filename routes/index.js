var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos', function(req, res, next) {
  const todoList = [
    {id:1, title: 'Learn Python', done: true},
    {id:2, title: 'Learn AI math', done: false},
    {id:3, title: 'Make a basic API project', done: true},
    {id:4, title: 'Learn Django', done: true},
    {id:5, title: 'Learn Flask', done: true},
    {id:6, title: 'Be a pro Python dev', done: false},
    {id:7, title: 'Be rich', done: false}
  ]

  res.send(todoList)
})

module.exports = router;
