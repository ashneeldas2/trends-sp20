// imports express
const express = require('express');
const app = express();

// Simple URL & Query Parameters to /book endpoint
app.get('/book', function (req, res) {
  // check if query parameter name is provided
  // if not, this is the Simple URL -> send your favorite book
  if (req.query.name === undefined) {
    res.send('My favorite book');
  } else {
    // query parameter is provided -> send Megan or Ashneel's
    // favorite book
    if (req.query.name === 'Megan') {
      res.send('Cracking the Coding Interview');
    } else if (req.query.name === 'Ashneel') {
      res.send('The Pragmatic Programmer');
    } else {
      // query parameter not recognized, send a random book
      res.send('Some random book');
    }
  }
});

// Route parameters
app.get('/book/:userid', function (req, res) {
  res.send(`${req.params.userid} is really cool!`);
});

// starts the server on port 8080
app.listen(8080, function () { console.log('server started'); });
