//? configure environment variable
require("dotenv").config();

//? Import express from express
const express = require("express");

//? Initialize express in app variable instance
const app = express();

//? Initialize port (total ports are 65535 we can choose any)
const port = 4000;

//? let's get 1st response in /
app.get("/", (req, res) => {
  res.send("Hello NodeJS");
});

//? another route
app.get("/instagram", (req, res) => {
  res.send("My Instagram username is scookiehail");
});

//? login route with html
app.get("/login", (req, res) => {
  res.send("<h1>Please login here</h1>");
});

//? listen to the port 4000
// app.listen(port, () => {
//   console.log(`This app is listening to port: ${port}`);
// });

app.listen(process.env.PORT, () => {
  console.log(`This app is listening to port: ${port}`);
});
