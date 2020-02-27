const admin = require('firebase-admin');
const serviceAccount = require('./service-account.json');
const express = require('express');
const bodyParser = require('body-parser');

// place a statement to initializeApp here

const app = express();
app.use(bodyParser.json());

const db = admin.firestore();
// TODO: Create a variable to refer to the collection

app.post('/createSong', function (req, res) {
  // TODO: Write createSong endpoint here
});

app.get('/getSongs', async function (req, res) {
  // TODO: Write getSongs endpoint here
});

app.post('/updateRating', function (req, res) {
  // TODO: Write updateRating endpoint here
});

app.delete('/deleteSong', function (req, res) {
  // TODO: Write deleteSong endpoint here
});

app.listen(8080, function () { console.log('app started') });