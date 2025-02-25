// Create web server
// Create a route for POST /comments
// Create a route for GET /comments
// Create a route for DELETE /comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.send('Comment added');
});

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.delete('/comments', (req, res) => {
  comments.length = 0;
  res.send('All comments deleted');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// Test the routes using Postman or curl
// POST /comments
// curl -X POST http://localhost:3000/comments -d "name=John&comment=Hello"
// GET /comments
// curl http://localhost:3000/comments
// DELETE /comments
// curl -X DELETE http://localhost:3000/comments