const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.listen(8080, () => {
	console.log('listening on 8080');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())

app.get('', (req, res) => {
	res.send(todos);
});

app.post('/add', function(req, res) {
    console.log(req.body);
    const newTodo = {text: req.body.text, done: false, id: todos.length + 1}
    console.log("newTodo = ", newTodo);
    todos.push(newTodo)
    res.send(todos);
});



