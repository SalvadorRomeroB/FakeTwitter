const express = require("express");
const bodyParser = require("body-parser");
// Import Routes
const PostsRoutes = require("./routes/routes");

// APP
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded());

//Routes Middleware
app.use("/twitter", PostsRoutes);

app.listen(8000);
