const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const notFound = require("./src/errors/notFound");
const errorHandler = require("./src/errors/errorHandler");
const recipeRouter = require("./src/recipes/recipes.router");

app.use(morgan("dev"));
app.use(express.json());

app.use(cors());
app.use("/recipes", recipeRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
