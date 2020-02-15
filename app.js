const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
// Import Routes
const PostsRoutes = require("./routes/posts");

// APP
const app = express();

//Middlewares
app.use(bodyParser.json());

//Routes Middleware
app.use("/posts", PostsRoutes);

app.listen(3000);
