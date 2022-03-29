const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;

//to access data
app.use(bodyparser.urlencoded({extended: false }));
app.use(bodyparser.json());

app.get('/', (_,res) => {
  res.send("My Server is running! ");
});

app.get('/api/posts', (_,res) => {
  fetch('https://api.hatchways.io/assessment/blog/posts?tag=tech')
  .then(response => response.json())
  .then(data => res.send(data));
});


app.listen(port,() => {
  console.log(`Listening on port: ${port}`);
});

