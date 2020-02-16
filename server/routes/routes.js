const express = require("express");
const Router = express.Router();

const { getTweets, makeTweet } = require("../controllers/tweetsController");

Router.get("/", getTweets);
Router.post("/", makeTweet);

module.exports = Router;
