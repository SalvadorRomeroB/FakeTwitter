const express = require("express");
const Router = express.Router();

const {
  getTweets,
  makeTweet,
  makeReply,
  detailTweet,
  getTweetReplys,
  getTweetAndReply,
  updateTweet,
  updateReply
} = require("../controllers/tweetsController");

Router.get("/", getTweets);
Router.get("/tweet/:id(\\d+)/", detailTweet);
Router.get("/tweet/replys/:id(\\d+)/", getTweetReplys);
Router.get("/tweet/complete/:id(\\d+)/", getTweetAndReply);

Router.post("/compose/tweet", makeTweet);
Router.post("/compose/reply", makeReply);

Router.put("/update/tweet", updateTweet);
Router.put("/update/reply", updateReply);

module.exports = Router;
