const mysqlConnection = require("../connection");

exports.getTweets = (req, res) => {
  mysqlConnection.query(
    "SELECT id, content from TWEET",
    (err, rows, fields) => {
      if (err) {
        res.status(404).send({ error: "Something failed!" });
      } else {
        res.json(rows);
      }
    }
  );
};

exports.makeTweet = (req, res) => {
  let content = req.body.content;
  let user_id = req.body.user_id;

  mysqlConnection.query(
    `INSERT INTO TWEET (content, user_id) VALUES ("${content}", "${user_id}")`,
    (err, result) => {
      if (err) {
        res.status(500).send({ error: err });
      }
      res.json(result);
    }
  );
};

exports.makeReply = (req, res) => {
  let content = req.body.content;
  let user_id = req.body.user_id;
  let thread_id = req.body.thread_id;

  mysqlConnection.query(
    `INSERT INTO REPLY (content, thread_id, user_id) VALUES ("${content}", "${thread_id}", "${user_id}")`,
    (err, result) => {
      if (err) {
        res.status(500).send({ error: err });
      }
      res.json(result);
    }
  );
};

exports.updateTweet = (req, res) => {
  let content = req.body.content;
  let tweet_id = req.body.tweet_id;

  mysqlConnection.query(
    `UPDATE TWEET SET content = "${content}" WHERE id = ${tweet_id}`,
    (err, result) => {
      if (err) {
        res.status(500).send({ error: err });
      }
      res.json(result);
    }
  );
};

exports.updateReply = (req, res) => {
  let content = req.body.content;
  let tweet_id = req.body.tweet_id;

  mysqlConnection.query(
    `UPDATE REPLY SET content = "${content}" WHERE id = ${tweet_id}`,
    (err, result) => {
      if (err) {
        res.status(500).send({ error: err });
      }
      res.json(result);
    }
  );
};

exports.detailTweet = (req, res) => {
  let tweet_id = req.params.id;

  // tweetById(tweet_id, function (result, err){
  //   if (err) {
  //     res.status(404).send({ error: err });
  //   } else {
  //     res.json(result);
  //   }
  // });

  replysById(tweet_id, function(result, err) {
    if (err) {
      res.status(404).send({ error: err });
    } else {
      res.json(result);
    }
  });
};

let tweetById = (tweet_id, callback) => {
  mysqlConnection.query(
    `SELECT * from TWEET WHERE id = ${tweet_id}`,
    (err, rows, fields) => {
      callback(rows, err);
    }
  );
};

let replysById = (tweet_id, callback) => {
  mysqlConnection.query(
    `SELECT * from REPLY WHERE thread_id = ${tweet_id}`,
    (err, rows, fields) => {
      callback(rows, err);
    }
  );
};
