const mysqlConnection = require("../connection");

exports.getUser = (req, res) => {
  mysqlConnection.query("SELECT * from USER", (err, rows, fields) => {
    if (err) {
      res.status(404).send({ error: "Something failed!" });
    } else {
      res.json(rows);
    }
  });
};
