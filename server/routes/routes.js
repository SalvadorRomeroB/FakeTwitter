const express = require("express");
const Router = express.Router();

const { getTweets, makeTweet, makeReply, detailTweet, updateTweet, updateReply } = require("../controllers/tweetsController");

Router.get("/", getTweets);
Router.get("/:id(\\d+)/", detailTweet);

Router.post("/compose/tweet", makeTweet);
Router.post("/compose/reply", makeReply);

Router.put("/update/tweet", updateTweet)
Router.put("/update/reply", updateReply)

module.exports = Router;
