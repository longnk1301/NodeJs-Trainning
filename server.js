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
const express = require("express");
const app = express();
const hostname = "localhost";
const port = 8017;

const cat = require("./cat");

app.get("/", (req, res) => {
  let catsArr = [
    "Maine Coon",
    "Sphynx",
    "Toyger",
    "Balinese",
    "Burmese",
    "Russian Blue",
    "Turkish Van",
    "Exotic",
    "Selkirk Rex",
    "Korat",
  ];
  let randomCat = cat.getRandomCat(catsArr);

  //Events
  const events = require("events");
  let EventEmitter = new events.EventEmitter();
  let ringBell = (data) => {
    console.log("ring ring ring...");
  };
  // Lắng nghe sự kiện khi mèo chạy thì gọi tới function ringBell
  EventEmitter.on("catRun", (data) => ringBell(data));

  // Phát sự kiện con mèo chạy.
  EventEmitter.emit("catRun", data);

  //Other example
  const UserModel = require("./UserModel");
  let User = new UserModel();

  // Vì đã kế thừa events nên class User có thể sử dụng method .on()
  User.on("saved", (user) => {
    console.log(`New user saved: ${user.name} - ${user.occupation}`);
  });

  // Lưu thêm 2 thằng user mới.
  let newUser = {
    id: 4,
    name: "user A",
    occupation: "Code xịn (─‿‿─)",
  };
  User.saveUser(newUser);

  // Lấy ra toàn bộ users
  let allUser = User.allUser();
  console.log(allUser);

  res.send(`<h1>Cat: <small>${randomCat}</small></h1><hr>`);
});

app.listen(port, hostname, () => {
  console.log(`Hello, I am running at ${hostname}:${port}/`);
});
