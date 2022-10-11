//TODO: http module from node
// const http = require('http');
// const hostname = 'localhost';
// const port = 8017;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World http!</h1><hr>');
// });

// server.listen(port, hostname, () => {
//     console.log(`Hello, You are running at ${ hostname }:${ port }/`);
// });

//TODO: Express framework
const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 8017;

const cat = require('./cat');

app.get('/', (req, res) => {
  let catsArr = ["Maine Coon", "Sphynx", "Toyger", "Balinese", "Burmese", "Russian Blue", "Turkish Van", "Exotic", "Selkirk Rex", "Korat"];
  let randomCat = cat.getRandomCat(catsArr);
  res.send(`<h1>Cat: <small>${ randomCat }</small></h1><hr>`);
});

app.listen(port, hostname, () => {
    console.log(`Hello, I am running at ${ hostname }:${ port }/`);
});