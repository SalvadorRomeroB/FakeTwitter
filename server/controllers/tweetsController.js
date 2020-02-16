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
