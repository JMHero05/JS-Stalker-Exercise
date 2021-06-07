const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.render('subreddit', { subreddit });
});

app.get('/cats', (req, res) => {
  const cats = ['June', 'Pickle', 'Bug', 'Ducky', 'Diddy'];
  res.render('cats.ejs', { cats });
});

app.get('/rand', (req, res) => {
  const randNum = Math.floor(Math.random() * 10) + 1;
  res.render('random.ejs', { randNum });
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});