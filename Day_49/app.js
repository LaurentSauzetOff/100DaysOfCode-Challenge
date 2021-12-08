const fs = require('fs');

const path = require('path');

const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/currenttime", function (request, response) {
  response.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:443/currenttime

app.get("/", function (request, response) {
  response.send('<form action="/store-user" method="POST"><label></label>Your name<input name="username" type="text"><button>Submit</button></form>');
}); // localhost:443/

app.post('/store-user', function(req, res){
 const userName = req.body.username;
 const filePath = path.join(__dirname, 'data', 'users.json');
 const fileData = fs.readFileSync(filePath);
 const existingUsers = JSON.parse(fileData);
 existingUsers.push(userName);
 fs.writeFileSync(filePath, JSON.stringify(existingUsers));
 res.send('<h1>Username stored !</h1>')
})

app.listen(443);
