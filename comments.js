// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

// Create server
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Create port
const port = process.env.PORT || 5000;

// Create router
const router = express.Router();

// Create router middleware
router.use(function (req, res, next) {
  console.log('Something is happening.');
  next();
});

// Create route
router.get('/', function (req, res) {
  res.json({message: 'Welcome to my API!'});
});

// Register route
app.use('/api', router);

// Start server
app.listen(port);
console.log('Magic happens on port ' + port);

// Create route
router.get('/comments', function (req, res) {
  fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Create route
router.get('/comments/:id', function (req, res) {
  fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) {
      res.json(err);
    } else {
      res.json(JSON.parse(data)[req.params.id]);
    }
  });
});

// Create route
router.post('/comments', function (req, res) {
  fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) {
      res.json(err);
    } else {
      let comments = JSON.parse(data);
      let comment = {
        id: comments.length }
    }
})})
