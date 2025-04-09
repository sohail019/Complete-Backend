//? configure environment variable
require("dotenv").config();
//? Import express from express
const express = require("express");

//? Initialize express in app variable instance
const app = express();

//? Initialize port (total ports are 65535 we can choose any)
const port = 4000;

const githubData = {
  login: "sohail019",
  id: 69633245,
  node_id: "MDQ6VXNlcjY5NjMzMjQ1",
  avatar_url: "https://avatars.githubusercontent.com/u/69633245?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sohail019",
  html_url: "https://github.com/sohail019",
  followers_url: "https://api.github.com/users/sohail019/followers",
  following_url:
    "https://api.github.com/users/sohail019/following{/other_user}",
  gists_url: "https://api.github.com/users/sohail019/gists{/gist_id}",
  starred_url: "https://api.github.com/users/sohail019/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/sohail019/subscriptions",
  organizations_url: "https://api.github.com/users/sohail019/orgs",
  repos_url: "https://api.github.com/users/sohail019/repos",
  events_url: "https://api.github.com/users/sohail019/events{/privacy}",
  received_events_url: "https://api.github.com/users/sohail019/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Sohail Shaikh",
  company: "Digital Salt",
  blog: "",
  location: "Mumbai, India",
  email: null,
  hireable: true,
  bio: "👨‍💻 Full Stack Web Dev & Flutter Developer | Focused on creating seamless web & mobile experiences | Always learning, always building",
  twitter_username: "scookiehail",
  public_repos: 50,
  public_gists: 0,
  followers: 3,
  following: 0,
  created_at: "2020-08-13T12:24:21Z",
  updated_at: "2025-04-09T07:29:25Z",
};

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

app.get("/github", (req, res) => {
  res.json(githubData);
});

//? listen to the port 4000
app.listen(port, () => {
  console.log(`This app is listening to port: ${port}`);
});

// app.listen(process.env.PORT, () => {
//   console.log(`This app is listening to port: ${port}`);
// });
