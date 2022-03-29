const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const bodyparser = require('body-parser');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;

//to access data
app.use(bodyparser.urlencoded({extended: false }));
app.use(bodyparser.json());

const posts = require("./Routes/posts");
const params = {
  tag: 'tech'
};

const url = new URL('https://api.hatchways.io/assessment/blog/posts');
url.search = new URLSearchParams(params).toString();

app.use('/',posts());
// app.get('/', (_,res) => {
//   res.send("My Server is running! ");
// });

// app.get('/api/posts', (req, res) => {
//   fetch(url)
//   .then(response => response.json())
//   .then(data => res.send(data));
// });

app.get('/api/posts', (req, res) => {
  console.log(req.url);
  const actualUrl = 'localhost:3000' + req.url;
  let url = new URL(actualUrl);
  //var url = new URL('https://example.com?foo=1&bar=2');
  const params = new URLSearchParams(url.search);
  console.log(params);

  res.send("print something")
});

app.listen(port,() => {
  console.log(`Listening on port: ${port}`);
});

