const express = require("express");
const bodyParser = require("body-parser");
// Import Routes
const PostsRoutes = require("./routes/routes");

// APP
const app = express();

//Middlewares
app.use(bodyParser.json());

//Routes Middleware
app.use("/twitter", PostsRoutes);

app.listen(3000);
